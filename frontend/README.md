# Évora - E-Commerce Frontend

A modern, responsive React-based e-commerce frontend for the Évora vintage print and design marketplace.

## 🎨 Features

### ✅ Implemented Features

#### Authentication & User Management

- **User Registration & Login** - Secure authentication with JWT tokens
- **Profile Management** - View and update user information
- **Address Management** - Save and manage shipping addresses
- **Account Security** - Password management and security settings

#### Product Browsing

- **Product Listing** - Browse all products with pagination
- **Product Details** - Detailed product information with images, descriptions, and reviews
- **Search Functionality** - Search products by keyword
- **Filter & Sort** - Filter by category, price range, and more
- **Product Categories** - Browse products by categories

#### Shopping Experience

- **Shopping Cart** - Add/remove items, update quantities
- **Persistent Cart** - Cart data saved in localStorage
- **Wishlist** - Mark products as favorites (UI ready)
- **Quick Add** - Add products to cart directly from listing

#### Checkout & Orders

- **Checkout Process** - Multi-step checkout with shipping and billing info
- **Order Confirmation** - Order success confirmation with order ID
- **Order History** - View past orders with status and details
- **Order Tracking** - Track order status and delivery information

#### UI/UX Features

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Modern Navigation** - Sticky navbar with search and user menu
- **Footer** - Links, social media, and newsletter signup
- **Loading States** - Proper loading indicators
- **Error Handling** - User-friendly error messages
- **Animations** - Smooth transitions and hover effects

## 📁 Project Structure

```
frontend/
├── public/
│   └── index.html              # Main HTML file
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.js       # Navigation bar component
│   │   │   └── Footer.js       # Footer component
│   │   ├── ProductCard.js      # Reusable product card component
│   │   ├── FilterSidebar.js    # Product filter sidebar
│   │   ├── PrivateRoute.js     # Protected route wrapper
│   │   └── styles/
│   │       ├── Navbar.css
│   │       ├── Footer.css
│   │       ├── ProductCard.css
│   │       └── FilterSidebar.css
│   │
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── ProductListingPage.js
│   │   ├── ProductDetailsPage.js
│   │   ├── CartPage.js
│   │   ├── CheckoutPage.js
│   │   ├── OrderHistoryPage.js
│   │   ├── ProfilePage.js
│   │   ├── auth/
│   │   │   ├── LoginPage.js
│   │   │   └── RegisterPage.js
│   │   └── styles/
│   │       ├── HomePage.css
│   │       ├── ProductListingPage.css
│   │       ├── ProductDetailsPage.css
│   │       ├── CartPage.css
│   │       ├── CheckoutPage.css
│   │       ├── OrderHistoryPage.css
│   │       ├── ProfilePage.css
│   │       └── AuthPages.css
│   │
│   ├── context/
│   │   ├── AuthContext.js      # Authentication context
│   │   └── CartContext.js      # Shopping cart context
│   │
│   ├── services/
│   │   ├── authService.js      # Authentication API calls
│   │   ├── productService.js   # Product API calls
│   │   └── orderService.js     # Order API calls
│   │
│   ├── styles/
│   │   ├── globals.css         # Global styles and CSS variables
│   │   └── App.css             # Main app styles
│   │
│   ├── App.js                  # Main app component
│   ├── index.js                # React entry point
│
├── .env                        # Environment variables
├── .gitignore                  # Git ignore file
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Install Dependencies**

   ```bash
   cd frontend
   npm install
   ```

2. **Configure Environment Variables**

   ```bash
   # Create .env file with the following:
   REACT_APP_API_URL=http://localhost:8080/api
   ```

3. **Start Development Server**

   ```bash
   npm start
   ```

   The app will open at `http://localhost:3000`

4. **Build for Production**
   ```bash
   npm run build
   ```

## 🔌 API Integration

The frontend communicates with the Spring Boot backend through RESTful APIs. Update the `REACT_APP_API_URL` in `.env` to match your backend server.

### Required Backend Endpoints

**Authentication:**

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/verify` - Token verification
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update profile

**Products:**

- `GET /api/products` - Get products with pagination
- `GET /api/products/:id` - Get product details
- `GET /api/products/search` - Search products
- `GET /api/categories` - Get all categories
- `GET /api/products/featured` - Get featured products

**Orders:**

- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get order details
- `POST /api/orders/:id/cancel` - Cancel order

## 🎯 Pages Overview

### Public Pages

- **HomePage** - Featured products, categories, promotions
- **LoginPage** - User login form
- **RegisterPage** - User registration form
- **ProductListingPage** - Browse all products with filters
- **ProductDetailsPage** - Detailed product view

### Protected Pages (Requires Login)

- **CartPage** - View shopping cart items
- **CheckoutPage** - Complete purchase
- **OrderHistoryPage** - View past orders
- **ProfilePage** - Manage user profile

## 🎨 Design System

The application uses a custom CSS design system with retro/vintage aesthetic:

### Color Palette

- **Primary**: `#F7A399` (Coral)
- **Secondary**: `#248277` (Teal)
- **Accent**: `#FFE3E0` (Light Pink)
- **Text Dark**: `#333333`
- **Text Light**: `#666666`
- **Background**: `#f9f7f4`

### CSS Variables

All colors, spacing, and typography are defined as CSS variables in `styles/globals.css` for easy customization.

## 🔐 State Management

### Context APIs Used

**AuthContext** (`context/AuthContext.js`)

- Manages user authentication state
- Handles login/register/logout
- Stores user information
- Provides loading and error states

**CartContext** (`context/CartContext.js`)

- Manages shopping cart state
- Handles add/remove/update cart items
- Persists cart to localStorage
- Calculates totals and item counts

## 📱 Responsive Design

The application is fully responsive with breakpoints for:

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🚀 Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from create-react-app (not reversible)

## 🔄 Data Flow

1. **User Authentication**
   - User registers/logs in
   - JWT token stored in localStorage
   - Token passed in API request headers
   - AuthContext manages logged-in state

2. **Shopping Flow**
   - User browses products
   - Adds items to cart (stored in CartContext & localStorage)
   - Views cart and proceeds to checkout
   - Completes order creation
   - Views order history

3. **API Communication**
   - Axios interceptor automatically adds authentication token
   - API errors handled gracefully
   - Loading states managed in components

## 🎓 Key Technologies

- **React** - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **Context API** - State management
- **CSS3** - Styling and animations
- **React Icons** - Icon library

## 📝 Environment Variables

```env
# API Configuration
REACT_APP_API_URL=http://localhost:8080/api

# Environment
REACT_APP_ENV=development

# App Name
REACT_APP_NAME=Évora
```

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/AmazingFeature`)
2. Commit changes (`git commit -m 'Add AmazingFeature'`)
3. Push to branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 👥 Team

- **Member 1**: Frontend & user-facing features

## 📞 Support

For issues or questions, please contact the development team.

---

**Built with ❤️ for Évora E-Commerce**
