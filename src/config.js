export const siteConfig = {
  companyName: 'Ozi Tech Properties',
  tagline: 'Your Tech-Enabled Real Estate Partner in Port Harcourt',
  description: 'A modern real estate agency based in Port Harcourt, specializing in the sale, rental, and management of residential and commercial properties across Old GRA, New GRA, Trans Amadi, and beyond. We combine local expertise with innovative technology to help you find your dream home or make profitable property investments.',
  phone: '+234 812 345 6789',
  whatsappNumber: '2348123456789',
  email: 'info@ozitechproperties.com.ng',
  logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=200&auto=format&fit=crop', // Modern building facade

  hero: {
    title: 'Discover Your Property in Port Harcourt',
    subtitle: 'Expert real estate services in Old GRA, New GRA, and Trans Amadi. Buy, sell, or rent with confidence.',
    backgroundImage: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2070&auto=format&fit=crop', // Generic city skyline (representing Port Harcourt)
    ctaText: 'View Properties',
    ctaLink: '/properties'
  },

  services: [
    {
      id: 'property-sales',
      title: 'Property Sales',
      shortDesc: 'Find your ideal home or investment property in Port Harcourt.',
      description: 'We offer a wide range of residential and commercial properties for sale in prime locations like Old GRA, New GRA, and Trans Amadi. Our team guides you through every step of the purchasing process.',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070&auto=format&fit=crop', // Beautiful house
      price: 'Negotiable',
      features: ['Wide Selection', 'Title Verification', 'Negotiation Support', 'Legal Assistance']
    },
    {
      id: 'rentals',
      title: 'Rental Services',
      shortDesc: 'Quality rental properties in Port Harcourt’s most desirable neighborhoods.',
      description: 'Whether you need a short-term apartment in Rumuola or a long-term family home in Old GRA, we have verified rental options to suit your budget and preferences.',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2070&auto=format&fit=crop', // Modern apartment interior
      price: 'Market Rates',
      features: ['Flexible Terms', 'Maintenance Support', 'Tenant Screening', 'Lease Management']
    },
    {
      id: 'property-management',
      title: 'Property Management',
      shortDesc: 'Hassle-free management for landlords in Port Harcourt.',
      description: 'Let us handle your property worries. From tenant sourcing to rent collection and maintenance, we ensure your investment is well taken care of.',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070&auto=format&fit=crop', // Office building
      price: 'Competitive Rates',
      features: ['Tenant Sourcing', 'Rent Collection', 'Maintenance Coordination', 'Regular Inspections']
    }
  ],

  testimonials: [
    {
      id: 1,
      name: 'Dr. Ibinabo George',
      role: 'Home Buyer',
      content: 'Ozi Tech Properties made my first home purchase in Old GRA seamless and stress-free. Their knowledge of the local market is unmatched, and their digital tools made everything transparent.',
      rating: 5
    },
    {
      id: 2,
      name: 'Chief Amadi Wokoma',
      role: 'Landlord',
      content: 'I have trusted them with managing my properties in Trans Amadi for over two years. Professional, reliable, and always responsive. The online portal for rent collection is a game-changer.',
      rating: 5
    }
  ],

  social: {
    instagram: 'https://instagram.com/ozitechproperties',
    facebook: 'https://facebook.com/ozitechproperties',
    twitter: 'https://twitter.com/ozitechprops',
  },

  properties: [
    {
      id: 'old-gra-5bedroom-detached',
      name: 'Luxury 5-Bedroom Detached Duplex',
      type: 'Residential',
      bedrooms: 5,
      bathrooms: 6,
      area: '650 sqm',
      location: 'Old GRA, Port Harcourt',
      price: '₦380,000,000',
      features: ['Modern Finishes', 'Boys Quarters', 'Parking for 4 Cars', 'Fenced Yard', '24hr Security'],
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop', // Modern duplex
      description: 'A stunning detached duplex in a serene neighborhood of Old GRA. Features spacious living areas, en-suite bedrooms, and a well-equipped kitchen. Close to embassies, schools, and shopping centers.'
    },
    {
      id: 'trans-amadi-commercial-land',
      name: 'Prime Commercial Land',
      type: 'Land',
      bedrooms: 0,
      bathrooms: 0,
      area: '900 sqm',
      location: 'Trans Amadi, Port Harcourt',
      price: '₦280,000,000',
      features: ['High Traffic', 'Ready for Development', 'All Documents Verified', 'Corner Plot'],
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop', // Commercial plot
      description: 'Excellent location in the heart of Trans Amadi, perfect for retail, office, or mixed-use development. With all necessary approvals in place.'
    },
    {
      id: 'rumuola-3bedroom-apartment',
      name: 'Spacious 3-Bedroom Apartment',
      type: 'Residential',
      bedrooms: 3,
      bathrooms: 3,
      area: '240 sqm',
      location: 'Rumuola, Port Harcourt',
      price: '₦85,000,000',
      features: ['Large Compound', 'POP Ceilings', 'Tiled Floors', 'Borehole', 'Estate Security'],
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2070&auto=format&fit=crop', // Bungalow/Apartment
      description: 'Ideal for a growing family. This apartment offers generous living space, a well-maintained garden, and proximity to schools and markets.'
    },
    {
      id: 'new-gra-4bedroom-terrace',
      name: 'Contemporary 4-Bedroom Terrace Duplex',
      type: 'Residential',
      bedrooms: 4,
      bathrooms: 4,
      area: '420 sqm',
      location: 'New GRA, Port Harcourt',
      price: '₦210,000,000',
      features: ['Swimming Pool', 'Smart Home System', 'Staff Quarters', 'Landscaped Garden', '24hr Security'],
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop', // Luxury mansion
      description: 'A masterpiece of contemporary design in the exclusive New GRA. This home features a private swimming pool, state of the art smart home technology, lush gardens, and premium finishes throughout. Perfect for discerning buyers seeking ultimate luxury.'
    },
    {
      id: 'elelenwo-2bedroom-flat',
      name: 'Modern 2-Bedroom Flat',
      type: 'Residential',
      bedrooms: 2,
      bathrooms: 2,
      area: '140 sqm',
      location: 'Elelenwo, Port Harcourt',
      price: '₦45,000,000',
      features: ['Fully Fitted Kitchen', 'Balcony', 'Tiled Floors', 'Estate Security', 'Prepaid Meter'],
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop', // Modern apartment interior
      description: 'A stylish and functional flat perfect for young professionals or small families. Located in a well managed estate with reliable security, close to major shopping centers and public transport.'
    },
    {
      id: 'aba-road-luxury-penthouse',
      name: 'Luxury Penthouse with City View',
      type: 'Residential',
      bedrooms: 4,
      bathrooms: 5,
      area: '450 sqm',
      location: 'Aba Road, Port Harcourt',
      price: '₦300,000,000',
      features: ['Private Rooftop Terrace', 'Jacuzzi', 'Panoramic Views', 'Concierge Service', 'Private Lift'],
      image: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=2070&auto=format&fit=crop', // Penthouse
      description: 'Experience the pinnacle of urban living in this breathtaking penthouse overlooking Port Harcourt city. With a private rooftop terrace, jacuzzi, and world class finishes, it offers an unmatched lifestyle in the heart of the city.'
    },
    {
      id: 'woji-shop-house',
      name: 'Shop House (Commercial + Residential)',
      type: 'Commercial',
      bedrooms: 2,
      bathrooms: 2,
      area: '300 sqm',
      location: 'Woji, Port Harcourt',
      price: '₦150,000,000',
      features: ['Ground Floor Shop', 'Upstairs Living Quarters', 'High Foot Traffic', 'Parking Space'],
      image: 'https://images.unsplash.com/photo-1572025442646-866d16c84a54?q=80&w=2070&auto=format&fit=crop', // Shop house
      description: 'A versatile property combining retail space on the ground floor with comfortable living quarters upstairs. Ideal for entrepreneurs who want to live and work in the same prime location. Situated on a busy street with excellent visibility.'
    },
    {
      id: 'rumuokwurushi-land',
      name: 'Residential Land for Development',
      type: 'Land',
      bedrooms: 0,
      bathrooms: 0,
      area: '650 sqm',
      location: 'Rumukwurushi, Port Harcourt',
      price: '₦35,000,000',
      features: ['Fenced', 'Survey Approved', 'Dry Land', 'Close to Amenities'],
      image: 'https://images.unsplash.com/photo-1582408921715-4e2b2b1e4c6d?q=80&w=2070&auto=format&fit=crop', // Land plot
      description: 'A prime piece of land in the rapidly developing Rumukwurushi area. Perfect for building a family home or small residential development. All documents are verified and ready for transfer.'
    },
    {
      id: 'old-gra-5bedroom-duplex-pool',
      name: '5-Bedroom Duplex with Pool',
      type: 'Residential',
      bedrooms: 5,
      bathrooms: 5,
      area: '580 sqm',
      location: 'Old GRA, Port Harcourt',
      price: '₦450,000,000',
      features: ['Swimming Pool', 'Modern Kitchen', 'Play Area', 'Ample Parking', '24hr Power Supply'],
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop', // House with pool
      description: 'A stunning family home in a quiet cul de sac of Old GRA. Features include a large swimming pool, a modern open plan living area, a fully equipped kitchen, and a secure compound. Perfect for entertaining and comfortable family living.'
    }
  ],

  formspreeEndpoint: 'https://formspree.io/f/your-form-id',

  meta: {
    title: 'Ozi Tech Properties | Real Estate Agent in Port Harcourt (Old GRA, New GRA, Trans Amadi)',
    description: 'Ozi Tech Properties offers professional real estate services in Port Harcourt. Buy, sell, or rent properties in Old GRA, New GRA, Trans Amadi, and beyond with a trusted local agent using modern technology.',
    ogImage: 'https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?q=80&w=1200&auto=format&fit=crop',
    url: 'https://ozitechproperties.com.ng',
    twitterHandle: '@ozitechprops'
  }
};