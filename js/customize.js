// Customize page functionality

// Product data with organized mold categories
const productData = {
    moldCategories: {
        automotive: [
            { id: 'acura', name: 'Acura Logo', price: 0, image: 'images/Molds/Acura.jpg' },
            { id: 'chevrolet', name: 'Chevrolet Logo', price: 0, image: 'images/Molds/Chevrolet.jpg' },
            { id: 'chevy', name: 'Chevy Logo', price: 0, image: 'images/Molds/Chevy.jpg' },
            { id: 'chevy-girl', name: 'Chevy Girl', price: 0, image: 'images/Molds/ChevyGirl.jpg' },
            { id: 'ford', name: 'Ford Logo', price: 0, image: 'images/Molds/Ford.jpg' },
            { id: 'gmc', name: 'GMC Logo', price: 0, image: 'images/Molds/GMC.jpg' },
            { id: 'harley-davidson', name: 'Harley Davidson', price: 0, image: 'images/Molds/HarleyDavidson.jpg' },
            { id: 'jeep-duck', name: 'Jeep Duck', price: 0, image: 'images/Molds/JeepDuck.jpg' },
            { id: 'john-deer', name: 'John Deere', price: 0, image: 'images/Molds/JohnDeer.jpg' },
            { id: 'mustang', name: 'Mustang Logo', price: 0, image: 'images/Molds/Mustang.jpg' },
            { id: 'toyota', name: 'Toyota Logo', price: 0, image: 'images/Molds/Toyota.jpg' }
        ],
        sports: [
            { id: 'basketball', name: 'Basketball', price: 0, image: 'images/Molds/Basketball.jpg' },
            { id: 'bowling', name: 'Bowling', price: 0, image: 'images/Molds/Bowling.jpg' },
            { id: 'cheer', name: 'Cheerleader', price: 0, image: 'images/Molds/Cheer.jpg' },
            { id: 'football', name: 'Football', price: 0, image: 'images/Molds/Football.jpg' },
            { id: 'roller-skate', name: 'Roller Skate', price: 0, image: 'images/Molds/RollerSkate.jpg' },
            { id: 'soccer-ball', name: 'Soccer Ball', price: 0, image: 'images/Molds/SoccerBall.jpg' },
            { id: 'volleyball', name: 'Volleyball', price: 0, image: 'images/Molds/Volleyball.jpg' }
        ],
        animals: [
            { id: 'butterfly1', name: 'Butterfly Style 1', price: 0, image: 'images/Molds/Butterfly1.jpg' },
            { id: 'butterfly2', name: 'Butterfly Style 2', price: 0, image: 'images/Molds/Butterfly2.jpg' },
            { id: 'butterfly3', name: 'Butterfly Style 3', price: 0, image: 'images/Molds/Butterfly3.jpg' },
            { id: 'cardinal', name: 'Cardinal', price: 0, image: 'images/Molds/Cardinal.jpg' },
            { id: 'cardinal-branch', name: 'Cardinal on Branch', price: 0, image: 'images/Molds/CardinalBranch.jpg' },
            { id: 'cat-butt', name: 'Cat Butt', price: 0, image: 'images/Molds/CatButt.jpg' },
            { id: 'chicken', name: 'Chicken', price: 0, image: 'images/Molds/Chicken.jpg' },
            { id: 'cow-duck', name: 'Cow Duck', price: 0, image: 'images/Molds/CowDuck.jpg' },
            { id: 'daisy-cow', name: 'Daisy Cow', price: 0, image: 'images/Molds/DaisyCow.jpg' },
            { id: 'deer', name: 'Deer', price: 0, image: 'images/Molds/Deer.jpg' },
            { id: 'deer-flag', name: 'Deer with Flag', price: 0, image: 'images/Molds/DeerFlag.jpg' },
            { id: 'dolphin', name: 'Dolphin', price: 0, image: 'images/Molds/Dolphin.jpg' },
            { id: 'duck-me', name: 'Duck Me', price: 0, image: 'images/Molds/DuckMe.jpg' },
            { id: 'fancy-cow', name: 'Fancy Cow', price: 0, image: 'images/Molds/FancyCow.jpg' },
            { id: 'flamingo', name: 'Flamingo', price: 0, image: 'images/Molds/Flamingo.jpg' },
            { id: 'floatie-cow', name: 'Floatie Cow', price: 0, image: 'images/Molds/FloatieCow.jpg' },
            { id: 'highland-cow', name: 'Highland Cow', price: 0, image: 'images/Molds/HighlandCow.jpg' },
            { id: 'highland-cow2', name: 'Highland Cow 2', price: 0, image: 'images/Molds/HighlandCow2.jpg' },
            { id: 'humming-bird', name: 'Hummingbird', price: 0, image: 'images/Molds/HummingBird.jpg' },
            { id: 'lady-bug', name: 'Ladybug', price: 0, image: 'images/Molds/LadyBug.jpg' },
            { id: 'llama', name: 'Llama', price: 0, image: 'images/Molds/Llama.jpg' },
            { id: 'monkey', name: 'Monkey', price: 0, image: 'images/Molds/Monkey.jpg' },
            { id: 'panda', name: 'Panda', price: 0, image: 'images/Molds/Panda.jpg' },
            { id: 'panda2', name: 'Panda Style 2', price: 0, image: 'images/Molds/Panda2.jpg' },
            { id: 'paw1', name: 'Paw Print 1', price: 0, image: 'images/Molds/Paw1.jpg' },
            { id: 'paw2', name: 'Paw Print 2', price: 0, image: 'images/Molds/Paw2.jpg' },
            { id: 'penguin', name: 'Penguin', price: 0, image: 'images/Molds/Penguin.jpg' },
            { id: 'penguin2', name: 'Penguin Style 2', price: 0, image: 'images/Molds/Penguin2.jpg' },
            { id: 'pig', name: 'Pig', price: 0, image: 'images/Molds/Pig.jpg' },
            { id: 'seahorse', name: 'Seahorse', price: 0, image: 'images/Molds/Seahorse.jpg' },
            { id: 'seaturtle', name: 'Sea Turtle', price: 0, image: 'images/Molds/Seaturtle.jpg' },
            { id: 'seaturtle2', name: 'Sea Turtle 2', price: 0, image: 'images/Molds/Seaturtle2.jpg' },
            { id: 'unicorn', name: 'Unicorn', price: 0, image: 'images/Molds/Unicorn.jpg' }
        ],
        occupations: [
            { id: 'barber', name: 'Barber', price: 0, image: 'images/Molds/Barber.jpg' },
            { id: 'fire-dep', name: 'Fire Department', price: 0, image: 'images/Molds/FireDep.jpg' },
            { id: 'mail-truck', name: 'Mail Truck', price: 0, image: 'images/Molds/MailTruck.jpg' },
            { id: 'nail-tech', name: 'Nail Technician', price: 0, image: 'images/Molds/NailTech.jpg' },
            { id: 'salon', name: 'Hair Salon', price: 0, image: 'images/Molds/Salon.jpg' },
            { id: 'schoolbus', name: 'School Bus', price: 0, image: 'images/Molds/Schoolbus.jpg' },
            { id: 'scrub-life', name: 'Scrub Life', price: 0, image: 'images/Molds/ScrubLife.jpg' },
            { id: 'tools', name: 'Tools', price: 0, image: 'images/Molds/Tools.jpg' },
            { id: 'usaf', name: 'US Air Force', price: 0, image: 'images/Molds/USAF.jpg' },
            { id: 'us-army', name: 'US Army', price: 0, image: 'images/Molds/USArmy.jpg' }
        ],
        family: [
            { id: 'auntie', name: 'Auntie', price: 0, image: 'images/Molds/Auntie.jpg' },
            { id: 'dad', name: 'Dad', price: 0, image: 'images/Molds/Dad.jpg' },
            { id: 'dad2', name: 'Dad Style 2', price: 0, image: 'images/Molds/Dad2.jpg' },
            { id: 'dance-mom', name: 'Dance Mom', price: 0, image: 'images/Molds/DanceMom.jpg' },
            { id: 'welcome-little-one', name: 'Welcome Little One', price: 0, image: 'images/Molds/WelcomeLittleOne.jpg' }
        ],
        seasonal: [
            { id: 'bells', name: 'Christmas Bells', price: 0, image: 'images/Molds/Bells.jpg' },
            { id: 'bunny-egg', name: 'Bunny Egg', price: 0, image: 'images/Molds/BunnyEgg.jpg' },
            { id: 'bunny-tail', name: 'Bunny Tail', price: 0, image: 'images/Molds/BunnyTail.jpg' },
            { id: 'grinch', name: 'Grinch', price: 0, image: 'images/Molds/Grinch.jpg' },
            { id: 'ho-ho-ho', name: 'Ho Ho Ho', price: 0, image: 'images/Molds/HoHoHo.jpg' },
            { id: 'ho-ho-ho2', name: 'Ho Ho Ho 2', price: 0, image: 'images/Molds/HoHoHo2.jpg' },
            { id: 'ornament', name: 'Christmas Ornament', price: 0, image: 'images/Molds/Ornament.jpg' },
            { id: 'santa', name: 'Santa', price: 0, image: 'images/Molds/Santa.jpg' },
            { id: 'snowflake', name: 'Snowflake', price: 0, image: 'images/Molds/Snowflake.jpg' },
            { id: 'snowman', name: 'Snowman', price: 0, image: 'images/Molds/Snowman.jpg' },
            { id: 'xmas-tree', name: 'Christmas Tree', price: 0, image: 'images/Molds/XmasTree.jpg' },
            { id: 'xmas-tree-truck', name: 'Christmas Tree Truck', price: 0, image: 'images/Molds/XmasTreeTruck.jpg' }
        ],
        characters: [
            { id: 'baby-yoda', name: 'Baby Yoda', price: 0, image: 'images/Molds/BabyYoda.jpg' },
            { id: 'batman', name: 'Batman', price: 0, image: 'images/Molds/Batman.jpg' },
            { id: 'booey', name: 'Booey', price: 0, image: 'images/Molds/Booey.jpg' },
            { id: 'jack-skeleton', name: 'Jack Skellington', price: 0, image: 'images/Molds/JackSkeleton.jpg' },
            { id: 'mickey-mouse', name: 'Mickey Mouse', price: 0, image: 'images/Molds/MickeyMouse.jpg' },
            { id: 'mickey-mouse-pants', name: 'Mickey Mouse Pants', price: 0, image: 'images/Molds/MickeyMousePants.jpg' },
            { id: 'miney-mouse', name: 'Minnie Mouse', price: 0, image: 'images/Molds/MineyMouse.jpg' },
            { id: 'nemo', name: 'Nemo', price: 0, image: 'images/Molds/Nemo.jpg' },
            { id: 'spider-man', name: 'Spider-Man', price: 0, image: 'images/Molds/SpiderMan.jpg' }
        ],
        nature: [
            { id: 'anchor', name: 'Anchor', price: 0, image: 'images/Molds/Anchor.jpg' },
            { id: 'apple', name: 'Apple', price: 0, image: 'images/Molds/Apple.jpg' },
            { id: 'clover', name: 'Four Leaf Clover', price: 0, image: 'images/Molds/Clover.jpg' },
            { id: 'conch', name: 'Conch Shell', price: 0, image: 'images/Molds/Conch.jpg' },
            { id: 'flower', name: 'Flower', price: 0, image: 'images/Molds/Flower.jpg' },
            { id: 'flower2', name: 'Flower Style 2', price: 0, image: 'images/Molds/Flower2.jpg' },
            { id: 'lighthouse', name: 'Lighthouse', price: 0, image: 'images/Molds/Lighthouse.jpg' },
            { id: 'palm-tree', name: 'Palm Tree', price: 0, image: 'images/Molds/PalmTree.jpg' },
            { id: 'pineapple', name: 'Pineapple', price: 0, image: 'images/Molds/Pineapple.jpg' },
            { id: 'seashell1', name: 'Seashell Style 1', price: 0, image: 'images/Molds/Seashell1.jpg' },
            { id: 'seashell2', name: 'Seashell Style 2', price: 0, image: 'images/Molds/Seashell2.jpg' },
            { id: 'smile-flower', name: 'Smiley Flower', price: 0, image: 'images/Molds/SmileFlower.jpg' },
            { id: 'smiley-flower2', name: 'Smiley Flower 2', price: 0, image: 'images/Molds/SmileyFlower2.jpg' },
            { id: 'starfish', name: 'Starfish', price: 0, image: 'images/Molds/Starfish.jpg' },
            { id: 'strawberry', name: 'Strawberry', price: 0, image: 'images/Molds/Strawberry.jpg' },
            { id: 'sunflower', name: 'Sunflower', price: 0, image: 'images/Molds/Sunflower.jpg' },
            { id: 'sunflower2', name: 'Sunflower 2', price: 0, image: 'images/Molds/Sunflower2.jpg' }
        ],
        symbols: [
            { id: 'a-z', name: 'A-Z Letters', price: 0, image: 'images/Molds/A-Z.jpg' },
            { id: 'american-flag', name: 'American Flag', price: 0, image: 'images/Molds/AmericanFlag.jpg' },
            { id: 'angel', name: 'Angel', price: 0, image: 'images/Molds/Angel.jpg' },
            { id: 'art-palette', name: 'Art Palette', price: 0, image: 'images/Molds/ArtPalette.jpg' },
            { id: 'bowtie', name: 'Bow Tie', price: 0, image: 'images/Molds/Bowtie.jpg' },
            { id: 'breast-cancer', name: 'Breast Cancer Awareness', price: 0, image: 'images/Molds/BreastCancerAwareness.jpg' },
            { id: 'cross1', name: 'Cross Style 1', price: 0, image: 'images/Molds/Cross1.jpg' },
            { id: 'cross2', name: 'Cross Style 2', price: 0, image: 'images/Molds/Cross2.jpg' },
            { id: 'cross3', name: 'Cross Style 3', price: 0, image: 'images/Molds/Cross3.jpg' },
            { id: 'cross4', name: 'Cross Style 4', price: 0, image: 'images/Molds/Cross4.jpg' },
            { id: 'cross5', name: 'Cross Style 5', price: 0, image: 'images/Molds/Cross5.jpg' },
            { id: 'heart-hands', name: 'Heart Hands', price: 0, image: 'images/Molds/HeartHands.jpg' },
            { id: 'peace', name: 'Peace Sign', price: 0, image: 'images/Molds/Peace.jpg' },
            { id: 'pride', name: 'Pride Flag', price: 0, image: 'images/Molds/Pride.jpg' },
            { id: 'ribbon', name: 'Ribbon', price: 0, image: 'images/Molds/Ribbon.jpg' },
            { id: 'rock-and-roll', name: 'Rock and Roll', price: 0, image: 'images/Molds/RockAndRoll.jpg' },
            { id: 'veteran-flag', name: 'Veteran Flag', price: 0, image: 'images/Molds/VeteranFlag.jpg' }
        ],
        lifestyle: [
            { id: 'bass', name: 'Bass Guitar', price: 0, image: 'images/Molds/Bass.jpg' },
            { id: 'book', name: 'Book', price: 0, image: 'images/Molds/Book.jpg' },
            { id: 'book2', name: 'Book Style 2', price: 0, image: 'images/Molds/Book2.jpg' },
            { id: 'cowboy-boot', name: 'Cowboy Boot', price: 0, image: 'images/Molds/CowboyBoot.jpg' },
            { id: 'dance-mode-on', name: 'Dance Mode On', price: 0, image: 'images/Molds/DanceModeOn.jpg' },
            { id: 'excavator', name: 'Excavator', price: 0, image: 'images/Molds/Excavator.jpg' },
            { id: 'feet', name: 'Baby Feet', price: 0, image: 'images/Molds/Feet.jpg' },
            { id: 'fire-8-ball', name: 'Fire 8 Ball', price: 0, image: 'images/Molds/Fire8Ball.jpg' },
            { id: 'fishing-hook', name: 'Fishing Hook', price: 0, image: 'images/Molds/FishingHook.jpg' },
            { id: 'guitar', name: 'Guitar', price: 0, image: 'images/Molds/Guitar.jpg' },
            { id: 'here-comes-the-sun', name: 'Here Comes The Sun', price: 0, image: 'images/Molds/HereComesTheSun.jpg' },
            { id: 'ice-coffee', name: 'Ice Coffee', price: 0, image: 'images/Molds/IceCoffee.jpg' },
            { id: 'its-fine', name: 'It\'s Fine', price: 0, image: 'images/Molds/ItsFine.jpg' },
            { id: 'machine', name: 'Machine', price: 0, image: 'images/Molds/Machine.jpg' },
            { id: 'mermaid-tail', name: 'Mermaid Tail', price: 0, image: 'images/Molds/MermaidTail.jpg' },
            { id: 'music-note', name: 'Music Note', price: 0, image: 'images/Molds/MusicNote.jpg' },
            { id: 'shirt', name: 'T-Shirt', price: 0, image: 'images/Molds/Shirt.jpg' },
            { id: 'smiley', name: 'Smiley Face', price: 0, image: 'images/Molds/Smiley.jpg' },
            { id: 'tractor', name: 'Tractor', price: 0, image: 'images/Molds/Tractor.jpg' },
            { id: 'water-bottle', name: 'Water Bottle', price: 0, image: 'images/Molds/WaterBottle.jpg' }
        ]
    },
    
    colors: [
        // Standard colors (Light, Default, Dark variants)
        { id: 'red', name: 'Red', hex: '#dc3545', variants: ['light', 'default', 'dark'] },
        { id: 'orange', name: 'Orange', hex: '#fd7e14', variants: ['light', 'default', 'dark'] },
        { id: 'yellow', name: 'Yellow', hex: '#ffc107', variants: ['light', 'default', 'dark'] },
        { id: 'blue', name: 'Blue', hex: '#0d6efd', variants: ['light', 'default', 'dark'] },
        { id: 'green', name: 'Green', hex: '#198754', variants: ['light', 'default', 'dark'] },
        { id: 'purple', name: 'Purple', hex: '#6f42c1', variants: ['light', 'default', 'dark'] },
        { id: 'white', name: 'White', hex: '#ffffff', variants: ['default'] },
        { id: 'black', name: 'Black', hex: '#000000', variants: ['default'] },
        { id: 'brown', name: 'Brown', hex: '#795548', variants: ['light', 'default', 'dark'] },
        { id: 'tan', name: 'Tan', hex: '#d2b48c', variants: ['light', 'default', 'dark'] },
        { id: 'gray', name: 'Gray', hex: '#6c757d', variants: ['light', 'default', 'dark'] },
        { id: 'teal', name: 'Teal', hex: '#20c997', variants: ['light', 'default', 'dark'] },
        { id: 'silver', name: 'Silver', hex: '#c0c0c0', variants: ['light', 'default', 'dark'] },
        { id: 'gold', name: 'Gold', hex: '#ffd700', variants: ['light', 'default', 'dark'] },
        { id: 'maroon', name: 'Maroon', hex: '#800000', variants: ['light', 'default', 'dark'] },
        { id: 'pink', name: 'Pink', hex: '#e91e63', variants: ['light', 'default', 'dark', 'fluorescent'] },
        
        // Fluorescent colors
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
    moldCategory: null,
    color: null,
    colorVariant: null,
    scent: null,
    glitter: null,
    beads: null,
    isCardstock: false
};

// Base price
const BASE_PRICE = 12.99;

// Initialize customize page
document.addEventListener('DOMContentLoaded', function() {
    initializeStep1();
    updateProgressBar();
});

// Step 1: Initialize mold selection with tabbed categories (like scents)
function initializeStep1() {
    const moldOptions = document.getElementById('moldOptions');
    
    // Create tabbed layout like scents - including cardstock as a tab
    let html = `
        <div class="mold-categories">
            <div class="category-tabs">
                <button class="category-tab" data-category="cardstock">Cardstock</button>
                <button class="category-tab active" data-category="automotive">Automotive</button>
                <button class="category-tab" data-category="sports">Sports</button>
                <button class="category-tab" data-category="animals">Animals</button>
                <button class="category-tab" data-category="occupations">Occupations</button>
                <button class="category-tab" data-category="family">Family</button>
                <button class="category-tab" data-category="seasonal">Seasonal</button>
                <button class="category-tab" data-category="characters">Characters</button>
                <button class="category-tab" data-category="nature">Nature</button>
                <button class="category-tab" data-category="symbols">Symbols</button>
                <button class="category-tab" data-category="lifestyle">Lifestyle</button>
            </div>
            <div class="mold-options" id="moldCategoryOptions">
                <!-- Mold options will be populated here -->
            </div>
        </div>
    `;
    
    moldOptions.innerHTML = html;
    
    // Set up category tab functionality
    setupMoldCategoryTabs();
    
    // Show initial category (automotive)
    showMoldCategory('automotive');
    
    // Add scroll event listener to remove pulse animation hint
    const categoryTabs = document.querySelector('.mold-categories .category-tabs');
    if (categoryTabs) {
        categoryTabs.addEventListener('scroll', function() {
            this.classList.add('scrolled');
        }, { once: true });
    }
}

function setupMoldCategoryTabs() {
    const categoryTabs = document.querySelectorAll('.mold-categories .category-tab');
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.dataset.category;
            showMoldCategory(category);
            
            // Update active tab
            categoryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function showMoldCategory(category) {
    const moldCategoryOptions = document.getElementById('moldCategoryOptions');
    
    // Handle cardstock category - show samples as NON-selectable reference images
    if (category === 'cardstock') {
        // Create cardstock samples as NON-selectable options (skip removed duplicates 3, 5, and empty 26, 27)
        const cardstockSamples = [];
        for (let i = 1; i <= 27; i++) {
            // Skip sample 3, 5 (duplicates) and 26, 27 (empty)
            if (i === 3 || i === 5 || i === 26 || i === 27) continue;
            
            const num = i;
            const filename = num === 25 ? 'CardStock25.jpg' : `Cardstock${num}.jpg`;
            cardstockSamples.push({
                id: `cardstock-${num}`,
                name: `Cardstock Design ${num}`,
                price: 0,
                image: `images/Cardstock/${filename}`
            });
        }
        
        moldCategoryOptions.innerHTML = `
            ${cardstockSamples.map(sample => `
                <div class="mold-option" data-mold="${sample.id}" data-category="cardstock">
                    <div class="mold-image">
                        <img src="${sample.image}" alt="${sample.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="fallback-icon" style="display:none;">🔷</div>
                    </div>
                    <div class="mold-name">${sample.name}</div>
                    <div class="mold-price">Reference Only</div>
                </div>
            `).join('')}
            
            <!-- Custom Options at Bottom -->
            <div style="grid-column: 1 / -1; display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 40px; padding-top: 40px; border-top: 2px solid #eee;">
                <div class="mold-option cardstock-custom-option" onclick="showUploadForm()" style="cursor: pointer; height: auto; min-height: 260px;">
                    <div class="mold-image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center;">
                        <div style="text-align: center; color: white;">
                            <div style="font-size: 48px; margin-bottom: 10px;">📤</div>
                            <div style="font-size: 14px; font-weight: 600;">Upload Your Design</div>
                        </div>
                    </div>
                    <div class="mold-name">Upload Custom Image</div>
                    <div class="mold-price">Inquiry Based</div>
                    <p style="font-size: 11px; color: #666; margin-top: 8px; line-height: 1.4;">Upload your own design file for a truly custom air freshener</p>
                </div>
                
                <div class="mold-option cardstock-custom-option" onclick="showCustomDesignForm()" style="cursor: pointer; height: auto; min-height: 260px;">
                    <div class="mold-image" style="background: linear-gradient(135deg, #764ba2 0%, #667eea 100%); display: flex; align-items: center; justify-content: center;">
                        <div style="text-align: center; color: white;">
                            <div style="font-size: 48px; margin-bottom: 10px;">✍️</div>
                            <div style="font-size: 14px; font-weight: 600;">Describe Your Design</div>
                        </div>
                    </div>
                    <div class="mold-name">Custom Text Request</div>
                    <div class="mold-price">Inquiry Based</div>
                    <p style="font-size: 11px; color: #666; margin-top: 8px; line-height: 1.4;">Tell us your design idea and we'll create it for you</p>
                </div>
            </div>
        `;
        
        // Add click handlers to custom options after DOM is updated
        setTimeout(() => {
            const uploadOption = moldCategoryOptions.querySelector('[data-custom-type="upload"]');
            const textOption = moldCategoryOptions.querySelector('[data-custom-type="text"]');
            
            if (uploadOption) {
                uploadOption.addEventListener('click', function(e) {
                    e.stopPropagation();
                    showUploadForm();
                });
            }
            
            if (textOption) {
                textOption.addEventListener('click', function(e) {
                    e.stopPropagation();
                    showCustomDesignForm();
                });
            }
        }, 0);
        
        return;
    }
    
    // Handle regular mold categories
    const molds = productData.moldCategories[category];
    
    if (!molds) {
        moldCategoryOptions.innerHTML = '<p>No molds available in this category.</p>';
        return;
    }
    
    moldCategoryOptions.innerHTML = molds.map(mold => `
        <div class="mold-option" data-mold="${mold.id}" data-category="${category}" onclick="selectMold('${mold.id}', '${category}')">
            <div class="mold-image">
                <img src="${mold.image}" alt="${mold.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="fallback-icon" style="display:none;">🔷</div>
            </div>
            <div class="mold-name">${mold.name}</div>
            <div class="mold-price">$${BASE_PRICE.toFixed(2)}</div>
        </div>
    `).join('');
}

// Modified mold selection for regular molds
function selectMold(moldId, category) {
    currentSelection.mold = moldId;
    currentSelection.moldCategory = category;
    currentSelection.isCardstock = (category === 'cardstock');
    
    // Update UI - only affect mold options, not cardstock
    document.querySelectorAll('.mold-option').forEach(item => {
        item.classList.remove('selected');
    });
    document.querySelector(`[data-mold="${moldId}"]`).classList.add('selected');
    
    // Enable next button
    document.getElementById('nextBtn1').disabled = false;
    
    updateSummary();
}

// Updated cardstock selection to handle both types
function selectCardstock(type) {
    currentSelection.isCardstock = true;
    currentSelection.mold = `cardstock-${type}`;
    currentSelection.moldCategory = 'cardstock';
    currentSelection.cardstockType = type;
    
    // Update UI - highlight selected option
    document.querySelectorAll('.mold-option').forEach(item => {
        item.classList.remove('selected');
    });
    event.target.closest('.mold-option').classList.add('selected');
    
    // Show appropriate modal based on type
    if (type === 'request') {
        showCardstockDesignRequestModal();
    } else if (type === 'upload') {
        showCardstockUploadModal();
    }
    
    // Enable next button
    document.getElementById('nextBtn1').disabled = false;
    
    updateSummary();
}

// Modal for custom design request
function showCardstockDesignRequestModal() {
    // Generate cardstock samples for modal gallery - skip duplicates (3 and 5)
    const galleryHtml = [];
    for (let i = 1; i <= 27; i++) {
        // Skip sample 3 and 5 (duplicates that were removed)
        if (i === 3 || i === 5) continue;
        
        const num = i;
        const filename = num === 25 ? 'CardStock25.jpg' : `Cardstock${num}.jpg`;
        galleryHtml.push(`<img src="images/Molds/${filename}" alt="Cardstock Sample ${num}" class="sample-image">`);
    }
    
    const modal = document.createElement('div');
    modal.className = 'cardstock-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Custom Design Request</h3>
                <button class="close-modal" onclick="closeCardstockModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="cardstock-samples">
                    <h4>Browse Our Design Library (200+ Options):</h4>
                    <div class="sample-gallery">
                        ${galleryHtml.join('')}
                    </div>
                </div>
                
                <div class="inquiry-info">
                    <h4>What's Included:</h4>
                    <ul>
                        <li>Choose from 200+ professionally designed templates</li>
                        <li>Customize text, colors, and layouts</li>
                        <li>Professional design assistance included</li>
                        <li>Multiple paper weights and finishes available</li>
                        <li>Perfect for events, weddings, corporate gifts</li>
                    </ul>
                    
                    <p><strong>How It Works:</strong> Contact us with your design preferences, and we'll create a custom proof for your approval before production.</p>
                    
                    <p><strong>Pricing:</strong> Varies based on design complexity and quantity. Email us for a personalized quote!</p>
                </div>
                
                <div class="contact-options">
                    <button class="btn primary" onclick="window.location.href='mailto:airfreshiesbycolleen@gmail.com?subject=Custom Cardstock Design Request'">
                        📧 Request Custom Design
                    </button>
                    <button class="btn secondary" onclick="closeCardstockModal()">
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

// Modal for upload your own design
function showCardstockUploadModal() {
    const modal = document.createElement('div');
    modal.className = 'cardstock-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Upload Your Own Design</h3>
                <button class="close-modal" onclick="closeCardstockModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="inquiry-info">
                    <h4>Design Upload Requirements:</h4>
                    <ul>
                        <li><strong>File Format:</strong> PNG, JPG, PDF, or AI (vector preferred)</li>
                        <li><strong>Resolution:</strong> Minimum 300 DPI for best quality</li>
                        <li><strong>Size:</strong> We'll scale to fit our standard air freshener sizes</li>
                        <li><strong>Color Mode:</strong> RGB or CMYK accepted</li>
                        <li><strong>Bleed:</strong> Include 0.125" bleed if possible</li>
                    </ul>
                    
                    <h4>What Happens Next:</h4>
                    <ol style="margin-top: 15px; padding-left: 25px;">
                        <li>Email your design file to us</li>
                        <li>We'll review for print quality and compatibility</li>
                        <li>Receive a proof within 24-48 hours</li>
                        <li>Approve the proof and receive your quote</li>
                        <li>Production begins after payment</li>
                    </ol>
                    
                    <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 10px; border: 1px solid #ffc107;">
                        <strong>💡 Design Tips:</strong>
                        <ul style="margin-top: 10px;">
                            <li>Keep important elements away from edges</li>
                            <li>Use high contrast for better visibility</li>
                            <li>Bold fonts work best for readability</li>
                            <li>Test your design at actual size before submitting</li>
                        </ul>
                    </div>
                    
                    <p style="margin-top: 20px;"><strong>Pricing:</strong> Based on design complexity, quantity, and finish options. Contact us for a detailed quote!</p>
                </div>
                
                <div class="contact-options">
                    <button class="btn primary" onclick="window.location.href='mailto:airfreshiesbycolleen@gmail.com?subject=Upload Custom Cardstock Design&body=Hi! I would like to upload my own design for a cardstock air freshener. Please send me instructions on how to submit my file.'">
                        📧 Email to Upload Design
                    </button>
                    <button class="btn secondary" onclick="closeCardstockModal()">
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
}

// Keep the existing closeCardstockModal function
function closeCardstockModal() {
    const modal = document.querySelector('.cardstock-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
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
    
    // Add scroll event listener to scent tabs
    const scentTabs = document.querySelector('.scent-categories .category-tabs');
    if (scentTabs) {
        scentTabs.addEventListener('scroll', function() {
            this.classList.add('scrolled');
        }, { once: true });
    }
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
    
    // Add scroll event listener to scent tabs
    const scentTabs = document.querySelector('.scent-categories .category-tabs');
    if (scentTabs) {
        scentTabs.addEventListener('scroll', function() {
            this.classList.add('scrolled');
        }, { once: true });
    }
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
    beadOptions.forEach(option => {  // Fixed: added missing (option => {
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

// Update summary function to handle cardstock molds
function updateSummary() {
    let moldName = '-';
    
    if (currentSelection.mold && currentSelection.moldCategory) {
        if (currentSelection.moldCategory === 'cardstock') {
            // Extract the number from the cardstock ID
            const cardstockNum = currentSelection.mold.replace('cardstock-', '');
            moldName = `Cardstock Design ${cardstockNum}`;
        } else {
            const category = productData.moldCategories[currentSelection.moldCategory];
            const mold = category?.find(m => m.id === currentSelection.mold);
            moldName = mold?.name || '-';
        }
    }
    
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

    // Calculate price - cardstock uses regular pricing
    let totalPrice = BASE_PRICE;

    document.getElementById('summaryPrice').textContent = totalPrice.toFixed(2);
    document.getElementById('finalPrice').textContent = totalPrice.toFixed(2);
}

// Add to cart
function addToCart() {
    if (!isSelectionComplete()) {
        cart.showNotification('Please complete all selections!', 'error');
        return;
    }

    let moldName = 'Custom Mold';
    
    if (currentSelection.moldCategory === 'cardstock') {
        const cardstockNum = currentSelection.mold.replace('cardstock-', '');
        moldName = `Cardstock Design ${cardstockNum}`;
    } else {
        const moldData = productData.moldCategories[currentSelection.moldCategory]?.find(m => m.id === currentSelection.mold);
        moldName = moldData?.name || 'Custom Mold';
    }
    
    const item = {
        mold: moldName,
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
        moldCategory: null,
        color: null,
        colorVariant: null,
        scent: null,
        glitter: null,
        beads: null,
        isCardstock: false
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

// Show custom design request form in center of screen
function showCustomDesignForm() {
    const overlay = document.createElement('div');
    overlay.className = 'form-overlay';
    overlay.innerHTML = `
        <div class="form-modal">
            <div class="form-header">
                <h3>Custom Design Request</h3>
                <button class="close-form" onclick="closeForm()">&times;</button>
            </div>
            <div class="form-body">
                <p style="text-align: center; color: #666; margin-bottom: 25px;">
                    Tell us about your custom design idea and we'll create a personalized proof for you!
                </p>
                
                <form id="customDesignForm" onsubmit="submitCustomDesignRequest(event)">
                    <div class="form-group">
                        <label for="customerName">Your Name *</label>
                        <input type="text" id="customerName" name="customerName" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="customerEmail">Email Address *</label>
                        <input type="email" id="customerEmail" name="customerEmail" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="customerPhone">Phone Number (optional)</label>
                        <input type="tel" id="customerPhone" name="customerPhone">
                    </div>
                    
                    <div class="form-group">
                        <label for="designDescription">Design Description *</label>
                        <textarea id="designDescription" name="designDescription" rows="6" 
                                  placeholder="Please describe your design idea in detail. Include colors, text, themes, or reference any sample numbers from the gallery above." 
                                  required></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="quantity">Estimated Quantity</label>
                        <input type="number" id="quantity" name="quantity" min="1" placeholder="How many would you like?">
                    </div>
                    
                    <div class="form-group">
                        <label for="deadline">Needed By Date (optional)</label>
                        <input type="date" id="deadline" name="deadline">
                    </div>
                    
                    <div style="text-align: center; margin-top: 25px;">
                        <button type="submit" class="btn primary" style="padding: 12px 40px; font-size: 16px;">
                            Submit Request
                        </button>
                        <button type="button" class="btn secondary" onclick="closeForm()" style="padding: 12px 40px; font-size: 16px; margin-left: 15px;">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
}

// Show upload form in center of screen
function showUploadForm() {
    const overlay = document.createElement('div');
    overlay.className = 'form-overlay';
    overlay.innerHTML = `
        <div class="form-modal">
            <div class="form-header">
                <h3>Upload Your Own Design</h3>
                <button class="close-form" onclick="closeForm()">&times;</button>
            </div>
            <div class="form-body">
                <div style="background: #fff3cd; padding: 15px; border-radius: 10px; margin-bottom: 25px; border: 1px solid #ffc107;">
                    <strong>📋 File Requirements:</strong>
                    <ul style="margin-top: 10px; padding-left: 20px; font-size: 14px;">
                        <li>Format: PNG, JPG, PDF, or AI (vector preferred)</li>
                        <li>Resolution: Minimum 300 DPI</li>
                        <li>Color Mode: RGB or CMYK</li>
                        <li>Include 0.125" bleed if possible</li>
                    </ul>
                </div>
                
                <form id="uploadDesignForm" onsubmit="submitUploadRequest(event)">
                    <div class="form-group">
                        <label for="uploadName">Your Name *</label>
                        <input type="text" id="uploadName" name="uploadName" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="uploadEmail">Email Address *</label>
                        <input type="email" id="uploadEmail" name="uploadEmail" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="uploadPhone">Phone Number (optional)</label>
                        <input type="tel" id="uploadPhone" name="uploadPhone">
                    </div>
                    
                    <div class="form-group">
                        <label for="designFile">Upload Design File *</label>
                        <input type="file" id="designFile" name="designFile" 
                               accept=".png,.jpg,.jpeg,.pdf,.ai,.psd" 
                               required
                               style="padding: 10px; border: 2px dashed #667eea; border-radius: 8px; background: #f8f9fa;">
                        <small style="display: block; margin-top: 5px; color: #666;">
                            Accepted formats: PNG, JPG, PDF, AI, PSD (Max 25MB)
                        </small>
                    </div>
                    
                    <div class="form-group">
                        <label for="uploadQuantity">Estimated Quantity</label>
                        <input type="number" id="uploadQuantity" name="uploadQuantity" min="1" placeholder="How many would you like?">
                    </div>
                    
                    <div class="form-group">
                        <label for="uploadNotes">Additional Notes</label>
                        <textarea id="uploadNotes" name="uploadNotes" rows="4" 
                                  placeholder="Any special instructions or details about your design..."></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="uploadDeadline">Needed By Date (optional)</label>
                        <input type="date" id="uploadDeadline" name="uploadDeadline">
                    </div>
                    
                    <div style="text-align: center; margin-top: 25px;">
                        <button type="submit" class="btn primary" style="padding: 12px 40px; font-size: 16px;">
                            Submit Upload Request
                        </button>
                        <button type="button" class="btn secondary" onclick="closeForm()" style="padding: 12px 40px; font-size: 16px; margin-left: 15px;">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
}

// Close form overlay
function closeForm() {
    const overlay = document.querySelector('.form-overlay');
    if (overlay) {
        overlay.remove();
        document.body.style.overflow = 'auto';
    }
}

// Submit custom design request
function submitCustomDesignRequest(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // Create email body
    const emailBody = `
Custom Design Request

Name: ${data.customerName}
Email: ${data.customerEmail}
Phone: ${data.customerPhone || 'Not provided'}

Design Description:
${data.designDescription}

Quantity: ${data.quantity || 'Not specified'}
Needed By: ${data.deadline || 'No deadline specified'}
    `.trim();
    
    // Open email client with pre-filled information
    const subject = 'Custom Cardstock Design Request';
    const mailtoLink = `mailto:airfreshiesbycolleen@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Opening your email client... Please send the email to complete your request!');
    closeForm();
}

// Submit upload request
function submitUploadRequest(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const file = formData.get('designFile');
    
    // Check file size (25MB limit)
    if (file.size > 25 * 1024 * 1024) {
        alert('File size exceeds 25MB. Please compress your file or contact us directly.');
        return;
    }
    
    const data = Object.fromEntries(formData.entries());
    
    // Create email body
    const emailBody = `
Design Upload Request

Name: ${data.uploadName}
Email: ${data.uploadEmail}
Phone: ${data.uploadPhone || 'Not provided'}

File Name: ${file.name}
File Size: ${(file.size / 1024 / 1024).toFixed(2)}MB

Quantity: ${data.uploadQuantity || 'Not specified'}
Needed By: ${data.uploadDeadline || 'No deadline specified'}

Additional Notes:
${data.uploadNotes || 'None'}

Please find the design file attached to this email.
    `.trim();
    
    // Open email client
    const subject = 'Design Upload Request - Cardstock Air Freshener';
    const mailtoLink = `mailto:airfreshiesbycolleen@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;
    
    // Show instruction
    alert('Opening your email client...\n\nIMPORTANT: Please attach your design file (' + file.name + ') to the email before sending!');
    closeForm();
}