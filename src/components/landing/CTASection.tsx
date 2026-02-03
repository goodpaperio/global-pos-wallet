import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative py-24">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative mx-auto px-6">
        <div className="glass-card overflow-hidden p-12 text-center md:p-16">
          {/* Decorative elements */}
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />
          
          <div className="relative">
            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Ready to take control?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
              Join thousands of users taking control of their identity and business
            </p>
            <Button variant="hero" size="xl" disabled className="opacity-60 cursor-not-allowed">
              Coming Soon
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
