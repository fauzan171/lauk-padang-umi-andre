import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Bambang Rahardian",
      role: "Karyawan Swasta di Cawang",
      quote: "Rendangnya luar biasa empuk dan bumbu hitam karamelnya sangat meresap persis Pagi Sore tapi dengan harga UMKM yang bersahabat. Setiap jam istirahat kantor selalu ke sini.",
      rating: 5,
      avatarText: "BR"
    },
    {
      name: "Siti Nurhaliza",
      role: "Pelanggan GoFood & GrabFood",
      quote: "Ayam pop dan sambal ladonya segar banget! Minyak kelapanya wangi. Kalau pesan lewat GoFood atau GrabFood, kuah gulai dibungkus rapat double anti bocor. Sangat rapi!",
      rating: 5,
      avatarText: "SN"
    },
    {
      name: "Hendro Wibowo",
      role: "Pelanggan Katering Nasi Kotak",
      quote: "Pesan 60 box nasi rendang komplit untuk acara syukuran kantor. Semua rekan kerja memuji rasa sayur nangka dan tunjangnya. Pengantaran tepat waktu masih hangat.",
      rating: 5,
      avatarText: "HW"
    }
  ];

  return (
    <section className="section-testi">
      <div className="container">
        <div className="section-header text-center">
          <span className="eyebrow-text">TESTIMONI PELANGGAN</span>
          <h2 className="section-heading">Kelezatan yang Diakui di Cawang</h2>
          <div className="gold-divider center-div"></div>
        </div>

        <div className="testimonials-grid">
          {reviews.map((rev, idx) => (
            <div className="review-card" key={idx}>
              <div className="star-row">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#e5a93b" color="#e5a93b" />
                ))}
              </div>
              <p className="review-quote">"{rev.quote}"</p>
              <div className="reviewer-info">
                <div className="avatar-chip">{rev.avatarText}</div>
                <div>
                  <strong>{rev.name}</strong>
                  <span>{rev.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
