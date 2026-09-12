import React from 'react';
import { WA_LINKS } from '../data';
import WhatsAppIcon from './WhatsAppIcon';

export default function DineIn() {
  return (
    <section className="section-dinein" id="dinein">
      <div className="container">
        <div className="dinein-card-banner reveal">
          <div className="dinein-header-content text-center">
            <span className="eyebrow-text gold-text">MAKAN DI WARUNG</span>
            <h2 className="section-heading light-heading">Mampir sebentar, makan panas, lanjut lagi</h2>
            <div className="gold-divider center-div"></div>
            <p className="dinein-description">
              Warung sederhana, menu tetap tuntas: paket nasi dengan dadar barendo, kwetiaw, nasi goreng, mie goreng, dan mie rebus. Makan di tempat atau dibungkus.
            </p>
          </div>

          <div className="dinein-booking-box">
            <div className="booking-info">
              <div className="booking-title">Mau ambil pesanan catering di warung?</div>
              <p className="booking-subtitle">
                Chat dulu supaya lauk siap saat Anda tiba.
              </p>
            </div>
            <a
              href={WA_LINKS.lokasi}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <WhatsAppIcon size={18} /> Chat Admin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
