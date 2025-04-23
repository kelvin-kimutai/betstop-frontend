"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export function CtaSection() {
  return (
    <motion.section
      id="cta"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      // Visually distinct background - gradient or solid contrast
      className="py-20 md:py-28 lg:py-32 bg-gradient-to-br from-primary/80 via-primary to-primary/70 dark:from-primary/60 dark:via-primary/80 dark:to-primary/50 text-primary-foreground"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* Headline */}
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl mb-6">
            Ready to Take the First Step?
          </h2>
          {/* Supporting Text */}
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-xl mx-auto">
            Start the self-exclusion process today. It's simple, secure, and
            puts you back in control.
          </p>
          {/* Button */}
          <Button
            size="lg"
            asChild
            // Use a contrasting variant (like secondary or custom) if available/needed
            // Or rely on primary-foreground for text contrast
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors duration-300 shadow-lg"
          >
            <Link href="/blacklist">Get Started Now</Link>
          </Button>
          {/* Optional: Secondary Link */}
          {/* <p className="mt-6 text-sm opacity-80">
               Questions? <Link href="/contact" className="underline hover:opacity-100">Contact Support</Link>
           </p> */}
        </div>
      </div>
    </motion.section>
  );
}
