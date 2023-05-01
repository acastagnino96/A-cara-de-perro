import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Whatsapp from "./Components/whatsapp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/home";
import Products from "./components/products";
import Hairstyle from "./components/hairstyle";
import TextControlsExample from "./Components/contact";
import Us from "./Components/us";


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/us" element={<Us />} />
          <Route path="/products" element={<Products />} />
          <Route path="/hairstyle" element={<Hairstyle />} />
          <Route path="/contact" element={<TextControlsExample />} />          
        </Routes>
        <Whatsapp />
        <Footer />
      </BrowserRouter>
  </>
  )
}

export default App;

