import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm font-semibold mb-4 uppercase tracking-wider opacity-70">Get started</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Your Customer Flood Starts Right Here
        </h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto opacity-80">
          Book a free 30 min call and we'll show you exactly how we'll fill your calendar with new customers.
        </p>
        <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto group">
          Book a call
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};
