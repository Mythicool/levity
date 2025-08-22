import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Coffee, Clock, MapPin, Star, Utensils, Heart } from 'lucide-react'
import { restaurantInfo } from '../data/restaurant'
import Logo from '../components/Logo'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
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

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 hero-pattern opacity-30"></div>
        
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-50/90 via-cream-100/80 to-coffee-100/70"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="flex justify-center">
                <Logo className="w-full max-w-sm sm:max-w-md md:max-w-lg" />
              </div>
              <p className="text-xl sm:text-2xl text-coffee-700 font-medium">
                {restaurantInfo.tagline}
              </p>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-lg text-coffee-600 leading-relaxed"
            >
              Step into our 104-year-old home where brothers Jon and Mark have woven Portland's breakfast magic
              into Norman's heart. Every creaky floorboard whispers stories, every scratch-made dish carries
              love from our kitchen to your table, and every cup of coffee connects you to our family's dream
              of creating something beautiful together.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/menu"
                className="bg-coffee-600 text-cream-50 hover:bg-coffee-700 font-semibold px-8 py-3 rounded-md transition-colors duration-200 flex items-center"
              >
                <Utensils className="mr-2 h-5 w-5" />
                View Our Menu
              </Link>
              <Link
                to="/contact"
                className="border-2 border-coffee-600 text-coffee-600 hover:bg-coffee-600 hover:text-cream-50 font-semibold px-8 py-3 rounded-md transition-colors duration-200 flex items-center"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Visit Us
              </Link>
            </motion.div>

            {/* Quick Info Cards */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mt-12"
            >
              <div className="bg-cream-50/80 backdrop-blur-sm border border-coffee-200 rounded-lg p-6 text-center">
                <Clock className="h-8 w-8 text-coffee-600 mx-auto mb-3" />
                <h3 className="font-semibold text-coffee-800 mb-1">Hours</h3>
                <p className="text-coffee-600 text-sm">7AM-2PM Daily</p>
                <p className="text-coffee-600 text-sm">Closed Tuesdays</p>
              </div>

              <div className="bg-cream-50/80 backdrop-blur-sm border border-coffee-200 rounded-lg p-6 text-center">
                <MapPin className="h-8 w-8 text-coffee-600 mx-auto mb-3" />
                <h3 className="font-semibold text-coffee-800 mb-1">Location</h3>
                <p className="text-coffee-600 text-sm">309 S Peters Ave</p>
                <p className="text-coffee-600 text-sm">Norman, OK</p>
              </div>

              <div className="bg-cream-50/80 backdrop-blur-sm border border-coffee-200 rounded-lg p-6 text-center">
                <Coffee className="h-8 w-8 text-coffee-600 mx-auto mb-3" />
                <h3 className="font-semibold text-coffee-800 mb-1">Fresh</h3>
                <p className="text-coffee-600 text-sm">Scratch-made</p>
                <p className="text-coffee-600 text-sm">Daily</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-coffee-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-coffee-600 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl font-bold text-coffee-800 mb-4">
              Why Choose Levity?
            </h2>
            <p className="text-lg text-coffee-600 max-w-2xl mx-auto">
              We make many of our items from scratch and offer a wide variety of options 
              for every kind of breakfast lover out there.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Brothers' Kitchen",
                description: "Jon and Mark pour their hearts into every scratch-made dish, from hand-rolled scones to perfectly spiced Portland Porridge, because great food starts with genuine care."
              },
              {
                icon: Star,
                title: "Century-Old Stories",
                description: "Our 1920's home has witnessed a century of Norman life. Now it's your turn to add your story to these walls while savoring breakfast in rooms filled with history."
              },
              {
                icon: Coffee,
                title: "Pacific Northwest Soul",
                description: "We brought Portland's coffee obsession and breakfast artistry 1,200 miles south, creating a unique blend of West Coast creativity and Oklahoma warmth."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-full bg-cream-50 border border-coffee-200 hover:shadow-lg transition-shadow duration-300 rounded-lg p-8 text-center">
                  <feature.icon className="h-12 w-12 text-coffee-600 mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-semibold text-coffee-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-coffee-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
