import { motion } from 'framer-motion'
import { Heart, Home, Users, Award, Coffee, MapPin } from 'lucide-react'
import { restaurantInfo } from '../data/restaurant'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function About() {
  return (
    <div className="min-h-screen bg-cream-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cream-100 to-coffee-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-serif text-5xl font-bold text-coffee-800 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-coffee-600 max-w-3xl mx-auto leading-relaxed">
              {restaurantInfo.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-serif text-3xl font-bold text-coffee-800">
                Portland Roots, Norman Flavor
              </h2>
              <div className="space-y-4 text-coffee-600 leading-relaxed">
                <p>
                  It started with Saturday mornings in Portland. Brothers Jon and Mark Hunnell would spend hours
                  at their favorite breakfast spots, dreaming over steaming cups of coffee about someday creating
                  their own place where people could gather, laugh, and start their days with something special.
                  That childhood dream became reality in February 2024 when Levity Breakfast House opened its doors
                  in Historic Downtown Norman.
                </p>
                <p>
                  The moment they stepped into the 104-year-old home on Peters Avenue, they knew they'd found something
                  magical. Built in 1920, this house had sheltered generations of Norman families, and now it would
                  become a gathering place for the community. The brothers lovingly restored every room, preserving
                  the original hardwood floors, vintage fixtures, and architectural details that whisper stories of
                  the past while creating space for new memories.
                </p>
                <p>
                  Every morning, Jon and Mark arrive before dawn to hand-roll scones, crack fresh eggs, and brew the
                  first pot of coffee. They brought Portland's obsession with quality ingredients and scratch-made
                  everything, but they've learned that Norman's secret ingredient is the warmth of genuine hospitality.
                  Here, strangers become friends over shared tables, and every plate that leaves the kitchen carries
                  a piece of their hearts.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-coffee-200 to-coffee-300 rounded-2xl flex items-center justify-center">
                <div className="text-center text-coffee-700">
                  <Home className="h-24 w-24 mx-auto mb-4" />
                  <p className="text-lg font-medium">Historic 1920's Building</p>
                  <p className="text-sm">Beautifully Restored</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-coffee-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl font-bold text-coffee-800 mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-coffee-600 max-w-2xl mx-auto">
              Our values guide everything we do, from the ingredients we choose 
              to the atmosphere we create.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Heart,
                title: "Family Recipes, Fresh Start",
                description: "Jon's grandmother's scone recipe meets Mark's Portland coffee expertise. Every morning, we honor the past while creating something entirely new."
              },
              {
                icon: Users,
                title: "Norman's Living Room",
                description: "This century-old home has always been about bringing people together. Now it's where OU students study over coffee, families celebrate birthdays, and neighbors catch up over weekend brunch."
              },
              {
                icon: Award,
                title: "Portland Standards, Oklahoma Heart",
                description: "We source our coffee beans from Portland roasters, our eggs from local farms, and our hospitality from the genuine warmth that makes Norman special."
              },
              {
                icon: Coffee,
                title: "Craft & Tradition",
                description: "Bringing Pacific Northwest coffee culture and breakfast traditions to Oklahoma with authentic flavors."
              },
              {
                icon: Home,
                title: "Cozy Atmosphere",
                description: "Our 1920's charm creates a warm, inviting space where every guest feels like family."
              },
              {
                icon: MapPin,
                title: "Local Pride",
                description: "Supporting local suppliers and being an active part of the Norman community we love."
              }
            ].map((value, index) => (
              <motion.div key={value.title} variants={fadeInUp}>
                <div className="h-full bg-cream-50 border border-coffee-200 hover:shadow-lg transition-shadow duration-300 rounded-lg p-6 text-center">
                  <value.icon className="h-12 w-12 text-coffee-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg text-coffee-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-coffee-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-coffee-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-serif text-3xl font-bold text-cream-50">
              Come Experience Our Story
            </h2>
            <p className="text-cream-200 text-lg">
              Visit us at our historic location in Downtown Norman and become part of the Levity family.
            </p>
            <div className="text-cream-200">
              <p className="font-medium">{restaurantInfo.contact.address}</p>
              <p>Open 7AM-2PM Daily (Closed Tuesdays)</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
