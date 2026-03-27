import { motion } from 'framer-motion';

const About = () => {
  return (
    <div style={{ paddingTop: '100px', backgroundColor: 'var(--snow)', minHeight: '100vh' }}>
      {/* Header Section */}
      <section className="section container text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ color: 'var(--rose-600)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.85rem' }}
        >
          Discover Our Legacy
        </motion.span>
        <motion.h1 
          className="title-lg" 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ marginTop: '1rem' }}
        >
          Our Story
        </motion.h1>
      </section>

      {/* Story & Philosophy */}
      <section className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', paddingBottom: '5rem' }}>
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ width: '100%', paddingBottom: '120%', borderRadius: 'var(--border-radius-lg)', background: 'var(--rose-200)', overflow: 'hidden', position: 'relative' }}>
            <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800" alt="Makeup brushes and beauty tools" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="title-md">Transforming Passion Into Beauty</h2>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-dark)', fontSize: '1.1rem', lineHeight: 1.8 }}>
            What started as an incredible passion for makeup and personal care has blossomed into Blushwork Beauty Parlour.
          </p>
          <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
            We believe that every woman deserves to feel beautiful, confident, and pampered. Our goal is to create a relaxing haven right here in Nagpur where clients can escape the hustle of daily life and emerge looking radiant. 
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '3rem' }}>
            <div style={{ padding: '2rem', backgroundColor: 'var(--rose-50)', borderRadius: 'var(--border-radius)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--rose-600)', marginBottom: '0.5rem', fontSize: '1.5rem' }}>Our Mission</h3>
              <p style={{ fontSize: '0.9rem' }}>To provide the best service out there, ensuring everyone leaves with a smile.</p>
            </div>
            <div style={{ padding: '2rem', backgroundColor: 'var(--rose-50)', borderRadius: 'var(--border-radius)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--rose-600)', marginBottom: '0.5rem', fontSize: '1.5rem' }}>Our Vision</h3>
              <p style={{ fontSize: '0.9rem' }}>To become the best and most beloved parlour in the city.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Owner Introduction */}
      <section style={{ backgroundColor: 'var(--white)', padding: '6rem 0' }}>
         <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ order: window.innerWidth > 768 ? 1 : 2 }}
            >
              <span style={{ color: 'var(--rose-500)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase' }}>Meet the Founder</span>
              <h2 className="title-md" style={{ marginTop: '0.5rem' }}>Ruchi Ahuja</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                "True beauty comes from within, but a little mascara and a relaxing day at the spa never hurt anyone."
              </p>
              <p style={{ color: 'var(--text-muted)' }}>
                Ruchi's story is an inspiration for many. Starting out as a devoted housewife, she pursued her lifelong dream of becoming a master beautician. Not only did she turn her passion into a thriving business to support her household, but she also built Blushwork Beauty Parlour into a community cornerstone. Her dedication shows that with hard work and grace, incredible transformations are possible—both in business and in beauty.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ order: window.innerWidth > 768 ? 2 : 1, display: 'flex', justifyContent: 'center' }}
            >
               <div style={{ width: '300px', height: '400px', borderRadius: 'var(--border-radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                 <img src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&q=80&w=600" alt="Ruchi Ahuja" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               </div>
            </motion.div>
         </div>
      </section>
    </div>
  );
};

export default About;
