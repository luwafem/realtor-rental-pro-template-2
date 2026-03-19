import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import PropertyCard from '../components/PropertyCard'
import { siteConfig } from '../config'

const Properties = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Helmet>
        <title>Properties in Old GRA, New GRA & Trans Amadi | {siteConfig.companyName}</title>
        <meta name="description" content="Explore our curated selection of residential and commercial properties for sale and rent in Old GRA, New GRA, Trans Amadi, and across Port Harcourt." />
      </Helmet>

      {/* Gallery Header */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="max-w-4xl">
            <span className="text-[10px] tracking-[0.5em] uppercase text-blue-900/60 mb-6 block font-bold">Featured Properties</span>
            <h1 className="text-5xl md:text-8xl font-extralight tracking-tighter leading-none mb-10 text-gray-900">
              The Port Harcourt <br /> <span className="italic text-blue-900">Portfolio.</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-8 items-start justify-between border-t border-blue-900/20 pt-10">
              <p className="text-gray-600 font-light max-w-lg leading-relaxed italic">
                A handpicked selection of premium properties across Port Harcourt's most desirable neighborhoods from Old GRA to New GRA, Trans Amadi, and beyond.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-[9px] uppercase tracking-widest text-blue-900/40 font-bold">Available Listings:</span>
                <span className="text-2xl font-extralight italic text-blue-900">{siteConfig.properties.length}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Property Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10"
          >
            {siteConfig.properties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer-CTA for the Catalog */}
      <section className="py-24 px-6 border-t border-blue-900/20 bg-gradient-to-b from-transparent to-blue-900/[0.02]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-blue-900/60 mb-8 font-bold">Looking for something specific?</p>
          <h2 className="text-3xl md:text-4xl font-extralight italic mb-12 text-gray-800">
            Let us help you find <br className="hidden md:block" /> your perfect property in Port Harcourt
          </h2>
          <div className="flex flex-col items-center gap-6">
            <a 
              href={`mailto:${siteConfig.email}`}
              className="text-[10px] uppercase tracking-[0.4em] text-blue-900 border-b border-blue-900/30 pb-2 hover:border-blue-900 transition-all font-bold"
            >
              Request a Private Viewing
            </a>
            <p className="text-[9px] text-blue-900/30 tracking-widest uppercase italic">No Obligation Consultation</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Properties