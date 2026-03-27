import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, delay = 0, isHighlight = false }) => {
  const cardStyles = {
    padding: '2.5rem 2rem',
    borderRadius: 'var(--border-radius-lg)',
    backgroundColor: isHighlight ? 'var(--rose-500)' : 'var(--white)',
    color: isHighlight ? 'var(--white)' : 'var(--text-dark)',
    boxShadow: isHighlight ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
    transition: 'all var(--transition-normal)',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    border: isHighlight ? 'none' : '1px solid rgba(255,182,193,0.2)'
  };

  const iconContainerStyles = {
    width: '60px',
    height: '60px',
    borderRadius: '15px',
    backgroundColor: isHighlight ? 'rgba(255,255,255,0.2)' : 'var(--rose-50)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
    color: isHighlight ? 'var(--white)' : 'var(--rose-500)'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10, boxShadow: 'var(--shadow-lg)' }}
      style={{ display: 'block' }}
    >
      <div style={cardStyles}>
        <div style={iconContainerStyles}>
          <Icon size={28} />
        </div>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1rem', color: isHighlight ? 'var(--white)' : 'var(--text-dark)' }}>
          {title}
        </h3>
        <p style={{ color: isHighlight ? 'rgba(255,255,255,0.9)' : 'var(--text-muted)', marginBottom: '2rem', flex: 1 }}>
          {description}
        </p>
        <Link 
          to="/services" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            fontWeight: 600, 
            color: isHighlight ? 'var(--white)' : 'var(--rose-600)',
            marginTop: 'auto'
          }}
        >
          Learn More <ArrowRight size={16} />
        </Link>

        {isHighlight && (
           <div style={{ position: 'absolute', right: '-10%', top: '-10%', width: '150px', height: '150px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }}></div>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
