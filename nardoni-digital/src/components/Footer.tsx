export const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold">Nardoni Media</div>
          <div className="flex gap-8 text-sm">
            <a href="#home" className="hover:text-accent transition-colors">Home</a>
            <a href="#services" className="hover:text-accent transition-colors">Services</a>
            <a href="#how-it-works" className="hover:text-accent transition-colors">How It Works</a>
            <a href="#faq" className="hover:text-accent transition-colors">FAQ</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center text-sm opacity-60">
          © {new Date().getFullYear()} Nardoni Media. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
