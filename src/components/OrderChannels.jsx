import React from 'react';
import { RESTAURANT_INFO } from '../data';
import { ShoppingBag, Truck, Bike, MessageSquareText, Check } from 'lucide-react';

export default function OrderChannels() {
  return (
    <section className="section-order" id="order">
      <div className="container">
        <div className="section-header text-center">
          <span className="eyebrow-text">LAYANAN PESAN ANTAR</span>
          <h2 className="section-heading">Tersedia di GoFood, GrabFood & WhatsApp</h2>
          <div className="gold-divider center-div"></div>
          <p className="section-desc">
            Pilih metode pemesanan yang paling nyaman untuk Anda. Setiap paket dikemas dengan standar higienis double-seal agar lauk dan kuah tiba tetap segar dan hangat.
          </p>
        </div>

        <div className="order-platforms-grid">
          {/* GoFood Card */}
          <div className="platform-box gf-card">
            <div className="platform-header-badge gf-badge">GOFOOD RESMI</div>
            <div className="platform-icon-circle gf-bg">
              <Bike size={32} color="#fff" />
            </div>
            <h3 className="platform-title">GoFood Indonesia</h3>
            <p className="platform-location">RM Padang Umi Andrew - Cawang</p>
            
            <ul className="platform-perks-list">
              <li><Check size={16} className="perk-check" /> Diskon Ongkir GoPay Plus</li>
              <li><Check size={16} className="perk-check" /> Paket Makan Siang Hemat</li>
              <li><Check size={16} className="perk-check" /> Estimasi Antar Cepat 20-30 Menit</li>
              <li><Check size={16} className="perk-check" /> Rating Bintang 4.9 ★★★★★</li>
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
            <div className="platform-header-badge gr-badge">GRABFOOD PREFERRED</div>
            <div className="platform-icon-circle gr-bg">
              <Truck size={32} color="#fff" />
            </div>
            <h3 className="platform-title">GrabFood</h3>
            <p className="platform-location">Warung Padang Umi Andrew - Dewi Sartika</p>
            
            <ul className="platform-perks-list">
              <li><Check size={16} className="perk-check" /> Promo GrabUnlimited Setiap Hari</li>
              <li><Check size={16} className="perk-check" /> Kemasan Food-Grade Anti Tumpah</li>
              <li><Check size={16} className="perk-check" /> Fitur Group Order bareng Teman Kantor</li>
              <li><Check size={16} className="perk-check" /> Delivery Terpercaya di Area Cawang</li>
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

          {/* Direct WA Card */}
          <div className="platform-box wa-card">
            <div className="platform-header-badge wa-badge">PESAN LANGSUNG UMKM</div>
            <div className="platform-icon-circle wa-bg">
              <MessageSquareText size={32} color="#fff" />
            </div>
            <h3 className="platform-title">WhatsApp Resmi</h3>
            <p className="platform-location">Admin Warung Umi Andrew: {RESTAURANT_INFO.phone}</p>
            
            <ul className="platform-perks-list">
              <li><Check size={16} className="perk-check" /> Tanpa Biaya Tambahan Aplikasi</li>
              <li><Check size={16} className="perk-check" /> Bisa Request Sambal Ijo & Bumbu Kuah Ekstra</li>
              <li><Check size={16} className="perk-check" /> Pemesanan Jumlah Banyak & Katering Acara</li>
              <li><Check size={16} className="perk-check" /> Pengiriman via Kurir Instan / Ambil Sendiri</li>
            </ul>

            <a 
              href={`https://wa.me/${RESTAURANT_INFO.phoneRaw}?text=Halo%20Umi%20Andrew,%20saya%20mau%20pesan%20menu%20langsung`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-platform btn-gold-solid"
            >
              Chat Admin WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
