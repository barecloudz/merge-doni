import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";

const BookACall = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonePrefix: "+1",
    phone: "",
    website: "",
    company: "",
    canAfford: "",
    problem: "",
    urgency: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);

    toast({
      title: "Request Received!",
      description: "We'll contact you within 48 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phonePrefix: "+1",
      phone: "",
      website: "",
      company: "",
      canAfford: "",
      problem: "",
      urgency: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-40 pb-16 min-h-screen" style={{ backgroundColor: '#efebe5' }}>
        <div className="max-w-[1200px] mx-auto px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Heading */}
            <div className="lg:pr-12">
              <div className="inline-block bg-white rounded-full px-4 py-2 mb-6">
                <span className="text-xs font-normal text-black">Book a call</span>
              </div>
              <h1 className="text-[90px] leading-[0.85] mb-6 text-black" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500, letterSpacing: '-0.02em' }}>
                Let's<br />Make<br />Money
              </h1>
              <div className="space-y-4 text-[16px] leading-[1.5]" style={{ color: '#6b6b6b', fontFamily: 'Inter, system-ui, sans-serif' }}>
                <p>Fill out the form below and we will contact you within 48 hours to find out if we can help you.</p>
                <p className="text-black">
                  No costs, no obligations, no annoying sales pitch. Guaranteed.
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-[28px] p-10" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name *"
                      className="h-14 border-0 border-b border-gray-300 rounded-none focus-visible:ring-0 focus-visible:border-black bg-transparent px-0 placeholder:text-gray-400 text-xl pb-6 transition-all duration-300"
                      style={{ fontWeight: 500, letterSpacing: '-0.05em' }}
                    />
                  </div>

                  <div>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Business Email *"
                      className="h-14 border-0 border-b border-gray-300 rounded-none focus-visible:ring-0 focus-visible:border-black bg-transparent px-0 placeholder:text-gray-400 text-xl pb-6 transition-all duration-300"
                      style={{ fontWeight: 500, letterSpacing: '-0.05em' }}
                    />
                  </div>

                  <div className="grid grid-cols-[70px_1fr] gap-4">
                    <Input
                      id="phonePrefix"
                      name="phonePrefix"
                      type="text"
                      value={formData.phonePrefix}
                      onChange={handleChange}
                      placeholder="+1"
                      className="h-14 border-0 border-b border-gray-300 rounded-none focus-visible:ring-0 focus-visible:border-black bg-transparent px-0 placeholder:text-gray-400 text-xl pb-6 transition-all duration-300"
                      style={{ fontWeight: 500, letterSpacing: '-0.05em' }}
                    />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number *"
                      className="h-14 border-0 border-b border-gray-300 rounded-none focus-visible:ring-0 focus-visible:border-black bg-transparent px-0 placeholder:text-gray-400 text-xl pb-6 transition-all duration-300"
                      style={{ fontWeight: 500, letterSpacing: '-0.05em' }}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="Website *"
                      className="h-14 border-0 border-b border-gray-300 rounded-none focus-visible:ring-0 focus-visible:border-black bg-transparent px-0 placeholder:text-gray-400 text-xl pb-6 transition-all duration-300"
                      style={{ fontWeight: 500, letterSpacing: '-0.05em' }}
                    />
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name *"
                      className="h-14 border-0 border-b border-gray-300 rounded-none focus-visible:ring-0 focus-visible:border-black bg-transparent px-0 placeholder:text-gray-400 text-xl pb-6 transition-all duration-300"
                      style={{ fontWeight: 500, letterSpacing: '-0.05em' }}
                    />
                  </div>

                  <div className="pt-4">
                    <Label className="text-xl mb-4 block text-black font-medium" style={{ letterSpacing: '-0.05em', lineHeight: '1.5' }}>
                      Can you afford to pay $950 for our 30-day paid trial? *
                    </Label>
                    <RadioGroup
                      value={formData.canAfford}
                      onValueChange={(value) => handleRadioChange("canAfford", value)}
                      className="flex gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="afford-yes" className="w-5 h-5" />
                        <Label htmlFor="afford-yes" className="cursor-pointer text-lg">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="afford-no" className="w-5 h-5" />
                        <Label htmlFor="afford-no" className="cursor-pointer text-lg">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="problem" className="text-xl mb-3 block text-black font-medium" style={{ letterSpacing: '-0.05em', lineHeight: '1.5' }}>
                      What is the current problem you're experiencing?
                    </Label>
                    <Textarea
                      id="problem"
                      name="problem"
                      value={formData.problem}
                      onChange={handleChange}
                      placeholder="Describe your current challenges..."
                      className="min-h-[100px] text-xl resize-none border border-gray-300 rounded-lg focus-visible:ring-0 focus-visible:border-black bg-transparent placeholder:text-gray-400 p-3 transition-all duration-300"
                      style={{ fontWeight: 500, letterSpacing: '-0.05em' }}
                    />
                  </div>

                  <div className="pt-4">
                    <Label className="text-xl mb-4 block text-black font-medium" style={{ letterSpacing: '-0.05em', lineHeight: '1.5' }}>
                      By when do you want to solve this problem? *
                    </Label>
                    <RadioGroup
                      value={formData.urgency}
                      onValueChange={(value) => handleRadioChange("urgency", value)}
                      className="flex flex-wrap gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="today" id="urgency-today" className="w-5 h-5" />
                        <Label htmlFor="urgency-today" className="cursor-pointer text-lg">Today</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="tomorrow" id="urgency-tomorrow" className="w-5 h-5" />
                        <Label htmlFor="urgency-tomorrow" className="cursor-pointer text-lg">Tomorrow</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="few-weeks" id="urgency-weeks" className="w-5 h-5" />
                        <Label htmlFor="urgency-weeks" className="cursor-pointer text-lg">In a few weeks</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-black text-white hover:bg-black/90 h-14 mt-8 rounded-full group font-medium"
                  >
                    Submit
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookACall;
