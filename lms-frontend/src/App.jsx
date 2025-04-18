// App.jsx
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
import Courses from './pages/Courses';
<<<<<<< HEAD
// import DasBoard from './pages/DasBoard';
=======


>>>>>>> 309769641921e96c4554421e004bc12f3b7a82e2
function App() {
  return (
    <div className='app-container'> 
      <Navbar />
      <main className="centered-content">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/" element={<Courses />} />
          {/* <Route path="/dashboard" element={<DasBoard />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;