"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MessageSquare,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  FileSearch,
  CalendarCheck,
  CheckCircle2,
  Award,
  Users,
  Timer,
  Building2,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { Section, SectionTransition } from "@/components/layout";
import { FadeUp } from "@/components/animations";
import { ContactForm, ConsultationForm } from "@/components/forms";
import { companyInfo } from "@/constants";
import { businessHours } from "@/data";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils";

type FormTab = "consultation" | "enquiry";

const stats = [
  { value: "15+", label: "Industries Served", icon: Building2 },
  { value: "6+", label: "Strategic Partners", icon: Users },
  { value: "5", label: "Core Practices", icon: Award },
  { value: "24 Hours", label: "Response Time", icon: Timer },
];

const steps = [
  {
    step: "01",
    title: "Submit your enquiry",
    description: "Fill out the consultation or message form with your business details.",
    icon: Send,
  },
  {
    step: "02",
    title: "Our specialists review requirements",
    description: "Our team evaluates your industry challenges, regulatory scope, and objectives.",
    icon: FileSearch,
  },
  {
    step: "03",
    title: "We schedule a consultation",
    description: "We align on a convenient date/time for a structured advisory discussion.",
    icon: CalendarCheck,
  },
  {
    step: "04",
    title: "Receive tailored business solutions",
    description: "Gain clear, actionable guidance on accounting, compliance, tax, or ERP systems.",
    icon: CheckCircle2,
  },
];

const trustSignals = [
  "Confidential Consultations",
  "Experienced Advisory Team",
  "Tailored Business Solutions",
  "Fast Response Time",
  "Long-Term Partnership Approach",
];

export function ContactInteractiveSection() {
  const [activeTab, setActiveTab] = useState<FormTab>("consultation");
  const formSectionRef = useRef<HTMLDivElement>(null);

  const scrollToForm = (tab: FormTab) => {
    setActiveTab(tab);
    if (formSectionRef.current) {
      formSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Editorial Hero Section */}
      <section className="relative overflow-hidden gradient-navy-deep pt-[calc(var(--header-height)+2.5rem)] pb-16 md:pb-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 pattern-grid" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-accent/10 blur-[120px]"
        />

        <div className="container-shell relative">
          <p className="eyebrow mb-4 text-accent-light">Get In Touch</p>
          <h1 className="heading-font max-w-4xl text-balance text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Let&apos;s Start a Conversation
          </h1>
          <p className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-white/70 md:text-xl">
            Whether you need accounting, tax advisory, audit, ERP implementation, compliance, or strategic business consulting, our specialists are ready to understand your business and recommend the right solution.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="rounded-xl px-8 font-bold text-base shadow-lg shadow-accent/20"
              onClick={() => scrollToForm("consultation")}
            >
              <Calendar className="mr-2 h-5 w-5" aria-hidden="true" />
              Schedule a Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl border-white/20 px-8 font-bold text-base text-white hover:bg-white/10"
              onClick={() => scrollToForm("enquiry")}
            >
              <MessageSquare className="mr-2 h-5 w-5" aria-hidden="true" />
              Send an Enquiry
            </Button>
          </div>
        </div>

        <SectionTransition />
      </section>

      {/* Main 2-Column Split Section (40% Credibility / 60% Form) */}
      <Section ref={formSectionRef} aria-labelledby="contact-main-heading">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* LEFT COLUMN: Enterprise Stats, Office Details & Timeline (40% / 5 cols) */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Why Choose Symbio - Enterprise Stats */}
            <FadeUp>
              <div className="border-b border-border/40 pb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  Why Choose Symbio
                </span>
                <h2 className="heading-font mt-2 text-2xl font-bold text-accent">
                  Enterprise Advisory Built on Trust
                </h2>

                <div className="mt-6 grid grid-cols-2 gap-6">
                  {stats.map((stat) => (
                    <div key={stat.label} className="border-t border-border/40 pt-4">
                      <span className="heading-font text-3xl font-extrabold text-accent md:text-4xl">
                        {stat.value}
                      </span>
                      <p className="mt-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Office Information */}
            <FadeUp delay={0.05}>
              <div className="border-b border-border/40 pb-8 space-y-4">
                <h3 className="heading-font text-lg font-bold text-accent">
                  Office Contact & Hours
                </h3>
                
                <div className="space-y-3.5 text-sm leading-relaxed text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-4.5 w-4.5 shrink-0 text-accent" aria-hidden="true" />
                    <span>
                      {companyInfo.address.line1}, {companyInfo.address.city},{" "}
                      {companyInfo.address.country}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-4.5 w-4.5 shrink-0 text-accent" aria-hidden="true" />
                    <a href={`tel:${companyInfo.phone}`} className="hover:text-accent font-medium">
                      {companyInfo.phoneDisplay}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-4.5 w-4.5 shrink-0 text-accent" aria-hidden="true" />
                    <a href={`mailto:${companyInfo.email}`} className="hover:text-accent font-medium">
                      {companyInfo.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-4.5 w-4.5 shrink-0 text-accent" aria-hidden="true" />
                    <span>{businessHours[0]?.hours || "Mon - Fri: 9:00 AM - 6:00 PM"}</span>
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    <FaLinkedinIn className="h-4.5 w-4.5 shrink-0 text-accent" aria-hidden="true" />
                    <a
                      href="https://www.linkedin.com/search/results/all/?keywords=Symbio%20Advisory"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent font-medium text-accent underline underline-offset-4"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* What Happens Next - 4-Step Vertical Timeline */}
            <FadeUp delay={0.1}>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  Engagement Process
                </span>
                <h3 className="heading-font mt-1 text-xl font-bold text-accent">
                  What Happens Next
                </h3>

                <div className="mt-6 space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-border/60">
                  {steps.map((item) => (
                    <div key={item.step} className="relative flex items-start gap-4 pl-10">
                      <span className="absolute left-0 top-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-bold">
                        {item.step}
                      </span>
                      <div>
                        <h4 className="heading-font text-base font-bold text-accent">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

          </div>

          {/* RIGHT COLUMN: Tab-Switchable Form Area (60% / 7 cols) */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.08}>
              <div className="rounded-2xl border border-border/60 bg-card p-6 md:p-8 shadow-sm">
                
                {/* Tab Switcher */}
                <div
                  role="tablist"
                  aria-label="Form Type Selection"
                  className="grid grid-cols-2 gap-2 rounded-xl bg-muted p-1.5 mb-8"
                >
                  <button
                    role="tab"
                    id="tab-consultation"
                    aria-selected={activeTab === "consultation"}
                    aria-controls="panel-consultation"
                    onClick={() => setActiveTab("consultation")}
                    className={cn(
                      "flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                      activeTab === "consultation"
                        ? "bg-card text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Calendar className="h-4 w-4 text-accent" aria-hidden="true" />
                    <span>Schedule Consultation</span>
                  </button>

                  <button
                    role="tab"
                    id="tab-enquiry"
                    aria-selected={activeTab === "enquiry"}
                    aria-controls="panel-enquiry"
                    onClick={() => setActiveTab("enquiry")}
                    className={cn(
                      "flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                      activeTab === "enquiry"
                        ? "bg-card text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <MessageSquare className="h-4 w-4 text-accent" aria-hidden="true" />
                    <span>Send an Enquiry</span>
                  </button>
                </div>

                {/* Form Container with Framer Motion Transition */}
                <AnimatePresence mode="wait">
                  {activeTab === "consultation" ? (
                    <motion.div
                      key="consultation-form"
                      role="tabpanel"
                      id="panel-consultation"
                      aria-labelledby="tab-consultation"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="mb-6 border-b border-border/40 pb-4">
                        <h3 className="heading-font text-2xl font-bold text-accent">
                          Book a Confidential Consultation
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Request a structured strategy session with our senior advisory specialists.
                        </p>
                      </div>
                      <ConsultationForm />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="enquiry-form"
                      role="tabpanel"
                      id="panel-enquiry"
                      aria-labelledby="tab-enquiry"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="mb-6 border-b border-border/40 pb-4">
                        <h3 className="heading-font text-2xl font-bold text-accent">
                          Send Us a Message
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Share your business inquiry and we&apos;ll route it to the appropriate practice leader.
                        </p>
                      </div>
                      <ContactForm />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Trust Signals Below Form */}
                <div className="mt-8 border-t border-border/40 pt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    Why Businesses Trust Symbio
                  </p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {trustSignals.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs font-semibold text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </FadeUp>
          </div>

        </div>
      </Section>
    </>
  );
}
