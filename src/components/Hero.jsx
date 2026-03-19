import { siteConfig } from '../config'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Hero = () => {
  const { title, subtitle, backgroundImage, ctaText, ctaLink } = siteConfig.hero

  return (
    <section className="relative w-full h-svh overflow-hidden flex items-center justify-center px-6">
      {/* Background - Cinematic Scale Effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }} 
        className="absolute inset-0 z-0"
      >
        <img 
          src={backgroundImage} 
          alt="Prime Real Estate" 
          className="w-full h-full object-cover" 
          loading="eager"
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-5 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.2\'/%3E%3C/svg%3E")' }} />
      </motion.div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          {/* Elegant top label */}
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-white/70 mb-4 md:mb-6 font-light"
          >
            Ozi Tech Properties • Port Harcourt
          </motion.span>

          <h1 className="text-5xl sm:text-7xl md:text-9xl font-extralight tracking-tighter text-white mb-6 leading-[0.85] max-w-5xl">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed tracking-wide italic">
            {subtitle}
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <Link 
              to={ctaLink} 
              className="relative px-10 sm:px-14 py-5 sm:py-6 overflow-hidden rounded-full bg-blue-900 text-white transition-all duration-700 group flex items-center gap-3 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10 text-[10px] sm:text-[11px] font-bold tracking-[0.3em] uppercase">
                {ctaText}
              </span>
              {/* Refined button hover effect - lighter blue slide */}
              <div className="absolute inset-0 w-full h-full bg-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </motion.div>

          {/* Decorative element: subtle floating line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-32 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-12 bg-white/20" />
              <span className="text-[8px] tracking-[0.4em] uppercase text-white/40 font-light">Explore</span>
              <span className="h-[1px] w-12 bg-white/20" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Aesthetic Scroll Anchor - adjusted for mobile */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: [-40, 80] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white/80"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero