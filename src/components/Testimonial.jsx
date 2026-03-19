import { motion } from 'framer-motion'

const Testimonial = ({ testimonial }) => {
  const { name, role, content, rating } = testimonial

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative p-10 lg:p-14 bg-white border border-blue-900/20 rounded-3xl shadow-sm flex flex-col items-center text-center"
    >
      {/* Subtle Quote Icon - can be added later if needed */}

      {/* Modern Rating - Minimalist Dots */}

      <blockquote className="relative z-10 mb-10">
        <p className="text-lg md:text-xl font-extralight leading-relaxed text-gray-700 italic tracking-wide">
          {content}
        </p>
      </blockquote>

      <div className="mt-auto">
        <p className="text-[11px] uppercase tracking-[0.4em] text-blue-900 mb-2 font-bold">
          {name}
        </p>
      </div>
    </motion.div>
  )
}

export default Testimonial