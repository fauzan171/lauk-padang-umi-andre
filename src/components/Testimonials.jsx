import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Bambang Rahardian",
      role: "Staf kantor di Cawang • Nasi kotak rapat",
      quote: "Pesan nasi kotak untuk rapat tim. Lauk dan sambalnya dipisah, jadi sampai kantor masih rapi. Menunya juga bisa disesuaikan budget yang kami punya.",
      rating: 5,
      avatarText: "BR"
    },
    {
      name: "Siti Nurhaliza",
      role: "Pelanggan warung harian",
      quote: "Paket nasi cumi cabe ijo sama dadar barendo jadi andalan makan siang. Dadarnya pinggirnya garing, cuminya tidak amis. Mie gorengnya juga masih panas waktu diambil.",
      rating: 5,
      avatarText: "SN"
    },
    {
      name: "Hendro Wibowo",
      role: "Acara keluarga • Prasmanan arisan",
      quote: "Untuk arisan keluarga saya minta kombinasi lauk Padang dan lauk yang tidak pedas supaya anak-anak bisa makan. Admin yang menyusun menunya, hasilnya pas.",
      rating: 5,
      avatarText: "HW"
    }
  ];

  return (
    <section className="section-testi">
      <div className="container">
        <div className="section-header text-center">
          <span className="eyebrow-text">CATATAN PELANGGAN</span>
          <h2 className="section-heading">Dari pesanan catering sampai makan siang harian</h2>
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
