"use client";

import * as React from "react";
import { BrandEnquiryFormData } from "@/types";
import { validateBrandEnquiry } from "@/lib/validations";
import { siteConfig } from "@/lib/site-config";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Mail, Send, AlertCircle, RefreshCw } from "lucide-react";

const campaignOptions = [
  "Influencer Marketing Campaigns",
  "Dedicated YouTube Videos",
  "YouTube Integrations",
  "Creator Discovery",
  "Multi-Creator Campaigns",
  "Not sure yet / Strategic Advisory",
];

const budgetRanges = [
  "Flexible / Exploring options",
  "<$5,000",
  "$5,000 - $15,000",
  "$15,000 - $35,000",
  "$35,000+",
];

const selectClass =
  "flex h-12 w-full rounded-xl border border-border/70 bg-surface-2/70 px-3.5 py-2 text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/40";

/** Field key → the id of the control that carries it, so focus can move. */
const fieldIds: Record<keyof BrandEnquiryFormData, string> = {
  name: "brand-name",
  workEmail: "brand-email",
  companyName: "brand-company",
  websiteUrl: "brand-website",
  campaignType: "brand-type",
  campaignDetails: "brand-details",
  budget: "brand-budget",
};

export function BrandEnquiryForm() {
  const [formData, setFormData] = React.useState<Partial<BrandEnquiryFormData>>({
    name: "",
    workEmail: "",
    companyName: "",
    websiteUrl: "",
    campaignType: "",
    campaignDetails: "",
    budget: "",
  });

  const [errors, setErrors] = React.useState<Partial<Record<keyof BrandEnquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submittedData, setSubmittedData] = React.useState<BrandEnquiryFormData | null>(null);
  const [statusMessage, setStatusMessage] = React.useState("");

  const handleChange = (field: keyof BrandEnquiryFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateBrandEnquiry(formData);

    if (!result.isValid) {
      setErrors(result.errors);
      const firstInvalid = Object.keys(result.errors)[0] as keyof BrandEnquiryFormData;
      setStatusMessage(
        `${Object.keys(result.errors).length} field${
          Object.keys(result.errors).length === 1 ? "" : "s"
        } need attention before this enquiry can be sent.`
      );
      // Move focus to the first field that needs attention.
      window.requestAnimationFrame(() => {
        const element = document.getElementById(fieldIds[firstInvalid]);
        element?.focus();
      });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("Checking your enquiry.");
    // Presentation build: the form validates, it does not transmit.
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData(formData as BrandEnquiryFormData);
      setStatusMessage(
        "Your enquiry passed validation. Nothing was emailed or stored in this presentation build."
      );
    }, 600);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      name: "",
      workEmail: "",
      companyName: "",
      websiteUrl: "",
      campaignType: "",
      campaignDetails: "",
      budget: "",
    });
    setErrors({});
    setStatusMessage("");
  };

  const generateMailtoUrl = (data: BrandEnquiryFormData) => {
    const subject = encodeURIComponent(`New Campaign Enquiry: ${data.companyName} (${data.name})`);
    const body = encodeURIComponent(
      `Hello GrowthiveMedia Team,\n\n` +
        `Here are the campaign enquiry details:\n\n` +
        `Name: ${data.name}\n` +
        `Work Email: ${data.workEmail}\n` +
        `Company: ${data.companyName}\n` +
        `Website/Product URL: ${data.websiteUrl || "Not provided"}\n` +
        `Campaign Type: ${data.campaignType}\n` +
        `Budget Range: ${data.budget || "Not specified"}\n\n` +
        `Campaign Goals & Description:\n${data.campaignDetails}\n\n` +
        `Best regards,\n${data.name}`
    );
    return `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
  };

  if (submittedData) {
    return (
      <div className="space-y-6 rounded-2xl border border-border/60 bg-card/70 p-6 sm:p-10">
        {/* The live region stays mounted across the swap, so the outcome is
            announced when the form is replaced by this panel. */}
        <p role="status" aria-live="polite" className="sr-only">
          {statusMessage}
        </p>

        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-accent">
            <CheckCircle2 className="h-6 w-6" />
          </span>
          <div>
            <h3 className="text-xl font-bold text-foreground">Enquiry validated</h3>
            <p className="text-sm text-muted-foreground">
              Your details for <strong className="text-foreground">{submittedData.companyName}</strong>{" "}
              passed every check.
            </p>
          </div>
        </div>

        <div className="space-y-2 rounded-xl border border-border/60 bg-surface-2/60 p-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5 font-semibold text-foreground">
            <AlertCircle className="h-4 w-4 text-primary" />
            <span>Presentation build</span>
          </div>
          <p>
            Nothing was emailed or stored by this page. To reach the agency, open your own email
            client with the message below — it is addressed to{" "}
            <strong className="text-foreground">{siteConfig.contactEmail}</strong> and already
            filled in.
          </p>
        </div>

        <div className="space-y-2 rounded-xl border border-border/60 bg-surface-2/60 p-4 font-mono text-xs">
          <div className="flex justify-between gap-4 border-b border-border/50 pb-1.5">
            <span className="text-muted-foreground">Contact:</span>
            <span className="text-right font-sans text-foreground">
              {submittedData.name} ({submittedData.workEmail})
            </span>
          </div>
          <div className="flex justify-between gap-4 border-b border-border/50 pb-1.5">
            <span className="text-muted-foreground">Campaign format:</span>
            <span className="text-right font-sans text-foreground">
              {submittedData.campaignType}
            </span>
          </div>
          {submittedData.budget && (
            <div className="flex justify-between gap-4 border-b border-border/50 pb-1.5">
              <span className="text-muted-foreground">Budget:</span>
              <span className="text-right font-sans text-foreground">{submittedData.budget}</span>
            </div>
          )}
          <div className="pt-1.5">
            <span className="mb-1 block text-muted-foreground">Details:</span>
            <p className="font-sans text-xs italic leading-relaxed text-foreground/90 line-clamp-3">
              &ldquo;{submittedData.campaignDetails}&rdquo;
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <a
            href={generateMailtoUrl(submittedData)}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90"
          >
            <Mail className="h-4 w-4" />
            <span>Open email to {siteConfig.contactEmail}</span>
          </a>

          <Button type="button" variant="outline" onClick={handleReset} className="text-sm">
            <RefreshCw className="mr-1.5 h-4 w-4" />
            <span>Send another enquiry</span>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6 rounded-2xl border border-border/60 bg-card/70 p-6 sm:p-10"
    >
      <p role="status" aria-live="polite" className="sr-only">
        {statusMessage}
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label
            htmlFor="brand-name"
            className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Your name <span className="text-accent">* required</span>
          </label>
          <Input
            id="brand-name"
            name="name"
            autoComplete="name"
            placeholder="e.g. Alex Rivera"
            value={formData.name || ""}
            onChange={(e) => handleChange("name", e.target.value)}
            error={!!errors.name}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "brand-name-error" : undefined}
          />
          {errors.name && (
            <p id="brand-name-error" className="mt-1 flex items-center gap-1 text-xs text-destructive">
              <AlertCircle className="h-3 w-3" /> {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="brand-email"
            className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Work email <span className="text-accent">* required</span>
          </label>
          <Input
            id="brand-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="alex@company.com"
            value={formData.workEmail || ""}
            onChange={(e) => handleChange("workEmail", e.target.value)}
            error={!!errors.workEmail}
            aria-invalid={!!errors.workEmail}
            aria-describedby={errors.workEmail ? "brand-email-error" : undefined}
          />
          {errors.workEmail && (
            <p id="brand-email-error" className="mt-1 flex items-center gap-1 text-xs text-destructive">
              <AlertCircle className="h-3 w-3" /> {errors.workEmail}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label
            htmlFor="brand-company"
            className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Company name <span className="text-accent">* required</span>
          </label>
          <Input
            id="brand-company"
            name="organization"
            autoComplete="organization"
            placeholder="e.g. Nexus AI Labs"
            value={formData.companyName || ""}
            onChange={(e) => handleChange("companyName", e.target.value)}
            error={!!errors.companyName}
            aria-invalid={!!errors.companyName}
            aria-describedby={errors.companyName ? "brand-company-error" : undefined}
          />
          {errors.companyName && (
            <p
              id="brand-company-error"
              className="mt-1 flex items-center gap-1 text-xs text-destructive"
            >
              <AlertCircle className="h-3 w-3" /> {errors.companyName}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="brand-website"
            className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Website or product URL <span className="font-normal normal-case text-muted-foreground/80">(optional)</span>
          </label>
          <Input
            id="brand-website"
            name="url"
            type="url"
            inputMode="url"
            autoComplete="url"
            placeholder="https://yourproduct.ai"
            value={formData.websiteUrl || ""}
            onChange={(e) => handleChange("websiteUrl", e.target.value)}
            error={!!errors.websiteUrl}
            aria-invalid={!!errors.websiteUrl}
            aria-describedby={errors.websiteUrl ? "brand-website-error" : undefined}
          />
          {errors.websiteUrl && (
            <p
              id="brand-website-error"
              className="mt-1 flex items-center gap-1 text-xs text-destructive"
            >
              <AlertCircle className="h-3 w-3" /> {errors.websiteUrl}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label
            htmlFor="brand-type"
            className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Campaign format <span className="text-accent">* required</span>
          </label>
          <select
            id="brand-type"
            name="campaignType"
            value={formData.campaignType || ""}
            onChange={(e) => handleChange("campaignType", e.target.value)}
            aria-invalid={!!errors.campaignType}
            aria-describedby={errors.campaignType ? "brand-type-error" : undefined}
            className={selectClass}
          >
            <option value="" disabled>
              Select campaign type...
            </option>
            {campaignOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.campaignType && (
            <p id="brand-type-error" className="mt-1 flex items-center gap-1 text-xs text-destructive">
              <AlertCircle className="h-3 w-3" /> {errors.campaignType}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="brand-budget"
            className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Budget range <span className="font-normal normal-case text-muted-foreground/80">(optional)</span>
          </label>
          <select
            id="brand-budget"
            name="budget"
            value={formData.budget || ""}
            onChange={(e) => handleChange("budget", e.target.value)}
            className={selectClass}
          >
            <option value="">Select expected budget (optional)...</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="brand-details"
          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
        >
          Campaign details &amp; objectives <span className="text-accent">* required</span>
        </label>
        <Textarea
          id="brand-details"
          name="campaignDetails"
          rows={4}
          maxLength={1200}
          placeholder="Briefly describe your product, target audience, preferred launch timeline, and what success looks like for this campaign..."
          value={formData.campaignDetails || ""}
          onChange={(e) => handleChange("campaignDetails", e.target.value)}
          error={!!errors.campaignDetails}
          aria-invalid={!!errors.campaignDetails}
          aria-describedby={errors.campaignDetails ? "brand-details-error" : undefined}
        />
        {errors.campaignDetails && (
          <p id="brand-details-error" className="mt-1 flex items-center gap-1 text-xs text-destructive">
            <AlertCircle className="h-3 w-3" /> {errors.campaignDetails}
          </p>
        )}
      </div>

      <div className="flex flex-col items-center justify-between gap-4 pt-2 sm:flex-row">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full rounded-xl px-8 font-semibold sm:w-auto"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4 animate-spin" /> Validating enquiry...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="h-4 w-4" /> Start a Campaign
            </span>
          )}
        </Button>

        <span className="text-xs text-muted-foreground/80">
          Direct inbox: <span className="font-mono text-muted-foreground">{siteConfig.contactEmail}</span>
        </span>
      </div>
    </form>
  );
}
