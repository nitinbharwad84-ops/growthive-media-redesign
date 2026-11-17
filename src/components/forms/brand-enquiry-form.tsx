"use client";

import * as React from "react";
import { BrandEnquiryFormData } from "@/types";
import { validateBrandEnquiry } from "@/lib/validations";
import { siteConfig } from "@/lib/site-config";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Mail, Send, AlertCircle, RefreshCw, Copy, Check } from "lucide-react";

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
  const [copiedMailto, setCopiedMailto] = React.useState(false);

  const handleChange = (
    field: keyof BrandEnquiryFormData,
    value: string
  ) => {
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
      return;
    }

    setIsSubmitting(true);
    // Simulate brief processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData(formData as BrandEnquiryFormData);
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
      <div className="rounded-2xl border border-gray-300/50 bg-white p-6 sm:p-10 shadow-sm space-y-6 animate-in fade-in zoom-in-95 duration-300">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Enquiry Validated & Ready</h3>
            <p className="text-sm text-gray-600">
              Demo submission recorded for <strong>{submittedData.companyName}</strong>.
            </p>
          </div>
        </div>

        {/* Demo Notice per PRD */}
        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-600 space-y-2">
          <div className="flex items-center gap-1.5 font-semibold text-gray-700">
            <AlertCircle className="w-4 h-4 text-gray-500" />
            <span>Presentation Environment Notice</span>
          </div>
          <p>
            In this client demonstration, no background SMTP credentials are hooked yet. To ensure zero lost leads, you can instantly launch your email client with this exact prefilled message to <strong>{siteConfig.contactEmail}</strong>.
          </p>
        </div>

        {/* Summary Card */}
        <div className="rounded-xl border border-gray-200/50 bg-gray-50 p-4 space-y-2 text-xs font-mono">
          <div className="flex justify-between border-b border-gray-200/50 pb-1.5">
            <span className="text-gray-500">Contact:</span>
            <span className="text-gray-900 font-sans">{submittedData.name} ({submittedData.workEmail})</span>
          </div>
          <div className="flex justify-between border-b border-gray-200/50 pb-1.5">
            <span className="text-gray-500">Campaign Format:</span>
            <span className="text-gray-600 font-sans">{submittedData.campaignType}</span>
          </div>
          {submittedData.budget && (
            <div className="flex justify-between border-b border-gray-200/50 pb-1.5">
              <span className="text-gray-500">Budget:</span>
              <span className="text-gray-900 font-sans">{submittedData.budget}</span>
            </div>
          )}
          <div className="pt-1.5">
            <span className="text-gray-500 block mb-1">Details:</span>
            <p className="text-gray-700 font-sans text-xs italic line-clamp-3">
              "{submittedData.campaignDetails}"
            </p>
          </div>
        </div>

        {/* Primary Action: Direct Mailto & New Submission */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href={generateMailtoUrl(submittedData)}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-semibold px-6 py-3 shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all text-sm"
          >
            <Mail className="w-4 h-4" />
            <span>Open Email to {siteConfig.contactEmail}</span>
          </a>

          <Button
            type="button"
            variant="outline"
            onClick={handleReset}
            className="border-gray-200 hover:border-gray-300 text-sm"
          >
            <RefreshCw className="w-4 h-4 mr-1.5" />
            <span>Submit Another Enquiry</span>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-gray-200/50 bg-white/90 p-6 sm:p-10 shadow-sm space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label htmlFor="brand-name" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Your Name <span className="text-gray-400">*</span>
          </label>
          <Input
            id="brand-name"
            placeholder="e.g. Alex Rivera"
            value={formData.name || ""}
            onChange={(e) => handleChange("name", e.target.value)}
            error={!!errors.name}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "brand-name-error" : undefined}
          />
          {errors.name && (
            <p id="brand-name-error" className="text-xs text-red-400 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3 h-3" /> {errors.name}
            </p>
          )}
        </div>

        {/* Work Email */}
        <div className="space-y-1.5">
          <label htmlFor="brand-email" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Work Email <span className="text-gray-400">*</span>
          </label>
          <Input
            id="brand-email"
            type="email"
            placeholder="alex@company.com"
            value={formData.workEmail || ""}
            onChange={(e) => handleChange("workEmail", e.target.value)}
            error={!!errors.workEmail}
            aria-invalid={!!errors.workEmail}
            aria-describedby={errors.workEmail ? "brand-email-error" : undefined}
          />
          {errors.workEmail && (
            <p id="brand-email-error" className="text-xs text-red-400 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3 h-3" /> {errors.workEmail}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Company Name */}
        <div className="space-y-1.5">
          <label htmlFor="brand-company" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Company Name <span className="text-gray-400">*</span>
          </label>
          <Input
            id="brand-company"
            placeholder="e.g. Nexus AI Labs"
            value={formData.companyName || ""}
            onChange={(e) => handleChange("companyName", e.target.value)}
            error={!!errors.companyName}
            aria-invalid={!!errors.companyName}
            aria-describedby={errors.companyName ? "brand-company-error" : undefined}
          />
          {errors.companyName && (
            <p id="brand-company-error" className="text-xs text-red-400 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3 h-3" /> {errors.companyName}
            </p>
          )}
        </div>

        {/* Website or Product URL */}
        <div className="space-y-1.5">
          <label htmlFor="brand-website" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Website or Product URL <span className="text-gray-400/60 font-normal">(Optional)</span>
          </label>
          <Input
            id="brand-website"
            type="url"
            placeholder="https://yourproduct.ai"
            value={formData.websiteUrl || ""}
            onChange={(e) => handleChange("websiteUrl", e.target.value)}
            error={!!errors.websiteUrl}
            aria-invalid={!!errors.websiteUrl}
            aria-describedby={errors.websiteUrl ? "brand-website-error" : undefined}
          />
          {errors.websiteUrl && (
            <p id="brand-website-error" className="text-xs text-red-400 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3 h-3" /> {errors.websiteUrl}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Campaign Type */}
        <div className="space-y-1.5">
          <label htmlFor="brand-type" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Campaign Format <span className="text-gray-400">*</span>
          </label>
          <select
            id="brand-type"
            value={formData.campaignType || ""}
            onChange={(e) => handleChange("campaignType", e.target.value)}
            className="flex h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2 text-sm text-gray-900 focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <option value="" disabled className="bg-white text-gray-500">
              Select campaign type...
            </option>
            {campaignOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-white text-gray-900">
                {opt}
              </option>
            ))}
          </select>
          {errors.campaignType && (
            <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3 h-3" /> {errors.campaignType}
            </p>
          )}
        </div>

        {/* Budget */}
        <div className="space-y-1.5">
          <label htmlFor="brand-budget" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Budget Range <span className="text-gray-400/60 font-normal">(Optional)</span>
          </label>
          <select
            id="brand-budget"
            value={formData.budget || ""}
            onChange={(e) => handleChange("budget", e.target.value)}
            className="flex h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2 text-sm text-gray-900 focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <option value="" className="bg-white text-gray-500">
              Select expected budget (optional)...
            </option>
            {budgetRanges.map((range) => (
              <option key={range} value={range} className="bg-white text-gray-900">
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Campaign Details */}
      <div className="space-y-1.5">
        <label htmlFor="brand-details" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          Campaign Details & Objectives <span className="text-gray-400">*</span>
        </label>
        <Textarea
          id="brand-details"
          rows={4}
          placeholder="Briefly describe your product, target audience, preferred launch timeline, and what success looks like for this campaign..."
          value={formData.campaignDetails || ""}
          onChange={(e) => handleChange("campaignDetails", e.target.value)}
          error={!!errors.campaignDetails}
          aria-invalid={!!errors.campaignDetails}
          aria-describedby={errors.campaignDetails ? "brand-details-error" : undefined}
        />
        {errors.campaignDetails && (
          <p id="brand-details-error" className="text-xs text-red-400 flex items-center gap-1 mt-1">
            <AlertCircle className="w-3 h-3" /> {errors.campaignDetails}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button
          type="submit"
          size="lg"
          variant="premium"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 rounded-xl font-semibold"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 animate-spin" /> Validating Enquiry...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="w-4 h-4" /> Start a Campaign
            </span>
          )}
        </Button>

        <span className="text-xs text-gray-500/80 flex items-center gap-1">
          Direct inbox: <span className="font-mono text-gray-600">{siteConfig.contactEmail}</span>
        </span>
      </div>
    </form>
  );
}