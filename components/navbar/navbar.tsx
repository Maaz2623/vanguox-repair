"use client";
import { Button } from "@/components/ui/button";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import ThemeToggle from "../theme-toggle";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-4 inset-x-3 sm:top-6 sm:inset-x-4 h-12 sm:h-14 md:h-16 bg-background/60 backdrop-blur-md border dark:border-slate-700/70 max-w-(--breakpoint-xl) mx-auto rounded-full">
      <div className="h-full flex items-center justify-between px-3 sm:px-4">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            src={`/logo.svg`}
            alt="logo"
            className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"
            width={50}
            height={50}
          />
          <p className="text-base sm:text-lg md:text-xl font-semibold hidden xs:block">
            VANGOX
          </p>
        </div>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:flex" />

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          {/* CTA (Desktop & Tablet only) */}
          <Button
            size="sm"
            className="hidden sm:flex rounded-full px-3 md:px-4 text-sm"
            onClick={() => {
              window.open("https://wa.me/918296472301", "_blank");
            }}
          >
            <span className="hidden md:inline">Book a Repair</span>
            <ArrowUpRight className="h-4 w-4 md:ml-1" />
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
