import { useState, useEffect } from 'react';
import Hero from './Components/Hero';
import Upload from './Components/Upload';
import Assurance from './Components/Assurance';
import About from './Components/About';
import Pricing from './Components/Pricing';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-6"></div>
        <h1 className="text-4xl font-bold text-orange-500 animate-pulse">Designo</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Upload />
      <Assurance />
      <About />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
