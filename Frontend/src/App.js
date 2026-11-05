
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Shop from './Shop';
import Product from './Product';
import Contact from './Contact';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Collection" element={<Product />} />
        <Route path="/Contact_us" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
