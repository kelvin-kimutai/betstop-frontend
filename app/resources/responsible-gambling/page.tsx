"use client";

import { Header } from "@/components/landing/header";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ResponsibleGamblingPage() {
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
            Responsible Gambling Tips & Strategies
          </h1>

          {/* Introduction */}
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Gambling should be an enjoyable form of entertainment, not a source
            of stress or financial hardship. Practicing responsible gambling
            means staying in control, understanding the risks, and knowing when
            to stop. Here are some key strategies:
          </p>

          {/* Section 1: Set Limits */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4 md:text-3xl border-b border-border pb-2">
              1. Set Time and Money Limits
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-6 md:text-lg">
              Before you start gambling, decide how much time and money you can
              realistically afford to spend (and potentially lose). Treat
              gambling expenses like any other entertainment cost.
            </p>
            <ul className="space-y-2 list-disc list-outside ml-5 mb-6 text-muted-foreground md:text-lg">
              <li>
                Only gamble with money set aside for entertainment, never with
                funds needed for essentials like rent, bills, or food.
              </li>
              <li>
                Set a timer or alarm to keep track of how long you've been
                playing.
              </li>
              <li>
                Once you reach your pre-set money or time limit, stop gambling
                for that session.
              </li>
              <li>Avoid borrowing money to gamble.</li>
            </ul>
          </section>

          {/* Section 2: Understand Risks */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4 md:text-3xl border-b border-border pb-2">
              2. Understand the Odds & Risks
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-6 md:text-lg">
              Remember that all forms of gambling involve risk, and the house
              always has an edge. There are no guaranteed winning systems.
              Understand the odds of the games you play and accept losses as
              part of the entertainment cost.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
              "Gambling outcomes are based on chance. Don't expect to win
              consistently, and never view gambling as a way to make money or
              solve financial problems."
            </blockquote>
          </section>

          {/* Section 3: Don't Chase Losses */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4 md:text-3xl border-b border-border pb-2">
              3. Avoid Chasing Losses
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-6 md:text-lg">
              One of the biggest pitfalls is trying to win back money you've
              lost by gambling more. This often leads to larger losses and
              increased distress. Accept the loss as the cost of entertainment
              and stick to your limits.
            </p>
          </section>

          {/* Section 4: Know When to Stop */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4 md:text-3xl border-b border-border pb-2">
              4. Know When to Stop & Take Breaks
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-6 md:text-lg">
              Regular breaks are essential. Step away from the game periodically
              to clear your head and reassess if you're still within your limits
              and gambling responsibly. Stop gambling entirely if:
            </p>
            <ul className="space-y-2 list-disc list-outside ml-5 mb-6 text-muted-foreground md:text-lg">
              <li>It's no longer fun.</li>
              <li>You're feeling stressed, anxious, or upset.</li>
              <li>You're neglecting responsibilities (work, family, etc.).</li>
              <li>You've reached your pre-set time or money limits.</li>
            </ul>
          </section>

          {/* Section 5: Gamble Clear-Headed */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4 md:text-3xl border-b border-border pb-2">
              5. Don't Gamble Under the Influence or When Upset
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-6 md:text-lg">
              Alcohol, drugs, or strong emotions (like anger, sadness, or
              excessive excitement) can impair judgment and lead to poor
              decisions while gambling. Only gamble when you are clear-headed
              and calm.
            </p>
          </section>

          {/* Section 6: Balance Activities */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4 md:text-3xl border-b border-border pb-2">
              6. Balance Gambling with Other Activities
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-6 md:text-lg">
              Ensure gambling doesn't become your only hobby or form of
              entertainment. Maintain a healthy balance with other interests,
              social activities, work, and family life.
            </p>
          </section>

          {/* Section 7: Use Tools */}
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4 md:text-3xl border-b border-border pb-2">
              7. Utilize Available Tools
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground mb-6 md:text-lg">
              Most licensed gambling operators offer responsible gambling tools.
              Take advantage of these:
            </p>
            <ul className="space-y-3 list-disc list-outside ml-5 mb-8 text-muted-foreground md:text-lg">
              <li>
                <strong>Deposit Limits:</strong> Set maximum amounts you can
                deposit per day, week, or month.
              </li>
              <li>
                <strong>Loss Limits:</strong> Restrict the amount you can lose
                within a specific period.
              </li>
              <li>
                <strong>Wagering Limits:</strong> Control the total amount you
                can bet.
              </li>
              <li>
                <strong>Session Time Limits / Reality Checks:</strong> Set
                reminders or automatic logouts after a certain time.
              </li>
              <li>
                <strong>Self-Exclusion:</strong> Block yourself from accessing
                the platform for a set period or permanently.
              </li>
            </ul>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Tools like{" "}
              <Link
                href="/blacklist"
                className="text-primary underline hover:no-underline font-medium"
              >
                BetStop
              </Link>{" "}
              can help you manage self-exclusion across multiple platforms
              simultaneously.
            </p>
          </section>

          {/* Conclusion */}
          <p className="text-lg leading-relaxed text-center text-muted-foreground pt-8 border-t border-border mt-12">
            Practicing responsible gambling helps keep it enjoyable and prevents
            potential harm. If you find it difficult to stick to these
            principles, please visit our{" "}
            <Link
              href="/resources/seeking-help"
              className="text-primary underline hover:no-underline font-medium"
            >
              Seeking Help
            </Link>{" "}
            page.
          </p>
        </article>
      </motion.div>
    </div>
  );
}
