import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react"; // Example social icons

// Define links centrally if they might be reused or grow
const quickLinks = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#features", label: "Features" },
  { href: "/#providers", label: "Providers" },
  // { href: "/contact", label: "Contact Us" },
];

const resourceLinks = [
  {
    href: "/resources/understanding-addiction",
    label: "Understanding Addiction",
  },
  { href: "/resources/seeking-help", label: "Seeking Help" },
  { href: "/resources/responsible-gambling", label: "Responsible Gambling" },
];

const socialLinks = [
  { href: "#", label: "Twitter", icon: Twitter },
  { href: "#", label: "GitHub", icon: Github },
  { href: "#", label: "LinkedIn", icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50 text-muted-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Column 1: Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="mb-4 flex items-center space-x-2">
              <span className="text-xl font-semibold text-foreground">
                BetStop
              </span>
            </Link>
            <p className="text-sm mb-4 max-w-xs">
              Empowering individuals to take control of their betting habits
              through easy self-exclusion.
            </p>
            <p className="text-xs">
              © {new Date().getFullYear()} BetStop. All rights reserved.
            </p>
            {/* Optional: Add disclaimer links here if needed */}
            {/* <div className="mt-4 text-xs space-x-3">
               <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
               <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
             </div> */}
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="mb-4 font-semibold text-foreground uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="text-center md:text-left">
            <h4 className="mb-4 font-semibold text-foreground uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row: Social Links (Centered) */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-xs mb-4 sm:mb-0">
            {/* Optional additional footer text */}
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
