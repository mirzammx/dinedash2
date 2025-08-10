import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-2 py-1 rounded-md transition-colors ${isActive ? "text-primary" : "text-foreground hover:text-primary"}`;

export const SiteHeader = () => {
  const { count } = useCart();
  return (
    <header className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
      <nav className="container flex items-center justify-between py-3">
        <Link to="/" className="text-lg font-semibold">DineDash</Link>
        <div className="flex items-center gap-2">
          <NavLink to="/menu" className={navLinkClass}>Menu</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/locate" className={navLinkClass}>Locate Us</NavLink>
          <NavLink to="/reservations" className={navLinkClass}>Reservations</NavLink>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button variant="secondary" size="sm" asChild>
            <Link to="/cart" aria-label="Open cart">
              <span className="sr-only">Cart</span>
              <ShoppingCart className="mr-2" />
              {count}
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};
