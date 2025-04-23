"use client";

import { Header } from "@/components/landing/header";
import { motion } from "framer-motion";
import Link from "next/link";

export default function UnderstandingAddictionPage() {
  return (
    <div>
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
            Understanding Gambling Addiction
          </h1>

          {/* Introduction / Definition */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4 md:text-3xl border-b border-border pb-2">
              What is Gambling Addiction?
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-6 md:text-lg">
              Gambling addiction, also known as compulsive gambling,
              pathological gambling, or gambling disorder, is an impulse-control
              disorder. It's characterized by a persistent and problematic urge
              to gamble, leading to significant harm or distress, despite
              negative consequences.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              It's recognized as a diagnosable mental health condition, similar
              to substance addictions. The brain's reward system is activated
              during gambling, which can lead to changes in brain chemistry and
              structure over time, making it difficult to stop.
            </p>
            <blockquote className="mt-6 border-l-4 border-primary pl-4 italic text-muted-foreground">
              "It's not a sign of weakness or a lack of willpower; it's a
              complex condition that requires understanding and often
              professional help."
            </blockquote>
          </section>

          {/* Section 2: Signs & Symptoms */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4 md:text-3xl border-b border-border pb-2">
              Signs and Symptoms
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-6 md:text-lg">
              Recognizing the signs is crucial for early intervention. Symptoms
              can be behavioral, emotional, and financial:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Behavioral Signs */}
              <div className="p-4 border border-border/50 rounded-md bg-card/50">
                <h3 className="font-semibold text-foreground mb-2">
                  Behavioral
                </h3>
                <ul className="space-y-1 list-disc list-outside ml-4 text-sm text-muted-foreground">
                  <li>Preoccupation with gambling</li>
                  <li>
                    Needing to gamble with increasing amounts of money
                    (tolerance)
                  </li>
                  <li>Unsuccessful attempts to control, cut back, or stop</li>
                  <li>
                    Restlessness or irritability when trying to stop
                    (withdrawal)
                  </li>
                  <li>
                    Gambling to escape problems or relieve negative feelings
                  </li>
                  <li>Chasing losses (gambling more to win back lost money)</li>
                  <li>Lying to hide the extent of gambling</li>
                  <li>Jeopardizing relationships, jobs, or opportunities</li>
                  <li>
                    Committing illegal acts (e.g., theft, fraud) to finance
                    gambling
                  </li>
                </ul>
              </div>
              {/* Emotional Signs */}
              <div className="p-4 border border-border/50 rounded-md bg-card/50">
                <h3 className="font-semibold text-foreground mb-2">
                  Emotional
                </h3>
                <ul className="space-y-1 list-disc list-outside ml-4 text-sm text-muted-foreground">
                  <li>Feelings of helplessness</li>
                  <li>Anxiety or depression</li>
                  <li>Guilt or shame</li>
                  <li>Mood swings</li>
                  <li>Irritability</li>
                  <li>
                    Suicidal thoughts or attempts (seek immediate help if
                    experiencing this)
                  </li>
                </ul>
              </div>
              {/* Financial Signs */}
              <div className="p-4 border border-border/50 rounded-md bg-card/50">
                <h3 className="font-semibold text-foreground mb-2">
                  Financial
                </h3>
                <ul className="space-y-1 list-disc list-outside ml-4 text-sm text-muted-foreground">
                  <li>Unexplained debt</li>
                  <li>Borrowing money frequently</li>
                  <li>Selling possessions</li>
                  <li>Unpaid bills</li>
                  <li>Secretive bank accounts or loans</li>
                  <li>Financial instability</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Risk Factors */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4 md:text-3xl border-b border-border pb-2">
              Risk Factors
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-6 md:text-lg">
              Various factors can increase the likelihood of developing a
              gambling addiction. These often interact:
            </p>
            <ul className="space-y-3 list-disc list-outside ml-5 mb-6 text-muted-foreground md:text-lg">
              <li>
                <strong>Mental Health Conditions:</strong> Co-occurring
                disorders like depression, anxiety, bipolar disorder, ADHD, or
                substance abuse increase risk.
              </li>
              <li>
                <strong>Age:</strong> Starting gambling at a young age is a risk
                factor.
              </li>
              <li>
                <strong>Genetics & Family History:</strong> Having family
                members with gambling problems can increase susceptibility.
              </li>
              <li>
                <strong>Personality Traits:</strong> Impulsivity,
                competitiveness, restlessness, or being easily bored can play a
                role.
              </li>
              <li>
                <strong>Environmental Factors:</strong> Easy access to gambling,
                stressful life events, or social influence can contribute.
              </li>
              <li>
                <strong>Certain Medications:</strong> Rarely, drugs used to
                treat Parkinson's disease or restless legs syndrome (dopamine
                agonists) have been linked to compulsive behaviors, including
                gambling.
              </li>
            </ul>
          </section>

          {/* Section 4: Cycle of Addiction */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4 md:text-3xl border-b border-border pb-2">
              The Cycle of Addiction
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-6 md:text-lg">
              Gambling addiction often follows a pattern: Trigger (stress,
              boredom) → Urge to Gamble → Gambling → Temporary Relief/Excitement
              → Negative Consequences (losses, guilt) → Increased
              Stress/Negative Feelings → Stronger Urge to Gamble (often to
              escape or chase losses). Breaking this cycle is key to recovery.
            </p>
          </section>

          {/* Section 5: Impact on Life */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4 md:text-3xl border-b border-border pb-2">
              Impact on Life
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-6 md:text-lg">
              The consequences of unchecked gambling addiction can be
              devastating and far-reaching:
            </p>
            <ul className="space-y-3 list-disc list-outside ml-5 mb-6 text-muted-foreground md:text-lg">
              <li>
                <strong>Financial Ruin:</strong> Significant debt, bankruptcy,
                loss of home.
              </li>
              <li>
                <strong>Relationship Breakdown:</strong> Conflict, loss of
                trust, divorce, family strain.
              </li>
              <li>
                <strong>Mental Health Issues:</strong> Worsening anxiety,
                depression, increased risk of suicide.
              </li>
              <li>
                <strong>Physical Health Problems:</strong> Stress-related
                illnesses, neglect of self-care.
              </li>
              <li>
                <strong>Legal Problems:</strong> Issues arising from attempts to
                finance gambling.
              </li>
              <li>
                <strong>Career/Education Problems:</strong> Job loss, poor
                performance, dropping out of school.
              </li>
            </ul>
          </section>

          {/* Conclusion */}
          <p className="text-lg leading-relaxed text-center text-muted-foreground pt-8 border-t border-border mt-12">
            Understanding gambling addiction is the first step towards
            addressing it. It is a serious but treatable condition. If you or
            someone you know is struggling, help is available. Please see our{" "}
            <Link
              href="/resources/seeking-help"
              className="text-primary underline hover:no-underline font-medium"
            >
              Seeking Help
            </Link>{" "}
            page for resources.
          </p>
        </article>
      </motion.div>
    </div>
  );
}
