"use client"; // Required for framer-motion and navigation menu interactions

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils"; // Assuming you have this utility
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { Separator } from "@/components/ui/separator";

// Adjusted navLinks structure if needed, or use directly
const sectionLinks = [
  { href: "/#how-it-works", title: "How It Works" },
  { href: "/#features", title: "Features" },
  { href: "/#providers", title: "Providers" },
];

const resources: { title: string; href: string; description: string }[] = [
  {
    title: "Understanding Gambling Addiction",
    href: "/resources/understanding-addiction", // Example links
    description:
      "Learn about the signs, symptoms, and effects of gambling addiction.",
  },
  {
    title: "Seeking Help",
    href: "/resources/seeking-help",
    description: "Find support groups, therapy options, and helplines.",
  },
  {
    title: "Responsible Gambling Tips",
    href: "/resources/responsible-gambling",
    description:
      "Strategies and tools to help maintain control over gambling habits.",
  },
];

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-border bg-background"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo/Brand Name - Use default text color */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-lg font-semibold sm:inline-block">BetStop</span>
        </Link>

        {/* Desktop Navigation - Manually style trigger to ensure no background */}
        <div className="hidden flex-1 justify-center md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {sectionLinks.map((link, index) => (
                <NavigationMenuItem key={link.href}>
                  <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * index + 0.3 }}
                  >
                    <Link href={link.href}>
                      <NavigationMenuLink
                        asChild
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent hover:bg-transparent focus:bg-transparent",
                          "text-foreground hover:text-primary focus:text-primary"
                        )}
                      >
                        <motion.span
                          className="inline-block"
                          whileHover={{ y: -2, scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {link.title}
                        </motion.span>
                      </NavigationMenuLink>
                    </Link>
                  </motion.div>
                </NavigationMenuItem>
              ))}

              {/* Example Dropdown - Manually style trigger to ensure no background */}
              <NavigationMenuItem>
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1 * sectionLinks.length + 0.3,
                  }}
                >
                  <NavigationMenuTrigger
                    className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors", // Base layout/text styles
                      "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent", // Ensure transparent background always
                      "text-foreground hover:text-primary focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50" // Text color, focus, disabled states
                    )}
                  >
                    <motion.span
                      className="inline-block"
                      whileHover={{ y: -2, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      Resources
                    </motion.span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-popover text-popover-foreground">
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {resources.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </motion.div>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Aligned Items: CTA Button and Theme Toggle */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="hidden items-center space-x-2 md:flex"
        >
          <Button asChild size="sm">
            <Link href="/blacklist">Start Blacklisting</Link>
          </Button>
          <ThemeToggle />
        </motion.div>

        {/* Mobile Navigation - Sheet - Include ThemeToggle */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
              <div className="flex h-full flex-col">
                <div className="p-6">
                  <SheetClose asChild>
                    <Link href="/" className="flex items-center space-x-2 mb-4">
                      <span className="text-xl font-semibold">BetStop</span>
                    </Link>
                  </SheetClose>
                  <Separator />
                </div>

                <nav className="flex-grow px-6 space-y-2">
                  <p className="text-sm font-medium text-muted-foreground px-0 pb-1">
                    Navigate
                  </p>
                  {sectionLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "flex w-full items-center rounded-md px-3 py-2 text-base font-medium",
                          "text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        )}
                      >
                        {link.title}
                      </Link>
                    </SheetClose>
                  ))}

                  <Separator className="my-4" />

                  <p className="text-sm font-medium text-muted-foreground px-0 pb-1">
                    Resources
                  </p>
                  {resources.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "flex w-full items-center rounded-md px-3 py-2 text-base font-medium",
                          "text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        )}
                      >
                        {link.title}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                <div className="mt-auto p-6">
                  <Separator className="mb-4" />
                  <SheetClose asChild>
                    <Button asChild className="w-full">
                      <Link href="/blacklist">Start Blacklisting</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}

// Helper component for NavigationMenuContent items - Revert to default hover/focus
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
