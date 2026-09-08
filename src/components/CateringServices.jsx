import React from 'react';
import { CATERING_TYPES, CATERING_PACKAGES, CATERING_STEPS, WA_LINKS } from '../data';
import { MessageCircle, Check } from 'lucide-react';

export default function CateringServices() {
  return (
    <section className="section-catering-services" id="layanan-catering">
      <div className="container">
        <div className="section-header text-center">
          <span className="eyebrow-text">JENIS PESANAN YANG KAMI LAYANI</span>
          <h2 className="section-heading">Dari nasi kotak kantor sampai prasmanan</h2>
          <div className="gold-divider center-div"></div>
          <p className="section-desc">
            Empat bentuk pesanan yang paling sering masuk ke dapur kami. Semuanya bisa diatur lauknya, jumlahnya, dan jam pengirimannya.
          </p>
        </div>

        <div className="catering-types-grid">
          {CATERING_TYPES.map((type) => (
            <article className="ctype-card" key={type.id}>
              <h3 className="ctype-title">{type.title}</h3>
              <p className="ctype-desc">{type.desc}</p>
              <ul className="ctype-points">
                {type.points.map((point) => (
                  <li key={point}>
                    <Check size={15} className="ctype-point-check" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href={WA_LINKS[type.wa]}
                target="_blank"
                rel="noopener noreferrer"
                className="ctype-btn"
              >
                <MessageCircle size={15} /> Tanya via WhatsApp
              </a>
            </article>
          ))}
        </div>

        <div className="packages-block">
          <div className="section-header text-center">
            <span className="eyebrow-text">SUSUNAN ISI KOTAK</span>
            <h2 className="section-heading-sm">Pilihan isi nasi kotak</h2>
            <p className="section-desc">
              Harga tidak dipatok di sini karena mengikuti lauk yang dipilih dan jumlah porsi. Setelah menu disepakati, admin menghitung totalnya langsung di WhatsApp.
            </p>
          </div>

          <div className="packages-grid">
            {CATERING_PACKAGES.map((pkg) => (
              <div
                className={`package-card ${pkg.featured ? 'package-card-featured' : ''}`}
                key={pkg.id}
              >
                {pkg.featured && <span className="package-flag">Paling Sering Dipesan</span>}
                <h3 className="package-name">{pkg.name}</h3>
                <p className="package-summary">{pkg.summary}</p>
                <ul className="package-contents">
                  {pkg.contents.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <span className="package-price-note">Harga menyesuaikan lauk &amp; jumlah porsi</span>
              </div>
            ))}
          </div>
        </div>

        <div className="steps-block">
          <div className="section-header text-center">
            <span className="eyebrow-text">CARA PESAN</span>
            <h2 className="section-heading-sm">Empat langkah dari chat sampai makanan tiba</h2>
          </div>

          <div className="steps-row">
            {CATERING_STEPS.map((item) => (
              <div className="step-card" key={item.step}>
                <span className="step-number">{item.step}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
