import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data';
import { Menu, X, Phone, ShoppingBag, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="top-banner">
        <div className="container top-banner-flex">
          <div className="top-badges">
            <span className="badge-halal">100% Halal Thayyib</span>
            <span className="top-info-text">
              Buka Setiap Hari: 09:00 - 22:00 WIB • Lokasi: Dewi Sartika, Cawang, Jakarta Timur
            </span>
          </div>
          <div className="top-contact">
            <a href={`tel:${RESTAURANT_INFO.phone}`} className="top-phone">
              <Phone size={14} /> {RESTAURANT_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      <header className="header-nav">
        <div className="container nav-content">
          <a href="#hero" className="brand-badge">
            <div className="gonjong-roof">
              <svg viewBox="0 0 100 60" className="gonjong-svg">
                <path d="M5,50 C25,20 38,5 50,0 C62,5 75,20 95,50 C80,45 65,48 50,42 C35,48 20,45 5,50 Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="brand-names">
              <span className="brand-main">UMI ANDREW</span>
              <span className="brand-sub">MASAKAN KHAS MINANG • CAWANG</span>
            </div>
          </a>

          <nav className="desktop-links">
            <a href="#about">Tentang Kami</a>
            <a href="#rendang">Rendang Pusaka</a>
            <a href="#menu">Daftar Menu</a>
            <a href="#order">Pesan Online</a>
            <a href="#dinein">Dine-In</a>
            <a href="#lokasi">Lokasi</a>
          </nav>

          <div className="nav-cta-group">
            <a href="#order" className="btn btn-gold btn-compact">
              <ShoppingBag size={16} /> Pesan Makan
            </a>
            <button 
              className="hamburger-btn" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu Navigasi"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="mobile-overlay" onClick={() => setIsOpen(false)}>
          <div className="mobile-menu-pane" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <span className="brand-main">UMI ANDREW</span>
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                <X size={22} />
              </button>
            </div>
            <div className="mobile-menu-links">
              <a href="#about" onClick={() => setIsOpen(false)}>Tentang Kami</a>
              <a href="#rendang" onClick={() => setIsOpen(false)}>Rendang Pusaka</a>
              <a href="#menu" onClick={() => setIsOpen(false)}>Daftar Lauk & Menu</a>
              <a href="#order" onClick={() => setIsOpen(false)}>Pesan GoFood & GrabFood</a>
              <a href="#dinein" onClick={() => setIsOpen(false)}>Dine-In di Cawang</a>
              <a href="#lokasi" onClick={() => setIsOpen(false)}>Alamat & Jam Buka</a>
            </div>
            <div className="mobile-menu-actions">
              <a href={RESTAURANT_INFO.gofoodUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gofood">
                Order via GoFood
              </a>
              <a href={RESTAURANT_INFO.grabfoodUrl} target="_blank" rel="noopener noreferrer" className="btn btn-grabfood">
                Order via GrabFood
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
