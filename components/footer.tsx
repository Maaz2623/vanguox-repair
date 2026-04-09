import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { GithubIcon, TwitterIcon, MessageCircleIcon } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  { title: "Features", href: "#features" },
  { title: "Pricing", href: "#pricing" },
  { title: "FAQ", href: "#faq" },
  { title: "Privacy", href: "#privacy" },
];

const Footer = () => {
  return (
    <footer className="mt-40 border-t bg-background text-foreground">
      <div className="max-w-(--breakpoint-xl) mx-auto px-6 xl:px-0">
        {/* Top */}
        <div className="py-12 flex flex-col sm:flex-row justify-between gap-10">
          {/* Logo + Links */}
          <div>
            <h2 className="text-xl font-bold">Vanguox</h2>

            <ul className="mt-6 flex flex-wrap gap-4">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground transition"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator />

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Vanguox. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
