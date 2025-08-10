import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Locate from "./pages/Locate";
import Reservations from "./pages/Reservations";
import RootLayout from "./layouts/RootLayout";
import { CartProvider } from "./contexts/CartContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Index />} />
              <Route path="menu" element={<Menu />} />
              <Route path="about" element={<About />} />
              <Route path="login" element={<Login />} />
              <Route path="cart" element={<Cart />} />
              <Route path="locate" element={<Locate />} />
              <Route path="reservations" element={<Reservations />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
