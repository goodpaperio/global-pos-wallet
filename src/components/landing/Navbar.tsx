import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src="/idw3-logo-gold.png" alt="IDW3" className="h-9 w-auto" />
          </a>

          {/* Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Features
            </a>
            <a href="#why" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Why IDW3
            </a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Docs
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="hero" size="sm" disabled className="opacity-60 cursor-not-allowed">
              Coming Soon
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
