import { Link } from 'react-router-dom';
import { Globe, MessageCircle, Share2, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const footerStyles = {
    backgroundColor: 'var(--rose-50)',
    padding: '4rem 0 2rem',
    color: 'var(--text-dark)',
    fontFamily: 'var(--font-main)'
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '3rem',
    maxWidth: 'var(--max-width)',
    margin: '0 auto',
    padding: '0 2rem'
  };

  const brandStyles = {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--rose-600)',
    marginBottom: '1rem',
    display: 'inline-block'
  };

  const subtitleStyles = {
    color: 'var(--text-muted)',
    marginBottom: '1.5rem',
    maxWidth: '300px'
  };

  const iconRowStyles = {
    display: 'flex',
    gap: '1rem'
  };

  const iconCircleStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'var(--white)',
    color: 'var(--rose-500)',
    transition: 'all var(--transition-fast)'
  };

  const columnTitleStyles = {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.25rem',
    marginBottom: '1.5rem',
    color: 'var(--text-dark)',
    fontWeight: '600'
  };

  const listStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  };

  const getIconCircleStyle = (e, isHover) => {
    e.currentTarget.style.backgroundColor = isHover ? 'var(--rose-500)' : 'var(--white)';
    e.currentTarget.style.color = isHover ? 'var(--white)' : 'var(--rose-500)';
    e.currentTarget.style.transform = isHover ? 'translateY(-2px)' : 'translateY(0)';
  };

  return (
    <footer style={footerStyles}>
      <div style={gridStyles}>
        
        {/* Brand Info */}
        <div>
          <Link to="/" style={brandStyles}>Blushwork Beauty Parlour</Link>
          <p style={subtitleStyles}>Our mission is to provide the best service out there. Be the best parlour in the city.</p>
          <div style={iconRowStyles}>
            <a href="#" style={iconCircleStyles} onMouseEnter={(e) => getIconCircleStyle(e, true)} onMouseLeave={(e) => getIconCircleStyle(e, false)}>
              <Globe size={18} />
            </a>
            <a href="#" style={iconCircleStyles} onMouseEnter={(e) => getIconCircleStyle(e, true)} onMouseLeave={(e) => getIconCircleStyle(e, false)}>
              <MessageCircle size={18} />
            </a>
            <a href="#" style={iconCircleStyles} onMouseEnter={(e) => getIconCircleStyle(e, true)} onMouseLeave={(e) => getIconCircleStyle(e, false)}>
              <Share2 size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={columnTitleStyles}>Quick Links</h4>
          <ul style={listStyles}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/services">Services Offered</Link></li>
            <li><Link to="/contact">Get in Touch</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 style={columnTitleStyles}>Contact</h4>
          <ul style={listStyles}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MapPin size={18} color="var(--rose-400)" />
              <span>Nagpur, Maharashtra, India</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Phone size={18} color="var(--rose-400)" />
              <span>9834120851</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Mail size={18} color="var(--rose-400)" />
              <span>ahujaruchi999@gmail.com</span>
            </li>
          </ul>
        </div>

      </div>

      <div style={{ textAlign: 'center', color: 'var(--text-muted)', borderTop: '1px solid rgba(255, 182, 193, 0.3)', marginTop: '3rem', paddingTop: '1.5rem', fontSize: '0.9rem' }}>
        <p>© {new Date().getFullYear()} Blushwork Beauty Parlour. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
