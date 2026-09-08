import React from 'react';
import { RESTAURANT_INFO, WA_LINKS } from '../data';
import { X, Bike, Truck, MessageCircle } from 'lucide-react';

export default function OrderModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-top">
          <div className="modal-header-info">
            <span className="modal-category">Menu Harian Warung</span>
            <h3 className="modal-dish-title">{item.name}</h3>
          </div>
          <button className="btn-modal-close" onClick={onClose} aria-label="Tutup Modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body-wrap">
          <div className="modal-product-peek">
            {item.badge && <span className="modal-dish-badge">{item.badge}</span>}
            <p className="modal-dish-desc">{item.desc}</p>
            {item.traits && (
              <ul className="modal-trait-list">
                {item.traits.map((trait) => (
                  <li className="modal-trait-chip" key={trait}>{trait}</li>
                ))}
              </ul>
            )}
            <p className="modal-price-note">
              Harga mengikuti porsi dan pesanan — sebutkan langsung ke admin atau cek di aplikasi.
            </p>
          </div>

          <p className="modal-prompt">Pilih cara pesan:</p>

          <div className="modal-actions-list">
            <a
              href={WA_LINKS.menuDetail(item.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-channel-btn btn-wa"
            >
              <div className="channel-icon-mini"><MessageCircle size={18} /></div>
              <div className="channel-txt">
                <strong>Pesan Langsung via WhatsApp</strong>
                <span>Tanya harga, request pedas, atau atur jam ambil</span>
              </div>
            </a>

            <a
              href={RESTAURANT_INFO.gofoodUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-channel-btn btn-gf"
            >
              <div className="channel-icon-mini"><Bike size={18} /></div>
              <div className="channel-txt">
                <strong>Pesan via GoFood</strong>
                <span>Tersedia promo voucher &amp; diskon ongkir</span>
              </div>
            </a>

            <a
              href={RESTAURANT_INFO.grabfoodUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-channel-btn btn-gr"
            >
              <div className="channel-icon-mini"><Truck size={18} /></div>
              <div className="channel-txt">
                <strong>Pesan via GrabFood</strong>
                <span>Kemasan anti tumpah, area Cawang &amp; sekitarnya</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
