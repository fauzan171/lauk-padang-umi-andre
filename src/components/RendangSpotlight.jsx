import React from 'react';
import { RESTAURANT_INFO } from '../data';
import { Flame, Clock, ShieldAlert, Award, MessageCircle } from 'lucide-react';

export default function RendangSpotlight() {
  return (
    <section className="section-rendang-spotlight" id="rendang">
      <div className="container spotlight-container">
        <div className="spotlight-header text-center">
          <span className="eyebrow-text gold-text">MAHAKARYA KHAS MINANG</span>
          <h2 className="section-heading light-heading">
            Rendang Pusaka Daging Hitam Umi Andrew
          </h2>
          <div className="gold-divider center-div"></div>
          <p className="spotlight-subtitle">
            Dibuat melalui proses tradisional 8 jam pengadukan sabar di atas kuali besi. Santan kelapa menyusut menjadi kalio hingga terkaramelisasi menjadi bumbu hitam gurih berminyak alami.
          </p>
        </div>

        <div className="spotlight-features-row">
          <div className="feature-pillar">
            <div className="pillar-badge">01</div>
            <h3>Daging Sapi Gandik Utuh</h3>
            <p>Dipilih tanpa lemak jenuh berlebih, dipotong presisi agar sari bumbu mengunci di setiap serat daging.</p>
          </div>

          <div className="feature-pillar highlight-pillar">
            <div className="pillar-badge">02</div>
            <h3>12 Racikan Rempah Minang</h3>
            <p>Kapulaga wangi, cengkeh aromatik, serai, daun jeruk purut, lengkuas, dan cabai merah keriting Bukit Tinggi.</p>
          </div>

          <div className="feature-pillar">
            <div className="pillar-badge">03</div>
            <h3>Awet Alami Tanpa Kimia</h3>
            <p>Karena santan benar-benar matang matang kecokelatan, rendang tahan hingga 2 minggu disimpan dalam suhu ruang.</p>
          </div>
        </div>

        <div className="spotlight-action-box">
          <div className="box-text">
            <h4>Ingin Pesan Rendang Porsi Keluarga / Kemasan Khusus 500g & 1kg?</h4>
            <p>Kami melayani pengiriman rendang frozen / vakum ke seluruh Jabodetabek & antar kota.</p>
          </div>
          <a 
            href={`https://wa.me/${RESTAURANT_INFO.phoneRaw}?text=Halo%20Umi%20Andrew,%20saya%20mau%20pesan%20Rendang%20Hitam%20Spesial`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <MessageCircle size={18} /> Pesan Rendang via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
