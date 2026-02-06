// Shopping Cart Functionality

class ShoppingCart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
        this.updateCartCount();
    }

    addItem(item) {
        // Add unique ID to item
        item.id = Date.now() + Math.random();
        this.items.push(item);
        this.saveCart();
        this.updateCartCount();
        this.updateCartDisplay();
        
        // Show success message
        this.showNotification('Item added to cart!', 'success');
    }

    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
        this.saveCart();
        this.updateCartCount();
        this.updateCartDisplay();
    }

    clearCart() {
        this.items = [];
        this.saveCart();
        this.updateCartCount();
        this.updateCartDisplay();
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    updateCartCount() {
        const cartCountElement = document.getElementById('cartCount');
        if (cartCountElement) {
            cartCountElement.textContent = this.items.length;
        }
    }

    updateCartDisplay() {
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        
        if (!cartItems) return;

        if (this.items.length === 0) {
            cartItems.innerHTML = '<p>Your cart is empty</p>';
        } else {
            cartItems.innerHTML = this.items.map(item => `
                <div class="cart-item">
                    <h4>Custom Air Freshener</h4>
                    <div class="cart-item-details">
                        <div><strong>Mold:</strong> ${item.mold}</div>
                        <div><strong>Color:</strong> ${item.color}</div>
                        <div><strong>Scent:</strong> ${item.scent}</div>
                        <div><strong>Glitter:</strong> ${item.glitter}</div>
                        <div><strong>Beads:</strong> ${item.beads}</div>
                    </div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <button onclick="cart.removeItem(${item.id})" class="btn secondary" style="margin-top: 10px; padding: 5px 10px; font-size: 12px;">Remove</button>
                </div>
            `).join('');
        }

        if (cartTotal) {
            cartTotal.textContent = this.getTotal().toFixed(2);
        }
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#d4edda' : '#f8d7da'};
            color: ${type === 'success' ? '#155724' : '#721c24'};
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 1002;
            animation: slideIn 0.3s ease;
        `;
        notification.textContent = message;

        // Add animation styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(notification);

        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.remove();
            style.remove();
        }, 3000);
    }
}

// Initialize cart
const cart = new ShoppingCart();

// Cart toggle functionality
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('open');
    cart.updateCartDisplay();
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.items.length === 0) {
        cart.showNotification('Your cart is empty!', 'error');
        return;
    }
    
    window.location.href = 'checkout';
}

// Close cart when clicking outside
document.addEventListener('click', function(e) {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartIcon = document.querySelector('.cart-icon');
    
    if (cartSidebar && cartSidebar.classList.contains('open')) {
        if (!cartSidebar.contains(e.target) && !cartIcon.contains(e.target)) {
            cartSidebar.classList.remove('open');
        }
    }
});

// Initialize cart display on page load
document.addEventListener('DOMContentLoaded', function() {
    cart.updateCartDisplay();
});