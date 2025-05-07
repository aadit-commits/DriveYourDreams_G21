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
    // Reset calculator
    document.getElementById('reset-calculator').addEventListener('click', function(e) {
        e.preventDefault();
        loanAmountInput.value = '500000';
        loanAmountRange.value = '500000';
        interestRateInput.value = '8.5';
        interestRateRange.value = '8.5';
        loanTermInput.value = '60';
        loanTermRange.value = '60';
        
        document.getElementById('monthly-payment').textContent = '₹0.00';
        document.getElementById('total-interest').textContent = '₹0.00';
        document.getElementById('total-payment').textContent = '₹0.00';
        
        emiChart.data.datasets[0].data = [0, 0];
        emiChart.update();
    });
     // Calculate on page load
    calculateEMI();
});
// Car Data with Proper Images and INR Prices
const carData = [
    {
        id: 1,
        make: "Maruti Suzuki",
        model: "Swift",
        year: 2022,
        price: 650000,
        mileage: 12500,
        fuelType: "Petrol",
        transmission: "Manual",
        bodyType: "Hatchback",
        image: "https://source.unsplash.com/random/600x400/?maruti,swift"
    },
    {
        id: 2,
        make: "Hyundai",
        model: "Creta",
        year: 2021,
        price: 1250000,
        mileage: 18500,
        fuelType: "Diesel",
        transmission: "Automatic",
        bodyType: "SUV",
        image: "https://source.unsplash.com/random/600x400/?hyundai,creta"
    },
    {
        id: 3,
        make: "Tata",
        model: "Nexon",
        year: 2022,
        price: 950000,
        mileage: 15000,
        fuelType: "Petrol",
        transmission: "Automatic",
        bodyType: "SUV",
        image: "https://source.unsplash.com/random/600x400/?tata,nexon"
    },
    {
        id: 4,
        make: "Mahindra",
        model: "Thar",
        year: 2023,
        price: 1500000,
        mileage: 5000,
        fuelType: "Diesel",
        transmission: "Manual",
        bodyType: "SUV",
        image: "https://source.unsplash.com/random/600x400/?mahindra,thar"
    },
    {
        id: 5,
        make: "Kia",
        model: "Seltos",
        year: 2022,
        price: 1350000,
        mileage: 12000,
        fuelType: "Petrol",
        transmission: "Automatic",
        bodyType: "SUV",
        image: "https://source.unsplash.com/random/600x400/?kia,seltos"
    },
    {
        id: 6,
        make: "Toyota",
        model: "Fortuner",
        year: 2023,
        price: 3800000,
        mileage: 8000,
        fuelType: "Diesel",
        transmission: "Automatic",
        bodyType: "SUV",
        image: "https://source.unsplash.com/random/600x400/?toyota,fortuner"
    }
];
// Function to display cars with INR formatting
function displayCars(cars) {
    const featuredCarsContainer = document.getElementById('featured-cars');
    const allCarsContainer = document.getElementById('all-cars');
    
    featuredCarsContainer.innerHTML = '';
    allCarsContainer.innerHTML = '';
    
    cars.slice(0, 4).forEach(car => {
        featuredCarsContainer.innerHTML += createCarCard(car);
    });
    
    cars.forEach(car => {
        allCarsContainer.innerHTML += createCarCard(car);
    });
}






            
    





   

