import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const PropertyCard = ({ property }) => {
  const { id, name, type, bedrooms, bathrooms, area, location, price, image, features } = property

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm transition-all duration-500 hover:border-blue-900/30 hover:shadow-md"
    >
      <Link to={`/properties/${id}`}>
        {/* Image Container with Zoom Effect */}
        <div className="relative h-72 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          
          {/* Price Tag - with blue accent */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md border border-blue-900/20 px-4 py-2 rounded-full shadow-sm">
            <span className="text-[11px] tracking-widest text-blue-900 font-light">{price}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="mb-6">
            <span className="text-[9px] uppercase tracking-[0.3em] text-blue-900/60 mb-2 block italic">
              {type} • {location}
            </span>
            <h3 className="text-xl font-extralight tracking-tight text-gray-900 group-hover:text-blue-900/90 transition-colors">
              {name}
            </h3>
          </div>

          {/* Technical Specs - with subtle blue dividers */}
          <div className="flex items-center gap-4 border-y border-gray-200 py-4 mb-6">
            <div className="flex flex-col">
              <span className="text-[8px] uppercase tracking-tighter text-blue-900/40">Beds</span>
              <span className="text-xs text-gray-600 font-light">{bedrooms || '—'}</span>
            </div>
            <div className="w-[1px] h-4 bg-blue-900/20" />
            <div className="flex flex-col">
              <span className="text-[8px] uppercase tracking-tighter text-blue-900/40">Baths</span>
              <span className="text-xs text-gray-600 font-light">{bathrooms || '—'}</span>
            </div>
            <div className="w-[1px] h-4 bg-blue-900/20" />
            <div className="flex flex-col">
              <span className="text-[8px] uppercase tracking-tighter text-blue-900/40">Sq Ft</span>
              <span className="text-xs text-gray-600 font-light">{area}</span>
            </div>
          </div>

          {/* Features Preview */}
          <div className="flex flex-wrap gap-2 mb-8">
            {features.slice(0, 2).map((f, idx) => (
              <span 
                key={idx} 
                className="text-[9px] uppercase tracking-widest px-3 py-1 border border-blue-900/20 rounded-full text-blue-900/60"
              >
                {f}
              </span>
            ))}
            {features.length > 2 && (
              <span className="text-[9px] uppercase tracking-widest px-3 py-1 text-blue-900/40 italic">
                +{features.length - 2} more
              </span>
            )}
          </div>

          {/* Action */}
          <div className="flex items-center justify-between group/link w-full text-[10px] uppercase tracking-[0.3em] text-blue-900 font-bold">
            <span>View Details</span>
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default PropertyCard