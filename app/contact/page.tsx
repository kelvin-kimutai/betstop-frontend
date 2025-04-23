"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import { Mail, Loader2, CheckCircle, AlertCircle } from "lucide-react"; // Icons
import { Header } from "@/components/landing/header";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const canSubmit =
    formData.name &&
    formData.email &&
    formData.subject &&
    formData.message &&
    submissionStatus !== "loading";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit) return;

    setSubmissionStatus("loading");
    setErrorMessage(null);

    // --- Simulate API Call ---
    // Replace this with your actual API call to your backend/email service
    try {
      console.log("Submitting contact form:", formData);
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay

      // Simulate potential error
      // if (Math.random() > 0.5) {
      //   throw new Error("Failed to send message. Please try again later.");
      // }

      setSubmissionStatus("success");
      // Clear form on success
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Optional: Reset status after a delay so user sees success message
      // setTimeout(() => setSubmissionStatus("idle"), 5000);
    } catch (error: any) {
      console.error("Contact form submission failed:", error);
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
        className="container mx-auto max-w-2xl px-4 py-12 md:py-16 lg:py-20"
      >
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-6 text-center">
          Contact Us
        </h1>

        <p className="text-center text-muted-foreground mb-10 md:text-lg">
          Have questions or feedback? Fill out the form below, and we'll get
          back to you as soon as possible.
        </p>

        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Please provide your details and message.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={
                      submissionStatus === "loading" ||
                      submissionStatus === "success"
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={
                      submissionStatus === "loading" ||
                      submissionStatus === "success"
                    }
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject of your message"
                  value={formData.subject}
                  onChange={handleInputChange}
                  disabled={
                    submissionStatus === "loading" ||
                    submissionStatus === "success"
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here..."
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={
                    submissionStatus === "loading" ||
                    submissionStatus === "success"
                  }
                  required
                />
              </div>

              {/* Submission Status Feedback */}
              {submissionStatus === "loading" && (
                <Alert variant="default" className="flex items-center">
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  <AlertDescription>Sending your message...</AlertDescription>
                </Alert>
              )}
              {submissionStatus === "success" && (
                <Alert
                  variant="default"
                  className="flex items-center text-green-700 dark:text-green-400"
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <AlertDescription>
                    Message sent successfully! We'll be in touch soon.
                  </AlertDescription>
                </Alert>
              )}
              {submissionStatus === "error" && errorMessage && (
                <Alert variant="destructive" className="flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  <AlertDescription>{errorMessage}</AlertDescription>
                </Alert>
              )}
            </CardContent>
            <CardFooter className="mt-8">
              <Button type="submit" className="w-full" disabled={!canSubmit}>
                {submissionStatus === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-4 w-4" /> Send Message
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>

        {/* Optional: Add other contact details */}
        {/* <div className="mt-10 text-center text-muted-foreground">
         <p>Alternatively, you can reach us at:</p>
         <p>Email: contact@betstop.example</p> 
         <p>Phone: +1 234 567 890</p> 
       </div> */}
      </motion.div>
    </div>
  );
}
