"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

// FAQ Data
const faqs = [
  {
    question: "Is BetStop secure?",
    answer:
      "Yes. We prioritize your privacy and security. Account details are handled securely only for the purpose of processing your self-exclusion request. We do not store sensitive data long-term.",
    value: "item-1",
  },
  {
    question: "How long does the self-exclusion last?",
    answer:
      "The duration of self-exclusion typically depends on the betting provider's policies. Most offer options ranging from several months to permanent exclusion. We initiate the request based on standard terms, but you may need to confirm the duration with the provider.",
    value: "item-2",
  },
  {
    question: "Is this service really free?",
    answer:
      "Absolutely. BetStop is a free resource committed to helping individuals manage their gambling habits. There are no hidden fees or charges.",
    value: "item-3",
  },
  {
    question: "What if a provider isn't listed?",
    answer:
      "We are constantly working to expand our list of supported providers. Please use the contact link in the footer to let us know which provider you'd like added, and we'll do our best to include them.",
    value: "item-4",
  },
];

export function FaqSection() {
  return (
    <motion.section
      id="faq"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
      className="py-24 md:py-32 lg:py-40 bg-background"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
            Have questions? We've got answers. Find information about our
            service, security, and the self-exclusion process.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div variants={itemVariants} className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem
                value={faq.value}
                key={faq.value}
                className="border-border/50"
              >
                <AccordionTrigger className="text-left text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </motion.section>
  );
}
