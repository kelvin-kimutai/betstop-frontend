"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Faster stagger for logos
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }, // Custom ease
  },
};

// Provider data (Add more as needed)
// *** IMPORTANT: Replace placeholder paths with your actual logo files in /public/logos/ ***
const providers = [
  { name: "Betika", logoSrc: "/logos/betika.png" },
  { name: "Mozzartbet", logoSrc: "/logos/mozzartbet.svg" },
  { name: "Betnara", logoSrc: "/logos/betnara.png" },
  { name: "Sportpesa", logoSrc: "/logos/sportpesa.png" }, // Example
  { name: "Odibets", logoSrc: "/logos/odibets.png" }, // Example
  { name: "Betway", logoSrc: "/logos/betway.svg" }, // Example
  // ... add more providers
];

export function ProvidersSection() {
  return (
    <motion.section
      id="providers"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      // Use a slightly different background
      className="py-24 md:py-32 lg:py-40 bg-background"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
            Supported Betting Providers
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
            We currently support self-exclusion requests for a growing list of
            popular betting platforms in your region.
          </p>
        </motion.div>

        {/* Logos Grid */}
        <motion.div
          variants={sectionVariants} // Stagger logo animations
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 md:gap-12 items-center"
        >
          {providers.map((provider, index) => (
            <motion.div
              key={provider.name}
              variants={logoVariants}
              className="flex justify-center items-center"
              title={provider.name} // Tooltip for provider name
            >
              <motion.div
                whileHover={{ scale: 1.1, filter: "brightness(1.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={provider.logoSrc} // Use provider logo source
                  alt={`${provider.name} logo`}
                  width={140} // Adjust size as needed
                  height={70} // Adjust size as needed
                  className="object-contain max-h-[50px] w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Concluding Text */}
        <motion.p
          variants={itemVariants}
          className="mt-16 text-center text-muted-foreground md:text-lg"
        >
          Don't see a provider?{" "}
          <a
            href="/contact"
            className="text-primary underline hover:no-underline"
          >
            Let us know
          </a>
          . We are continuously expanding our coverage.
        </motion.p>
      </div>
    </motion.section>
  );
}
