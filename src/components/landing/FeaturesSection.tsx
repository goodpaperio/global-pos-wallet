import { 
  Shield, 
  Share2, 
  Coins, 
  Globe2, 
  MousePointerClick, 
  ShieldAlert, 
  Fingerprint, 
  Vote 
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Storage",
    description: "Store credentials with military-grade encryption. Only you hold the keys.",
  },
  {
    icon: Share2,
    title: "Selective Automated Sharing",
    description: "Choose exactly what information to share and with whom. Revoke access anytime.",
  },
  {
    icon: Coins,
    title: "Currency Agnostic",
    description: "Get paid in and accept any currency with our state-of-the-art payment rails.",
  },
  {
    icon: Globe2,
    title: "Global Compliance",
    description: "Works worldwide across the multichain ecosystem with W3C standards.",
  },
  {
    icon: MousePointerClick,
    title: "One Click Purchases",
    description: "No filling in addresses, emails or phone numbers with each purchase.",
  },
  {
    icon: ShieldAlert,
    title: "Attack Proof",
    description: "No exposure to common conventional phishing, fraud or data harvesting attacks.",
  },
  {
    icon: Fingerprint,
    title: "2 to 3 Factor Authentication",
    description: "Multi-party computation protects your identity and account. Get hacked, remain protected.",
  },
  {
    icon: Vote,
    title: "Democratic Governance",
    description: "Every change and upgrade is proposed to the community and voted on. By you.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="container relative mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            Features
          </span>
          <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl" id="why">
            Why IDW3?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Take control of international money flow, your personal information, and more...
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card group glow-hover p-6 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 transition-all duration-300 group-hover:from-primary/30 group-hover:to-accent/30">
                <feature.icon className="h-6 w-6 text-primary transition-colors group-hover:text-accent" />
              </div>

              {/* Content */}
              <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
