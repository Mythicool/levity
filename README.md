# Levity Breakfast House Website

A modern, responsive website for Levity Breakfast House - a charming breakfast restaurant in Historic Downtown Norman, Oklahoma.

## Features

- **Modern React + Vite Setup**: Fast development and optimized builds
- **HeroUI Component Library**: Beautiful, accessible UI components
- **ShadCN UI Integration**: Additional utility components
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile
- **Warm Color Palette**: Cozy breakfast house aesthetic with cream and coffee tones
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Technology Stack

- **Frontend Framework**: React 18 with Vite
- **UI Libraries**: HeroUI + ShadCN UI components
- **Styling**: Tailwind CSS with custom color palette
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # ShadCN UI components
│   ├── Navbar.jsx      # Navigation component
│   └── Footer.jsx      # Footer component
├── pages/              # Page components
│   ├── Home.jsx        # Homepage with hero section
│   ├── Menu.jsx        # Menu page with categories
│   ├── About.jsx       # About page with restaurant story
│   └── Contact.jsx     # Contact page with location info
├── data/               # Static data
│   └── restaurant.js   # Restaurant information and menu data
├── lib/                # Utility functions
│   └── utils.js        # Helper functions
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles and Tailwind imports
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Restaurant Information

**Levity Breakfast House**
- **Location**: 309 S Peters Ave, Norman, OK 73069
- **Phone**: (405) 256-2136
- **Hours**: 7AM-2PM Daily (Closed Tuesdays)
- **Email**: Contact@levitybreakfast.com
- **Theme**: "Portland roots, Norman flavor"

### About the Restaurant

Levity Breakfast House opened in February 2024, fulfilling the childhood dream of brothers Jon and Mark Hunnell from Portland, Oregon. Located in a beautifully restored 104-year-old home in Historic Downtown Norman, the restaurant combines 1920's charm with modern comfort.

The restaurant specializes in scratch-made breakfast items, bringing Pacific Northwest breakfast culture and coffee traditions to Oklahoma with warm hospitality.

## Design System

### Color Palette

- **Cream**: Light, warm background tones (#fefdf8 to #775724)
- **Coffee**: Rich brown accent colors (#f7f3f0 to #453126)
- **Warm Brown**: Secondary brown tones for depth

### Typography

- **Headings**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)

### Key Design Elements

- Warm, inviting color scheme
- Smooth animations and transitions
- Card-based layouts
- Responsive grid systems
- Accessible navigation
- Mobile-first design approach

## Pages Overview

### Homepage
- Hero section with restaurant branding
- Quick info cards (hours, location, fresh daily)
- Features section highlighting restaurant values
- Call-to-action buttons

### Menu
- Organized by categories (Breakfast, Coffee, Beverages)
- Item descriptions and pricing
- Responsive card layouts
- Visual hierarchy with icons

### About
- Restaurant story and history
- Values and mission
- Information about the historic building
- Owners' background

### Contact
- Location and contact information
- Hours of operation
- Social media links
- Interactive elements for calling and directions

## Customization

### Updating Restaurant Information

Edit the `src/data/restaurant.js` file to update:
- Contact information
- Hours of operation
- Menu items and pricing
- Social media links
- Restaurant story details

### Styling Modifications

The color palette can be customized in `tailwind.config.js`:
- Update the `cream`, `coffee`, and `warmBrown` color scales
- Modify the HeroUI theme configuration
- Adjust typography settings

## Deployment

This project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Traditional Web Hosting**: Upload the `dist` folder contents

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly across devices
5. Submit a pull request

## License

This project is created for Levity Breakfast House. All rights reserved.

## Support

For technical support or questions about the website, please contact the development team.

---

**Built with ❤️ for Levity Breakfast House**
