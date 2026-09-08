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
        <div className="chub-header text-center">
          <span className="eyebrow-text gold-text">LAYANAN UTAMA KAMI</span>
          <h2 className="section-heading light-heading">
            Catering yang lauk dan harganya mengikuti permintaan Anda
          </h2>
          <div className="gold-divider center-div"></div>
          <p className="chub-subtitle">
            Umi Andrew paling sering dicari untuk pesanan katering: nasi kotak kantor, acara keluarga, sampai prasmanan. Menunya tidak dikunci — sebutkan jumlah porsi dan budget, kami yang menyusun kombinasi lauk Padang dan lauk rumahannya.
          </p>
        </div>

        <div className="chub-pillars-row">
          <div className="chub-pillar">
            <div className="chub-pillar-icon"><ChefHat size={22} /></div>
            <h3>Dimasak Bertahap, Bukan Disetok</h3>
            <p>Karena katering dipesan lebih dulu, lauk dimasak mengikuti jadwal acara. Hasilnya lebih segar dibanding lauk yang menunggu lama di etalase.</p>
          </div>

          <div className="chub-pillar chub-pillar-highlight">
            <div className="chub-pillar-icon"><Wallet size={22} /></div>
            <h3>Harga Menyesuaikan Budget</h3>
            <p>Lauk bisa ditukar, dikurangi, atau ditambah supaya masuk anggaran per porsi. Tidak ada paket kaku yang memaksa Anda bayar untuk hal yang tidak dibutuhkan.</p>
          </div>

          <div className="chub-pillar">
            <div className="chub-pillar-icon"><PackageCheck size={22} /></div>
            <h3>Kemasan Rapi Anti Tumpah</h3>
            <p>Kuah gulai, sambal, dan lauk berkuah dikemas terpisah. Aman untuk pengiriman kurir instan dan tetap enak saat dibuka di lokasi acara.</p>
          </div>
        </div>

        <div className="chub-action-box">
          <div className="chub-action-text">
            <h4>Mau susun menu katering untuk acara Anda?</h4>
            <p>Chat admin sekarang. Ceritakan jenis acara, jumlah porsi, dan tanggalnya — kami balas dengan usulan menu dan perhitungannya.</p>
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
