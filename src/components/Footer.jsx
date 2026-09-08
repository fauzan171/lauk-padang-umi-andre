import React from 'react';
import { RESTAURANT_INFO, WA_LINKS } from '../data';
import { Check } from 'lucide-react';

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
            Catering masakan Padang dan lauk rumahan di kawasan Cawang. Melayani nasi kotak kantor, acara keluarga, dan prasmanan dengan lauk serta harga yang bisa disesuaikan permintaan. Warung harian kami buka setiap hari.
          </p>
          <div className="halal-stamp">
            <span className="stamp-icon"><Check size={14} /></span>
            <span>Masakan halal, dapur rumahan UMKM</span>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Catering</h4>
          <ul className="footer-link-list">
            <li><a href="#catering">Kenapa Catering Kami</a></li>
            <li><a href="#layanan-catering">Jenis Layanan</a></li>
            <li><a href="#layanan-catering">Isi Nasi Kotak</a></li>
            <li><a href="#katalog-lauk">Katalog Lauk</a></li>
            <li><a href="#katalog-lauk">Pertanyaan Umum</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Warung &amp; Menu</h4>
          <ul className="footer-link-list">
            <li><a href="#menu-harian">Menu Harian</a></li>
            <li><a href="#about">Cerita Dapur</a></li>
            <li><a href="#dinein">Makan di Warung</a></li>
            <li><a href="#order">Pesan Online</a></li>
            <li><a href="#lokasi">Peta &amp; Lokasi Cawang</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Pesan Sekarang</h4>
          <ul className="footer-link-list">
            <li><a href={WA_LINKS.catering} target="_blank" rel="noopener noreferrer">Konsultasi Catering</a></li>
            <li><a href={WA_LINKS.nasiKotak} target="_blank" rel="noopener noreferrer">Nasi Kotak Kantor</a></li>
            <li><a href={WA_LINKS.prasmanan} target="_blank" rel="noopener noreferrer">Prasmanan Acara</a></li>
            <li><a href={WA_LINKS.harian} target="_blank" rel="noopener noreferrer">Catering Harian</a></li>
            <li><a href={RESTAURANT_INFO.gofoodUrl} target="_blank" rel="noopener noreferrer">Order via GoFood</a></li>
            <li><a href={RESTAURANT_INFO.grabfoodUrl} target="_blank" rel="noopener noreferrer">Order via GrabFood</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">Informasi</h4>
          <p className="footer-meta-line"><strong>Alamat:</strong> {RESTAURANT_INFO.address}</p>
          <p className="footer-meta-line"><strong>Jam Buka:</strong> {RESTAURANT_INFO.hours}</p>
          <p className="footer-meta-line"><strong>Telepon/WA:</strong> {RESTAURANT_INFO.phone}</p>
          <div className="footer-coverage">
            <span className="footer-coverage-label">Area layanan catering:</span>
            <div className="footer-coverage-chips">
              {RESTAURANT_INFO.coverageArea.map((area) => (
                <span className="footer-coverage-chip" key={area}>{area}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container footer-bottom-flex">
          <p>&copy; {new Date().getFullYear()} Warung Makan Padang Umi Andrew Cawang. Hak Cipta Dilindungi.</p>
          <p className="footer-signature">
            Referensi foto lauk: Wikimedia Commons; aset hero dibuat khusus untuk website ini.
          </p>
        </div>
      </div>
    </footer>
  );
}
