import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { siteConfig } from '../config'

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Helmet>
        <title>About Anu | {siteConfig.companyName}</title>
        <meta name="description" content={`Learn about ${siteConfig.companyName} your trusted landlady across Nigeria. We are committed to helping you find the perfect property with care and professionalism.`} />
      </Helmet>

      {/* Narrative Header */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="max-w-4xl">
            <span className="text-[10px] tracking-[0.5em] uppercase text-blue-900/60 mb-6 block font-bold">Our Story</span>
            <h1 className="text-5xl md:text-8xl font-extralight tracking-tighter leading-[0.9] mb-12 text-gray-900">
              Your Trusted <br /> <span className="italic text-blue-900">Landlady.</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-7">
                <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700 italic">
                  {siteConfig.companyName} started with a simple belief: finding a home should feel personal, not transactional. I’m Anu, and I’ve built this brand to offer honest, caring, and professional real estate services to people across Nigeria from Lagos to Ilorin, Ibadan, and beyond.
                </p>
              </div>
              <div className="md:col-span-5 flex flex-col gap-6 pt-2">
                 <div className="h-[1px] w-full bg-blue-900/20" />
                 <p className="text-sm font-light text-gray-500 leading-relaxed uppercase tracking-widest">
                    Lagos • Ilorin • Ibadan • More <br /> Est. 2018 • Client First
                 </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values - Focus on Trust */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp} className="space-y-12">
              <div>
                <h2 className="text-[10px] tracking-[0.4em] uppercase text-blue-900/60 mb-6 font-bold">My Promise</h2>
                <p className="text-3xl font-extralight tracking-tight leading-snug text-gray-900">
                  To offer <span className="italic">transparent, reliable,</span> and <span className="italic">heartfelt</span> real estate guidance helping you navigate Nigeria's property market with confidence and a smile.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-extralight italic mb-2 tracking-tighter text-blue-900">₦3B+</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-blue-900/40">Properties Managed</p>
                </div>
                <div>
                  <p className="text-4xl font-extralight italic mb-2 tracking-tighter text-blue-900">800+</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-blue-900/40">Happy Clients</p>
                </div>
              </div>
            </motion.div>

            {/* Why Choose Anu - Pillars of Trust */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Personal Touch", desc: "I'm not a faceless agency I'm Anu, your landlady. You get direct access and genuine care." },
                { title: "Wide Network", desc: "From Lagos to Ilorin, I've built trusted relationships with agents, lawyers, and inspectors to serve you better." },
                { title: "Hassle Free", desc: "I handle the stress tenant sourcing, maintenance, paperwork so you can relax." },
                { title: "Local Expertise", desc: "I know the neighborhoods, the prices, and the hidden gems. You get insider knowledge." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 border border-blue-900/20 bg-white rounded-2xl hover:border-blue-900/40 transition-colors shadow-sm"
                >
                  <h4 className="text-[11px] tracking-[0.3em] uppercase text-blue-900 mb-3 font-bold">{item.title}</h4>
                  <p className="text-xs text-gray-600 font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophical Closer */}
      <section className="py-32 px-6">
        <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-extralight italic mb-8 leading-relaxed text-gray-800">
            A home is where your story begins. Whether you're renting, buying, or letting, I'm here to walk with you every step of the way.
          </h3>
          <div className="w-12 h-[1px] bg-blue-900/30 mx-auto mb-8" />
          <p className="text-sm text-gray-600 font-light leading-relaxed max-w-xl mx-auto">
            At {siteConfig.companyName}, you're not just a client you're family. From the bustling streets of Lagos to the calm of Ibadan and the vibrant energy of Ilorin, I'm dedicated to making your property journey smooth, safe, and personal. Let's find your next home together.
          </p>
        </motion.div>
      </section>
    </div>
  )
}

export default About