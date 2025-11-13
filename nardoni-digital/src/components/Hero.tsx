import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-hero-bg pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            We'll Fill Your Calendar with New Customers in{" "}
            <span className="metallic-shine">30 Days - Guaranteed</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Stop waiting for customers to find you.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            We put your business in front of locals actively searching for your services - starting this month.
          </p>
          <Button size="lg" className="gradient-bg text-lg px-8 py-6 h-auto group text-primary-foreground">
            Book a call
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
