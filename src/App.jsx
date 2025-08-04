import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import ProductListing from "./components/ProductListing";
import ShoppingCart from "./components/ShoppingCart";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/IBM-frontend-certificate" element={<LandingPage />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
