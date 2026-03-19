import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import ServiceCard from '../components/ServiceCard'
import { siteConfig } from '../config'

const Services = () => {
  // Animation variants for the grid items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Our Services | {siteConfig.companyName}</title>
        <meta name="description" content="Property management, rentals, and sales across Lagos, Ilorin, Ibadan, and beyond. Personal, honest service from Anu the Landlady your trusted partner in Nigerian real estate." />
      </Helmet>

      {/* Header Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-blue-900/20 pb-12"
          >
            <div className="max-w-2xl">
              <span className="text-[10px] tracking-[0.5em] uppercase text-blue-900/60 mb-4 block font-bold">
                What I Offer
              </span>
              <h1 className="text-5xl md:text-7xl font-extralight tracking-tighter text-gray-900 leading-none">
                My <span className="italic text-blue-900">Services</span>
              </h1>
            </div>
            <div className="hidden md:block">
              <p className="text-[10px] uppercase tracking-[0.3em] text-blue-900/40 font-bold italic">
                Lagos &bull; Ilorin &bull; Ibadan &bull; More
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16"
          >
            {siteConfig.services.map(service => (
              <motion.div 
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final Touch: Minimalist Contact Invitation */}
      <section className="py-24 border-t border-blue-900/20 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-2xl font-extralight tracking-tight text-gray-900 mb-6 italic">
            Need a hand with your property?
          </h2>
          <p className="text-gray-600 font-light text-sm mb-10 leading-relaxed max-w-xl mx-auto">
            Whether you're looking for a rental in Lagos, need a trustworthy tenant in Ibadan, or want to buy your first home in Ilorin I'm here to help. No stress, just honest support.
          </p>
          <motion.a 
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block text-[11px] uppercase tracking-[0.3em] text-blue-900 border border-blue-900/30 px-10 py-4 rounded-full hover:bg-blue-900 hover:text-white transition-all duration-500 font-bold"
          >
            Get in Touch
          </motion.a>
        </div>
      </section>
    </div>
  )
}

export default Services