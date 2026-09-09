import React from 'react';
import { HERO_IMAGE, WA_LINKS } from '../data';
import { MessageCircle, ChefHat, Wallet, PackageCheck } from 'lucide-react';

export default function CateringHub() {
  return (
    <section className="section-catering-hub" id="catering">
      <div className="chub-photo-strip" aria-hidden="true">
        <img src={HERO_IMAGE} alt="" />
      </div>

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
        </div>

        <div className="chub-pillars-row reveal-group">
          <div className="chub-pillar">
            <div className="chub-pillar-icon"><ChefHat size={22} /></div>
            <h3>Dimasak Bertahap</h3>
            <p>Lauk dimasak mengikuti jadwal acara — segar, bukan stok etalase.</p>
          </div>

          <div className="chub-pillar chub-pillar-highlight">
            <div className="chub-pillar-icon"><Wallet size={22} /></div>
            <h3>Menyesuaikan Budget</h3>
            <p>Lauk bisa ditukar atau dikurangi supaya masuk anggaran per porsi.</p>
          </div>

          <div className="chub-pillar">
            <div className="chub-pillar-icon"><PackageCheck size={22} /></div>
            <h3>Kemasan Anti Tumpah</h3>
            <p>Kuah dan sambal dikemas terpisah, aman diantar kurir instan.</p>
          </div>
        </div>

        <div className="chub-action-box reveal">
          <div className="chub-action-text">
            <h4>Mau susun menu untuk acara Anda?</h4>
            <p>Ceritakan acara, porsi, dan tanggal — kami balas dengan usulan menunya.</p>
          </div>
          <a
            href={WA_LINKS.catering}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <MessageCircle size={18} /> Konsultasi Catering
          </a>
        </div>
      </div>
    </section>
  );
}
