import {
  BadgeDollarSign,
  Route,
  ShieldCheck,
  Truck,
  Undo2,
  UserRoundCheck,
} from "lucide-react";

const faq = [
  {
    icon: Undo2,
    question: "What if my device cannot be repaired?",
    answer:
      "No worries. If we’re unable to fix your device, you won’t be charged for the repair. Diagnosis charges may apply only if mentioned upfront.",
  },
  {
    icon: Route,
    question: "How do I track my repair status?",
    answer:
      "Once you book a repair, you’ll receive updates on your device status via WhatsApp or call so you always know what’s happening.",
  },
  {
    icon: Truck,
    question: "Do you offer pickup and delivery?",
    answer:
      "Yes, we provide doorstep pickup and delivery within our service area. Your device is handled safely and returned after repair.",
  },
  {
    icon: BadgeDollarSign,
    question: "How much will the repair cost?",
    answer:
      "Diagnosis starts at ₹199. Basic repairs start from ₹500. Final pricing depends on the issue and parts required, and we always inform you before proceeding.",
  },
  {
    icon: ShieldCheck,
    question: "Is my data safe during repair?",
    answer:
      "Yes, your data privacy is our priority. We do not access your personal files and ensure secure handling of your device at all times.",
  },
  {
    icon: UserRoundCheck,
    question: "How can I contact support?",
    answer:
      "You can reach us anytime via phone or WhatsApp. We’re here to help you with bookings, updates, and any questions you have.",
  },
];

const FAQ = () => {
  return (
    <div
      id="faq"
      className="min-h-screen flex items-center justify-center px-6 py-12 xs:py-20"
    >
      <div className="max-w-(--breakpoint-lg)">
        <h2 className="text-3xl xs:text-4xl md:text-5xl leading-[1.15]! font-bold tracking-tight text-center">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 xs:text-lg text-center text-muted-foreground">
          Everything you need to know about our repair services.
        </p>

        <div className="mt-12 grid md:grid-cols-2 bg-background rounded-xl overflow-hidden outline outline-[1px] outline-border outline-offset-[-1px]">
          {faq.map(({ question, answer, icon: Icon }) => (
            <div key={question} className="border p-6 -mt-px -ml-px">
              <div className="h-8 w-8 xs:h-10 xs:w-10 flex items-center justify-center rounded-full bg-accent">
                <Icon className="h-4 w-4 xs:h-6 xs:w-6" />
              </div>
              <div className="mt-3 mb-2 flex items-start gap-2 text-lg xs:text-[1.35rem] font-semibold tracking-tight">
                <span>{question}</span>
              </div>
              <p className="text-sm xs:text-base">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
