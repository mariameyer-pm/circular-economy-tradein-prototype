import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import OrderStatusPage from "./pages/OrderStatusPage";
import NotFound from "./pages/NotFound";

// App (Mobile) Pages
import AppBrowsePage from "./pages/app/AppBrowsePage";
import AppHomePage from "./pages/app/AppHomePage";
import AppProductPage from "./pages/app/AppProductPage";
import AppCartPage from "./pages/app/AppCartPage";
import AppConfirmationPage from "./pages/app/AppConfirmationPage";
import AppOrdersPage from "./pages/app/AppOrdersPage";
import AppAccountPage from "./pages/app/AppAccountPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Website Routes */}
          <Route path="/" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/order-status" element={<OrderStatusPage />} />
          
          {/* App (Mobile) Routes */}
          <Route path="/app" element={<AppBrowsePage />} />
          <Route path="/app/home" element={<AppHomePage />} />
          <Route path="/app/product" element={<AppProductPage />} />
          <Route path="/app/cart" element={<AppCartPage />} />
          <Route path="/app/confirmation" element={<AppConfirmationPage />} />
          <Route path="/app/orders" element={<AppOrdersPage />} />
          <Route path="/app/account" element={<AppAccountPage />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;