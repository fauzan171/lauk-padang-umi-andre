import React, { useState } from 'react';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data';
import { Plus, ShoppingCart, Sparkles } from 'lucide-react';

export default function MenuList({ onSelectItem }) {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'Semua Menu' },
    { id: 'daging', label: 'Daging & Tunjang' },
    { id: 'ayam', label: 'Ayam & Bebek' },
    { id: 'ikan', label: 'Ikan & Seafood' },
    { id: 'sayur', label: 'Sayur & Telur' },
    { id: 'paket', label: 'Paket Nasi Kotak' }
  ];

  const filteredItems = activeTab === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeTab);

  return (
    <section className="section-menu" id="menu">
      <div className="container">
        <div className="section-header text-center">
          <span className="eyebrow-text">SAJIAN LAUK TERBAIK</span>
          <h2 className="section-heading">Katalog Menu Warung Umi Andrew</h2>
          <div className="gold-divider center-div"></div>
          <p className="section-desc">
            Disajikan setiap hari dengan daun singkong rebus lembut, kuah gulai nangka kapau, dan sambal ijo lado mudo segar.
          </p>

          {/* Category Filter Tabs */}
          <div className="menu-filter-bar">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
                onClick={() => setActiveTab(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="menu-cards-grid">
          {filteredItems.map(item => (
            <div className="food-card" key={item.id}>
              <div className="food-thumbnail-wrap">
                {item.tag && <span className="food-ribbon-tag">{item.tag}</span>}
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="food-img" 
                  loading="lazy" 
                />
              </div>

              <div className="food-body">
                <div className="food-title-row">
                  <h3 className="food-title">{item.name}</h3>
                  <span className="food-price">{item.priceFormatted}</span>
                </div>
                <p className="food-desc">{item.desc}</p>
                
                <div className="food-card-bottom">
                  <span className="food-spec-tag">{item.spiceLevel}</span>
                  <button 
                    className="btn-add-order"
                    onClick={() => onSelectItem(item)}
                  >
                    <Plus size={16} /> Pesan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Catering & Box Promo Banner */}
        <div className="catering-alert-box">
          <div className="catering-text">
            <h3>Kebutuhan Katering & Nasi Kotak Rapat di Cawang?</h3>
            <p>Melayani pesanan 10 hingga 500 box dengan kemasan eksklusif, lauk dipisah plastik segel, lengkap dengan sendok & tisu.</p>
          </div>
          <a 
            href={`https://wa.me/${RESTAURANT_INFO.phoneRaw}?text=Halo%20Umi%20Andrew,%20saya%20mau%20order%20Paket%20Nasi%20Kotak%20untuk%20acara`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            Konsultasi Nasi Kotak
          </a>
        </div>
      </div>
    </section>
  );
}
