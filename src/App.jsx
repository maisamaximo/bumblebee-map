import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Photos from './pages/Photos'
import Extras from './pages/Extras'
import Spots from './pages/Spots'
import Hiking from './pages/Hiking'
import AddEstrants from './pages/AddEstrants'
import Dauphins from './pages/Dauphins'
import Canyoning from './pages/Canyoning'
import Paragliding from './pages/Paragliding'
import Assurances from './pages/Assurances'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/photos" element={<Photos />} />
      <Route path="/extras" element={<Extras />} />
      <Route path="/spots" element={<Spots />} />
      <Route path="/estrants" element={<AddEstrants />} />
      <Route path="/randonnee" element={<Hiking />} />
      <Route path="/dolphins" element={<Dauphins />} />
      <Route path="/canyoning" element={<Canyoning />} />
      <Route path="/paragliding" element={<Paragliding />} />
      <Route path="/insurance" element={<Assurances />} />
    </Routes>
  )
}
