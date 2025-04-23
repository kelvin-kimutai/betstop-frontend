"use client"; // Required for framer-motion

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // Import next/image

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 }, // Added subtle scale
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, rotate: -3 }, // Add rotation
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, ease: [0.1, 0.8, 0.2, 1] }, // Different ease/duration
  },
};

export function HeroSection() {
  return (
    <div
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: "60px 60px",
      }}
    >
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        // Change to grid layout on large screens, adjust padding/alignment
        className="relative overflow-hidden container mx-auto grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:py-32 lg:text-left"
      >
        {/* Layer 1: Animated Gradient */}
        <motion.div
          className="absolute inset-0 -z-20" // Further back
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.1 }}
        >
          {/* Light mode: secondary from top. Dark mode: secondary (dark theme var) from center */}
          <div
            className="absolute inset-0 
                    bg-[radial-gradient(ellipse_at_top,var(--secondary)_0%,transparent_70%)] 
                    dark:bg-[radial-gradient(ellipse_at_center,var(--secondary)_0%,transparent_70%)] 
                    opacity-30 dark:opacity-25"
          >
            {" "}
            {/* Adjusted opacity & transparency stop */}
          </div>
        </motion.div>

        {/* Layer 2: Animated Subtle Pattern */}
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <div
            className="absolute inset-0 animate-move-bg 
                     bg-[linear-gradient(transparent_98%,var(--background)_100%)] 
                     dark:bg-[linear-gradient(transparent_98%,var(--background)_100%)]"
          >
            {/* Overlay to fade pattern into background */}
          </div>
        </motion.div>

        {/* Text Content Column */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Badge/Sub-headline */}
          <motion.div variants={textItemVariants} className="mb-4">
            <span className="inline-block rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
              Take Control. Find Support.
            </span>
          </motion.div>

          <motion.h1
            variants={textItemVariants}
            className="text-4xl font-extrabold leading-tight tracking-tighter 
                    sm:text-5xl md:text-6xl lg:text-7xl 
                    bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
          >
            Stop Betting. Start Saving.
          </motion.h1>

          <motion.p
            variants={textItemVariants}
            className="mt-6 max-w-[600px] text-lg text-muted-foreground sm:text-xl md:text-2xl"
          >
            Easily self-exclude from major betting platforms with BetStop. Take
            the first step towards regaining control today.
          </motion.p>

          <motion.div
            variants={textItemVariants}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            {/* Button Hover: Apply motion to Link, not Button */}
            <Button size="lg" asChild>
              <Link href="/blacklist">Get Started Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/#how-it-works">Learn How</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Image Column */}
        <motion.div
          variants={imageVariants}
          className="flex justify-center lg:justify-end p-2"
        >
          {/* Add your hero image here (e.g., public/placeholder-hero.svg) */}
          <Image
            src="/assets/heroImage.jpeg" // *** REPLACE WITH YOUR IMAGE PATH ***
            alt="Hero image illustrating control or support"
            width={500}
            height={500}
            priority // Load image sooner
            className="rounded-lg shadow-2xl object-cover w-full max-w-md lg:max-w-none"
          />
        </motion.div>
      </motion.section>
    </div>
  );
}
