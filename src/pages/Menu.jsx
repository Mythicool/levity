import { motion } from 'framer-motion'
import { Coffee, Utensils, Droplets, Sandwich, Pizza, Plus, Baby } from 'lucide-react'
import { menuCategories } from '../data/restaurant'

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

const categoryIcons = {
  breakfast: Utensils,
  coffee: Coffee,
  lunch: Sandwich,
  minitacos: Pizza,
  sides: Plus,
  beverages: Droplets,
  kids: Baby
}

export default function Menu() {
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
              Our Menu
            </h1>
            <p className="text-xl text-coffee-600 max-w-2xl mx-auto">
              Every dish tells the story of two brothers who brought Portland's breakfast dreams to Norman's heart.
              Made from scratch with love, served with a smile that's genuine as Oklahoma sunshine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-16"
          >
            {Object.entries(menuCategories).map(([key, category]) => {
              const IconComponent = categoryIcons[key] || Utensils

              return (
                <motion.div key={key} variants={fadeInUp}>
                  <div className="bg-cream-50 border border-coffee-200 shadow-lg rounded-lg overflow-hidden">
                    <div className="bg-coffee-600 text-cream-50 p-8">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-cream-50/20 rounded-full">
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <div>
                          <h2 className="font-serif text-3xl font-bold">
                            {category.name}
                          </h2>
                          <p className="text-cream-200 mt-1">
                            {category.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {category.items.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                          >
                            <div className="flex justify-between items-start space-x-4 p-4 rounded-lg hover:bg-coffee-50 transition-colors duration-200">
                              <div className="flex-1">
                                <h3 className="font-semibold text-lg text-coffee-800 group-hover:text-coffee-900 transition-colors">
                                  {item.name}
                                </h3>
                                <p className="text-coffee-600 mt-1 text-sm leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                              <div className="flex-shrink-0">
                                <span className="font-bold text-lg text-coffee-700">
                                  {item.price}
                                </span>
                              </div>
                            </div>
                            {index < category.items.length - 1 && (
                              <div className="my-2 h-px bg-coffee-200" />
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
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
              Come Be Part of Our Story
            </h2>
            <p className="text-cream-200 text-lg">
              Pull up a chair at our family table. In this century-old home, every meal is a memory
              waiting to happen, and every guest becomes part of the Levity family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-cream-200">
              <div className="flex items-center space-x-2">
                <Coffee className="h-5 w-5" />
                <span>Fresh Daily</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-cream-300"></div>
              <div className="flex items-center space-x-2">
                <Utensils className="h-5 w-5" />
                <span>Made from Scratch</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-cream-300"></div>
              <div className="flex items-center space-x-2">
                <span>7AM - 2PM Daily</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
