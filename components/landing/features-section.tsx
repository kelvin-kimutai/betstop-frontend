"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ListVideo, Zap, BadgeDollarSign } from "lucide-react"; // Icons for features

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 }, // Added scale
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Feature data
const features = [
  {
    icon: ListVideo,
    title: "Wide Provider Coverage",
    description:
      "Access a broad and growing list of betting providers in your region for comprehensive self-exclusion.",
  },
  {
    icon: ShieldCheck,
    title: "Simple & Secure Process",
    description:
      "Our platform uses secure protocols to handle your requests. The process is designed for ease of use.",
  },
  {
    icon: Zap,
    title: "One-Platform Action",
    description:
      "No need to visit multiple sites. Initiate self-exclusion requests for multiple providers from one place.",
  },
  {
    icon: BadgeDollarSign,
    title: "Completely Free",
    description:
      "BetStop is a free service aimed at providing accessible support for managing gambling habits.",
  },
];

export function FeaturesSection() {
  return (
    <motion.section
      id="features"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className="py-24 md:py-32 lg:py-40 bg-background"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
            Why Choose BetStop?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
            We provide essential tools designed to empower you on your journey
            to responsible gambling or recovery.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={sectionVariants} // Stagger children
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card/50 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="mb-5 rounded-full border border-primary/20 bg-primary/10 p-3 text-primary">
                <feature.icon className="h-7 w-7" />
              </div>
              {/* Title */}
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              {/* Placeholder for illustrations */}
              {/* <Image src={`/assets/feature-${index}.svg`} alt={feature.title} width={100} height={100} className="mt-4" /> */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
