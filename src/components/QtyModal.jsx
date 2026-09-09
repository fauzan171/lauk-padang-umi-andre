import React, { useEffect, useRef, useState } from 'react';
import { WA_ORDER_TYPES } from '../data';
import { Minus, Plus } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const fmtDate = (iso) => {
  if (!iso) return null;
  const d = new Date(`${iso}T00:00:00`);
  return isNaN(d) ? null : d.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
};

/* Modal input pesanan: jumlah, jenis acara, dan tanggal sebelum buka
   WhatsApp. Pesan final disusun ulang dari isi form. */
export default function QtyModal({ orderKey, onCancel }) {
  const type = WA_ORDER_TYPES[orderKey];
  const [qty, setQty] = useState(type.defaultQty);
  const [event, setEvent] = useState('');
  const [date, setDate] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onCancel();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    inputRef.current?.focus();
    inputRef.current?.select();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onCancel]);

  if (!type) return null;

  const clamp = (v) => Math.max(1, Math.min(9999, v || 1));
  const dateOk = !type.date || date === '' || date !== '';
  const canSend = qty !== '' && dateOk;
  const dateStr = fmtDate(date);

  const openWa = () => {
    const url = `https://wa.me/6285720337580?text=${encodeURIComponent(type.msg(clamp(qty), event.trim(), dateStr))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onCancel();
  };

  return (
    <div className="modal-backdrop" onClick={onCancel} role="dialog" aria-modal="true" aria-label={`Pesan ${type.label}`}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-top">
          <div className="modal-header-info">
            <span className="modal-category">Pesan Sekarang</span>
            <h3 className="modal-dish-title">{type.label}</h3>
          </div>
          <button className="btn-modal-close" onClick={onCancel} aria-label="Tutup">
            ✕
          </button>
        </div>

        <div className="modal-body-wrap">
          <label className="qty-label" htmlFor="qty-input">{type.qtyLabel}</label>
          <div className="qty-stepper">
            <button
              className="qty-step-btn"
              onClick={() => setQty((v) => clamp(v - 1))}
              aria-label="Kurangi jumlah"
            >
              <Minus size={18} />
            </button>
            <input
              id="qty-input"
              ref={inputRef}
              type="number"
              inputMode="numeric"
              min="1"
              max="9999"
              value={qty}
              onChange={(e) => setQty(e.target.value === '' ? '' : Number(e.target.value))}
              onBlur={() => setQty((v) => clamp(v))}
              className="qty-input"
            />
            <button
              className="qty-step-btn"
              onClick={() => setQty((v) => clamp(v + 1))}
              aria-label="Tambah jumlah"
            >
              <Plus size={18} />
            </button>
          </div>

          {type.event && (
            <>
              <label className="qty-label" htmlFor="event-input">
                {type.event.label} <span className="qty-optional">(boleh diisi nanti)</span>
              </label>
              <input
                id="event-input"
                type="text"
                className="qty-text-input"
                placeholder={type.event.placeholder}
                maxLength={60}
                value={event}
                onChange={(e) => setEvent(e.target.value)}
              />
            </>
          )}

          {type.date && (
            <>
              <label className="qty-label" htmlFor="date-input">
                Tanggal acara / pengiriman <span className="qty-optional">(boleh diisi nanti)</span>
              </label>
              <input
                id="date-input"
                type="date"
                className="qty-text-input"
                value={date}
                min={new Date().toISOString().slice(0, 10)}
                onChange={(e) => setDate(e.target.value)}
              />
            </>
          )}

          <div className="qty-preview">
            <span className="qty-preview-label">Pesan yang akan dikirim:</span>
            <p className="qty-preview-text">{type.msg(clamp(qty), event.trim(), dateStr)}</p>
          </div>

          <button className="modal-channel-btn qty-send-btn" onClick={openWa} disabled={!canSend}>
            <div className="channel-icon-mini"><WhatsAppIcon size={18} /></div>
            <div className="channel-txt">
              <strong>Kirim via WhatsApp</strong>
              <span>
                {clamp(qty)} {type.unit}
                {event.trim() ? ` • ${event.trim()}` : ''}
                {dateStr ? ` • ${dateStr}` : ''}
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
