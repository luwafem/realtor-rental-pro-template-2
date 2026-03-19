import { Link } from 'react-router-dom'
import { siteConfig } from '../config'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const links = {
    navigation: [
      { name: 'Home', path: '/' },
      { name: 'Properties', path: '/properties' },
      { name: 'Services', path: '/services' },
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' },
    ],
    contact: [
      { name: 'WhatsApp', detail: 'Chat with us', href: `https://wa.me/${siteConfig.whatsappNumber}` },
      { name: 'Call', detail: siteConfig.phone, href: `tel:${siteConfig.phone}` },
      { name: 'Email', detail: siteConfig.email, href: `mailto:${siteConfig.email}` },
    ]
  }

  return (
    <footer className="bg-gray-50 border-t border-blue-900/20 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-20">
          
          {/* Brand Identity Section */}
          <div className="md:col-span-4 flex flex-col space-y-6">
            <Link to="/" className="group inline-block">
              <img 
                src={siteConfig.logo} 
                alt={siteConfig.companyName} 
                className="h-8 w-auto mb-4 opacity-80 group-hover:opacity-100 transition-opacity" 
              />
              <p className="text-[10px] tracking-[0.5em] uppercase text-blue-900 font-bold">
                {siteConfig.companyName}
              </p>
            </Link>
            <p className="text-gray-600 text-sm font-light leading-relaxed max-w-xs italic">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-blue-900/60 mb-8 font-bold">Quick Links</h4>
            <ul className="space-y-4">
              {links.navigation.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-xs tracking-widest text-gray-600 hover:text-blue-900 transition-colors uppercase">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-blue-900/60 mb-8 font-bold">Contact</h4>
            <ul className="space-y-4">
              {links.contact.map((item) => (
                <li key={item.name} className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest text-blue-900/40 mb-1">{item.name}</span>
                  <a href={item.href} className="text-xs tracking-widest text-gray-700 hover:text-blue-900 transition-colors uppercase font-light">
                    {item.detail}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Geographic Note */}
          <div className="md:col-span-3 md:text-right flex flex-col md:items-end">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-blue-900/60 mb-8 font-bold">Connect</h4>
            <div className="flex space-x-6">
              {Object.keys(siteConfig.social).map((platform) => (
                <a 
                  key={platform}
                  href={siteConfig.social[platform]} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-900/40 hover:text-blue-900 transition-all transform hover:-translate-y-1"
                >
                  <span className="sr-only">{platform}</span>
                  <div className="w-5 h-5 rounded-full border border-current flex items-center justify-center p-1">
                    <div className="w-1 h-1 bg-current rounded-full" />
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-12 md:mt-auto">
              <span className="text-[9px] tracking-[0.4em] uppercase text-blue-900/30 italic">
                Old GRA &bull; New GRA &bull; Trans Amadi &bull; Port Harcourt
              </span>
            </div>
          </div>
        </div>

        {/* Final Copyright & Regulatory Line */}
        <div className="border-t border-blue-900/20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-light">
              &copy; {currentYear} {siteConfig.companyName}. All rights reserved.
            </p>
            <p className="text-[8px] tracking-[0.1em] text-blue-900/20 uppercase">
              Licensed Real Estate Agent in Port Harcourt, Nigeria.
            </p>
          </div>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-[9px] uppercase tracking-widest text-blue-900/40 hover:text-blue-900 transition-colors font-bold">Privacy</Link>
            <Link to="/terms" className="text-[9px] uppercase tracking-widest text-blue-900/40 hover:text-blue-900 transition-colors font-bold">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer