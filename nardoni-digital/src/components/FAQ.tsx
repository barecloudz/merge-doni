import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can you show me examples of other businesses like mine that you've helped?",
    answer: "Yes, feel free to take a look at our case studies."
  },
  {
    question: "What exactly are you going to do for my business?",
    answer: "We are going to build a website that converts, get visitors to see it and make sure that the people that actually reach out to you are being screened first before they reach your inbox."
  },
  {
    question: "How long does it take to start seeing results?",
    answer: "The paid trial is designed to give you enough results to make an informed decision whether you want to continue after the initial 30-day period."
  },
  {
    question: "How much is this going to cost me upfront?",
    answer: "The paid trial costs $950 one-time upfront. No commitment, no retainers, no 12 month contract. You actively have to tell us that you want to continue a week before the trial ends so that we can offer you a retainer model, which you can still cancel on a monthly basis."
  },
  {
    question: "How do I know I'll get my money back if it doesn't work?",
    answer: "This is a registered company. You are working with professionals that are committed to delivering results. When you need or want a refund, just reach out and we'll process it promptly."
  },
  {
    question: "How much of my time is this going to require?",
    answer: "Barely anything. You just do what you do best: turn phone calls into customers."
  },
  {
    question: "Do I need to learn how to do any of this technical stuff?",
    answer: "No you absolutely don't have to do ANY of the technical. This is why we have a team of trained professionals so you don't need to lift a finger."
  },
  {
    question: "What if this doesn't work for my type of business?",
    answer: "We make sure that we can deliver these results for your exact business because we have zero interest in refunding clients and making a bad name for ourselves. So you're in good hands as soon as we offer you the paid trial."
  },
  {
    question: "How long am I locked into this contract?",
    answer: "There is absolutely zero commitment with our offer. The paid trial doesn't renew, meaning you only pay one time upfront to get 30 days of service and results. Then, a week prior to the end of the trial, you'll be offered to renew and jump on the retainer. The retainer itself is also cancellable on a monthly basis."
  },
  {
    question: "What happens if I want to cancel?",
    answer: "Just contact us directly and we'll make sure to handle it the same day."
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">Questions</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently <span className="metallic-shine">Asked Questions</span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
