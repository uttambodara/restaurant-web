let cart = [];

function addToCart(id, name, price) {
    const product = { id, name, price };
    cart.push(product);
    updateCart();
}
function delToCart(id, name, price) {
        const product = { id, name, price };
        cart.pop(product);
        updateCart();
    }

function updateCart() {
    const cartList = document.getElementById('cart-list');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    
    cartList.innerHTML = '';
    let total = 0;
    
    cart.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
        cartList.appendChild(listItem);
        total += product.price;
    });
    
    // cartCount.textContent = cart.length;
    cartTotal.textContent = total.toFixed(2);
}
