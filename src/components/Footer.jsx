import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react'
import { restaurantInfo } from '../data/restaurant'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-coffee-800 text-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Logo className="h-12 text-cream-50" animate={true} compact={true} />
            </div>
            <p className="text-cream-200 text-sm leading-relaxed">
              {restaurantInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Menu', path: '/menu' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-cream-200 hover:text-cream-50 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-cream-300 mt-0.5 flex-shrink-0" />
                <span className="text-cream-200 text-sm">
                  {restaurantInfo.contact.address}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cream-300 flex-shrink-0" />
                <span className="text-cream-200 text-sm">
                  {restaurantInfo.contact.phone}
                </span>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-cream-300 flex-shrink-0" />
                <div className="text-cream-200 text-sm">
                  <div>Mon, Wed-Sun: 7AM-2PM</div>
                  <div>Tuesday: Closed</div>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <h4 className="font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <motion.a
                  href={restaurantInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-cream-100/10 rounded-full hover:bg-cream-100/20 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href={restaurantInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-cream-100/10 rounded-full hover:bg-cream-100/20 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream-100/20 mt-8 pt-8 text-center">
          <p className="text-cream-300 text-sm">
            © {currentYear} Levity Breakfast House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
