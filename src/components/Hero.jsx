import React from 'react';
import { HERO_IMAGE, WA_LINKS } from '../data';
import { UtensilsCrossed, Clock, ShieldCheck, MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="container hero-content-grid">
        <div className="hero-text-col">
          <div className="hero-badge-pill">
            CATERING &amp; MASAKAN RUMAHAN • CAWANG, JAKARTA TIMUR
          </div>

          <h1 className="hero-headline">
            Catering Padang Umi Andrew, <br />
            <span className="gold-gradient-text">lauk dan harga</span> mengikuti permintaan Anda
          </h1>

          <p className="hero-paragraph">
            Nasi kotak kantor, acara keluarga, sampai prasmanan — lauk dan harganya disusun mengikuti porsi dan budget Anda.
          </p>

          <div className="hero-cta-row">
            <a
              href={WA_LINKS.catering}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <WhatsAppIcon size={17} /> Konsultasi Catering
            </a>
            <a href="#menu-harian" className="btn btn-outline-dark">
              <UtensilsCrossed size={17} /> Lihat Menu Harian
            </a>
          </div>

          <div className="hero-trust-badges">
            <div className="trust-item">
              <Clock size={16} className="trust-icon" />
              <span>Buka 09.00 - 22.00 WIB</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item">
              <ShieldCheck size={16} className="trust-icon" />
              <span>Masakan halal rumahan</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item">
              <MapPin size={16} className="trust-icon" />
              <span>Dewi Sartika, Cawang</span>
            </div>
          </div>
        </div>

        <div className="hero-visual-col">
          <div className="hero-image-frame">
            <img
              src={HERO_IMAGE}
              alt="Hidangan masakan Padang Umi Andrew dengan rendang, gulai, ayam pop, sambal ijo, daun singkong, dan nasi untuk pesanan catering"
              className="hero-main-photo"
            />
            <div className="image-gold-border"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
