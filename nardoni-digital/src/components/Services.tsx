import { Card } from "@/components/ui/card";
import { Target, Users, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Ads To Get To The Top Of Google",
    description: "Show up when locals search for what you offer"
  },
  {
    icon: Users,
    title: "FB/IG Ads To Reach EVERY Local Client",
    description: "Be everywhere. Google, Instagram, Facebook, YouTube…"
  },
  {
    icon: TrendingUp,
    title: "Reach Number 1 On Google For Free",
    description: "Be the #1 on Google Maps organically."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">Services</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            How we can help you <span className="metallic-shine italic">grooow</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-lg">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
