import React from 'react';
import { RESTAURANT_INFO } from '../data';
import { MapPin, Clock, Phone, ExternalLink, Navigation } from 'lucide-react';

export default function LocationMap() {
  return (
    <section className="section-location" id="lokasi">
      <div className="container">
        <div className="location-split-grid">
          <div className="location-info-side">
            <span className="eyebrow-text">LOKASI STRATEGIS CAWANG</span>
            <h2 className="section-heading">Kunjungi Warung Umi Andrew</h2>
            <div className="gold-divider"></div>
            
            <p className="narrative-text">
              Berlokasi di jalan protokol Dewi Sartika Cawang, mudah dijangkau dari arah Tebet, Pancoran, Kampung Melayu, Halim, maupun Cililitan.
            </p>

            <div className="location-details-list">
              <div className="detail-item">
                <div className="detail-icon"><MapPin size={20} /></div>
                <div>
                  <h4>Alamat Lengkap:</h4>
                  <p>{RESTAURANT_INFO.address}</p>
                  <small className="detail-sub">{RESTAURANT_INFO.addressDetail}</small>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon"><Clock size={20} /></div>
                <div>
                  <h4>Jam Operasional:</h4>
                  <p>{RESTAURANT_INFO.hours}</p>
                  <small className="detail-sub">Sajian lauk matang segar tersedia mulai 09.30 WIB</small>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon"><Phone size={20} /></div>
                <div>
                  <h4>Kontak & Pemesanan:</h4>
                  <p><strong>{RESTAURANT_INFO.phone}</strong></p>
                  <small className="detail-sub">WhatsApp & Telepon Langsung Restoran</small>
                </div>
              </div>
            </div>

            <div className="location-buttons-row">
              <a 
                href="https://maps.google.com/?q=Cawang+Jakarta+Timur" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-gold"
              >
                <Navigation size={16} /> Buka Google Maps
              </a>
              <a 
                href={`tel:${RESTAURANT_INFO.phone}`} 
                className="btn btn-outline-dark"
              >
                <Phone size={16} /> Hubungi Kami
              </a>
            </div>
          </div>

          <div className="map-embed-side">
            <div className="map-frame-wrapper">
              <iframe
                title="Peta Lokasi Warung Padang Umi Andrew Cawang"
                src={RESTAURANT_INFO.mapsEmbedUrl}
                width="100%"
                height="390"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="map-floating-label">
                <strong>Warung Makan Padang Umi Andrew</strong>
                <span>Cawang, Kramat Jati, Jakarta Timur</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
