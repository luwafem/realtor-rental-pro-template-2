import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { siteConfig } from '../config'
import { useEffect, useState } from 'react'

const PropertyDetail = () => {
  const { id } = useParams()
  const [property, setProperty] = useState(null)

  useEffect(() => {
    const found = siteConfig.properties.find(p => p.id === id)
    setProperty(found)
    window.scrollTo(0, 0)
  }, [id])

  if (!property) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center text-gray-900 p-6">
        <p className="text-blue-900/60 tracking-widest uppercase text-xs mb-8 font-light">Estate not found</p>
        <Link to="/properties" className="border border-blue-900/30 px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.3em] hover:bg-blue-900 hover:text-white transition-all">
          Return to Collection
        </Link>
      </div>
    )
  }

  const whatsappMessage = encodeURIComponent(`Hello, I am interested in ${property.name} (${property.location}). Could you provide a private briefing?`)
  const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappMessage}`

  return (
    <div className="bg-white text-gray-900 min-h-screen pb-24">
      <Helmet>
        <title>{property.name} | {siteConfig.companyName}</title>
        <meta name="description" content={property.description.substring(0, 160)} />
      </Helmet>

      {/* Header / Breadcrumb */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/properties" className="text-[10px] uppercase tracking-[0.4em] text-blue-900/60 hover:text-blue-900 transition-colors mb-8 inline-block">
            &larr; Back to Listings
          </Link>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Visuals - Large Cinematic Image */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-7"
            >
              <div className="relative group overflow-hidden rounded-[40px] border border-blue-900/20 shadow-sm">
                <img 
                  src={property.image} 
                  alt={property.name} 
                  className="w-full aspect-[4/5] object-cover transition-transform duration-[2s] group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Information Sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-5 space-y-12"
            >
              <div>
                <span className="text-[10px] tracking-[0.5em] uppercase text-blue-900/60 mb-4 block">
                  {property.type} • {property.location}
                </span>
                <h1 className="text-4xl md:text-6xl font-extralight tracking-tighter mb-6 leading-none text-gray-900">
                  {property.name}
                </h1>
                <p className="text-2xl font-extralight italic text-blue-900/90 tracking-tight">
                  {property.price}
                </p>
              </div>

              {/* Technical Grid */}
              <div className="grid grid-cols-3 gap-8 py-8 border-y border-blue-900/20">
                <div className="space-y-1">
                  <p className="text-[9px] uppercase tracking-widest text-blue-900/40 font-bold">Bedrooms</p>
                  <p className="text-lg font-light text-gray-700">{property.bedrooms || '—'}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] uppercase tracking-widest text-blue-900/40 font-bold">Bathrooms</p>
                  <p className="text-lg font-light text-gray-700">{property.bathrooms || '—'}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] uppercase tracking-widest text-blue-900/40 font-bold">Square Ft</p>
                  <p className="text-lg font-light text-gray-700">{property.area}</p>
                </div>
              </div>

              <div>
                <h3 className="text-[10px] tracking-[0.3em] uppercase text-blue-900/60 mb-6 font-bold">The Description</h3>
                <p className="text-gray-700 font-light leading-relaxed italic text-lg">
                  {property.description}
                </p>
              </div>

              <div>
                <h3 className="text-[10px] tracking-[0.3em] uppercase text-blue-900/60 mb-6 font-bold">Key Amenities</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
                  {property.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs tracking-wide text-gray-700 uppercase font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-900/40 mr-4" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Refined CTA Group */}
              <div className="flex flex-col gap-4 pt-8">
                <Link to="/contact" className="w-full bg-blue-900 text-white py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.3em] text-center hover:bg-blue-800 transition-all shadow-sm">
                  Inquire Privately
                </Link>
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full border border-blue-900/30 text-gray-900 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.3em] text-center hover:bg-blue-900/10 transition-all"
                >
                  WhatsApp Concierge
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PropertyDetail