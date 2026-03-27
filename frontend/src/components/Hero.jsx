import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroStyles = {
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'var(--rose-50)'
  };

  const containerStyles = {
    maxWidth: 'var(--max-width)',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '4rem',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1
  };

  const textContentStyles = {
    maxWidth: '600px'
  };

  const tagStyles = {
    display: 'inline-block',
    padding: '0.4rem 1.2rem',
    backgroundColor: 'var(--white)',
    color: 'var(--rose-600)',
    borderRadius: '50px',
    fontSize: '0.875rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    boxShadow: 'var(--shadow-sm)'
  };

  return (
    <section style={heroStyles}>
      {/* Abstract Background Shapes */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', borderRadius: '50%', backgroundColor: 'var(--rose-100)', filter: 'blur(60px)', opacity: 0.6 }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '300px', height: '300px', borderRadius: '50%', backgroundColor: 'var(--rose-200)', filter: 'blur(80px)', opacity: 0.4 }}></div>

      <div style={containerStyles}>
        <motion.div 
          style={textContentStyles}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span style={tagStyles}>Glow With Confidence</span>
          <h1 className="title-lg">
            Awaken Your Inner <span style={{ color: 'var(--rose-600)', fontStyle: 'italic' }}>Beauty</span>
          </h1>
          <p className="subtitle" style={{ textAlign: 'left', margin: '0 0 2rem 0', color: 'var(--text-dark)' }}>
            Welcome to Blushwork Beauty Parlour. We provide the finest beauty services in Nagpur, helping you look and feel your absolute best.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/services" className="btn btn-primary">Our Services</Link>
            <Link to="/about" className="btn btn-outline">Meet Ruchi</Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ position: 'relative' }}
        >
          {/* Mock image placeholder using gradient and shape for wow effect */}
          <div style={{
            width: '100%',
            paddingBottom: '120%',
            borderRadius: 'var(--border-radius-lg)',
            background: 'linear-gradient(135deg, var(--rose-200) 0%, var(--rose-400) 100%)',
            boxShadow: 'var(--shadow-lg)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80") center/cover no-repeat',
              opacity: 0.85,
              mixBlendMode: 'overlay'
            }}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
