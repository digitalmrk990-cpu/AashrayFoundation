import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Programs from '../pages/Programs/Programs';
import GalleryPage from '../pages/Gallery/GalleryPage';
import Donate from '../pages/Donate/Donate';
import Volunteer from '../pages/Volunteer/Volunteer';
import Contact from '../pages/Contact/Contact';
import Medical from '../pages/Programs/Medical';
import Education from '../pages/Programs/Education';
import AppealsMedical from '../pages/Appeals/AppealsMedical';



function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/programs/medical" element={<Medical />} />
      <Route path="/programs/education" element={<Education />} />
      <Route path="/programs/women-empowerment" element={<Programs />} />
      <Route path="/programs/zero-hunger-drive" element={<Programs />} />
      <Route path="/programs/jal-project" element={<Programs />} />
      <Route path="/programs/orphanage" element={<Programs />} />
      <Route path="/programs/old-age-home" element={<Programs />}
      />

        {/* APPEALS */}
      <Route path="/Appeals/AppealsMedical" element={<AppealsMedical />}
      
      />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/volunteer" element={<Volunteer />} />
      <Route path="/contact" element={<Contact />} />
     
     
    </Routes>
  );
}

export default AppRoutes;
