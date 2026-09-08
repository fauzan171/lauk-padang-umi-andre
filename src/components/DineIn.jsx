import React from 'react';
import { WA_LINKS } from '../data';
import { UtensilsCrossed, Wind, Car, MessageCircle } from 'lucide-react';

export default function DineIn() {
  return (
    <section className="section-dinein" id="dinein">
      <div className="container">
        <div className="dinein-card-banner">
          <div className="dinein-header-content text-center">
            <span className="eyebrow-text gold-text">MAKAN DI WARUNG</span>
            <h2 className="section-heading light-heading">Mampir sebentar, makan panas, lanjut lagi</h2>
            <div className="gold-divider center-div"></div>
            <p className="dinein-description">
              Warung kami sederhana, bukan rumah makan Padang besar dengan deretan etalase. Yang tersedia tiap hari adalah paket nasi dengan cumi cabe ijo atau ayam suwir balado plus telur dadar barendo, lalu kwetiaw goreng, nasi goreng, mie goreng, dan mie rebus. Semuanya bisa dimakan di tempat atau dibungkus.
            </p>
          </div>

          <div className="dinein-perks-grid">
            <div className="dinein-perk-item">
              <div className="perk-icon-circle"><UtensilsCrossed size={24} /></div>
              <h4>Dimasak Per Pesanan</h4>
              <p>Mie, kwetiaw, dan nasi goreng dibuat saat dipesan supaya masih panas. Tingkat pedas dan tambahan telur bisa diminta.</p>
            </div>

            <div className="dinein-perk-item">
              <div className="perk-icon-circle"><Wind size={24} /></div>
              <h4>Ruang Makan Ringkas</h4>
              <p>Meja disiapkan untuk makan cepat di sela kerja, atau untuk menunggu pesanan dibungkus dan diambil.</p>
            </div>

            <div className="dinein-perk-item">
              <div className="perk-icon-circle"><Car size={24} /></div>
              <h4>Akses Cawang</h4>
              <p>Di jalur Dewi Sartika, dekat area kantor, halte, dan rute pulang kerja Jakarta Timur.</p>
            </div>
          </div>

          <div className="dinein-booking-box">
            <div className="booking-info">
              <div className="booking-title">Mau ambil pesanan catering di warung?</div>
              <p className="booking-subtitle">
                Chat dulu supaya lauk siap saat Anda tiba, atau sekalian atur pengiriman ke lokasi acara di Cawang dan sekitarnya.
              </p>
            </div>
            <a
              href={WA_LINKS.lokasi}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Chat Admin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
