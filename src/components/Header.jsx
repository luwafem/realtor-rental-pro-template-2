import { Link, useLocation } from 'react-router-dom'
import { siteConfig } from '../config'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  // Determine if we're on the homepage and not scrolled (hero with dark overlay)
  const isHomeTop = location.pathname === '/' && !scrolled

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-xl py-3 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="group flex items-center space-x-3">
          <img 
            src={siteConfig.logo} 
            alt={siteConfig.companyName} 
            className={`h-8 md:h-9 w-auto transition-all duration-300 ${
              isHomeTop ? 'brightness-0 invert' : ''
            }`} 
          />
          <div className="flex flex-col">
            <span className={`text-lg font-extralight tracking-[0.3em] uppercase leading-none transition-colors duration-300 ${
              isHomeTop ? 'text-white' : 'text-gray-900'
            }`}>
              {siteConfig.companyName}
            </span>
            <span className={`text-[7px] tracking-[0.5em] uppercase mt-1.5 font-bold transition-colors duration-300 ${
              isHomeTop ? 'text-white/40' : 'text-blue-900/40'
            }`}>
              Old GRA • New GRA • Trans Amadi • Port Harcourt
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`text-[10px] uppercase tracking-[0.25em] transition-all duration-300 font-medium ${
                location.pathname === link.path 
                  ? 'text-blue-900 border-b border-blue-900/40 pb-1' 
                  : isHomeTop
                    ? 'text-white/70 hover:text-white'
                    : 'text-gray-600 hover:text-blue-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className={`px-8 py-2.5 border rounded-full text-[9px] uppercase tracking-[0.3em] font-bold transition-all duration-500 ${
              isHomeTop
                ? 'border-white/30 bg-transparent text-white hover:bg-white hover:text-blue-900'
                : 'border-blue-900/30 bg-blue-900 text-white hover:bg-transparent hover:text-blue-900'
            }`}
          >
            Enquire
          </Link>
        </nav>

        {/* Mobile Menu Trigger */}
        <button 
          className={`md:hidden relative z-50 p-2 transition-colors duration-300 ${
            isHomeTop ? 'text-white' : 'text-gray-900'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex flex-col gap-2 w-6">
            <span className={`h-[1px] w-full bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
            <span className={`h-[1px] w-full bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'tween', duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-white z-40 md:hidden flex flex-col justify-center px-12"
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 p-2 text-gray-900 hover:text-blue-900 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <nav className="flex flex-col space-y-10">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  key={link.path}
                >
                  <Link 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    className="text-5xl font-extralight tracking-tighter text-gray-900 italic hover:text-blue-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <div className="mt-20 pt-10 border-t border-blue-900/20">
              <p className="text-[10px] tracking-[0.4em] uppercase text-blue-900/60 mb-6 font-bold">Contact Our Team</p>
              <p className="text-xl text-gray-900 font-light tracking-widest">{siteConfig.phone}</p>
              <div className="mt-8 flex gap-6">
                <span className="text-[10px] uppercase tracking-widest text-blue-900/40">Old GRA</span>
                <span className="text-[10px] uppercase tracking-widest text-blue-900/40">New GRA</span>
                <span className="text-[10px] uppercase tracking-widest text-blue-900/40">Trans Amadi</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header