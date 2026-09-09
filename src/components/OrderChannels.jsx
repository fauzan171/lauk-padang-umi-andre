import React from 'react';
import { RESTAURANT_INFO, WA_LINKS } from '../data';
import { MessageSquareText, Check, PackageCheck, Users, Repeat, UtensilsCrossed } from 'lucide-react';

const QUICK_LINKS = [
  { icon: MessageSquareText, label: 'Konsultasi Catering', desc: 'Ceritakan acaranya, kami susun menunya', href: WA_LINKS.catering },
  { icon: PackageCheck, label: 'Nasi Kotak Kantor', desc: 'Untuk rapat, training, makan siang tim', href: WA_LINKS.nasiKotak },
  { icon: Users, label: 'Prasmanan Acara', desc: 'Buffet untuk acara di rumah atau gedung', href: WA_LINKS.prasmanan },
  { icon: Repeat, label: 'Catering Harian', desc: 'Rantangan rutin untuk keluarga atau kantor', href: WA_LINKS.harian },
  { icon: UtensilsCrossed, label: 'Menu Harian Warung', desc: 'Paket nasi, mie, kwetiaw, nasi goreng', href: WA_LINKS.menuHarian }
];

export default function OrderChannels() {
  return (
    <section className="section-order" id="order">
      <div className="container">
        <div className="section-header text-center">
          <span className="eyebrow-text">SEMUA PESANAN LEWAT SATU JALUR</span>
          <h2 className="section-heading">Chat WhatsApp admin langsung</h2>
          <div className="gold-divider center-div"></div>
          <p className="section-desc">
            Tidak ada aplikasi perantara. Lauk, jumlah porsi, jam kirim, dan harganya dibicarakan langsung dengan admin — jadi pesanan katering bisa disesuaikan permintaan, bukan dipaksa masuk paket yang sudah jadi.
          </p>
        </div>

        <div className="wa-primary-card">
          <div className="wa-primary-left">
            <div className="platform-icon-circle wa-bg">
              <MessageSquareText size={30} color="#fff" />
            </div>
            <div>
              <span className="wa-primary-badge">ADMIN DAPUR UMI ANDREW</span>
              <h3 className="wa-primary-phone">{RESTAURANT_INFO.phone}</h3>
              <p className="wa-primary-hours">{RESTAURANT_INFO.hours}</p>
            </div>
          </div>

          <ul className="wa-primary-perks">
            <li><Check size={16} className="perk-check" /> Lauk &amp; harga menyesuaikan permintaan</li>
            <li><Check size={16} className="perk-check" /> Bisa atur jam kirim &amp; lokasi acara</li>
            <li><Check size={16} className="perk-check" /> Tanpa biaya tambahan aplikasi</li>
          </ul>

          <a
            href={WA_LINKS.catering}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold wa-primary-btn"
          >
            <MessageSquareText size={18} /> Mulai Chat
          </a>
        </div>

        <div className="wa-quicklinks">
          {QUICK_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="wa-quicklink"
                key={link.label}
              >
                <span className="wa-quicklink-icon"><Icon size={18} /></span>
                <span className="wa-quicklink-text">
                  <strong>{link.label}</strong>
                  <small>{link.desc}</small>
                </span>
              </a>
            );
          })}
        </div>

        <p className="order-note">
          Mau makan di warung atau ambil sendiri? Datang langsung ke {RESTAURANT_INFO.addressDetail}
        </p>
      </div>
    </section>
  );
}
