import React from 'react';
import { WA_LINKS } from '../data';
import { X, MessageCircle } from 'lucide-react';

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
              Harga mengikuti porsi dan pesanan — sebutkan langsung ke admin lewat WhatsApp.
            </p>
          </div>

          <p className="modal-prompt">Pesan langsung ke admin:</p>

          <div className="modal-actions-list">
            <a
              href={WA_LINKS.menuDetail(item.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-channel-btn btn-wa"
            >
              <div className="channel-icon-mini"><MessageCircle size={18} /></div>
              <div className="channel-txt">
                <strong>Pesan via WhatsApp</strong>
                <span>Tanya harga, request pedas, atau atur jam ambil</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
