# Development Guide

## Quick Start

Since Node.js may not be installed on your system, here are alternative ways to run and test the website:

### Option 1: Install Node.js (Recommended)

1. **Download Node.js** from [nodejs.org](https://nodejs.org/)
2. **Install the LTS version** (includes npm)
3. **Verify installation**:
   ```bash
   node --version
   npm --version
   ```
4. **Install dependencies**:
   ```bash
   npm install
   ```
5. **Start development server**:
   ```bash
   npm run dev
   ```

### Option 2: Use Online Development Environment

You can use online IDEs like:
- **CodeSandbox**: Upload the project files
- **StackBlitz**: Import from GitHub
- **Replit**: Create a new React project and copy files

### Option 3: Static File Server

For basic testing without Node.js:
1. Build the project on a system with Node.js
2. Copy the `dist` folder to your web server
3. Serve the files through any HTTP server

## Project Structure Overview

```
levity-breakfast-house/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   ├── Navbar.jsx    # Navigation
│   │   └── Footer.jsx    # Footer
│   ├── pages/            # Page components
│   │   ├── Home.jsx      # Homepage
│   │   ├── Menu.jsx      # Menu page
│   │   ├── About.jsx     # About page
│   │   └── Contact.jsx   # Contact page
│   ├── data/             # Static data
│   ├── lib/              # Utilities
│   ├── App.jsx           # Main app
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS config
└── README.md             # Documentation
```

## Key Features Implemented

### ✅ Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Responsive navigation with mobile menu

### ✅ Modern UI Components
- HeroUI component library integration
- Custom ShadCN UI components
- Consistent design system
- Accessible components

### ✅ Smooth Animations
- Framer Motion integration
- Page transitions
- Hover effects
- Scroll-triggered animations

### ✅ SEO Optimization
- Semantic HTML structure
- Meta tags in index.html
- Proper heading hierarchy
- Alt text for images

### ✅ Performance Optimized
- Vite for fast builds
- Code splitting
- Optimized assets
- Minimal bundle size

## Testing Checklist

### Desktop Testing (1200px+)
- [ ] Navigation bar displays properly
- [ ] Hero section is visually appealing
- [ ] Menu items are well-organized
- [ ] Contact information is clear
- [ ] Footer displays all information

### Tablet Testing (768px - 1199px)
- [ ] Navigation adapts to medium screens
- [ ] Content reflows appropriately
- [ ] Images scale properly
- [ ] Touch targets are adequate

### Mobile Testing (320px - 767px)
- [ ] Mobile menu functions correctly
- [ ] Content is readable without zooming
- [ ] Buttons are easily tappable
- [ ] Forms are usable
- [ ] Performance is acceptable

### Cross-Browser Testing
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge

## Customization Guide

### Updating Restaurant Information

Edit `src/data/restaurant.js`:

```javascript
export const restaurantInfo = {
  name: "Your Restaurant Name",
  contact: {
    phone: "(555) 123-4567",
    address: "123 Main St, City, State 12345"
  },
  // ... other information
}
```

### Modifying Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  cream: {
    50: '#your-color',
    // ... other shades
  }
}
```

### Adding New Pages

1. Create new component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/Navbar.jsx`

## Deployment Options

### Static Hosting (Recommended)
- **Netlify**: Drag and drop `dist` folder
- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Use GitHub Actions

### Traditional Web Hosting
1. Run `npm run build`
2. Upload `dist` folder contents to web server
3. Configure server for SPA routing

## Troubleshooting

### Common Issues

**Build Errors**:
- Ensure all dependencies are installed
- Check for syntax errors in components
- Verify import paths are correct

**Styling Issues**:
- Check Tailwind CSS classes
- Verify HeroUI theme configuration
- Ensure CSS imports are correct

**Routing Issues**:
- Configure server for SPA routing
- Check React Router setup
- Verify route paths

### Getting Help

1. Check the console for error messages
2. Verify all files are in correct locations
3. Ensure dependencies match package.json
4. Test in different browsers

## Performance Tips

- Optimize images before adding them
- Use lazy loading for images
- Minimize custom CSS
- Leverage Vite's built-in optimizations
- Test on slower devices/connections

## Security Considerations

- Validate all user inputs
- Use HTTPS in production
- Keep dependencies updated
- Sanitize any dynamic content
- Follow React security best practices
