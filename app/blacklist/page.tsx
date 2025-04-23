"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react"; // Example icon
import { Header } from "@/components/landing/header";

const exclusionDurations = [
  { value: "6m", label: "6 Months" },
  { value: "1y", label: "1 Year" },
  { value: "5y", label: "5 Years" },
  { value: "perm", label: "Permanent" },
];

export default function BlacklistPage() {
  const [selectedDuration, setSelectedDuration] = useState<string>("");
  const [acknowledgeIrreversible, setAcknowledgeIrreversible] = useState(false);
  const [acknowledgeScope, setAcknowledgeScope] = useState(false);
  const [acknowledgeSupport, setAcknowledgeSupport] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const canSubmit =
    selectedDuration &&
    acknowledgeIrreversible &&
    acknowledgeScope &&
    acknowledgeSupport &&
    submissionStatus !== "loading";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit) return;

    setSubmissionStatus("loading");
    setErrorMessage(null);

    // --- Simulate API Call ---
    // Replace this with your actual API call to the backend
    // to process the self-exclusion request.
    try {
      console.log("Submitting self-exclusion for:", selectedDuration);
      // Example: await api.submitSelfExclusion(selectedDuration);
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay

      // Simulate potential error
      // if (Math.random() > 0.5) {
      //   throw new Error("Failed to process the request. Please try again.");
      // }

      setSubmissionStatus("success");
      // Optionally reset form fields after successful submission
      // setSelectedDuration("");
      // setAcknowledgeIrreversible(false);
      // setAcknowledgeScope(false);
      // setAcknowledgeSupport(false);
    } catch (error: any) {
      console.error("Self-exclusion submission failed:", error);
      setErrorMessage(error.message || "An unexpected error occurred.");
      setSubmissionStatus("error");
    }
    // --- End Simulation ---
  };

  return (
    <div>
      <Header />{" "}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-3xl px-4 py-12 md:py-16 lg:py-20"
      >
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-8 text-center">
          Self-Exclusion Request
        </h1>

        <p className="text-center text-muted-foreground mb-10 md:text-lg">
          Use this tool to block yourself from accessing online gambling
          services provided by participating operators. Please read the terms
          carefully before proceeding.
        </p>

        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Initiate Self-Exclusion</CardTitle>
              <CardDescription>
                Select the minimum duration for your self-exclusion and
                acknowledge the terms.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Duration Selection */}
              <div className="space-y-2">
                <Label htmlFor="duration">Minimum Exclusion Period</Label>
                <Select
                  value={selectedDuration}
                  onValueChange={setSelectedDuration}
                  disabled={
                    submissionStatus === "loading" ||
                    submissionStatus === "success"
                  }
                >
                  <SelectTrigger id="duration">
                    <SelectValue placeholder="Select duration..." />
                  </SelectTrigger>
                  <SelectContent>
                    {exclusionDurations.map((duration) => (
                      <SelectItem key={duration.value} value={duration.value}>
                        {duration.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Acknowledgements */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="ack-irreversible"
                    checked={acknowledgeIrreversible}
                    onCheckedChange={(checked) =>
                      setAcknowledgeIrreversible(Boolean(checked))
                    }
                    disabled={
                      submissionStatus === "loading" ||
                      submissionStatus === "success"
                    }
                    aria-labelledby="label-irreversible"
                  />
                  <Label
                    htmlFor="ack-irreversible"
                    id="label-irreversible"
                    className="text-sm font-normal text-muted-foreground cursor-pointer"
                  >
                    I understand that this self-exclusion is irreversible for
                    the selected minimum duration and cannot be cancelled early.
                  </Label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="ack-scope"
                    checked={acknowledgeScope}
                    onCheckedChange={(checked) =>
                      setAcknowledgeScope(Boolean(checked))
                    }
                    disabled={
                      submissionStatus === "loading" ||
                      submissionStatus === "success"
                    }
                    aria-labelledby="label-scope"
                  />
                  <Label
                    htmlFor="ack-scope"
                    id="label-scope"
                    className="text-sm font-normal text-muted-foreground cursor-pointer"
                  >
                    I understand that BetStop will attempt to block me from all
                    participating licensed online and phone gambling providers,
                    but it may not cover all possible gambling avenues.
                  </Label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="ack-support"
                    checked={acknowledgeSupport}
                    onCheckedChange={(checked) =>
                      setAcknowledgeSupport(Boolean(checked))
                    }
                    disabled={
                      submissionStatus === "loading" ||
                      submissionStatus === "success"
                    }
                    aria-labelledby="label-support"
                  />
                  <Label
                    htmlFor="ack-support"
                    id="label-support"
                    className="text-sm font-normal text-muted-foreground cursor-pointer"
                  >
                    I acknowledge that self-exclusion is a helpful tool, but I
                    should also consider seeking further support from
                    professional services or support groups if I am struggling
                    with gambling.
                  </Label>
                </div>
              </div>

              {/* Submission Status Feedback */}
              {submissionStatus === "loading" && (
                <Alert variant="default">
                  <Terminal className="h-4 w-4" />
                  <AlertTitle>Processing...</AlertTitle>
                  <AlertDescription>
                    Your self-exclusion request is being submitted. Please wait.
                  </AlertDescription>
                </Alert>
              )}
              {submissionStatus === "success" && (
                <Alert variant="default">
                  <Terminal className="h-4 w-4" />
                  <AlertTitle>Success!</AlertTitle>
                  <AlertDescription>
                    Your self-exclusion request has been successfully processed.
                    It may take a short period for all providers to update their
                    systems. Remember to seek additional support if needed.
                    Visit our{" "}
                    <Link
                      href="/resources/seeking-help"
                      className="font-medium underline"
                    >
                      Seeking Help
                    </Link>{" "}
                    page.
                  </AlertDescription>
                </Alert>
              )}
              {submissionStatus === "error" && errorMessage && (
                <Alert variant="destructive">
                  <Terminal className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    {errorMessage} Please check your connection or try again
                    later.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={!canSubmit}>
                {submissionStatus === "loading"
                  ? "Submitting..."
                  : "Confirm Self-Exclusion"}
              </Button>
            </CardFooter>
          </form>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground space-y-2">
          <p>
            <strong>Important:</strong> Self-exclusion helps manage online
            access but does not block promotional materials you may already
            receive or access to land-based venues.
          </p>
          <p>
            If you encounter issues with this tool or have other questions,
            please{" "}
            <Link href="/contact" className="underline">
              contact us
            </Link>
            .
          </p>
          <p>
            If you need immediate help, please contact a{" "}
            <Link
              href="/resources/seeking-help#helplines"
              className="underline"
            >
              gambling helpline
            </Link>
            .
          </p>
        </div>
      </motion.div>
    </div>
  );
}
