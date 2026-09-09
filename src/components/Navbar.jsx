import React, { useState } from 'react';
import { RESTAURANT_INFO, WA_LINKS } from '../data';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Banner with Clear Whitespace */}
      <div className="top-banner">
        <div className="container top-banner-flex">
          <div className="top-badges">
            <span className="badge-halal">Melayani Catering</span>
            <span className="top-info-text">
              Buka 09.00 - 22.00 WIB • Jl. Dewi Sartika No. 128, Cawang
            </span>
          </div>
          <div className="top-contact">
            <a href={`tel:${RESTAURANT_INFO.phone}`} className="top-phone">
              <Phone size={13} /> {RESTAURANT_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
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
              <span className="brand-sub">CATERING &amp; MASAKAN RUMAHAN • CAWANG</span>
            </div>
          </a>

          <nav className="desktop-links">
            <a href="#catering">Catering</a>
            <a href="#layanan-catering">Jenis Layanan</a>
            <a href="#katalog-lauk">Katalog Lauk</a>
            <a href="#menu-harian">Menu Harian</a>
            <a href="#dinein">Warung</a>
            <a href="#lokasi">Lokasi</a>
          </nav>

          <div className="nav-cta-group">
            <a
              href={WA_LINKS.catering}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold btn-compact"
            >
              <MessageCircle size={15} /> Konsultasi
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
              <div>
                <span className="brand-main">UMI ANDREW</span>
                <span className="brand-sub">Cawang, Jakarta Timur</span>
              </div>
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                <X size={22} />
              </button>
            </div>

            <div className="mobile-menu-links">
              <a href="#catering" onClick={() => setIsOpen(false)}>Catering</a>
              <a href="#layanan-catering" onClick={() => setIsOpen(false)}>Jenis Layanan</a>
              <a href="#katalog-lauk" onClick={() => setIsOpen(false)}>Katalog Lauk</a>
              <a href="#menu-harian" onClick={() => setIsOpen(false)}>Menu Harian</a>
              <a href="#about" onClick={() => setIsOpen(false)}>Cerita Dapur</a>
              <a href="#order" onClick={() => setIsOpen(false)}>Pesan via WhatsApp</a>
              <a href="#dinein" onClick={() => setIsOpen(false)}>Makan di Warung</a>
              <a href="#lokasi" onClick={() => setIsOpen(false)}>Lokasi & Jam Buka</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
