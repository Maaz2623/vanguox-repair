import {
  Blocks,
  Bot,
  ChartPie,
  Film,
  MessageCircle,
  Settings2,
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: Settings2,
    title: "Doorstep Pickup & Delivery",
    description:
      "Schedule a repair in seconds. We pick up your device from your location and deliver it back safely after repair.",
  },
  {
    icon: Blocks,
    title: "All Device Repairs",
    description:
      "We repair laptops and desktops of all brands, including hardware issues, software problems, and upgrades.",
  },
  {
    icon: Bot,
    title: "Quick Diagnosis",
    description:
      "Get a fast and accurate diagnosis of your device with transparent updates before any repair begins.",
  },
  {
    icon: Film,
    title: "Screen & Hardware Replacement",
    description:
      "Broken screen, faulty keyboard, or battery issues? We replace parts with high-quality components.",
  },
  {
    icon: ChartPie,
    title: "Affordable Pricing",
    description:
      "No hidden charges. Clear pricing with repair costs starting at just ₹500 depending on the issue.",
  },
  {
    icon: MessageCircle,
    title: "Real-Time Support",
    description:
      "Stay updated on your repair status and get support anytime through chat or call.",
  },
];

const Features = () => {
  return (
    <div id="features" className="w-full py-12 xs:py-20 px-6">
      <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
        Our Repair Services
      </h2>
      <div className="w-full max-w-(--breakpoint-lg) mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col bg-background border rounded-xl py-6 px-5"
          >
            <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
              <feature.icon className="h-6 w-6" />
            </div>
            <span className="text-lg font-semibold">{feature.title}</span>
            <p className="mt-1 text-foreground/80 text-[15px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
