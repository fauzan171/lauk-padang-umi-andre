import React from 'react';
import { CheckCircle2, Award, HeartHandshake, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section className="section-about" id="about">
      <div className="container grid-two-cols">
        <div className="about-visuals">
          <div className="image-card-main">
            <img 
              src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop" 
              alt="Rendang Daging Padang Umi Andrew"
              className="featured-photo"
            />
            <div className="floating-experience-badge">
              <Sparkles size={20} className="gold-text" />
              <div>
                <strong>Cita Rasa Otentik</strong>
                <span>Resep Turun Temurun</span>
              </div>
            </div>
          </div>
          <div className="image-card-sub">
            <img 
              src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=500&auto=format&fit=crop" 
              alt="Ayam Pop dan Sambal Padang"
              className="sub-photo"
            />
          </div>
        </div>

        <div className="about-narrative">
          <span className="eyebrow-text">KEMURNIAN RESEP LELUHUR MINANG</span>
          <h2 className="section-heading">
            Dedikasi Rasa Dari Hati Umi Andrew Untuk Warga Cawang
          </h2>
          <div className="gold-divider"></div>

          <p className="narrative-text">
            Warung Makan <strong>Umi Andrew</strong> berdiri dengan komitmen menjaga warisan kuliner Minangkabau dalam bentuk paling murninya. Mengambil inspirasi dari standar kelezatan dan kerapian restoran legendaris seperti <em>Pagi Sore</em> dan <em>Sari Ratu</em>, kami memastikan bahwa cita rasa premium dapat dinikmati oleh semua kalangan.
          </p>

          <p className="narrative-text">
            Mulai dari rendang yang dimasak sabar hingga bumbu hitam berminyak kalio, ayam pop gurih lembut dengan sambal tomat rebus, hingga kuah gulai kepala kakap yang segar asam kandis. Semua diolah dari dapur bersih dengan rempah segar tanpa bahan kimia sintetis.
          </p>

          <div className="value-props-list">
            <div className="prop-item">
              <CheckCircle2 className="prop-check" size={20} />
              <div>
                <strong>Daging Sapi Segar & Pilihan Gandik</strong>
                <p>Serat daging empuk meresap sampai ke dalam tanpa alot.</p>
              </div>
            </div>

            <div className="prop-item">
              <CheckCircle2 className="prop-check" size={20} />
              <div>
                <strong>Santan Kelapa Murni Tanpa Campuran</strong>
                <p>Rasa gurih alami nan kaya tanpa rasa begah di tenggorokan.</p>
              </div>
            </div>

            <div className="prop-item">
              <CheckCircle2 className="prop-check" size={20} />
              <div>
                <strong>Harga Bersahabat Skala UMKM</strong>
                <p>Kualitas rasa restoran bintang lima dengan harga terjangkau ramah kantong.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
