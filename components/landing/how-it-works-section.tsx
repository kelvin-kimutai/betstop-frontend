"use client";

import { motion } from "framer-motion";
import { ListChecks, UserRoundCog, SendHorizonal } from "lucide-react"; // Icons for steps
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"; // Use Card component

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Step data with added emphasis
const steps = [
  {
    icon: ListChecks,
    stepNum: 1,
    title: "Select Providers",
    description: (
      <>
        Choose the betting companies you want to self-exclude from our{" "}
        <strong>comprehensive and up-to-date</strong> list.
      </>
    ),
  },
  {
    icon: UserRoundCog,
    stepNum: 2,
    title: "Provide Details",
    description: (
      <>
        Securely enter only the <strong>necessary account identifiers</strong>{" "}
        (like username or phone number) for each selected provider. Your data is
        protected.
      </>
    ),
  },
  {
    icon: SendHorizonal,
    stepNum: 3,
    title: "Submit & Relax",
    description: (
      <>
        Submit your request with one click. We handle the exclusion process
        directly, allowing you to <strong>focus on your well-being</strong>.
      </>
    ),
  },
];

export function HowItWorksSection() {
  return (
    <motion.section
      id="how-it-works"
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
            Simple Steps to Regain Control
          </h2>
          <p className="mt-4 max-w-[600px] mx-auto text-lg text-muted-foreground md:text-xl">
            Our streamlined process makes self-exclusion straightforward and
            hassle-free in just 3 easy steps.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={sectionVariants} // Use container variants for staggering children
          className="grid gap-8 md:grid-cols-3"
        >
          {steps.map((step, index) => (
            // Add group class for hover effects on children
            <motion.div
              variants={itemVariants}
              key={index}
              className="group"
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Card className="h-full text-center flex flex-col items-center pt-6 bg-card shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out border-border/50">
                <CardHeader className="items-center pb-4 px-6 w-full bg-muted/20 rounded-t-lg">
                  <motion.div className="mb-4 rounded-full bg-primary/10 p-3 text-primary transition-transform duration-300 group-hover:scale-110">
                    <step.icon className="h-8 w-8" />
                  </motion.div>
                  <CardTitle className="text-sm font-semibold uppercase tracking-wider text-primary">
                    Step {step.stepNum}
                  </CardTitle>
                  <CardDescription className="text-xl font-semibold pt-1">
                    {step.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 px-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
