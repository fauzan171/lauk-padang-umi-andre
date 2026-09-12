import React from 'react';
import { WA_LINKS } from '../data';
import WhatsAppIcon from './WhatsAppIcon';

export default function CateringHub() {
  return (
    <section className="section-catering-hub" id="catering">
      <div className="container chub-container">
        <div className="chub-header text-center reveal">
          <span className="eyebrow-text gold-text">LAYANAN UTAMA KAMI</span>
          <h2 className="section-heading light-heading">
            Catering yang lauk dan harganya mengikuti permintaan Anda
          </h2>
          <div className="gold-divider center-div"></div>
          <p className="chub-subtitle">
            Menu tidak dikunci. Sebutkan porsi dan budget, kami yang menyusun kombinasi lauknya.
          </p>
          <a
            href={WA_LINKS.catering}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold chub-cta"
          >
            <WhatsAppIcon size={18} /> Konsultasi Catering
          </a>
        </div>
      </div>
    </section>
  );
}
