// App.jsx
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home'
// import About from './pages/About';
// import Contact from './pages/Contact';
import Courses from './pages/Courses';

// import DasBoard from './pages/DasBoard';

function App() {
  return (
    <div className='app-container'> 
      {/* <Navbar /> */}
      
      <main className="centered-content">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/" element={<Courses />} /> */}
          {/* <Route path="/dashboard" element={<DasBoard />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;