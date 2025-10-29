// Customize page functionality

// Product data
const productData = {
    molds: [
        { id: 'car', name: 'Car Shape', price: 0, icon: '🚗' },
        { id: 'heart', name: 'Heart Shape', price: 0, icon: '❤️' },
        { id: 'star', name: 'Star Shape', price: 0, icon: '⭐' },
        { id: 'flower', name: 'Flower Shape', price: 0, icon: '🌸' },
        { id: 'circle', name: 'Circle Shape', price: 0, icon: '⭕' },
        { id: 'square', name: 'Square Shape', price: 0, icon: '⬛' },
        { id: 'diamond', name: 'Diamond Shape', price: 0, icon: '💎' },
        { id: 'butterfly', name: 'Butterfly Shape', price: 0, icon: '🦋' }
    ],
    
    colors: [
        // Standard colors (Light, Default, Dark variants)
        { id: 'red', name: 'Red', hex: '#dc3545', variants: ['light', 'default', 'dark'] },
        { id: 'orange', name: 'Orange', hex: '#fd7e14', variants: ['light', 'default', 'dark'] },
        { id: 'yellow', name: 'Yellow', hex: '#ffc107', variants: ['light', 'default', 'dark'] },
        { id: 'blue', name: 'Blue', hex: '#0d6efd', variants: ['light', 'default', 'dark'] },
        { id: 'green', name: 'Green', hex: '#198754', variants: ['light', 'default', 'dark'] },
        { id: 'purple', name: 'Purple', hex: '#6f42c1', variants: ['light', 'default', 'dark'] },
        { id: 'white', name: 'White', hex: '#ffffff', variants: ['default'] }, // Only default variant
        { id: 'black', name: 'Black', hex: '#000000', variants: ['default'] }, // Only default variant
        { id: 'brown', name: 'Brown', hex: '#795548', variants: ['light', 'default', 'dark'] },
        { id: 'tan', name: 'Tan', hex: '#d2b48c', variants: ['light', 'default', 'dark'] },
        { id: 'gray', name: 'Gray', hex: '#6c757d', variants: ['light', 'default', 'dark'] },
        { id: 'teal', name: 'Teal', hex: '#20c997', variants: ['light', 'default', 'dark'] },
        { id: 'silver', name: 'Silver', hex: '#c0c0c0', variants: ['light', 'default', 'dark'] },
        { id: 'gold', name: 'Gold', hex: '#ffd700', variants: ['light', 'default', 'dark'] },
        { id: 'maroon', name: 'Maroon', hex: '#800000', variants: ['light', 'default', 'dark'] },
        { id: 'pink', name: 'Pink', hex: '#e91e63', variants: ['light', 'default', 'dark', 'fluorescent'] },
        
        // Fluorescent colors (additional variants)
        { id: 'yellow-fluor', name: 'Yellow', hex: '#ffff00', variants: ['fluorescent'], fluorescent: true },
        { id: 'orange-fluor', name: 'Orange', hex: '#ff4500', variants: ['fluorescent'], fluorescent: true },
        { id: 'purple-fluor', name: 'Purple', hex: '#9932cc', variants: ['fluorescent'], fluorescent: true },
        { id: 'blue-fluor', name: 'Blue', hex: '#0080ff', variants: ['fluorescent'], fluorescent: true },
        { id: 'green-fluor', name: 'Green', hex: '#00ff00', variants: ['fluorescent'], fluorescent: true }
    ],

    scents: {
        floral: [
            'A Thousand Wishes', 'Baja Cactus Blossom', 'Lavender', 'Sweet Pea', 
            'Pink Sand', 'Mid Summer Night'
        ],
        fruity: [
            'Berrylicious', 'Blue Berry Lemonade', 'Cherry', 'Grape Jolly Rancher', 
            'Grape Explosion', 'Lemon Drop', 'Lemon Verbena', 'Mango Dragon Fruit', 
            'Just Peachy', 'Pink Apple Punch', 'Strawberry', 'Sweet Strawberry', 
            'Watermelon Lemonade', 'Watermelon', 'Watermelon Bubblegum', 
            'Strawberry Champagne'
        ],
        fresh: [
            'Clean Cotton', 'Cucumber Melon', 'Caribbean Escape', 'Hawaiian Breeze', 
            'Hawaiian Tropical Suntan', 'Fresh Linen', 'New Car', 'Green', 
            'Lone Star','California Redwood Cedar'
        ],
        sweet: [
            'Coconut', 'Cinnamon', 'Frozen Margarita', 'Pina Colada', 'Rootbeer', 'Vanilla', 'Very Vanilla', 'Monkey Farts', 
            'Winter Candy Apple', 'Pink Sugar', 'Island Mimosa'
        ],
        seasonal: [
            'Christmas Pine', 'Blue Spruce', 'Pine Forest', 'Smells Like Christmas', 'Spice Cranberry',
            'Peppermint Twist', 'Sweater Weather', 'Christmas Splendor',
            'Winter Citrus Wreath', 'Pumpkin Pecan Waffles', 
            'Pumpkin Apple','Autumn Harvest', 'Fall Festival'
        ],
        exotic: [
            'Brewed Coffee', 'Volcano'
        ]
    }
};

// Current selection state
let currentSelection = {
    step: 1,
    mold: null,
    color: null,
    colorVariant: null,
    scent: null,
    glitter: null,
    beads: null
};

// Base price
const BASE_PRICE = 12.99;

// Initialize customize page
document.addEventListener('DOMContentLoaded', function() {
    initializeStep1();
    updateProgressBar();
});

// Step 1: Initialize mold selection
function initializeStep1() {
    const moldOptions = document.getElementById('moldOptions');
    moldOptions.innerHTML = productData.molds.map(mold => `
        <div class="option-item" data-mold="${mold.id}" onclick="selectMold('${mold.id}')">
            <div class="option-image">${mold.icon}</div>
            <div class="option-name">${mold.name}</div>
            <div class="option-price">$${BASE_PRICE.toFixed(2)}</div>
        </div>
    `).join('');
}

// Step 2: Initialize color selection
function initializeStep2() {
    const baseColors = document.getElementById('baseColors');
    
    // Group colors by base color (excluding duplicates for fluorescent)
    const uniqueColors = productData.colors.filter((color, index, array) => {
        // Keep standard colors and first occurrence of fluorescent colors
        return !color.fluorescent || array.findIndex(c => c.name === color.name && !c.fluorescent) === -1;
    });
    
    baseColors.innerHTML = uniqueColors.map(color => {
        return `
            <div class="color-option" 
                 data-color="${color.id}" 
                 data-name="${color.name}"
                 style="background-color: ${color.hex}"
                 onclick="selectColor('${color.id}')">
            </div>
        `;
    }).join('');
}

// Step 3: Initialize scent selection
function initializeStep3() {
    // Set up category tabs
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.dataset.category;
            showScentCategory(category);
            
            // Update active tab
            categoryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Show initial category (floral)
    showScentCategory('floral');
}

// Mold selection
function selectMold(moldId) {
    currentSelection.mold = moldId;
    
    // Update UI
    document.querySelectorAll('.option-item').forEach(item => {
        item.classList.remove('selected');
    });
    document.querySelector(`[data-mold="${moldId}"]`).classList.add('selected');
    
    // Enable next button
    document.getElementById('nextBtn1').disabled = false;
    
    // Update summary
    updateSummary();
}

// Color selection
function selectColor(colorId) {
    currentSelection.color = colorId;
    
    // Update UI
    document.querySelectorAll('.color-option').forEach(item => {
        item.classList.remove('selected');
    });
    document.querySelector(`[data-color="${colorId}"]`).classList.add('selected');
    
    // Find the selected color and any fluorescent variant
    const selectedColor = productData.colors.find(c => c.id === colorId);
    const fluorescentVariant = productData.colors.find(c => 
        c.name === selectedColor.name && c.fluorescent
    );
    
    // Check if this color only has default variant (white/black)
    if (selectedColor.variants.length === 1 && selectedColor.variants[0] === 'default') {
        // For white and black, automatically select default variant and move to next step
        currentSelection.colorVariant = 'default';
        document.getElementById('colorVariants').style.display = 'none';
        document.getElementById('nextBtn2').disabled = false;
        updateSummary();
        return;
    }
    
    // Combine variants from both standard and fluorescent versions
    let allVariants = [...(selectedColor.variants || [])];
    if (fluorescentVariant && !allVariants.includes('fluorescent')) {
        allVariants.push('fluorescent');
    }
    
    // Create a combined color object for variant display
    const colorForVariants = {
        ...selectedColor,
        variants: allVariants,
        fluorescentHex: fluorescentVariant?.hex
    };
    
    // Show color variants
    const colorVariants = document.getElementById('colorVariants');
    colorVariants.style.display = 'block';
    
    // Update variant previews
    updateColorVariants(colorForVariants);
    
    // Reset variant selection
    currentSelection.colorVariant = null;
    document.querySelectorAll('.variant-option').forEach(item => {
        item.classList.remove('selected');
    });
    document.getElementById('nextBtn2').disabled = true;
    
    updateSummary();
}

// Updated color variants function
function updateColorVariants(color) {
    const colorVariants = document.getElementById('colorVariants');
    const variantOptions = colorVariants.querySelector('.variant-options');
    
    // Clear existing variants
    variantOptions.innerHTML = '';
    
    // Get available variants for this color
    const variants = color.variants || ['light', 'default', 'dark'];
    
    variants.forEach(variant => {
        const variantDiv = document.createElement('div');
        variantDiv.className = 'variant-option';
        variantDiv.dataset.variant = variant;
        
        const preview = document.createElement('div');
        preview.className = 'variant-preview';
        
        let variantColor = color.hex;
        let variantName = variant;
        
        switch(variant) {
            case 'light':
                variantColor = lightenColor(color.hex, 40);
                variantName = 'Light';
                break;
            case 'default':
                variantColor = color.hex;
                variantName = 'Default';
                break;
            case 'dark':
                variantColor = darkenColor(color.hex, 40);
                variantName = 'Dark';
                break;
            case 'fluorescent':
                variantColor = color.fluorescentHex || color.hex;
                variantName = 'Fluorescent';
                preview.style.boxShadow = `0 0 20px ${variantColor}`;
                preview.style.animation = 'fluorescent-glow 2s ease-in-out infinite alternate';
                break;
        }
        
        preview.style.backgroundColor = variantColor;
        
        const label = document.createElement('span');
        label.textContent = variantName;
        
        variantDiv.appendChild(preview);
        variantDiv.appendChild(label);
        variantDiv.onclick = () => selectColorVariant(variant);
        
        variantOptions.appendChild(variantDiv);
    });
    
    colorVariants.style.display = 'block';
}

// Color variant selection
function selectColorVariant(variant) {
    currentSelection.colorVariant = variant;
    
    // Update UI
    document.querySelectorAll('.variant-option').forEach(item => {
        item.classList.remove('selected');
    });
    document.querySelector(`[data-variant="${variant}"]`).classList.add('selected');
    
    // Enable next button
    document.getElementById('nextBtn2').disabled = false;
    
    updateSummary();
}

// Show scent category
function showScentCategory(category) {
    const scentOptions = document.getElementById('scentOptions');
    const scents = productData.scents[category];
    
    scentOptions.innerHTML = scents.map(scent => `
        <div class="scent-option" data-scent="${scent}" onclick="selectScent('${scent}')">
            ${scent}
        </div>
    `).join('');
}

// Scent selection
function selectScent(scent) {
    currentSelection.scent = scent;
    
    // Update UI
    document.querySelectorAll('.scent-option').forEach(item => {
        item.classList.remove('selected');
    });
    document.querySelector(`[data-scent="${scent}"]`).classList.add('selected');
    
    // Enable next button
    document.getElementById('nextBtn3').disabled = false;
    
    updateSummary();
}

// Glitter selection
function selectGlitter(glitterType) {
    currentSelection.glitter = glitterType;
    
    // Update UI
    document.querySelectorAll('.glitter-option').forEach(item => {
        item.classList.remove('selected');
    });
    document.querySelector(`[data-glitter="${glitterType}"]`).classList.add('selected');
    
    // Enable next button
    document.getElementById('nextBtn4').disabled = false;
    
    updateSummary();
}

// Bead selection
function selectBeads(beadType) {
    currentSelection.beads = beadType;
    
    // Update UI
    document.querySelectorAll('.bead-option').forEach(item => {
        item.classList.remove('selected');
    });
    document.querySelector(`[data-beads="${beadType}"]`).classList.add('selected');
    
    // Enable add to cart button
    document.getElementById('addToCartBtn').disabled = false;
    
    updateSummary();
}

// Navigation functions
function nextStep() {
    if (currentSelection.step < 5) {
        // Hide current step
        document.getElementById(`step${currentSelection.step}`).classList.remove('active');
        
        // Show next step
        currentSelection.step++;
        document.getElementById(`step${currentSelection.step}`).classList.add('active');
        
        // Initialize step-specific functionality
        if (currentSelection.step === 2) {
            initializeStep2();
        } else if (currentSelection.step === 3) {
            initializeStep3();
        } else if (currentSelection.step === 4) {
            setupGlitterSelection();
        } else if (currentSelection.step === 5) {
            setupBeadSelection();
        }
        
        updateProgressBar();
    }
}

function previousStep() {
    if (currentSelection.step > 1) {
        // Hide current step
        document.getElementById(`step${currentSelection.step}`).classList.remove('active');
        
        // Show previous step
        currentSelection.step--;
        document.getElementById(`step${currentSelection.step}`).classList.add('active');
        
        updateProgressBar();
    }
}

// Setup glitter selection
function setupGlitterSelection() {
    const glitterOptions = document.querySelectorAll('.glitter-option');
    glitterOptions.forEach(option => {
        const glitterType = option.dataset.glitter;
        option.onclick = () => selectGlitter(glitterType);
    });
}

// Setup bead selection
function setupBeadSelection() {
    const beadOptions = document.querySelectorAll('.bead-option');
    beadOptions.forEach(option => {
        const beadType = option.dataset.beads;
        option.onclick = () => selectBeads(beadType);
    });
}

// Update progress bar
function updateProgressBar() {
    const progressSteps = document.querySelectorAll('.progress-step');
    progressSteps.forEach((step, index) => {
        if (index + 1 <= currentSelection.step) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

// Update summary
function updateSummary() {
    const moldName = currentSelection.mold ? 
        productData.molds.find(m => m.id === currentSelection.mold)?.name : '-';
    
    const colorName = currentSelection.color && currentSelection.colorVariant ? 
        `${productData.colors.find(c => c.id === currentSelection.color)?.name} (${currentSelection.colorVariant})` : 
        (currentSelection.color ? productData.colors.find(c => c.id === currentSelection.color)?.name : '-');
    
    document.getElementById('selectedMold').textContent = moldName;
    document.getElementById('selectedColor').textContent = colorName;
    document.getElementById('selectedScent').textContent = currentSelection.scent || '-';
    document.getElementById('selectedGlitter').textContent = currentSelection.glitter ? 
        (currentSelection.glitter === 'none' ? 'No' : 'Yes') : '-';
    document.getElementById('selectedBeads').textContent = currentSelection.beads ? 
        (currentSelection.beads === 'none' ? 'No' : 'Yes') : '-';

    // Calculate price - both glitter and bead are now free
    let totalPrice = BASE_PRICE;
    // Removed all extra pricing since glitter and bead are now free

    document.getElementById('summaryPrice').textContent = totalPrice.toFixed(2);
    document.getElementById('finalPrice').textContent = totalPrice.toFixed(2);
}

// Add to cart
function addToCart() {
    if (!isSelectionComplete()) {
        cart.showNotification('Please complete all selections!', 'error');
        return;
    }

    const item = {
        mold: productData.molds.find(m => m.id === currentSelection.mold)?.name,
        color: `${productData.colors.find(c => c.id === currentSelection.color)?.name} (${currentSelection.colorVariant})`,
        scent: currentSelection.scent,
        glitter: currentSelection.glitter === 'none' ? 'No' : 'Yes',
        beads: currentSelection.beads === 'none' ? 'No' : 'Yes',
        price: parseFloat(document.getElementById('finalPrice').textContent)
    };

    cart.addItem(item);
    
    // Reset form for next item
    setTimeout(() => {
        if (confirm('Item added to cart! Would you like to create another air freshener?')) {
            resetForm();
        }
    }, 1000);
}

// Check if selection is complete
function isSelectionComplete() {
    return currentSelection.mold && 
           currentSelection.color && 
           currentSelection.colorVariant && 
           currentSelection.scent && 
           currentSelection.glitter !== null && 
           currentSelection.beads !== null;
}

// Reset form
function resetForm() {
    currentSelection = {
        step: 1,
        mold: null,
        color: null,
        colorVariant: null,
        scent: null,
        glitter: null,
        beads: null
    };

    // Hide all steps except first
    document.querySelectorAll('.step-content').forEach(step => {
        step.classList.remove('active');
    });
    document.getElementById('step1').classList.add('active');

    // Reset all selections
    document.querySelectorAll('.selected').forEach(item => {
        item.classList.remove('selected');
    });

    // Disable all next buttons
    document.querySelectorAll('[id^="nextBtn"]').forEach(btn => {
        btn.disabled = true;
    });
    document.getElementById('addToCartBtn').disabled = true;

    // Hide color variants
    document.getElementById('colorVariants').style.display = 'none';

    updateProgressBar();
    updateSummary();
}

// Utility functions
function lightenColor(hex, percent) {
    const num = parseInt(hex.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

function darkenColor(hex, percent) {
    const num = parseInt(hex.replace("#", ""), 16);
    
    // Special handling for gray, maroon, brown, and green - reduce darkening percentage
    if (hex.toLowerCase() === '#6c757d') {
        percent = percent * 0.6; // Make dark gray less dark (reduce effect by 40%)
    } else if (hex.toLowerCase() === '#800000') {
        percent = percent * 0.5; // Make dark maroon less dark (reduce effect by 50%)
    } else if (hex.toLowerCase() === '#795548') {
        percent = percent * 0.5; // Make dark brown less dark (reduce effect by 50%)
    } else if (hex.toLowerCase() === '#198754') {
        percent = percent * 0.5; // Make dark green less dark (reduce effect by 50%)
    }
    
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) - amt;
    const G = (num >> 8 & 0x00FF) - amt;
    const B = (num & 0x0000FF) - amt;
    return "#" + (0x1000000 + (R > 255 ? 255 : R < 0 ? 0 : R) * 0x10000 +
        (G > 255 ? 255 : G < 0 ? 0 : G) * 0x100 +
        (B > 255 ? 255 : B < 0 ? 0 : B)).toString(16).slice(1);
}