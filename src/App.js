import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home.jsx'
import Aboutus from './components/Aboutus.jsx'
import Products from './components/Products.jsx'
import Service from './components/Service.jsx'
import Enquiries from './components/Enquiries.jsx'


function App() {
  return(
  <BrowserRouter>
      <Routes>
          <Route path="/" index element={<Home />} />
            <Route path="aboutus" element={<Aboutus />} />
            <Route path="products" element={<Products />} />
            <Route path="service" element={<Service />} />
            <Route path="enquiries" element={<Enquiries />} />
          <Route />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
