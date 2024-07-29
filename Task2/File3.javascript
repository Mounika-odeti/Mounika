// scripts.js
let cart = [];

function addToCart(productName, productPrice, quantityId) {
    const quantity = document.getElementById(quantityId).value;
    if (quantity > 0) {
        const item = {
            name: productName,
            price: productPrice,
            quantity: quantity
        };
        cart.push(item);
        updateCart();
    }
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        cartItems.innerHTML += `<div>${item.name} x ${item.quantity} = $${itemTotal.toFixed(2)}</div>`;
    });
    document.getElementById('total-price').innerHTML = `Total: $${total.toFixed(2)}`;
}

document.getElementById('orderForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Order submitted!');
    // Add more functionality to handle order submission as needed
});
