import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { Sparkles, Scissors, Smile } from 'lucide-react';

const homeServices = [
  {
    icon: Sparkles,
    title: "Bridal Makeup",
    description: "Flawless and stunning makeup to make your special day truly unforgettable.",
    delay: 0.1
  },
  {
    icon: Scissors,
    title: "Hairstyles & Spa",
    description: "Trendy haircuts, elegant styling, and rejuvenating hair spa treatments.",
    delay: 0.2,
    isHighlight: true
  },
  {
    icon: Smile,
    title: "Skincare",
    description: "Premium waxing, manicure, and pedicure services to leave your skin glowing.",
    delay: 0.3
  }
];

const testimonials = [
  {
    name: "Pooja Sharma",
    role: "Bride",
    text: "Ruchi did an absolutely phenomenal job on my bridal makeup. I felt so beautiful and confident on my big day!"
  },
  {
    name: "Sneha Patel",
    role: "Regular Client",
    text: "The best beauty parlour in Nagpur! The hair spa and pedicure services are incredibly relaxing. Highly recommend."
  }
];

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Services Highlight Section */}
      <section className="section container">
        <div className="text-center">
          <motion.h2 
            className="title-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Expertise
          </motion.h2>
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We provide the best services in the city, using top-quality products to bring out your natural beauty.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
          {homeServices.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section" style={{ backgroundColor: 'var(--rose-50)', position: 'relative' }}>
        <div className="container">
          <div className="text-center">
             <h2 className="title-md">Client Stories</h2>
             <p className="subtitle">Discover what our gorgeous clients have to say about their makeovers.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
             {testimonials.map((t, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: idx * 0.2 }}
                 className="glass-panel"
                 style={{ padding: '3rem 2rem', textAlign: 'center' }}
               >
                 <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '1.5rem', color: '#fb8b90' }}>
                   {[1, 2, 3, 4, 5].map(star => <Star key={star} size={20} fill="#fb8b90" />)}
                 </div>
                 <p style={{ fontSize: '1.25rem', fontStyle: 'italic', marginBottom: '2rem', color: 'var(--text-dark)' }}>
                   "{t.text}"
                 </p>
                 <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--rose-600)' }}>{t.name}</h4>
                 <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t.role}</span>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
