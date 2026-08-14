import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/about';
import Contact from './components/Contact';
import Products from './components/Product';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-[#0a0a0a] min-h-screen text-neutral-100">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;