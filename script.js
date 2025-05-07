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


   

