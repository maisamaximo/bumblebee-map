import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './pages/ScrollToTop'

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
import Restaurants from './pages/Restaurants'
import ActivityGallery from './components/ActivityGallery'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/extras" element={<Extras />} />
        <Route path="/spots" element={<Spots />} />
        <Route path="/estrants" element={<AddEstrants />} />
        <Route path="/hiking" element={<Hiking />} />
        <Route path="/dolphins" element={<Dauphins />} />
        <Route path="/canyoning" element={<Canyoning />} />
        <Route path="/paragliding" element={<Paragliding />} />
        <Route path="/insurance" element={<Assurances />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/dolphins/photos" element={<ActivityGallery />} />
        <Route path="/canyoning/photos" element={<ActivityGallery />} />
        <Route path="/paragliding/photos" element={<ActivityGallery />} />
       </Routes>
    </>
  )
}
