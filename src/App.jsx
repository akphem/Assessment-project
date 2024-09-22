import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Componenets/Navbar';
import { Home } from './Pages/Home';
import { About } from './Componenets/About';
import Footer from './Componenets/Footer';
import AssessmentPage from './Pages/AssessmentPage';
import Testpage from './Pages/Testpage';
import Contactpage from './Pages/Contactpage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/assessmentpage' element={<AssessmentPage />} />
        <Route path='/testpage' element={<Testpage />} />
        <Route path='/contactpage' element={<Contactpage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
