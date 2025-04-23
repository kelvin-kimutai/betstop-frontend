"use client";

import { Header } from "@/components/landing/header";
import { motion } from "framer-motion";
import Link from "next/link";

// You might want to fetch specific resources dynamically later
// Placeholder structure for resources
type Resource = {
  name: string;
  description: string;
  contact?: string;
  website?: string;
};

const therapyResources: Resource[] = [
  {
    name: "Cognitive Behavioral Therapy (CBT)",
    description:
      "A common and effective therapy focusing on identifying and changing negative thinking patterns and behaviors related to gambling.",
  },
  {
    name: "Certified Gambling Counselors",
    description:
      "Look for therapists specializing in addiction, particularly gambling addiction, in your local area.",
    website: "#",
  }, // Placeholder link
];

const supportGroups: Resource[] = [
  {
    name: "Gamblers Anonymous (GA)",
    description:
      "A fellowship sharing experience, strength, and hope to solve their common problem and help others recover. Uses a 12-step program.",
    website: "http://www.gamblersanonymous.org/ga/",
  },
  {
    name: "Gam-Anon",
    description:
      "Support groups specifically for the friends and family members affected by someone else's gambling problem.",
    website: "https://www.gam-anon.org/",
  },
];

const helplines: Resource[] = [
  {
    name: "National Problem Gambling Helpline",
    description: "Confidential help available 24/7. Call or text.",
    contact: "1-800-GAMBLER",
    website:
      "https://www.ncpgambling.org/help-treatment/national-helpline-1-800-gambler/",
  }, // Example US helpline
  {
    name: "Your Local Helpline (Example)",
    description:
      "Search online for '[Your Region/Country] gambling helpline' for local resources.",
    contact: "(Specific Number)",
    website: "#",
  },
  {
    name: "National Council on Problem Gambling",
    description: "Provides resources and referrals for treatment.",
    website: "https://www.ncpgambling.org/",
  },
];

export default function SeekingHelpPage() {
  return (
    <div>
      {" "}
      <Header />{" "}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto  px-4 py-12 md:py-16 lg:py-20"
      >
        <article className="space-y-10 md:space-y-12">
          {/* Main Title */}
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Seeking Help for Gambling Addiction
          </h1>

          {/* Introduction */}
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Recognizing the need for help is a courageous first step. Gambling
            addiction is treatable, and numerous resources are available to
            support you or your loved one on the path to recovery. Explore the
            options below.
          </p>

          {/* Section 1: Professional Help */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4 md:text-3xl border-b border-border pb-2">
              Professional Therapy & Counseling
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-6 md:text-lg">
              Working with a trained mental health professional can provide
              tailored strategies and support. Common therapeutic approaches
              include:
            </p>
            <ul className="space-y-4 list-none pl-0 mb-6">
              {therapyResources.map((resource) => (
                <li
                  key={resource.name}
                  className="p-4 border border-border/50 rounded-md bg-card/50"
                >
                  <strong className="font-semibold text-foreground block mb-1">
                    {resource.name}
                  </strong>
                  <p className="text-sm text-muted-foreground mb-2">
                    {resource.description}
                  </p>
                  {resource.website && (
                    <a
                      href={resource.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline"
                    >
                      Learn More
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground italic">
              Look for licensed therapists or counselors with experience in
              addiction treatment in your local directories or through referral
              services.
            </p>
          </section>

          {/* Section 2: Support Groups */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4 md:text-3xl border-b border-border pb-2">
              Support Groups
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-6 md:text-lg">
              Connecting with others who share similar experiences can be
              incredibly powerful. Peer support groups offer understanding,
              encouragement, and accountability.
            </p>
            <ul className="space-y-4 list-none pl-0 mb-6">
              {supportGroups.map((resource) => (
                <li
                  key={resource.name}
                  className="p-4 border border-border/50 rounded-md bg-card/50"
                >
                  <strong className="font-semibold text-foreground block mb-1">
                    {resource.name}
                  </strong>
                  <p className="text-sm text-muted-foreground mb-2">
                    {resource.description}
                  </p>
                  {resource.website && (
                    <a
                      href={resource.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline"
                    >
                      Visit Website
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3: Helplines & Online Resources */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4 md:text-3xl border-b border-border pb-2">
              Helplines & Online Resources
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-6 md:text-lg">
              Immediate, confidential support is often available via phone,
              text, or online chat. Many organizations also provide valuable
              information online.
            </p>
            <ul className="space-y-4 list-none pl-0 mb-6">
              {helplines.map((resource) => (
                <li
                  key={resource.name}
                  className="p-4 border border-border/50 rounded-md bg-card/50"
                >
                  <strong className="font-semibold text-foreground block mb-1">
                    {resource.name}
                  </strong>
                  <p className="text-sm text-muted-foreground mb-2">
                    {resource.description}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
                    {resource.contact && (
                      <span className="font-medium">
                        Contact: {resource.contact}
                      </span>
                    )}
                    {resource.website && (
                      <a
                        href={resource.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Visit Website
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 4: Self-Exclusion Tools */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4 md:text-3xl border-b border-border pb-2">
              Self-Exclusion Tools
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-6 md:text-lg">
              Taking practical steps to limit access to gambling platforms is a
              key part of recovery. Tools like BetStop allow you to block
              yourself from multiple providers at once.
            </p>
            <div className="p-4 border border-primary/50 rounded-md bg-primary/10 text-center">
              <p className="text-foreground mb-3">
                Ready to limit your access?
              </p>
              <Link
                href="/blacklist"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Use BetStop Self-Exclusion
              </Link>
            </div>
          </section>

          {/* Section 5: For Friends & Family */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4 md:text-3xl border-b border-border pb-2">
              Support for Friends & Family
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-6 md:text-lg">
              If you're concerned about a loved one's gambling, support is
              available for you too. Understanding the addiction and learning
              how to help without enabling can make a significant difference.
              Consider resources like Gam-Anon (mentioned above) or seeking
              guidance from addiction professionals.
            </p>
          </section>

          {/* Conclusion */}
          <p className="text-lg leading-relaxed text-center text-muted-foreground pt-8 border-t border-border mt-12">
            Remember, you are not alone. Reaching out is the most important step
            towards recovery.
          </p>
        </article>
      </motion.div>
    </div>
  );
}
