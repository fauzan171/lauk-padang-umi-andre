import React, { useState } from 'react';
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
import { WA_LINKS } from './data';
import { Truck, MessageCircle } from 'lucide-react';
import './App.css';

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="padang-theme-app">
      <Navbar />
      <Hero />
      <div className="songket-separator-line"></div>
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
          <MessageCircle size={16} /> Catering
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
        />
      )}
    </div>
  );
}
