import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ServiceCard = ({ service }) => {
  const { id, title, shortDesc, image, price } = service

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col bg-white border border-gray-200 overflow-hidden rounded-3xl transition-all duration-700 hover:border-blue-900/30 hover:shadow-md"
    >
      <Link to={`/services/${id}`} className="block h-full">
        {/* Image Container with Ken Burns-style Zoom */}
        <div className="relative h-72 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" 
          />
          {/* Light scrim overlay for readability */}
          
          {/* Subtle Price/Guidance Badge - Blue Accent */}
          <div className="absolute top-6 right-6">
            <span className="text-[9px] tracking-[0.3em] uppercase text-blue-900 bg-white/90 backdrop-blur-md px-3 py-1.5 border border-blue-900/20 rounded-full font-bold shadow-sm">
              {price.includes('₦') ? price : `₦${price}`}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8 flex flex-col flex-grow">
          <span className="text-[8px] tracking-[0.4em] uppercase text-blue-900/60 mb-3 font-bold">
            Our Expertise
          </span>
          <h3 className="text-2xl font-extralight tracking-tighter text-gray-900 mb-4 group-hover:text-blue-900/90 transition-all duration-500">
            {title}
          </h3>

          <p className="text-sm leading-relaxed text-gray-600 font-light mb-10 line-clamp-3 italic">
            {shortDesc}
          </p>

          {/* Clean, Minimalist Navigation - Blue */}
          <div className="mt-auto flex items-center justify-between group/link">
            <span className="text-[10px] uppercase tracking-[0.3em] text-blue-900/60 group-hover/link:text-blue-900 transition-colors">
              View Capabilities
            </span>
            <div className="relative overflow-hidden w-5 h-5">
              <span className="absolute inset-0 text-blue-900 transition-transform duration-500 translate-x-0 group-hover/link:translate-x-6">
                →
              </span>
              <span className="absolute inset-0 text-blue-900 transition-transform duration-500 -translate-x-6 group-hover/link:translate-x-0">
                →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ServiceCard