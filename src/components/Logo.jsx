import { motion } from 'framer-motion'

export default function Logo({ className = "h-8 w-auto", animate = false, compact = false }) {
  // Compact version for navbar - text-based approach
  if (compact) {
    const compactContent = (
      <div className={`flex items-center space-x-2 ${className}`}>
        <div className="flex flex-col">
          <span className="font-serif font-bold text-xl leading-none">
            Levity
          </span>
          <span className="text-xs opacity-75 leading-none -mt-1">
            Breakfast House
          </span>
        </div>
        {/* House icon */}
        <svg
          viewBox="0 0 100 60"
          fill="currentColor"
          className="h-6 w-9"
        >
          {/* House roof */}
          <path d="M10,35 L50,15 L90,35 L90,30 L50,10 L10,30 Z"/>
          {/* House body */}
          <rect x="15" y="35" width="70" height="25"/>
          {/* Chimney */}
          <rect x="70" y="20" width="8" height="20"/>
          {/* Door */}
          <rect x="45" y="45" width="10" height="15"/>
          {/* Left window */}
          <rect x="25" y="40" width="8" height="8"/>
          {/* Right window */}
          <rect x="67" y="40" width="8" height="8"/>
        </svg>
      </div>
    )

    if (animate) {
      return (
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {compactContent}
        </motion.div>
      )
    }

    return compactContent
  }

  // Full logo version - text-based approach for reliability
  const logoContent = (
    <div className={`flex flex-col items-center space-y-2 ${className}`}>
      {/* Main LEVITY text */}
      <div className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider text-center">
        Levity
      </div>

      {/* House icon */}
      <div className="flex justify-center">
        <svg
          viewBox="0 0 100 60"
          fill="currentColor"
          className="h-8 w-12 sm:h-10 sm:w-16 md:h-12 md:w-18"
        >
          {/* House roof */}
          <path d="M10,35 L50,15 L90,35 L90,30 L50,10 L10,30 Z"/>
          {/* House body */}
          <rect x="15" y="35" width="70" height="25"/>
          {/* Chimney */}
          <rect x="70" y="20" width="8" height="20"/>
          {/* Door */}
          <rect x="45" y="45" width="10" height="15"/>
          {/* Left window */}
          <rect x="25" y="40" width="8" height="8"/>
          {/* Right window */}
          <rect x="67" y="40" width="8" height="8"/>
        </svg>
      </div>

      {/* BREAKFAST text */}
      <div className="font-sans text-lg sm:text-xl md:text-2xl tracking-widest font-normal">
        BREAKFAST
      </div>

      {/* HOUSE text */}
      <div className="font-sans text-sm sm:text-base md:text-lg tracking-wide font-normal">
        • HOUSE •
      </div>
    </div>
  )

  if (animate) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {logoContent}
      </motion.div>
    )
  }

  return logoContent
}
