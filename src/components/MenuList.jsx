import React from 'react';
import { DAILY_MENU_GROUPS, WA_LINKS } from '../data';
import { Plus } from 'lucide-react';

export default function MenuList({ onSelectItem }) {
  return (
    <section className="section-menu" id="menu-harian">
      <div className="container">
        <div className="section-header text-center reveal">
          <span className="eyebrow-text">MENU HARIAN WARUNG</span>
          <h2 className="section-heading">Yang siap tiap hari di warung</h2>
          <div className="gold-divider center-div"></div>
          <p className="section-desc">
            Sedia setiap hari. Untuk lauk Padang jumlah banyak — rendang, ayam pop, gulai — lewat jalur catering.
          </p>
          <p className="section-price-note">
            Harga mengikuti porsi. Sebutkan menunya lewat WhatsApp.
          </p>
        </div>

        <div className="daily-groups reveal-group">
          {DAILY_MENU_GROUPS.map((group) => (
            <div className="daily-group" key={group.id}>
              <div className="daily-group-head">
                <h3>{group.label}</h3>
                <p>{group.note}</p>
              </div>

              <div className="daily-cards-grid">
                {group.items.map((item) => (
                  <article className="daily-card" key={item.id}>
                    {item.badge && <span className="daily-card-badge">{item.badge}</span>}
                    <h4 className="daily-card-name">{item.name}</h4>
                    <p className="daily-card-desc">{item.desc}</p>

                    <button
                      className="btn-add-order"
                      onClick={() => onSelectItem(item)}
                    >
                      <Plus size={16} /> Pesan Menu Ini
                    </button>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="menu-crosslink reveal">
          <p>
            Butuh porsi banyak atau lauk Padang lengkap?{" "}
            <a href="#katalog-lauk">Lihat katalog lauk</a> atau{" "}
            <a
              href={WA_LINKS.catering}
              target="_blank"
              rel="noopener noreferrer"
            >
              konsultasi catering
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
