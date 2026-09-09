import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CateringHub from './components/CateringHub';
import CateringServices from './components/CateringServices';
import CateringCatalog from './components/CateringCatalog';
import About from './components/About';
import MenuList from './components/MenuList';
import OrderChannels from './components/OrderChannels';
import DineIn from './components/DineIn';
import Testimonials from './components/Testimonials';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import QtyModal from './components/QtyModal';
import { WA_LINKS, WA_HREF_TO_KEY } from './data';
import { Truck } from 'lucide-react';
import WhatsAppIcon from './components/WhatsAppIcon';
import './App.css';

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [qtyOrderKey, setQtyOrderKey] = useState(null);

  /* Napas: reveal-on-scroll. Satu observer untuk seluruh halaman,
     elemen cukup membawa class "reveal". `once` — tidak bolak-balik. */
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-group');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('revealed'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* Delegasi klik: semua link wa.me yang butuh jumlah diintersep,
     buka modal input jumlah dulu — pesan final disusun ulang dengan jumlah. */
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[href]');
      if (!a) return;
      const key = WA_HREF_TO_KEY[a.href];
      if (key) {
        e.preventDefault();
        setQtyOrderKey(key);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className="padang-theme-app">
      <Navbar />
      <Hero />
      <CateringHub />
      <CateringServices />
      <CateringCatalog />
      <About />
      <MenuList onSelectItem={(item) => setSelectedItem(item)} />
      <OrderChannels />
      <DineIn />
      <Testimonials />
      <LocationMap />
      <Footer />

      {/* Floating Action Bar for Mobile */}
      <div className="mobile-sticky-quick-order">
        <a
          href={WA_LINKS.catering}
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-nav-btn btn-catering-sticky"
        >
          <WhatsAppIcon size={16} /> Catering
        </a>
        <a
          href={WA_LINKS.menuHarian}
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-nav-btn btn-wa-sticky"
        >
          <Truck size={16} /> Menu Harian
        </a>
      </div>

      {/* Order Fast Modal */}
      {selectedItem && (
        <OrderModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onAskQty={() => {
            setSelectedItem(null);
            setQtyOrderKey('menuHarian');
          }}
        />
      )}

      {/* Modal input jumlah sebelum buka WhatsApp */}
      {qtyOrderKey && (
        <QtyModal
          orderKey={qtyOrderKey}
          onCancel={() => setQtyOrderKey(null)}
        />
      )}
    </div>
  );
}
