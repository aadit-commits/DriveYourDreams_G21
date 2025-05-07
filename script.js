// EMI Calculator Functionality for INR
document.addEventListener('DOMContentLoaded', function() {
    // Format currency for Indian Rupees
    function formatINR(amount) {
        return '₹' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

   

