import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import RendangSpotlight from './components/RendangSpotlight';
import MenuList from './components/MenuList';
import OrderChannels from './components/OrderChannels';
import DineIn from './components/DineIn';
import Testimonials from './components/Testimonials';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import { RESTAURANT_INFO } from './data';
import { Bike, Truck, MessageCircle } from 'lucide-react';
import './App.css';

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="padang-theme-app">
      <Navbar />
      <Hero />
      <div className="songket-separator-line"></div>
      <About />
      <RendangSpotlight />
      <MenuList onSelectItem={(item) => setSelectedItem(item)} />
      <OrderChannels />
      <DineIn />
      <Testimonials />
      <LocationMap />
      <Footer />

      {/* Floating Action Bar for Mobile */}
      <div className="mobile-sticky-quick-order">
        <a 
          href={RESTAURANT_INFO.gofoodUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="sticky-nav-btn btn-gf-sticky"
        >
          <Bike size={16} /> GoFood
        </a>
        <a 
          href={RESTAURANT_INFO.grabfoodUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="sticky-nav-btn btn-gr-sticky"
        >
          <Truck size={16} /> GrabFood
        </a>
        <a 
          href={`https://wa.me/${RESTAURANT_INFO.phoneRaw}?text=Halo%20Umi%20Andrew,%20mau%20order%20makanan`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="sticky-nav-btn btn-wa-sticky"
        >
          <MessageCircle size={16} /> WA Kami
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
