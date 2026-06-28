import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Home from "@/pages/Home";
import Products from "@/pages/Products";
import ProductDetails from "@/pages/ProductDetails";
import Vendors from "@/pages/Vendors";
import VendorProfile from "@/pages/VendorProfile";
import Contact from "@/pages/Contact";
import Pricing from "@/pages/Pricing";
import VendorApply from "@/pages/VendorApply";

import VendorFlyer from "@/components/VendorFlyer"; // ADD THIS

const queryClient = new QueryClient();

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: "#F9F5FF" }}>
      <div className="text-8xl font-black mb-4" style={{ color: "#4A0E8F" }}>
        404
      </div>

      <h2 className="text-2xl font-black mb-2" style={{ color: "#1A1A2E" }}>
        Page Not Found
      </h2>

      <p className="mb-6 text-sm" style={{ color: "#9CA3AF" }}>
        The page you're looking for doesn't exist.
      </p>

      <a
        href="/"
        className="btn-primary px-8 py-3 rounded-xl font-bold text-sm text-white"
        style={{ background: "linear-gradient(135deg, #4A0E8F, #6B21A8)" }}
      >
        Go Home
      </a>
    </div>
  );
}


function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <Switch>


          <Route path="/" component={Home} />

          <Route path="/products" component={Products} />

          <Route path="/product/:id" component={ProductDetails} />

          <Route path="/vendors" component={Vendors} />

          <Route path="/vendor/:id" component={VendorProfile} />

          <Route path="/contact" component={Contact} />

          <Route path="/pricing" component={Pricing} />

          <Route path="/apply" component={VendorApply} />

          <Route path="/flyer" component={VendorFlyer} /> 
          {/* ADD THIS LINE */}

          <Route component={NotFound} />

        </Switch>
      </main>

      <Footer />

    </div>
  );
}


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}


export default App;