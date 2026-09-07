import React from 'react';
import { RESTAURANT_INFO } from '../data';
import { Users, Sparkles, Wind, Car, CalendarCheck } from 'lucide-react';

export default function DineIn() {
  return (
    <section className="section-dinein" id="dinein">
      <div className="container">
        <div className="dinein-card-banner">
          <div className="dinein-header-content text-center">
            <span className="eyebrow-text gold-text">TRADISI MANJANGKAN PIRING</span>
            <h2 className="section-heading light-heading">Pengalaman Makan Di Tempat (Dine-In)</h2>
            <div className="gold-divider center-div"></div>
            <p className="dinein-description">
              Sambut keramahan Ranah Minang di Warung Umi Andrew Cawang. Rasakan tradisi hidang di mana belasan piring aneka lauk tersaji rapi di meja Anda. Cukup nikmati lauk yang Anda sukai, hanya bayar apa yang dimakan.
            </p>
          </div>

          <div className="dinein-perks-grid">
            <div className="dinein-perk-item">
              <div className="perk-icon-circle"><Sparkles size={24} /></div>
              <h4>Sensasi Meja Hidang</h4>
              <p>Aneka lauk rendang, ayam pop, tunjang, dan gulai disajikan lengkap di meja selayaknya jamuan istimewa.</p>
            </div>

            <div className="dinein-perk-item">
              <div className="perk-icon-circle"><Wind size={24} /></div>
              <h4>Ruang Nyaman & Bersih</h4>
              <p>Area makan ber-AC, musholla pria & wanita bersih, kobokan higienis, serta Wi-Fi cepat.</p>
            </div>

            <div className="dinein-perk-item">
              <div className="perk-icon-circle"><Car size={24} /></div>
              <h4>Akses & Parkir Mudah di Cawang</h4>
              <p>Terletak di jalan utama Dewi Sartika, area parkir motor dan mobil nyaman didampingi juru parkir.</p>
            </div>
          </div>

          <div className="dinein-booking-box">
            <div className="booking-info">
              <div className="booking-title">Mau Makan Siang Tim Kantor atau Kumpul Keluarga?</div>
              <p className="booking-subtitle">Hubungi kami untuk reservasi meja hidang khusus agar tidak perlu mengantre saat jam makan sibuk.</p>
            </div>
            <a 
              href={`https://wa.me/${RESTAURANT_INFO.phoneRaw}?text=Halo%20Umi%20Andrew,%20saya%20mau%20reservasi%20meja%20dine-in`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-gold"
            >
              <CalendarCheck size={18} /> Reservasi Meja Dine-In
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
