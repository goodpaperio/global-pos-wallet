import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
              <span className="font-heading text-sm font-bold text-primary-foreground">ID</span>
            </div>
            <span className="font-heading text-lg font-semibold text-foreground">IDW3</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Documentation
            </a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            © 2025 IDW3. Built with <Heart className="h-4 w-4 text-primary" /> for web3 and the planet by{" "}
            <a href="#" className="text-foreground transition-colors hover:text-primary">
              GoodPaper©
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
