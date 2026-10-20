"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="min-h-screen max-w-7xl mx-auto ">
      <SectionHeader id='contact' className="relative mb-14" title={
        <>
          LET&apos;S WORK <br />
          TOGETHER
        </>} />
      <div className="grid grid-cols-1 md:grid-cols-2 z-[9999] mx-4">
        <Card className="w-full max-w-xl glass-panel rounded-xl mt-6 md:mt-12">
          <CardHeader>
            <CardTitle className="text-3xl sm:text-4xl font-display font-bold">Contact Form</CardTitle>
            <CardDescription className="text-sm text-muted-foreground mt-2">
              Please contact me directly at{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`mailto:${config.email}`}
                className="text-cyan-600 dark:text-cyan-400 font-medium underline underline-offset-4 hover:text-cyan-500 transition-colors"
              >
                {config.email}
              </a>{" "}
              or send a message through the form below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};
export default ContactSection;
