import { ArrowUpRight, Forward } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatedGridPattern } from "./ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function CTABanner() {
  return (
    <div className="px-6" id="contact">
      <div className="dark:border relative overflow-hidden my-20 w-full dark bg-background text-foreground max-w-(--breakpoint-lg) mx-auto rounded-2xl py-10 md:py-16 px-6 md:px-14">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_right,white,rgba(255,255,255,0.6),transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_top_left,white,rgba(255,255,255,0.6),transparent)]",
            "inset-x-0 inset-y-0 h-[200%] skew-y-12",
          )}
        />

        <div className="relative z-0 flex flex-col gap-3">
          <h3 className="text-3xl md:text-4xl font-semibold">
            Need Your Laptop or PC Fixed?
          </h3>
          <p className="mt-2 text-base md:text-lg">
            Book a repair in minutes. We pick up your device, fix it
            professionally, and deliver it back to your doorstep.
            <br />
            <span className="font-medium">
              No fix, no charge. 100% transparent pricing.
            </span>
            <br />
            <span className="text-muted-foreground text-sm">
              Click “Book a Repair” to chat on WhatsApp and schedule your pickup
              in seconds.
            </span>
          </p>
        </div>

        <div className="relative z-0 mt-14 flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            onClick={() => {
              window.open("https://wa.me/918296472301", "_blank");
            }}
          >
            Book a Repair <ArrowUpRight className="h-5! w-5!" />
          </Button>
        </div>
      </div>
    </div>
  );
}
