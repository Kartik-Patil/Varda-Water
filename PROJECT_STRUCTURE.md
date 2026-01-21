# VARDA Water - Project Documentation

## 🌊 Project Overview

VARDA is a modern, responsive website for a bottled drinking water brand built with React and Vite. The project features a clean, professional design with comprehensive routing and reusable components.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to view the site in development mode.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
varda-water/
├── public/                      # Static assets
├── src/
│   ├── assets/                  # Images, icons, logos
│   ├── components/              # React components
│   │   ├── common/              # Reusable UI components
│   │   │   ├── Button.jsx       # Customizable button component
│   │   │   ├── Button.css
│   │   │   ├── Card.jsx         # Card container component
│   │   │   └── Card.css
│   │   └── layout/              # Layout components
│   │       ├── Navbar.jsx       # Navigation bar with mobile menu
│   │       ├── Navbar.css
│   │       ├── Footer.jsx       # Footer with links and social media
│   │       ├── Footer.css
│   │       ├── Layout.jsx       # Main layout wrapper
│   │       └── Layout.css
│   ├── pages/                   # Page components
│   │   ├── Home.jsx             # Landing page
│   │   ├── About.jsx            # About Us page
│   │   ├── Products.jsx         # Products catalog
│   │   ├── Quality.jsx          # Water quality & purification
│   │   ├── Distribution.jsx     # Distribution & business info
│   │   ├── Sustainability.jsx   # Sustainability initiatives
│   │   ├── Contact.jsx          # Contact form and info
│   │   ├── PrivacyPolicy.jsx    # Privacy policy
│   │   └── TermsAndConditions.jsx # Terms and conditions
│   ├── styles/                  # Global styles
│   │   └── pages.css            # Page-specific styles
│   ├── utils/                   # Utility functions (for future use)
│   ├── App.jsx                  # Main app component with routing
│   ├── App.css                  # App-level styles
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global CSS variables and reset
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🛣️ Routing Structure

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page with hero section |
| `/about` | About | Company information and values |
| `/products` | Products | Product catalog and details |
| `/quality` | Quality | Water purification process |
| `/distribution` | Distribution | Distribution network and partnerships |
| `/sustainability` | Sustainability | Environmental initiatives |
| `/contact` | Contact | Contact form and information |
| `/privacy-policy` | PrivacyPolicy | Privacy policy details |
| `/terms-and-conditions` | TermsAndConditions | Terms and conditions |

## 🧩 Reusable Components

### Button Component

A flexible button component with multiple variants and sizes.

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' (default: 'primary')
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `onClick`: Function to handle click events
- `type`: 'button' | 'submit' | 'reset' (default: 'button')
- `disabled`: Boolean (default: false)
- `className`: Additional CSS classes

**Usage:**
```jsx
import Button from './components/common/Button';

<Button variant="primary" size="large" onClick={handleClick}>
  Click Me
</Button>
```

### Card Component

A card container for displaying content with optional hover effects.

**Props:**
- `className`: Additional CSS classes
- `onClick`: Function to handle click events
- `hover`: Boolean - enables hover animation (default: false)

**Usage:**
```jsx
import Card from './components/common/Card';

<Card hover={true} className="custom-class">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

### Layout Component

Wrapper component that includes Navbar and Footer.

**Usage:**
```jsx
import Layout from './components/layout/Layout';

<Layout>
  <YourPageContent />
</Layout>
```

### Navbar Component

Responsive navigation bar with mobile hamburger menu.

- Desktop: Horizontal menu
- Mobile: Collapsible hamburger menu
- Active link highlighting
- Smooth transitions

### Footer Component

Footer with multiple sections:
- Company description
- Quick links
- Support links
- Social media icons
- Contact information

## 🎨 Styling

### CSS Organization

- **index.css**: Global styles, CSS variables, and reset
- **App.css**: App-level utility classes
- **pages.css**: Page-specific styles
- **Component CSS**: Individual CSS files for each component

### CSS Variables

Defined in `index.css`:
```css
--primary-color: #0066cc
--primary-dark: #0052a3
--secondary-color: #4da6ff
--accent-color: #00bfff
--text-dark: #1a1a2e
--text-medium: #333
--text-light: #666
--bg-light: #f8f9fa
```

## 📱 Responsive Design

The project is fully responsive with breakpoints at:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Technologies Used

- **React 19.2.0** - UI library
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features
- **ES6+** - Modern JavaScript

## 🌟 Features

- ✅ Client-side routing with React Router
- ✅ Responsive design for all devices
- ✅ Reusable component library
- ✅ Clean and maintainable code structure
- ✅ Modern UI with smooth animations
- ✅ SEO-friendly page structure
- ✅ Accessible navigation
- ✅ Mobile-friendly hamburger menu

## 🚧 Future Enhancements

- Add product images and gallery
- Implement contact form backend
- Add animation library (Framer Motion)
- Integrate with CMS for content management
- Add internationalization (i18n)
- Implement SEO metadata
- Add analytics tracking
- Create admin dashboard

## 📝 Development Guidelines

### Adding a New Page

1. Create page component in `src/pages/`
2. Import and add route in `App.jsx`
3. Add navigation link in `Navbar.jsx` (if needed)
4. Add footer link in `Footer.jsx` (if applicable)
5. Add page-specific styles to `pages.css`

### Creating New Components

1. Create component file in appropriate folder
2. Create accompanying CSS file
3. Export component as default
4. Import CSS in component file

## 📄 License

This project is private and proprietary.

## 👥 Contact

For questions or support, contact: info@vardawater.com

---

Built with ❤️ using React and Vite
