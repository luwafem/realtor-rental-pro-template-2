import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import Testimonial from '../components/Testimonial'
import { siteConfig } from '../config'
import { Link } from 'react-router-dom'
import PropertyCard from '../components/PropertyCard'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
}

const Home = () => {
  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      <Helmet>
        <title>{siteConfig.meta.title}</title>
        <meta name="description" content={siteConfig.meta.description} />
      </Helmet>

      <Hero />

      {/* Services Section */}
      <section className="relative py-24 sm:py-32 px-6">
        <motion.div {...fadeInUp} className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-[10px] tracking-[0.5em] uppercase text-blue-900/60 mb-4 block font-bold">
                Our Expertise
              </span>
              <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-gray-900">
                Professional <span className="italic text-blue-900">Services</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="text-[10px] tracking-[0.3em] uppercase border-b border-gray-300 pb-1 hover:border-blue-900 transition-all font-light text-gray-600"
            >
              View All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {siteConfig.services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Properties Preview Section */}
      {siteConfig.properties && siteConfig.properties.length > 0 && (
        <section className="py-24 px-6 border-y border-gray-200 bg-gray-50">
          <motion.div {...fadeInUp} className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-[10px] tracking-[0.5em] uppercase text-blue-900/60 mb-4 block font-bold">
                Featured Properties
              </span>
              <h2 className="text-4xl md:text-5xl font-extralight tracking-tighter mb-6 italic text-gray-900">
                Prime <span className="not-italic text-blue-900">Listings</span> in Old GRA, New GRA & Trans Amadi
              </h2>
              <p className="text-gray-500 font-light max-w-xl mx-auto text-sm leading-relaxed">
                Discover residential homes, commercial spaces, and land for sale or rent in Port Harcourt's most desirable neighborhoods.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {siteConfig.properties.slice(0, 3).map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/properties"
                className="text-[10px] tracking-[0.3em] uppercase border border-blue-900/30 px-10 py-4 rounded-full hover:bg-blue-900 hover:text-white transition-all duration-500 font-bold text-blue-900"
              >
                View All Properties
              </Link>
            </div>
          </motion.div>
        </section>
      )}

      {/* Testimonials */}
      {siteConfig.testimonials.length > 0 && (
        <section className="py-32 px-6">
          <motion.div {...fadeInUp} className="max-w-5xl mx-auto text-center">
            <span className="text-[10px] tracking-[0.5em] uppercase text-blue-900/60 mb-8 block font-bold">
              Client Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-extralight italic mb-20 text-gray-800 leading-relaxed">
              What our clients say about <br className="hidden md:block" /> working with us.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              {siteConfig.testimonials.map(t => (
                <Testimonial key={t.id} testimonial={t} />
              ))}
            </div>
          </motion.div>
        </section>
      )}

    </div>
  )
}

export default Home