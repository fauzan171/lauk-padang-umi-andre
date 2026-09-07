import React from 'react';
import { RESTAURANT_INFO } from '../data';
import { X, Bike, Truck, MessageCircle } from 'lucide-react';

export default function OrderModal({ item, onClose }) {
  if (!item) return null;

  const waText = encodeURIComponent(`Halo Warung Makan Umi Andrew, saya ingin memesan: ${item.name} (${item.priceFormatted})`);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-top">
          <div className="modal-header-info">
            <span className="modal-category">Pesan Lauk Pilihan</span>
            <h3 className="modal-dish-title">{item.name}</h3>
          </div>
          <button className="btn-modal-close" onClick={onClose} aria-label="Tutup Modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body-wrap">
          <div className="modal-product-peek">
            <img src={item.image} alt={item.name} className="modal-dish-img" />
            <div className="modal-dish-meta">
              <span className="modal-dish-price">{item.priceFormatted}</span>
              <p className="modal-dish-desc">{item.desc}</p>
            </div>
          </div>

          <p className="modal-prompt">Pilih layanan pesanan Anda:</p>

          <div className="modal-actions-list">
            <a 
              href={RESTAURANT_INFO.gofoodUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="modal-channel-btn btn-gf"
            >
              <div className="channel-icon-mini"><Bike size={18} /></div>
              <div className="channel-txt">
                <strong>Pesan via GoFood</strong>
                <span>Tersedia promo voucher & diskon ongkir</span>
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
                <span>GrabUnlimited hemat & siap santap express</span>
              </div>
            </a>

            <a 
              href={`https://wa.me/${RESTAURANT_INFO.phoneRaw}?text=${waText}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="modal-channel-btn btn-wa"
            >
              <div className="channel-icon-mini"><MessageCircle size={18} /></div>
              <div className="channel-txt">
                <strong>Pesan Langsung via WhatsApp</strong>
                <span>Harga asli UMKM & request lauk khusus</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
