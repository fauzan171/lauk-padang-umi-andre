import React from 'react';
import { CATERING_CATALOG, CATERING_FAQ, WA_LINKS, RESTAURANT_INFO } from '../data';
import { MessageCircle, Plus } from 'lucide-react';

export default function CateringCatalog() {
  return (
    <section className="section-catering-catalog" id="katalog-lauk">
      <div className="container">
        <div className="section-header text-center reveal">
          <span className="eyebrow-text">KATALOG LAUK CATERING</span>
          <h2 className="section-heading">Daftar lauk yang biasa kami masak untuk pesanan</h2>
          <div className="gold-divider center-div"></div>
          <p className="section-desc">
            Lauk yang bisa dipesan untuk katering — gabungan Padang dan rumahan, selera semua tamu terwakili.
          </p>
        </div>

        <div className="catalog-groups">
          {CATERING_CATALOG.map((group) => {
            const featured = group.items.filter((item) => item.image);
            const rest = group.items.filter((item) => !item.image);

            return (
              <div className="catalog-group reveal" key={group.id}>
                <div className="catalog-group-head">
                  <h3>{group.title}</h3>
                  <p>{group.note}</p>
                </div>

                {featured.length > 0 && (
                  <div className="catalog-featured-grid">
                    {featured.map((item) => (
                      <article className="catalog-feature-card" key={item.name}>
                        <div className="catalog-feature-thumb">
                          {item.tag && <span className="catalog-tag">{item.tag}</span>}
                          <img src={item.image} alt={item.name} loading="lazy" />
                        </div>
                        <div className="catalog-feature-body">
                          <h4>{item.name}</h4>
                          <p>{item.desc}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                )}

                {rest.length > 0 && (
                  <ul className="catalog-chip-list">
                    {rest.map((item) => (
                      <li className="catalog-chip" key={item.name}>
                        <Plus size={13} /> {item.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        <div className="catalog-cta-strip reveal">
          <div>
            <h4>Tidak menemukan lauk yang dicari?</h4>
            <p>Sebutkan lewat WhatsApp — menu di luar katalog bisa dibicarakan.</p>
          </div>
          <a
            href={WA_LINKS.laukPadang}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <MessageCircle size={18} /> Request Lauk Khusus
          </a>
        </div>

        <div className="catalog-faq-block reveal">
          <div className="section-header text-center reveal">
            <span className="eyebrow-text">PERTANYAAN YANG SERING MASUK</span>
            <h2 className="section-heading-sm">Soal katering di Umi Andrew</h2>
          </div>

          <div className="faq-list">
            {CATERING_FAQ.map((entry) => (
              <details className="faq-item" key={entry.q}>
                <summary>{entry.q}</summary>
                <p>{entry.a}</p>
              </details>
            ))}
          </div>

          <p className="faq-fallback">
            Masih ada yang mau ditanyakan? Telepon atau chat{" "}
            <strong>{RESTAURANT_INFO.phone}</strong> langsung.
          </p>
        </div>
      </div>
    </section>
  );
}
