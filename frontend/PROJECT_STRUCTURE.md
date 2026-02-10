# Évora Frontend - Project Setup Guide

## 📋 Complete File Structure

```
frontend/
│
├── public/
│   └── index.html                 # Main HTML file
│
├── src/
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.js
│   │   │   └── Footer.js
│   │   ├── ProductCard.js
│   │   ├── FilterSidebar.js
│   │   ├── PrivateRoute.js
│   │   └── styles/
│   │       ├── Navbar.css
│   │       ├── Footer.css
│   │       ├── ProductCard.css
│   │       └── FilterSidebar.css
│   │
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── LoginPage.js
│   │   │   └── RegisterPage.js
│   │   ├── HomePage.js
│   │   ├── ProductListingPage.js
│   │   ├── ProductDetailsPage.js
│   │   ├── CartPage.js
│   │   ├── CheckoutPage.js
│   │   ├── OrderHistoryPage.js
│   │   ├── ProfilePage.js
│   │   └── styles/
│   │       ├── AuthPages.css
│   │       ├── HomePage.css
│   │       ├── ProductListingPage.css
│   │       ├── ProductDetailsPage.css
│   │       ├── CartPage.css
│   │       ├── CheckoutPage.css
│   │       ├── OrderHistoryPage.css
│   │       └── ProfilePage.css
│   │
│   ├── context/
│   │   ├── AuthContext.js
│   │   └── CartContext.js
│   │
│   ├── services/
│   │   ├── authService.js
│   │   ├── productService.js
│   │   └── orderService.js
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   └── App.css
│   │
│   ├── App.js
│   └── index.js
│
├── .env
├── .gitignore
├── package.json
├── README.md
└── PROJECT_STRUCTURE.md           # This file

```

## 🚦 Quick Start

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Start Development Server

```bash
npm start
```

### 3. Access the Application

Open your browser and navigate to: http://localhost:3000

## 📚 File Descriptions

### Pages (9 main pages)

1. **LoginPage.js** - User authentication login
   - Email validation
   - Password input
   - Social login options
   - Registration link

2. **RegisterPage.js** - New user registration
   - Form validation
   - Password confirmation
   - Terms acceptance
   - Login redirect

3. **HomePage.js** - Landing page
   - Hero banner
   - Featured products carousel
   - Category browsing
   - Newsletter signup
   - Trust badges

4. **ProductListingPage.js** - Product browse
   - Grid display with filters
   - Category filtering
   - Price range filtering
   - Sort options
   - Pagination support

5. **ProductDetailsPage.js** - Single product view
   - Multiple image gallery
   - Product information
   - Ratings and reviews
   - Add to cart
   - Related products

6. **CartPage.js** - Shopping cart
   - Item list with quantities
   - Price calculations
   - Remove items
   - Continue shopping
   - Checkout button

7. **CheckoutPage.js** - Checkout process
   - Shipping information
   - Billing address
   - Payment details
   - Order summary
   - Order placement

8. **OrderHistoryPage.js** - User orders
   - List all user orders
   - Filter by status
   - Order tracking
   - Download invoices
   - Reorder button

9. **ProfilePage.js** - User profile management
   - Edit profile information
   - Update address
   - Preferences
   - Security settings
   - Logout

### Components (Reusable)

1. **Navbar.js** - Navigation bar
   - Logo/branding
   - Navigation links
   - Search bar
   - User menu
   - Cart badge
   - Mobile hamburger menu

2. **Footer.js** - Footer information
   - Company info
   - Quick links
   - Customer service
   - Newsletter subscription
   - Social media
   - Copyright

3. **ProductCard.js** - Product display card
   - Product image
   - Product name
   - Price display
   - Rating
   - Quick add to cart
   - Wishlist button

4. **FilterSidebar.js** - Product filters
   - Category selection
   - Price range slider
   - Sort options
   - Stock filter
   - Reset button

5. **PrivateRoute.js** - Protected route wrapper
   - Auth verification
   - Redirect to login if not authenticated
   - Loading state handling

### Context (State Management)

1. **AuthContext.js**
   - User authentication state
   - Login/logout functions
   - User profile data
   - Token management

2. **CartContext.js**
   - Shopping cart items
   - Add/remove/update functions
   - Cart totals
   - LocalStorage persistence

### Services (API Integration)

1. **authService.js** - Authentication API calls
   - User login
   - User registration
   - Token verification
   - Profile management

2. **productService.js** - Product API calls
   - Get all products
   - Get product by ID
   - Search products
   - Get categories
   - Get featured products

3. **orderService.js** - Order API calls
   - Create order
   - Get user orders
   - Get order details
   - Cancel order
   - Track order

### Styles (CSS)

1. **globals.css** - Global styles and CSS variables
   - Color variables
   - Typography
   - Spacing system
   - Border radius
   - Shadows
   - Media queries
   - Animations

2. **App.css** - Main app container styles

3. **Component-specific CSS files** - Individual styling for each component

## 🎨 Customization Guide

### Change Brand Colors

Edit `src/styles/globals.css`:

```css
:root {
  --primary-color: #f7a399; /* Coral */
  --secondary-color: #248277; /* Teal */
  --accent-color: #ffe3e0; /* Light Pink */
}
```

### Change API URL

Edit `.env`:

```env
REACT_APP_API_URL=your-backend-url/api
```

### Add New Page

1. Create new file in `src/pages/`
2. Import in `App.js`
3. Add route:
   ```jsx
   <Route path="/your-path" element={<YourPage />} />
   ```

### Add New Component

1. Create component in `src/components/`
2. Create corresponding CSS file
3. Import and use in pages

## 🔌 Backend Integration

Make sure your Spring Boot backend provides these endpoints:

```
Auth Endpoints:
  POST   /api/auth/login
  POST   /api/auth/register
  POST   /api/auth/logout
  GET    /api/auth/verify
  GET    /api/auth/profile
  PUT    /api/auth/profile

Product Endpoints:
  GET    /api/products
  GET    /api/products/:id
  GET    /api/products/search
  GET    /api/categories
  GET    /api/products/featured

Order Endpoints:
  POST   /api/orders
  GET    /api/orders
  GET    /api/orders/:id
  POST   /api/orders/:id/cancel
  GET    /api/orders/:id/status
```

## 📦 Dependencies

- react@^18.2.0
- react-dom@^18.2.0
- react-router-dom@^6.8.0
- axios@^1.3.0
- react-icons@^4.7.1

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `build/` folder.

### Deploy Options

- Netlify
- Vercel
- AWS S3 + CloudFront
- GitHub Pages
- Docker container

## 📱 Features Checklist

### Authentication

- ✅ User Registration
- ✅ User Login
- ✅ Token Storage
- ✅ Auto Login Check
- ✅ Logout

### Product Management

- ✅ Product Listing
- ✅ Product Details
- ✅ Product Search
- ✅ Product Filters
- ✅ Categories

### Shopping

- ✅ Add to Cart
- ✅ Remove from Cart
- ✅ Update Quantity
- ✅ Cart Persistence
- ✅ Cart Totals

### Checkout

- ✅ Shipping Info
- ✅ Billing Address
- ✅ Payment Form
- ✅ Order Creation
- ✅ Order Confirmation

### User Profile

- ✅ View Profile
- ✅ Edit Profile
- ✅ Order History
- ✅ Preferences
- ✅ Security Settings

### UI/UX

- ✅ Responsive Design
- ✅ Loading States
- ✅ Error Messages
- ✅ Animations
- ✅ Dark/Light Compatible

## 🐛 Troubleshooting

### API Calls Not Working

- Check REACT_APP_API_URL in .env
- Ensure backend is running
- Check CORS configuration in backend
- Verify API endpoints exist

### Authentication Issues

- Clear localStorage
- Check token expiration
- Verify token stored in localStorage
- Check auth headers in API calls

### Styling Issues

- Clear browser cache
- Check CSS specificity
- Verify class names match
- Check media queries

## 📞 Support

For issues or new features, contact the development team.

---

**Frontend Application for Évora E-Commerce**
