document.addEventListener('DOMContentLoaded', function () {
    const orderForm = document.getElementById('order-form');
    
    orderForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent actual form submission
        
        // Collect form data
        const pizza = document.getElementById('pizza').value;
        const quantity = document.getElementById('quantity').value;
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;

        // Show an alert or log the form data (in a real app, send it to the server)
        alert(`Order placed!\n\nPizza: ${pizza}\nQuantity: ${quantity}\nName: ${name}\nPhone: ${phone}\nAddress: ${address}`);
    });
});
