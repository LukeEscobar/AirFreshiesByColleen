// Checkout page functionality with Square integration

// Square Configuration (Sandbox)
const APPLICATION_ID = 'sandbox-sq0idb-your-app-id'; // Replace with your Square Application ID
const LOCATION_ID = 'your-location-id'; // Replace with your Square Location ID

let paymentForm;

document.addEventListener('DOMContentLoaded', function() {
    initializeCheckout();
    setupSquarePaymentForm();
});

function initializeCheckout() {
    // Load cart items
    displayOrderSummary();
    
    // Setup form validation
    setupFormValidation();
}

function displayOrderSummary() {
    const checkoutItems = document.getElementById('checkoutItems');
    const checkoutTotal = document.getElementById('checkoutTotal');
    
    if (cart.items.length === 0) {
        checkoutItems.innerHTML = '<p>No items in cart</p>';
        checkoutTotal.textContent = '0.00';
        return;
    }
    
    checkoutItems.innerHTML = cart.items.map(item => `
        <div class="checkout-item">
            <h4>Custom Air Freshener</h4>
            <div class="item-details">
                <div><strong>Mold:</strong> ${item.mold}</div>
                <div><strong>Color:</strong> ${item.color}</div>
                <div><strong>Scent:</strong> ${item.scent}</div>
                <div><strong>Glitter:</strong> ${item.glitter}</div>
                <div><strong>Beads:</strong> ${item.beads}</div>
            </div>
            <div class="item-price">$${item.price.toFixed(2)}</div>
        </div>
    `).join('');
    
    checkoutTotal.textContent = cart.getTotal().toFixed(2);
}

function setupFormValidation() {
    const form = document.getElementById('checkout-form');
    const inputs = form.querySelectorAll('input[required], select[required]');
    
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', validateField);
    });
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Remove previous error styling
    field.classList.remove('error');
    
    // Validation rules
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Please enter a valid email address');
            return false;
        }
    }
    
    if (field.name === 'zipCode' && value) {
        const zipRegex = /^\d{5}(-\d{4})?$/;
        if (!zipRegex.test(value)) {
            showFieldError(field, 'Please enter a valid ZIP code');
            return false;
        }
    }
    
    // Clear any existing error
    clearFieldError(field);
    return true;
}

function showFieldError(field, message) {
    field.classList.add('error');
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = 'color: #e74c3c; font-size: 12px; margin-top: 5px;';
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
    field.classList.remove('error');
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
}

function setupSquarePaymentForm() {
    // Note: This is a basic setup. You'll need to replace the APPLICATION_ID with your actual Square Application ID
    
    if (typeof SqPaymentForm === 'undefined') {
        console.error('Square Payment Form library not loaded');
        showPaymentError('Payment system is currently unavailable. Please try again later.');
        return;
    }

    paymentForm = new SqPaymentForm({
        applicationId: APPLICATION_ID,
        locationId: LOCATION_ID,
        inputClass: 'sq-input',
        
        // Card fields
        cardNumber: {
            elementId: 'sq-card-number',
            placeholder: 'Card Number'
        },
        expirationDate: {
            elementId: 'sq-expiration-date',
            placeholder: 'MM/YY'
        },
        cvv: {
            elementId: 'sq-cvv',
            placeholder: 'CVV'
        },
        postalCode: {
            elementId: 'sq-postal-code',
            placeholder: 'Postal Code'
        },

        // Callbacks
        callbacks: {
            methodsSupported: function (methods) {
                console.log('Payment methods supported:', methods);
            },
            
            createPaymentRequest: function () {
                return {
                    requestShippingAddress: false,
                    requestBillingInfo: true,
                    currencyCode: 'USD',
                    countryCode: 'US',
                    total: {
                        label: 'AirFreshiesByColleen',
                        amount: cart.getTotal().toFixed(2),
                        pending: false
                    }
                };
            },
            
            cardNonceResponseReceived: function (errors, nonce, cardData) {
                if (errors) {
                    showPaymentError('Payment validation failed. Please check your card information.');
                    console.error('Square payment errors:', errors);
                    return;
                }
                
                // Process payment with nonce
                processPayment(nonce, cardData);
            },
            
            unsupportedBrowserDetected: function () {
                showPaymentError('Your browser is not supported. Please use a modern browser.');
            },
            
            inputEventReceived: function (inputEvent) {
                // Handle input events (optional)
                console.log('Input event:', inputEvent);
            }
        }
    });

    paymentForm.build();
}

function processPayment(nonce, cardData) {
    showPaymentStatus('Processing payment...', 'info');
    
    // Prepare order data
    const orderData = {
        nonce: nonce,
        amount: Math.round(cart.getTotal() * 100), // Convert to cents
        currency: 'USD',
        customer: {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value
        },
        shipping: {
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            zipCode: document.getElementById('zipCode').value
        },
        items: cart.items
    };
    
    // In a real implementation, you would send this to your server
    // For demo purposes, we'll simulate a successful payment
    setTimeout(() => {
        simulatePaymentProcessing(orderData);
    }, 2000);
}

function simulatePaymentProcessing(orderData) {
    // Simulate payment processing
    const success = Math.random() > 0.1; // 90% success rate for demo
    
    if (success) {
        showPaymentStatus('Payment successful! Order confirmed.', 'success');
        
        // Clear cart
        cart.clearCart();
        
        // Show success message and redirect
        setTimeout(() => {
            alert('Thank you for your order! You will receive a confirmation email shortly.');
            window.location.href = 'index.html';
        }, 2000);
        
    } else {
        showPaymentStatus('Payment failed. Please try again.', 'error');
    }
}

function showPaymentStatus(message, type) {
    const statusContainer = document.getElementById('payment-status-container');
    statusContainer.innerHTML = `<div class="payment-${type}">${message}</div>`;
    statusContainer.style.display = 'block';
    
    if (type === 'error' || type === 'success') {
        setTimeout(() => {
            if (type === 'error') {
                statusContainer.style.display = 'none';
            }
        }, 5000);
    }
}

function showPaymentError(message) {
    showPaymentStatus(message, 'error');
}

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('checkout-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate all fields
        const requiredFields = form.querySelectorAll('input[required], select[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                showFieldError(field, 'This field is required');
                isValid = false;
            } else {
                const fieldValid = validateField({ target: field });
                if (!fieldValid) {
                    isValid = false;
                }
            }
        });
        
        if (!isValid) {
            showPaymentError('Please complete all required fields correctly.');
            return;
        }
        
        if (cart.items.length === 0) {
            showPaymentError('Your cart is empty.');
            return;
        }
        
        // Request payment nonce from Square
        if (paymentForm) {
            paymentForm.requestCardNonce();
        } else {
            showPaymentError('Payment system not initialized. Please refresh the page.');
        }
    });
});

// CSS for form validation
const style = document.createElement('style');
style.textContent = `
    .form-group input.error,
    .form-group select.error {
        border-color: #e74c3c;
        background-color: #fdf2f2;
    }
    
    .checkout-item {
        padding: 15px 0;
        border-bottom: 1px solid #eee;
    }
    
    .checkout-item:last-child {
        border-bottom: none;
    }
    
    .checkout-item h4 {
        margin-bottom: 10px;
        color: #333;
    }
    
    .item-details {
        font-size: 14px;
        color: #666;
        margin-bottom: 10px;
    }
    
    .item-details div {
        margin-bottom: 5px;
    }
    
    .item-price {
        font-weight: 600;
        color: #667eea;
        font-size: 16px;
    }
`;
document.head.appendChild(style);