import { Route, Routes } from "react-router-dom";
import Home from "./Compontents/HomeSection/Home";
import Store from "./Compontents/StoreSection/Store";
import About from "./Compontents/About/About";
import Navbar from "./Compontents/NavbarSection/Navbar";
import ShoppingCartProvider from "./context/ShoppingCartContext";
import "./App.css";
function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ShoppingCartProvider>
      <footer>
        <p>&copy; 2023 My Phone Store</p>
      </footer>
    </>
  );
}

export default App;
