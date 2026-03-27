import { motion } from 'framer-motion';
import { Sparkles, Smile, Crown, Heart, Scissors, Droplets } from 'lucide-react';

const servicesData = [
  {
    icon: Sparkles,
    title: "Waxing",
    description: "Experience smooth, glowing skin with our gentle and hygienic waxing services tailored for your comfort.",
    price: "From ₹500",
    highlight: false
  },
  {
    icon: Droplets,
    title: "Pedicure",
    description: "Rejuvenate your feet with our relaxing pedicure, removing dead skin and leaving your nails perfectly polished.",
    price: "From ₹800",
    highlight: false
  },
  {
    icon: Heart,
    title: "Medicure",
    description: "Complete hand & nail care! Our manicure (medicure) treatments leave your hands soft, bright, and deeply pampered.",
    price: "From ₹700",
    highlight: false
  },
  {
    icon: Smile,
    title: "Hair spa",
    description: "Deep conditioning and repairing scalp treatments to restore your hair's natural shine, strength, and bounce.",
    price: "From ₹1200",
    highlight: false
  },
  {
    icon: Crown,
    title: "Bridal Makeup",
    description: "Look breathtaking on your big day. We provide complete bridal makeovers that highlight your absolute best features.",
    price: "Custom Packages",
    highlight: true
  },
  {
    icon: Scissors,
    title: "Hairstyles",
    description: "From elegant updos to trendy modern cuts. Let us craft the perfect hairstyle for any occasion.",
    price: "From ₹600",
    highlight: false
  }
];

const Services = () => {
  return (
    <div style={{ paddingTop: '100px', backgroundColor: 'var(--snow)', minHeight: '100vh', paddingBottom: '6rem' }}>
      <section className="container text-center" style={{ marginBottom: '4rem' }}>
        <motion.h1 
          className="title-lg" 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Services
        </motion.h1>
        <motion.p 
          className="subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Curated beauty solutions designed to amplify your presence and streamline your success.
        </motion.p>
      </section>

      <section className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {servicesData.map((service, idx) => {
            const Icon = service.icon;
            const isHighlight = service.highlight;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                style={{
                  backgroundColor: isHighlight ? 'var(--rose-50)' : 'var(--white)',
                  border: isHighlight ? '2px solid var(--rose-200)' : '1px solid rgba(0,0,0,0.05)',
                  borderRadius: 'var(--border-radius-lg)',
                  padding: '3rem 2rem',
                  boxShadow: 'var(--shadow-sm)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {isHighlight && (
                  <span style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'var(--rose-600)', color: 'white', padding: '0.2rem 0.8rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.5px' }}>POPULAR</span>
                )}
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--rose-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--rose-600)', marginBottom: '1.5rem' }}>
                  <Icon size={32} />
                </div>
                
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--text-dark)', marginBottom: '1rem' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', flex: 1, lineHeight: 1.7 }}>
                  {service.description}
                </p>
                
                <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(255,182,193,0.3)', marginTop: 'auto' }}>
                  <p style={{ color: 'var(--text-dark)', fontWeight: 600, fontSize: '1.1rem' }}>{service.price}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Services;
