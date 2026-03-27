import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Smooth appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyles = {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    backgroundColor: scrolled ? 'rgba(255, 250, 250, 0.95)' : 'transparent',
    backdropFilter: scrolled ? 'blur(10px)' : 'none',
    boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
    transition: 'all var(--transition-normal)',
    padding: scrolled ? '1rem 0' : '1.5rem 0'
  };

  const navContainerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 2rem',
    maxWidth: 'var(--max-width)',
    margin: '0 auto'
  };

  const logoStyles = {
    fontFamily: 'var(--font-serif)',
    fontSize: '1.25rem',
    fontWeight: '700',
    color: 'var(--rose-600)',
    letterSpacing: '0.5px'
  };

  const linksContainerStyles = {
    display: 'flex',
    gap: '2.5rem',
    alignItems: 'center'
  };

  const desktopLinks = (
    <div className="desktop-nav" style={linksContainerStyles}>
      <NavLink to="/" style={({isActive}) => ({ color: isActive ? 'var(--rose-500)' : 'var(--text-dark)', fontWeight: isActive ? 600 : 400 })}>Home</NavLink>
      <NavLink to="/about" style={({isActive}) => ({ color: isActive ? 'var(--rose-500)' : 'var(--text-dark)', fontWeight: isActive ? 600 : 400 })}>About</NavLink>
      <NavLink to="/services" style={({isActive}) => ({ color: isActive ? 'var(--rose-500)' : 'var(--text-dark)', fontWeight: isActive ? 600 : 400 })}>Services</NavLink>
      <Link to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem' }}>Contact Us</Link>
    </div>
  );

  const mobileNavStyles = {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    backgroundColor: 'var(--snow)',
    padding: '1.5rem',
    display: isOpen ? 'flex' : 'none',
    flexDirection: 'column',
    gap: '1.5rem',
    boxShadow: 'var(--shadow-md)',
    textAlign: 'center'
  };

  return (
    <>
      {/* Basic responsive CSS injected to hide/show toggles */}
      <style>{`
        @media (min-width: 769px) { .mobile-toggle { display: none; } }
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
      `}</style>

      <nav style={navStyles}>
        <div style={navContainerStyles}>
          <Link to="/" style={logoStyles} onClick={() => setIsOpen(false)}>Blushwork Beauty Parlour</Link>
          
          {desktopLinks}
          
          <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
            {isOpen ? <X size={28} color="var(--text-dark)" /> : <Menu size={28} color="var(--text-dark)" />}
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div style={mobileNavStyles}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/services" onClick={() => setIsOpen(false)}>Services</NavLink>
          <Link to="/contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
