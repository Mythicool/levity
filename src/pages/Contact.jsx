import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Mail, Instagram, Facebook, Navigation } from 'lucide-react'
import { restaurantInfo } from '../data/restaurant'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Contact() {
  const handleDirections = () => {
    const address = encodeURIComponent(restaurantInfo.contact.address)
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank')
  }

  const handleCall = () => {
    window.location.href = `tel:${restaurantInfo.contact.phone}`
  }

  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-cream-100 to-coffee-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-5xl font-bold text-coffee-800 mb-4">
              Visit Us
            </h1>
            <p className="text-xl text-coffee-600 max-w-2xl mx-auto">
              Come experience the charm of our historic breakfast house in Downtown Norman
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              <motion.div variants={fadeInUp}>
                <div className="bg-cream-50 border border-coffee-200 hover:shadow-lg transition-shadow duration-300 rounded-lg p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-coffee-600 rounded-full">
                      <MapPin className="h-6 w-6 text-cream-50" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-coffee-800 mb-2">
                        Location
                      </h3>
                      <p className="text-coffee-600 mb-4">
                        {restaurantInfo.contact.address}
                      </p>
                      <button
                        onClick={handleDirections}
                        className="border-2 border-coffee-600 text-coffee-600 hover:bg-coffee-600 hover:text-cream-50 px-4 py-2 rounded-md transition-colors duration-200 flex items-center"
                      >
                        <Navigation className="mr-2 h-4 w-4" />
                        Get Directions
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="bg-cream-50 border border-coffee-200 hover:shadow-lg transition-shadow duration-300 rounded-lg p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-coffee-600 rounded-full">
                      <Phone className="h-6 w-6 text-cream-50" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-coffee-800 mb-2">
                        Phone
                      </h3>
                      <p className="text-coffee-600 mb-4">
                        {restaurantInfo.contact.phone}
                      </p>
                      <button
                        onClick={handleCall}
                        className="border-2 border-coffee-600 text-coffee-600 hover:bg-coffee-600 hover:text-cream-50 px-4 py-2 rounded-md transition-colors duration-200 flex items-center"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="bg-cream-50 border border-coffee-200 hover:shadow-lg transition-shadow duration-300 rounded-lg p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-coffee-600 rounded-full">
                      <Mail className="h-6 w-6 text-cream-50" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-coffee-800 mb-2">
                        Email
                      </h3>
                      <p className="text-coffee-600">
                        {restaurantInfo.contact.email}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Hours and Social */}
            <div className="space-y-6">
              <motion.div variants={fadeInUp}>
                <div className="bg-coffee-600 text-cream-50 rounded-lg p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-cream-50/20 rounded-full">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-4">
                        Hours of Operation
                      </h3>
                      <div className="space-y-2">
                        {Object.entries(restaurantInfo.hours).map(([day, hours]) => (
                          <div key={day} className="flex justify-between items-center">
                            <span className="capitalize font-medium">
                              {day}
                            </span>
                            <span className={hours === "Closed" ? "text-cream-300" : ""}>
                              {hours}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="bg-cream-50 border border-coffee-200 rounded-lg p-8">
                  <h3 className="font-semibold text-lg text-coffee-800 mb-4">
                    Follow Us
                  </h3>
                  <p className="text-coffee-600 mb-6">
                    Stay updated with our latest offerings and special events
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href={restaurantInfo.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-coffee-600 text-coffee-600 hover:bg-coffee-600 hover:text-cream-50 px-4 py-2 rounded-md transition-colors duration-200 flex items-center"
                    >
                      <Instagram className="mr-2 h-4 w-4" />
                      Instagram
                    </a>
                    <a
                      href={restaurantInfo.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-coffee-600 text-coffee-600 hover:bg-coffee-600 hover:text-cream-50 px-4 py-2 rounded-md transition-colors duration-200 flex items-center"
                    >
                      <Facebook className="mr-2 h-4 w-4" />
                      Facebook
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="bg-coffee-100 border border-coffee-200 rounded-lg p-8 text-center">
                  <h3 className="font-semibold text-lg text-coffee-800 mb-3">
                    Find Our Home
                  </h3>
                  <p className="text-coffee-600 text-sm leading-relaxed">
                    Look for the century-old house with the welcoming front porch and the aroma of fresh coffee
                    drifting from the windows. You'll know you've found us when you see the vintage charm that
                    makes every visitor feel like they're coming home to family breakfast.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 bg-coffee-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-serif text-3xl font-bold text-coffee-800 mb-8">
              Find Us in Historic Downtown Norman
            </h2>
            <div className="bg-coffee-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-coffee-700">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-sm">309 S Peters Ave, Norman, OK 73069</p>
                <button
                  onClick={handleDirections}
                  className="mt-4 bg-coffee-600 text-cream-50 hover:bg-coffee-700 px-6 py-2 rounded-md transition-colors duration-200"
                >
                  Open in Google Maps
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
