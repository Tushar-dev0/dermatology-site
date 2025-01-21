import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import BookAppointment from './pages/BookAppointment';
import Contact from './pages/Contact';
import Concerns from './pages/Concerns';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/book-an-appointment" element={<BookAppointment />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
