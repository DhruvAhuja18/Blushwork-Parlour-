import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import api from '../api/axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await api.post('/contact', formData);
      setStatus({ type: 'success', message: response.data.message });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      if (error.response) {
        setStatus({ type: 'error', message: error.response.data.message });
      } else {
        setStatus({ type: 'error', message: 'Unable to connect to the server. Please try again later.' });
      }
    } finally {
      setLoading(false);
    }
  };

  const inputStyles = {
    width: '100%',
    padding: '1rem',
    borderRadius: 'var(--border-radius)',
    border: '1px solid rgba(255,182,193,0.5)',
    backgroundColor: 'var(--white)',
    fontFamily: 'var(--font-main)',
    fontSize: '1rem',
    color: 'var(--text-dark)',
    outline: 'none',
    transition: 'border-color var(--transition-fast)'
  };

  return (
    <div style={{ paddingTop: '100px', backgroundColor: 'var(--snow)', minHeight: '100vh', paddingBottom: '6rem' }}>
      <section className="container text-center" style={{ marginBottom: '4rem' }}>
        <motion.h1 className="title-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Get in Touch
        </motion.h1>
        <motion.p className="subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          We would be delighted to hear from you. Reach out to schedule your pampering session!
        </motion.p>
      </section>

      <section className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          style={{ backgroundColor: 'var(--white)', padding: '3rem 2.5rem', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-md)' }}
        >
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-dark)' }}>Book an Appointment</h2>
          
          {status.message && (
             <div style={{ 
               padding: '1rem', 
               borderRadius: 'var(--border-radius)', 
               marginBottom: '2rem',
               display: 'flex',
               alignItems: 'center',
               gap: '10px',
               backgroundColor: status.type === 'success' ? '#f0fdf4' : '#fef2f2',
               color: status.type === 'success' ? '#166534' : '#991b1b',
               border: `1px solid ${status.type === 'success' ? '#bbf7d0' : '#fecaca'}`
             }}>
               {status.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
               <p style={{ margin: 0, color: 'inherit' }}>{status.message}</p>
             </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Full Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required style={inputStyles} placeholder="Ruchi Ahuja" />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyles} placeholder="hello@example.com" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={inputStyles} placeholder="9834120851" />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>How can we help? *</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required style={{ ...inputStyles, resize: 'vertical', minHeight: '150px' }} placeholder="Please describe the services you are looking for..."></textarea>
            </div>

            <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%', padding: '1rem', display: 'flex', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
              {loading ? 'Sending...' : 'Submit Message'}
            </button>
          </form>
        </motion.div>

        {/* Contact Info & Map */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
        >
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>Contact Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ padding: '12px', backgroundColor: 'var(--rose-50)', borderRadius: '50%', color: 'var(--rose-600)' }}><MapPin size={24} /></div>
                <div>
                  <h4 style={{ fontWeight: 600, color: 'var(--text-dark)' }}>Our Parlour</h4>
                  <p style={{ color: 'var(--text-muted)', marginTop: '4px' }}>Nagpur<br />Maharashtra, India</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ padding: '12px', backgroundColor: 'var(--rose-50)', borderRadius: '50%', color: 'var(--rose-600)' }}><Phone size={24} /></div>
                <div>
                  <h4 style={{ fontWeight: 600, color: 'var(--text-dark)' }}>Phone</h4>
                  <p style={{ color: 'var(--text-muted)', marginTop: '4px' }}>9834120851</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ padding: '12px', backgroundColor: 'var(--rose-50)', borderRadius: '50%', color: 'var(--rose-600)' }}><Mail size={24} /></div>
                <div>
                  <h4 style={{ fontWeight: 600, color: 'var(--text-dark)' }}>Email</h4>
                  <p style={{ color: 'var(--text-muted)', marginTop: '4px' }}>ahujaruchi999@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div style={{ width: '100%', height: '300px', borderRadius: 'var(--border-radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <iframe 
               src="https://www.google.com/maps/embed?pb=!4v1774591116502!6m8!1m7!1s7wpCHkhQ2TH3oNQfaVHWpA!2m2!1d21.14616091345913!2d79.14023144670745!3f204.29406732977512!4f-2.2686353697337722!5f0.4000000000000002" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen="" 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Office Location"
             ></iframe>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
