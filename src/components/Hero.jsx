import React from 'react';
import { HERO_IMAGE, RESTAURANT_INFO, WA_LINKS } from '../data';
import { GoFoodLogo, GrabFoodLogo } from './BrandLogos';
import { UtensilsCrossed, Clock, ShieldCheck, MapPin, MessageCircle, PackageCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-dark-overlay"></div>

      <div className="container hero-content-grid">
        <div className="hero-text-col">
          <div className="hero-badge-pill">
            <span className="pill-dot"></span>
            CATERING &amp; MASAKAN RUMAHAN • CAWANG, JAKARTA TIMUR
          </div>

          <h1 className="hero-headline">
            Catering Padang Umi Andrew, <br />
            <span className="gold-gradient-text">lauk dan harga</span> mengikuti permintaan Anda
          </h1>

          <p className="hero-paragraph">
            Melayani nasi kotak kantor, acara keluarga, sampai prasmanan di kawasan Cawang dan sekitarnya. Menunya tidak dikunci — sebutkan jumlah porsi dan budget, kami susun kombinasi lauk Padang dan lauk rumahan yang pas. Warung kami juga buka tiap hari untuk menu mie, nasi goreng, dan paket nasi.
          </p>

          <div className="hero-cta-row">
            <a
              href={WA_LINKS.catering}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={17} /> Konsultasi Catering
            </a>
            <a href="#menu-harian" className="btn btn-outline-light">
              <UtensilsCrossed size={17} /> Lihat Menu Harian
            </a>
          </div>

          <div className="hero-secondary-channels">
            <span className="secondary-channels-label">PESAN SATUAN LEWAT:</span>
            <a
              href={RESTAURANT_INFO.gofoodUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-channel-link"
            >
              <GoFoodLogo height={20} />
            </a>
            <a
              href={RESTAURANT_INFO.grabfoodUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-channel-link"
            >
              <GrabFoodLogo height={20} />
            </a>
            <a href="#dinein" className="secondary-channel-link channel-dinein">
              <UtensilsCrossed size={16} /> Makan di warung
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

            <div className="floating-dish-card">
              <div className="dish-star"><PackageCheck size={16} /> Layanan Utama</div>
              <strong>Paket Nasi Kotak Catering</strong>
              <p>Lauk Padang &amp; rumahan, sayur, sambal, dan kerupuk dikemas terpisah</p>
              <span className="dish-price-badge">Lauk &amp; harga menyesuaikan permintaan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
