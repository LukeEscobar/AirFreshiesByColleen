# AirFreshiesByColleen - Custom Air Freshener E-commerce Website

A modern, responsive e-commerce website for selling custom air fresheners with Square payment integration.

## Features

### 🎨 Product Customization
- **Mold Selection**: Choose from 8 different shapes (car, heart, star, flower, circle, square, diamond, butterfly)
- **Color Options**: 12 popular colors with light, dark, and plain variants
- **Scent Library**: Extensive collection organized by categories:
  - Floral (Rose Garden, Lavender Fields, etc.)
  - Fruity (Strawberry Delight, Tropical Mango, etc.)
  - Fresh (Ocean Breeze, Mountain Air, etc.)
  - Sweet (Vanilla Dream, Cotton Candy, etc.)
  - Exotic (Sandalwood Serenity, Patchouli Paradise, etc.)
- **Glitter Options**: None, Fine (+$2.00), or Chunky (+$3.00)
- **Bead Options**: None, Small (+$2.50), or Large (+$3.50)

### 🛒 Shopping Experience
- **Progressive Customization**: Step-by-step product builder with visual progress
- **Real-time Summary**: Live preview of selections and pricing
- **Shopping Cart**: Persistent cart with local storage
- **Responsive Design**: Mobile-friendly interface

### 💳 Payment Integration
- **Square Integration**: Secure payment processing with Square Web Payments SDK
- **Form Validation**: Client-side validation for shipping and payment information
- **Order Management**: Complete checkout flow with order confirmation

## Technical Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Payment Processing**: Square Web Payments SDK
- **Storage**: Local Storage for cart persistence
- **Styling**: Custom CSS with modern design patterns
- **Fonts**: Google Fonts (Poppins)

## Project Structure

```
AirFreshiesByColleen/
├── index.html              # Landing page
├── customize.html           # Product customization page
├── checkout.html            # Checkout and payment page
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   ├── main.js             # Landing page functionality
│   ├── cart.js             # Shopping cart management
│   ├── customize.js        # Product customization logic
│   └── checkout.js         # Checkout and Square integration
├── images/                 # Product and hero images (placeholders)
├── .github/
│   └── copilot-instructions.md
└── README.md
```

## Setup Instructions

### 1. Square Payment Setup
To enable payment processing, you need to:

1. Create a Square Developer account at https://developer.squareup.com/
2. Create a new application
3. Get your Application ID and Location ID
4. Update the configuration in `js/checkout.js`:
   ```javascript
   const APPLICATION_ID = 'your-actual-application-id';
   const LOCATION_ID = 'your-actual-location-id';
   ```

### 2. Local Development
1. Clone or download the project
2. Open the project folder in VS Code
3. Use a local development server (e.g., Live Server extension)
4. Open `index.html` in your browser

### 3. Adding Product Images
Replace placeholder images in the `/images` directory:
- `hero-air-freshener.jpg` - Main hero image for landing page
- Add mold images for better product visualization

## Customization Options

### Adding New Molds
Edit the `molds` array in `js/customize.js`:
```javascript
molds: [
    { id: 'new-mold', name: 'New Mold Name', price: 0, icon: '🎯' }
]
```

### Adding New Colors
Edit the `colors` array in `js/customize.js`:
```javascript
colors: [
    { id: 'new-color', name: 'New Color', hex: '#hexcode' }
]
```

### Adding New Scents
Edit the `scents` object in `js/customize.js`:
```javascript
scents: {
    category: ['Scent 1', 'Scent 2', 'Scent 3']
}
```

### Pricing Configuration
- Base price: $12.99 (set in `BASE_PRICE` constant)
- Glitter pricing: Fine (+$2.00), Chunky (+$3.00)
- Bead pricing: Small (+$2.50), Large (+$3.50)

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## Security Considerations

1. **Payment Security**: All payment processing is handled by Square's secure servers
2. **Client-side Validation**: Form validation is implemented client-side for UX, but server-side validation should be added
3. **HTTPS Required**: Square payments require HTTPS in production

## Deployment

### For Production:
1. Update Square configuration to use production credentials
2. Enable HTTPS
3. Add server-side payment processing endpoint
4. Add proper error handling and logging
5. Implement inventory management if needed

### Hosting Options:
- **Static Hosting**: Netlify, Vercel, GitHub Pages
- **With Backend**: AWS, Heroku, DigitalOcean

## Development Notes

- The checkout currently uses sandbox mode for Square payments
- Cart data persists in browser local storage
- All pricing calculations are done client-side
- Form validation provides immediate feedback to users
- Responsive design works on mobile and desktop

## Future Enhancements

- User accounts and order history
- Email notifications
- Inventory management
- Admin panel for managing products
- Customer reviews and ratings
- Bulk ordering discounts
- Shipping calculation integration

## Support

For technical support or customization requests, please refer to the code comments and documentation within each file.