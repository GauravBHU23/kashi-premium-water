import Maintenance from './pages/Maintenance';

// Set to false to restore the full site
const MAINTENANCE_MODE = true;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Process from './pages/Process';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Benefits from './pages/Benefits';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  if (MAINTENANCE_MODE) return <Maintenance />;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/process" element={<Process />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
