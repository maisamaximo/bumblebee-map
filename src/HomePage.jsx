// src/HomePage.jsx
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Photo, Coffee, MapPin, Gift, Shield, Whatsapp } from 'lucide-react';

export default function HomePage() {
  return (
    // Container principal com fundo amarelo e fonte adventure
    <div className="min-h-screen bg-bumblebee font-adventure p-4 flex flex-col">
      {/* Cabeçalho */}
      <header className="text-center mb-4">
        <h1 className="text-3xl">Bumblebee Explorations</h1>
        <p className="text-gray-800">An interactive map to help you travel</p>
      </header>

      {/* Mapa */}
      <div className="flex-1 rounded-lg overflow-hidden shadow-lg mb-6">
        <MapContainer
          center={[32.7607, -16.9595]}
          zoom={10}
          scrollWheelZoom={false}
          className="h-full"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>

      {/* Cards de funcionalidades */}
      <div className="space-y-4 mb-6">
        {/* Exemplo de um card */}
        <div className="flex items-center bg-white rounded-lg p-3 shadow">
          <img
            src="/bumblebee.jpg"
            alt="Bumblebee Campervan"
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-3">
            <h2 className="font-semibold">Bumblebee</h2>
            <p className="text-blue-600 flex items-center text-sm">
              <Photo className="mr-1" size={16} /> See more photos
            </p>
          </div>
        </div>
        {/* Repete para restaurantes, spots, extras, insurance */}
      </div>

      {/* Atividades */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Activities</h2>
        <div className="flex space-x-4 overflow-x-auto">
          {['Dolphin Watching', 'Canyoning', 'Jeep Tour', 'Hiking'].map(label => (
            <div
              key={label}
              className="min-w-[120px] bg-white rounded-lg shadow overflow-hidden"
            >
              <img
                src={`/${label.toLowerCase().replace(/ /g, '_')}.jpg`}
                alt={label}
                className="w-full h-20 object-cover"
              />
              <p className="text-center text-sm font-medium p-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Botão WhatsApp */}
      <a
        href="https://wa.me/YOUR_NUMBER"
        className="fixed bottom-4 right-4 bg-green-500 p-4 rounded-full shadow-lg"
      >
        <Whatsapp size={24} color="white" />
      </a>
    </div>
  );
}
