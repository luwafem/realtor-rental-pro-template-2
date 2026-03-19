export const siteConfig = {
  companyName: 'Anu the Landlady',
  tagline: 'Your Trusted Landlady Across Nigeria',
  description: 'A trusted name in property management and real estate, offering seamless rental, sale, and management services in Lagos, Ilorin, Ibadan, and beyond. Whether you need a home, tenant, or someone to care for your property, Anu has got you covered.',
  phone: '+234 803 456 7890',
  whatsappNumber: '2348034567890',
  email: 'hello@anuthelandlady.com.ng',
  logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=200&auto=format&fit=crop', // Replace with a warm, personal logo if available

  hero: {
    title: 'Your Home, Our Heart',
    subtitle: 'Rent, buy, or manage properties with a landlady who cares. Serving Lagos, Ilorin, Ibadan and beyond.',
    backgroundImage: 'https://francispolo.com/wp-content/uploads/2020/02/lagos-hero.jpg', // A welcoming home image
    ctaText: 'Browse Properties',
    ctaLink: '/properties'
  },

  services: [
    {
      id: 'property-management',
      title: 'Property Management',
      shortDesc: 'Stressfree management for landlords. I handle tenants, rent, and maintenance.',
      description: 'With years of experience as a landlady, I offer full service property management: tenant sourcing, rent collection, regular inspections, and maintenance coordination. You relax, I handle the rest.',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070&auto=format&fit=crop',
      price: 'From 10% monthly rent',
      features: ['Tenant Sourcing', 'Rent Collection', '24/7 Maintenance', 'Regular Reports']
    },
    {
      id: 'rentals',
      title: 'Rental Listings',
      shortDesc: 'Quality homes for rent in prime locations verified and ready to move in.',
      description: 'From cosy flats in Ibadan to family houses in Lagos and modern apartments in Ilorin, I personally inspect every property to ensure it meets your standards. No agent fees just honest listings.',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2070&auto=format&fit=crop',
      price: 'Market rates',
      features: ['No Hidden Fees', 'Verified Listings', 'Flexible Terms', 'Move in Support']
    },
    {
      id: 'sales',
      title: 'Property Sales',
      shortDesc: 'Find your dream home or investment property with trusted guidance.',
      description: 'Buying a home is a big step. I walk with you through every stage from searching to title verification and negotiation. Whether in Lagos, Ilorin, or Ibadan, I help you find a place you’ll love.',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070&auto=format&fit=crop',
      price: 'Negotiable',
      features: ['Wide Selection', 'Title Checks', 'Negotiation Support', 'Legal Referrals']
    }
  ],

  testimonials: [
    {
      id: 1,
      name: 'Mrs. Bola Adeyemi',
      role: 'Landlord, Ikeja',
      content: 'Anu takes care of my property like her own. Tenants are happy, rent comes on time, and I don’t worry about a thing. She’s the best landlady I’ve ever worked with.',
      rating: 5
    },
    {
      id: 2,
      name: 'Mr. Chidi Okonkwo',
      role: 'Tenant, Lekki',
      content: 'I found my apartment through Anu. She was honest, helpful, and made the process smooth. I recommend her to anyone looking for a stressfree rental.',
      rating: 5
    },
    {
      id: 3,
      name: 'Alhaja Ramat Sulaiman',
      role: 'Home Buyer, Ilorin',
      content: 'Buying a house in Ilorin from abroad seemed impossible until I met Anu. She handled everything, and I now own my dream home. Thank you!',
      rating: 5
    }
  ],

  social: {
    instagram: 'https://instagram.com/anuthelandlady',
    facebook: 'https://facebook.com/anuthelandlady',
    twitter: 'https://twitter.com/anuthelandlady',
  },

  properties: [
    {
      id: 'lekki-3bedroom-flat',
      name: 'Spacious 3‑Bedroom Flat',
      type: 'Residential',
      bedrooms: 3,
      bathrooms: 3,
      area: '180 sqm',
      location: 'Lekki Phase 1, Lagos',
      price: '₦90,000,000',
      features: ['Estate Security', 'Modern Kitchen', 'POP Ceilings', 'Prepaid Meter', 'Parking'],
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2070&auto=format&fit=crop',
      description: 'A beautiful flat in a secure estate, close to shops, schools, and the beach. Perfect for a family or professional couple.'
    },
    {
      id: 'ibadan-4bedroom-terrace',
      name: '4‑Bedroom Terrace Duplex',
      type: 'Residential',
      bedrooms: 4,
      bathrooms: 4,
      area: '250 sqm',
      location: 'Bodija, Ibadan',
      price: '₦120,000,000',
      features: ['Boys Quarters', 'Fenced Yard', 'Borehole', 'Ample Parking'],
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop',
      description: 'Located in the heart of Bodija, this spacious duplex offers comfort and privacy. Walking distance to markets and schools.'
    },
    {
      id: 'ilorin-5bedroom-detached',
      name: '5‑Bedroom Detached House',
      type: 'Residential',
      bedrooms: 5,
      bathrooms: 5,
      area: '350 sqm',
      location: 'GRA, Ilorin',
      price: '₦150,000,000',
      features: ['Swimming Pool', 'Staff Quarters', 'Landscaped Garden', '24hr Security'],
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop',
      description: 'A luxury home in Ilorin’s GRA with a private pool and large garden. Ideal for a large family or executive.'
    },
    {
      id: 'lagos-commercial-space',
      name: 'Retail Shop (Commercial)',
      type: 'Commercial',
      bedrooms: 0,
      bathrooms: 1,
      area: '70 sqm',
      location: 'Ikeja Alade Market, Lagos',
      price: '₦25,000,000',
      features: ['High Footfall', 'Ready to Occupy', 'Storage Room'],
      image: 'https://images.unsplash.com/photo-1572025442646-866d16c84a54?q=80&w=2070&auto=format&fit=crop',
      description: 'Prime retail space in a busy market. Perfect for fashion, food, or electronics business.'
    },
    {
      id: 'ibadan-land',
      name: 'Residential Land for Sale',
      type: 'Land',
      bedrooms: 0,
      bathrooms: 0,
      area: '600 sqm',
      location: 'Jericho, Ibadan',
      price: '₦35,000,000',
      features: ['Fenced', 'Survey Approved', 'Dry Land', 'Close to Amenities'],
      image: 'https://images.unsplash.com/photo-1582408921715-4e2b2b1e4c6d?q=80&w=2070&auto=format&fit=crop',
      description: 'Level, dry land in a developing area. Ideal for building a family home or investment.'
    },
    {
      id: 'ilorin-2bedroom-flat',
      name: '2‑Bedroom Flat',
      type: 'Residential',
      bedrooms: 2,
      bathrooms: 2,
      area: '100 sqm',
      location: 'Tanke, Ilorin',
      price: '₦30,000,000',
      features: ['Tiled Floors', 'Modern Kitchen', 'Estate Security'],
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop',
      description: 'A cozy flat in a quiet estate, perfect for a small family or young professionals. Close to university.'
    }
  ],

  formspreeEndpoint: 'https://formspree.io/f/your-form-id',

  meta: {
    title: 'Anu the Landlady | Trusted Real Estate & Property Management in Lagos, Ilorin, Ibadan',
    description: 'Anu the Landlady offers reliable property management, rental listings, and sales across Nigeria. Rent or buy with confidence no agent fees, just a landlady you can trust.',
    ogImage: 'https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?q=80&w=1200&auto=format&fit=crop',
    url: 'https://anuthelandlady.com.ng',
    twitterHandle: '@anuthelandlady'
  }
};