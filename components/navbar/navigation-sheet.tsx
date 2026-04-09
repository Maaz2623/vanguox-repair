"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { ArrowUpRight, Menu } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent className="flex flex-col px-6 py-6">
        {/* Header */}
        <SheetHeader className="p-0">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <Logo />
        </SheetHeader>

        {/* Nav Links */}
        <div className="flex-1">
          <NavMenu orientation="vertical" className="mt-10 space-y-2" />
        </div>

        {/* CTA */}
        <SheetFooter className="pt-6">
          <Button
            size="lg"
            className="rounded-full px-3"
            onClick={() => {
              window.open("https://wa.me/918296472301", "_blank");
            }}
          >
            Book a Repair <ArrowUpRight className="h-5! w-5!" />
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
