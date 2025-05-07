// EMI Calculator Functionality for INR
document.addEventListener('DOMContentLoaded', function() {
    // Format currency for Indian Rupees
    function formatINR(amount) {
        return '₹' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
// Initialize Chart
    const ctx = document.getElementById('emi-chart').getContext('2d');
    let emiChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Principal', 'Interest'],
            datasets: [{
                data: [0, 0],
                backgroundColor: ['#2563eb', '#f59e0b'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
    // Sync range sliders with number inputs
    const loanAmountInput = document.getElementById('loan-amount');
    const loanAmountRange = document.getElementById('loan-amount-range');
    const interestRateInput = document.getElementById('interest-rate');
    const interestRateRange = document.getElementById('interest-rate-range');
    const loanTermInput = document.getElementById('loan-term');
    const loanTermRange = document.getElementById('loan-term-range');

    loanAmountRange.addEventListener('input', function() {
        loanAmountInput.value = this.value;
        calculateEMI();
    });

    loanAmountInput.addEventListener('input', function() {
        loanAmountRange.value = this.value;
        calculateEMI();
    });

    interestRateRange.addEventListener('input', function() {
        interestRateInput.value = this.value;
        calculateEMI();
    });

    interestRateInput.addEventListener('input', function() {
        interestRateRange.value = this.value;
        calculateEMI();
    });

    loanTermRange.addEventListener('input', function() {
        loanTermInput.value = this.value;
        calculateEMI();
    });

    loanTermInput.addEventListener('input', function() {
        loanTermRange.value = this.value;
        calculateEMI();
    });
     // Calculate EMI function
    function calculateEMI() {
        const principal = parseFloat(loanAmountInput.value);
        const interestRate = parseFloat(interestRateInput.value) / 100 / 12; // Monthly interest rate
        const loanTerm = parseFloat(loanTermInput.value);
        
        if (principal && interestRate && loanTerm) {
            // EMI calculation formula: [P x R x (1+R)^N]/[(1+R)^N-1]
            const emi = principal * interestRate * Math.pow(1 + interestRate, loanTerm) / (Math.pow(1 + interestRate, loanTerm) - 1);
            const totalPayment = emi * loanTerm;
            const totalInterest = totalPayment - principal;
            
            // Update results with INR formatting
            document.getElementById('monthly-payment').textContent = formatINR(emi);
            document.getElementById('total-interest').textContent = formatINR(totalInterest);
            document.getElementById('total-payment').textContent = formatINR(totalPayment);
            
            // Update chart
            emiChart.data.datasets[0].data = [principal, totalInterest];
            emiChart.update();
        }
    }

    // Calculate on button click
    document.getElementById('calculate-emi').addEventListener('click', function(e) {
        e.preventDefault();
        calculateEMI();
    });





   

