import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import React from "react";
import LogoCloud from "./logo-cloud";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center py-20 px-6">
      <div className="md:mt-6 flex items-center justify-center">
        <div className="text-center max-w-2xl">
          <Badge className="bg-primary rounded-full py-1 border-none">
            Free Pickup and Drop 🚀
          </Badge>
          <h1 className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2]! tracking-tight">
            Fast & Reliable Laptop and PC Repairs
          </h1>
          <p className="mt-6 max-w-[60ch] xs:text-lg">
            Book your repair online and relax. We pick up your device, fix it
            professionally, and deliver it back to your doorstep — quick,
            affordable, and hassle-free.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center sm:justify-center gap-4">
            <Button
              size="sm"
              className="rounded-full px-3 md:px-4 text-md"
              onClick={() => {
                window.open("https://wa.me/918296472301", "_blank");
              }}
            >
              <span className="">Book a Repair</span>
              <ArrowUpRight className="h-4 w-4 md:ml-1" />
            </Button>
          </div>
        </div>
      </div>
      {/* <LogoCloud className="mt-24 max-w-3xl mx-auto" /> */}
    </div>
  );
};

export default Hero;
