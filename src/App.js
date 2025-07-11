// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import PhotosPage from './PhotosPage';
import ExtrasPage from './ExtrasPage';
import SpotsPage from './SpotsPage';
import HikingPage from './HikingPage';
import DolphinsPage from './DolphinsPage';
import CanyoningPage from './CanyoningPage';
import InsurancePage from './InsurancePage';
import ContactPage from './ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* rotas correspondentes aos botões */}
        <Route path="/photos" element={<PhotosPage />} />
        <Route path="/extras" element={<ExtrasPage />} />
        <Route path="/spots" element={<SpotsPage />} />
        <Route path="/hiking" element={<HikingPage />} />

        {/* rotas de atividades */}
        <Route path="/dolphins" element={<DolphinsPage />} />
        <Route path="/canyoning" element={<CanyoningPage />} />
        <Route path="/insurance" element={<InsurancePage />} />

        {/* rota do botão WhatsApp / contato */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
