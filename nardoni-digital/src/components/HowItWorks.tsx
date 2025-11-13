import { Card } from "@/components/ui/card";
import { Lightbulb, Settings, BarChart } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Plan Your Success",
    description: "We figure out who your customers are and what they want to hear before we start"
  },
  {
    icon: Settings,
    title: "Handle Everything Daily",
    description: "We create ads, schedule them, and manage all your campaigns so you don't have to"
  },
  {
    icon: BarChart,
    title: "Track What Works",
    description: "We see which posts bring in customers and do more of what's working"
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">How we work</p>
          <h2 className="text-4xl md:text-5xl font-bold">It's Straightforward</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-4 right-4 text-6xl font-bold text-muted/10 group-hover:text-accent/10 transition-colors">
                  {index + 1}
                </div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground text-lg">{step.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
