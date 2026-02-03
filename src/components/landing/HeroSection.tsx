import { Button } from "@/components/ui/button";
import { Shield, Globe, Wallet } from "lucide-react";
import heroImage from "@/assets/hero-blockchain.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-glow rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-1/4 bottom-1/4 h-80 w-80 animate-glow rounded-full bg-accent/10 blur-3xl" style={{ animationDelay: "1.5s" }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="container relative mx-auto px-6 py-20 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="animate-slide-up">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                Zero Monthly Fees
              </span>
            </div>

            <h1 className="animate-slide-up-delay-1 mb-6 font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              <span className="text-foreground">Global Decentralized</span>
              <br />
              <span className="gradient-text">Point of Sale</span>
              <br />
              <span className="text-foreground">Identity & Data Wallet</span>
            </h1>

            <p className="animate-slide-up-delay-2 mb-4 font-heading text-xl font-medium text-primary md:text-2xl">
              Borderless. Bankless. International Market Access.
            </p>

            <p className="animate-slide-up-delay-3 mb-8 max-w-xl text-lg text-muted-foreground lg:mx-0 mx-auto">
              Self-sovereign, currency agnostic, global point of sale portal for business and personal use. Own your data and control your identity.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start justify-center">
              <Button variant="hero" size="xl">
                Get Started
              </Button>
              <Button variant="outline-glow" size="xl">
                Learn More
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
              <div className="glass-card flex items-center gap-3 px-4 py-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-foreground">End-to-End Encrypted</span>
              </div>
              <div className="glass-card flex items-center gap-3 px-4 py-2">
                <Globe className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-foreground">Fully Decentralised</span>
              </div>
              <div className="glass-card flex items-center gap-3 px-4 py-2">
                <Wallet className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Self-Custodial</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              {/* Glow behind image */}
              <div className="absolute inset-0 scale-90 rounded-3xl bg-gradient-to-r from-primary/30 to-accent/30 blur-3xl" />
              
              {/* Main image */}
              <img
                src={heroImage}
                alt="Blockchain network visualization"
                className="relative z-10 w-full max-w-lg rounded-3xl border border-border/30 shadow-2xl"
              />
              
              {/* Floating accent elements */}
              <div className="absolute -right-4 -top-4 h-20 w-20 animate-pulse rounded-2xl border border-primary/30 bg-primary/10 backdrop-blur-sm" style={{ animationDelay: "0.5s" }} />
              <div className="absolute -bottom-6 -left-6 h-16 w-16 animate-pulse rounded-xl border border-accent/30 bg-accent/10 backdrop-blur-sm" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
