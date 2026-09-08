import React from 'react';
import { RESTAURANT_INFO, WA_LINKS } from '../data';
import { Truck, Bike, MessageSquareText, Check } from 'lucide-react';

export default function OrderChannels() {
  return (
    <section className="section-order" id="order">
      <div className="container">
        <div className="section-header text-center">
          <span className="eyebrow-text">PESAN TANPA RIBET</span>
          <h2 className="section-heading">WhatsApp untuk catering, aplikasi untuk menu harian</h2>
          <div className="gold-divider center-div"></div>
          <p className="section-desc">
            Pesanan katering paling enak diatur lewat WhatsApp karena lauk, jumlah porsi, dan jam kirim bisa dibicarakan langsung. Untuk menu harian satuan, GoFood dan GrabFood lebih cepat.
          </p>
        </div>

        <div className="order-platforms-grid">
          {/* Direct WA Card - jalur utama untuk catering */}
          <div className="platform-box wa-card platform-box-primary">
            <div className="platform-header-badge wa-badge">JALUR UTAMA CATERING</div>
            <div className="platform-icon-circle wa-bg">
              <MessageSquareText size={32} color="#fff" />
            </div>
            <h3 className="platform-title">WhatsApp Admin</h3>
            <p className="platform-location">Umi Andrew: {RESTAURANT_INFO.phone}</p>

            <ul className="platform-perks-list">
              <li><Check size={16} className="perk-check" /> Lauk &amp; harga menyesuaikan permintaan</li>
              <li><Check size={16} className="perk-check" /> Nasi kotak, prasmanan, acara keluarga</li>
              <li><Check size={16} className="perk-check" /> Bisa atur jam kirim &amp; lokasi acara</li>
              <li><Check size={16} className="perk-check" /> Tanpa biaya tambahan aplikasi</li>
            </ul>

            <a
              href={WA_LINKS.catering}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-platform btn-gold-solid"
            >
              Konsultasi Catering
            </a>
          </div>

          {/* GoFood Card */}
          <div className="platform-box gf-card">
            <div className="platform-header-badge gf-badge">GOFOOD RESMI</div>
            <div className="platform-icon-circle gf-bg">
              <Bike size={32} color="#fff" />
            </div>
            <h3 className="platform-title">GoFood Indonesia</h3>
            <p className="platform-location">RM Padang Umi Andrew - Cawang</p>

            <ul className="platform-perks-list">
              <li><Check size={16} className="perk-check" /> Paket nasi + dadar barendo</li>
              <li><Check size={16} className="perk-check" /> Nasi goreng, mie goreng, mie rebus</li>
              <li><Check size={16} className="perk-check" /> Praktis untuk makan siang cepat</li>
              <li><Check size={16} className="perk-check" /> Pantau driver dari aplikasi</li>
            </ul>

            <a
              href={RESTAURANT_INFO.gofoodUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-platform btn-gofood-solid"
            >
              Buka di GoFood
            </a>
          </div>

          {/* GrabFood Card */}
          <div className="platform-box gr-card">
            <div className="platform-header-badge gr-badge">GRABFOOD</div>
            <div className="platform-icon-circle gr-bg">
              <Truck size={32} color="#fff" />
            </div>
            <h3 className="platform-title">GrabFood</h3>
            <p className="platform-location">Warung Padang Umi Andrew - Dewi Sartika</p>

            <ul className="platform-perks-list">
              <li><Check size={16} className="perk-check" /> Bisa pakai promo aplikasi</li>
              <li><Check size={16} className="perk-check" /> Kemasan food-grade anti tumpah</li>
              <li><Check size={16} className="perk-check" /> Kwetiaw goreng &amp; menu harian lain</li>
              <li><Check size={16} className="perk-check" /> Delivery terpercaya area Cawang</li>
            </ul>

            <a
              href={RESTAURANT_INFO.grabfoodUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-platform btn-grabfood-solid"
            >
              Buka di GrabFood
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
