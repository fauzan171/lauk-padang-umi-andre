import React from 'react';
import { RESTAURANT_INFO } from '../data';
import { Check, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-site">
      <div className="container footer-main-grid">
        <div className="footer-col-brand">
          <div className="brand-badge-footer">
            <svg viewBox="0 0 100 60" className="gonjong-svg-gold">
              <path d="M5,50 C25,20 38,5 50,0 C62,5 75,20 95,50 C80,45 65,48 50,42 C35,48 20,45 5,50 Z" fill="currentColor"/>
            </svg>
            <span className="brand-name-text">UMI ANDREW</span>
          </div>
          <p className="footer-lead">
            Warung Makan Padang Otentik di Kawasan Cawang. Menghidangkan sajian Minangkabau lezat, higienis, halal dan terjangkau untuk semua.
          </p>
          <div className="halal-stamp">
            <span className="stamp-icon"><Check size={14} /></span>
            <span>100% Bersertifikat Halal & Thayyib</span>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Navigasi Cepat</h4>
          <ul className="footer-link-list">
            <li><a href="#about">Tentang Kami</a></li>
            <li><a href="#rendang">Rendang Pusaka</a></li>
            <li><a href="#menu">Daftar Menu</a></li>
            <li><a href="#dinein">Layanan Dine-In</a></li>
            <li><a href="#lokasi">Peta & Lokasi Cawang</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Pesan Sekarang</h4>
          <ul className="footer-link-list">
            <li><a href={RESTAURANT_INFO.gofoodUrl} target="_blank" rel="noopener noreferrer">Order via GoFood</a></li>
            <li><a href={RESTAURANT_INFO.grabfoodUrl} target="_blank" rel="noopener noreferrer">Order via GrabFood</a></li>
            <li><a href={`https://wa.me/${RESTAURANT_INFO.phoneRaw}`} target="_blank" rel="noopener noreferrer">Katering Nasi Kotak</a></li>
            <li><a href={`https://wa.me/${RESTAURANT_INFO.phoneRaw}`} target="_blank" rel="noopener noreferrer">Pesan Rendang Kiloan</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Informasi Rumah Makan</h4>
          <p className="footer-meta-line"><strong>Alamat:</strong> {RESTAURANT_INFO.address}</p>
          <p className="footer-meta-line"><strong>Jam Buka:</strong> {RESTAURANT_INFO.hours}</p>
          <p className="footer-meta-line"><strong>Telepon/WA:</strong> {RESTAURANT_INFO.phone}</p>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container footer-bottom-flex">
          <p>&copy; {new Date().getFullYear()} Warung Makan Padang Umi Andrew Cawang. Hak Cipta Dilindungi.</p>
          <p className="footer-signature">
            Dibuat untuk memajukan Kuliner UMKM Khas Minangkabau di Jakarta
          </p>
        </div>
      </div>
    </footer>
  );
}
