import React from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer } from 'react-leaflet';
import {
  Camera,
  Coffee,
  MapPin,
  Gift,
  Shield,
  
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bumblebee font-adventure text-blue-900 p-4 flex flex-col">
      {/* Header */}
      <header className="text-center mb-4">
        <h1 className="text-3xl font-bold text-brown-800">Bumblebee Explorations</h1>
        <p className="text-base text-blue-900">Une carte interactive pour voyager</p>
      </header>

      {/* Mapa */}
      <div className="w-full h-48 sm:h-64 rounded-lg overflow-hidden shadow-lg mb-4">
        <MapContainer
          center={[32.7607, -16.9595]}
          zoom={10}
          scrollWheelZoom={false}
          className="w-full h-full"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>

      {/* Grid de Botões */}
      <div className="grid grid-cols-1 gap-3 mb-6 sm:grid-cols-2">
        <Link
          to="/photos"
          className="bg-yellow-200 rounded-lg flex items-center p-4 shadow"
        >
          <Camera size={24} className="mr-2 text-blue-900" />
          <span className="font-semibold text-blue-900">Voir davantage de&nbsp;photos</span>
        </Link>

        <Link
          to="/restaurants"
          className="bg-yellow-200 rounded-lg flex items-center p-4 shadow"
        >
          <Coffee size={24} className="mr-2 text-blue-900" />
          <span className="font-semibold text-blue-900">Découvrir des extras</span>
        </Link>

        <Link
          to="/spots"
          className="bg-yellow-200 rounded-lg flex items-center p-4 shadow"
        >
          <MapPin size={24} className="mr-2 text-blue-900" />
          <span className="font-semibold text-blue-900">Découvrir des&nbsp;spots</span>
        </Link>

        <Link
          to="/insurance"
          className="bg-yellow-200 rounded-lg flex items-center p-4 shadow"
        >
          <Shield size={24} className="mr-2 text-blue-900" />
          <span className="font-semibold text-blue-900">Assurances</span>
        </Link>
      </div>

      {/* Atividades (carrossel horizontal) */}
      <div className="grid grid-cols-4 gap-2 overflow-x-auto mb-6">
        <Link to="/dolphins" className="flex flex-col items-center">
          <img src="/icons/dolphin.svg" alt="Dauphins" className="w-12 h-12" />
          <span className="text-xs mt-1 text-blue-900">Dauphins</span>
        </Link>
        <Link to="/canyoning" className="flex flex-col items-center">
          <img src="/icons/canyoning.svg" alt="Canyoning" className="w-12 h-12" />
          <span className="text-xs mt-1 text-blue-900">Canyoning</span>
        </Link>
        <Link to="/hiking" className="flex flex-col items-center">
          <img src="/icons/hiking.svg" alt="Randonnée" className="w-12 h-12" />
          <span className="text-xs mt-1 text-blue-900">Randonnée</span>
        </Link>
        <Link to="/extras" className="flex flex-col items-center">
          <Gift size={24} className="text-blue-900" />
          <span className="text-xs mt-1 text-blue-900">Extras</span>
        </Link>
      </div>

      {/* Botão WhatsApp no final da página */}
      <div className="mt-auto flex justify-center mb-4">
        <a
          href="https://wa.me/YOUR_NUMBER"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg flex items-center"
        >
          <img
            src="/icons/whatsapp.svg"
            alt="WhatsApp"
            className="w-6 h-6 mr-2"
          />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}