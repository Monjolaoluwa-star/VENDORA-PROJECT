import { Route } from "wouter";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Pricing from "./pages/Pricing";

import VendorFlyer from "./components/VendorFlyer";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <main>
        <Route path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/product/:id" component={ProductDetails} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/flyer" component={VendorFlyer} />
      </main>
    </>
  );
}