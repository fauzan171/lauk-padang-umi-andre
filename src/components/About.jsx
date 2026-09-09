import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { HERO_IMAGE } from '../data';

const ABOUT_SUB_IMAGE =
  'https://commons.wikimedia.org/wiki/Special:Redirect/file/Ayam%20Pop%201.jpg';

export default function About() {
  return (
    <section className="section-about" id="about">
      <div className="container grid-two-cols reveal-group">
        <div className="about-visuals">
          <div className="image-card-main">
            <img
              src={HERO_IMAGE}
              alt="Hidangan masakan Padang untuk pesanan catering Warung Umi Andrew"
              className="featured-photo"
            />
            <div className="floating-experience-badge">
              <Sparkles size={20} className="gold-text" />
              <div>
                <strong>Dapur Catering</strong>
                <span>Dimasak mengikuti jadwal acara</span>
              </div>
            </div>
          </div>
          <div className="image-card-sub">
            <img
              src={ABOUT_SUB_IMAGE}
              alt="Ayam pop khas Padang untuk pesanan catering"
              className="sub-photo"
            />
          </div>
        </div>

        <div className="about-narrative">
          <span className="eyebrow-text">CERITA DAPUR UMI ANDREW</span>
          <h2 className="section-heading">
            Dapur rumahan di Cawang yang paling hidup saat ada pesanan catering
          </h2>
          <div className="gold-divider"></div>

          <p className="narrative-text">
            <strong>Umi Andrew</strong> berawal dari dapur rumahan. Sehari-hari warung menyajikan paket nasi, mie, kwetiaw, dan nasi goreng yang cepat dan mengenyangkan.
          </p>

          <p className="narrative-text">
            Masakan Padang lengkap — rendang, ayam pop, gulai — paling sering kami masak untuk <strong>pesanan catering</strong>: dimasak bertahap mengikuti jumlah porsi, sampai di acara dalam kondisi segar.
          </p>

          <div className="value-props-list">
            <div className="prop-item">
              <CheckCircle2 className="prop-check" size={20} />
              <div>
                <strong>Lauk &amp; Harga Menyesuaikan</strong>
                <p>Kombinasi lauk bisa ditukar supaya masuk budget per porsi.</p>
              </div>
            </div>

            <div className="prop-item">
              <CheckCircle2 className="prop-check" size={20} />
              <div>
                <strong>Dimasak Ikut Jadwal Acara</strong>
                <p>Pesanan besar dimasak bertahap, bukan disiapkan lalu ditunggu.</p>
              </div>
            </div>

            <div className="prop-item">
              <CheckCircle2 className="prop-check" size={20} />
              <div>
                <strong>Dua Jalur, Satu Dapur</strong>
                <p>Makan cepat di warung; catering untuk acara dan porsi banyak.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
