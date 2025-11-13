import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const comparisons = [
  { feature: "Generic content templates", others: false, us: false, usText: "Custom content for your business" },
  { feature: "Monthly reporting only", others: true, us: false, usText: "Regular calls to review what's working" },
  { feature: "Separate teams for different platforms", others: true, us: false, usText: "Facebook, Instagram, Google, we cover it all" },
  { feature: "Long-term contracts required", others: true, us: false, usText: "Stay flexible - no long-term commitments required" },
  { feature: "One-size-fits-all approach", others: true, us: false, usText: "Start small and see if we're a good fit" },
  { feature: "No guarantee", others: true, us: false, usText: "If it doesn't work, we refund you" }
];

export const Comparison = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">The difference</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Why choose <span className="metallic-shine">Nardoni Media</span> over everyone else?
          </h2>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 border-2">
              <h3 className="text-2xl font-bold mb-6 text-muted-foreground">Other Agencies</h3>
              <ul className="space-y-4">
                {comparisons.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item.feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-8 gradient-bg border-2 border-accent shadow-2xl transform md:scale-105">
              <h3 className="text-2xl font-bold mb-6">Nardoni Media</h3>
              <ul className="space-y-4">
                {comparisons.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>{item.usText}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
