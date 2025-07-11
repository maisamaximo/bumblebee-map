// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';  // ou ReactDOM.render, dependendo da versão
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
