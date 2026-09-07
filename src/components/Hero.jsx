import React from 'react';
import { RESTAURANT_INFO } from '../data';
import { UtensilsCrossed, ShieldCheck, Clock, Flame, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-block" id="hero">
      <div className="hero-backdrop-gradient"></div>
      <div className="container hero-inner">
        <div className="hero-tagline-badge">
          <span className="star-icon">✦</span>
          WARUNG MAKAN KHAS MINANG ASLI • CAWANG JAKARTA TIMUR
          <span className="star-icon">✦</span>
        </div>

        <h1 className="hero-main-title">
          Kelezatan Gurih Berempah, <br />
          <span className="gold-shimmer">Resep Dapur Umi Andrew</span>
        </h1>

        <p className="hero-subtext">
          Menghadirkan kelezatan khas Ranah Minang yang terinspirasi dari standar legendaris Pagi Sore & Sari Ratu, dengan bumbu rempah melimpah, santan kelapa murni, dan harga terjangkau bagi para penikmat kuliner di kawasan Cawang.
        </p>

        {/* Quick Order Hub Panel */}
        <div className="channel-hub-card">
          <div className="hub-header-label">PILIH CARA MENIKMATI:</div>
          <div className="hub-grid">
            <a href={RESTAURANT_INFO.gofoodUrl} target="_blank" rel="noopener noreferrer" className="hub-card hub-gofood">
              <div className="hub-badge-circle gf">GF</div>
              <div className="hub-meta">
                <strong>Pesan di GoFood</strong>
                <span>Diskon Ongkir & Paket Nasi Hemat</span>
              </div>
              <ChevronRight size={18} className="hub-arrow" />
            </a>

            <a href={RESTAURANT_INFO.grabfoodUrl} target="_blank" rel="noopener noreferrer" className="hub-card hub-grabfood">
              <div className="hub-badge-circle gr">GR</div>
              <div className="hub-meta">
                <strong>Pesan di GrabFood</strong>
                <span>Siap Santap & GrabUnlimited</span>
              </div>
              <ChevronRight size={18} className="hub-arrow" />
            </a>

            <a href="#dinein" className="hub-card hub-dinein">
              <div className="hub-badge-circle dm">RM</div>
              <div className="hub-meta">
                <strong>Makan di Tempat (Dine-in)</strong>
                <span>Tradisi Hidang Meja & Ruangan Nyaman</span>
              </div>
              <ChevronRight size={18} className="hub-arrow" />
            </a>
          </div>
        </div>

        {/* Key Selling Points */}
        <div className="hero-metrics">
          <div className="metric-box">
            <div className="metric-icon-wrap"><Flame size={20} /></div>
            <div>
              <span className="metric-val">8+ Jam</span>
              <span className="metric-lbl">Pemasakan Rendang Sapi Karamel</span>
            </div>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-box">
            <div className="metric-icon-wrap"><ShieldCheck size={20} /></div>
            <div>
              <span className="metric-val">100% Halal</span>
              <span className="metric-lbl">Bahan Alami Tanpa Pengawet</span>
            </div>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-box">
            <div className="metric-icon-wrap"><Clock size={20} /></div>
            <div>
              <span className="metric-val">09.00 - 22.00</span>
              <span className="metric-lbl">Buka Setiap Hari Siap Layani</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
