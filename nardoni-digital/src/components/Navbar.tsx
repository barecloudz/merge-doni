import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/drawing.svg"
            alt="Nardoni Media Logo"
            className="h-10 w-auto"
          />
          <span className="text-2xl font-bold">Nardoni Digital</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium hover:text-accent transition-colors">Home</a>
          <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">Services</a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-accent transition-colors">How It Works</a>
          <a href="#faq" className="text-sm font-medium hover:text-accent transition-colors">FAQ</a>
          <Link to="/book-a-call">
            <Button size="sm" className="gradient-bg text-primary-foreground">Book a call</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
