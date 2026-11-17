"use client";

import * as React from "react";
import { CreatorApplicationFormData } from "@/types";
import { validateCreatorApplication } from "@/lib/validations";
import { siteConfig } from "@/lib/site-config";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Mail, Sparkles, AlertCircle, RefreshCw, ShieldAlert } from "lucide-react";

const platforms = [
  "YouTube",
  "X (Twitter)",
  "TikTok",
  "LinkedIn",
  "Twitch",
  "Newsletter / Substack",
  "Other",
];

const niches = [
  "AI Tools & Generative Tech",
  "Software Engineering & DevTools",
  "Consumer & Mobile Tech",
  "Data Science & Machine Learning",
  "Hardware & Computing",
  "Tech Commentary & Industry Analysis",
];

export function CreatorApplicationForm() {
  const [formData, setFormData] = React.useState<Partial<CreatorApplicationFormData>>({
    name: "",
    email: "",
    platform: "",
    channelUrl: "",
    niche: "",
    bio: "",
  });

  const [errors, setErrors] = React.useState<Partial<Record<keyof CreatorApplicationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submittedData, setSubmittedData] = React.useState<CreatorApplicationFormData | null>(null);

  const handleChange = (
    field: keyof CreatorApplicationFormData,
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
    const result = validateCreatorApplication(formData);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData(formData as CreatorApplicationFormData);
    }, 600);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      name: "",
      email: "",
      platform: "",
      channelUrl: "",
      niche: "",
      bio: "",
    });
    setErrors({});
  };

  const generateCreatorMailto = (data: CreatorApplicationFormData) => {
    const subject = encodeURIComponent(`Creator Application: ${data.name} (${data.platform})`);
    const body = encodeURIComponent(
      `Hello GrowthiveMedia Team,\n\n` +
      `Here are my creator application details:\n\n` +
      `Name/Handle: ${data.name}\n` +
      `Contact Email: ${data.email}\n` +
      `Primary Platform: ${data.platform}\n` +
      `Channel/Profile URL: ${data.channelUrl}\n` +
      `Content Niche: ${data.niche}\n\n` +
      `Introduction & Audience Context:\n${data.bio}\n\n` +
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
            <h3 className="text-xl font-bold text-gray-900">Application Recorded</h3>
            <p className="text-sm text-gray-600">
              Demo submission recorded for <strong>{submittedData.name}</strong>.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-600 space-y-2">
          <div className="flex items-center gap-1.5 font-semibold text-gray-700">
            <AlertCircle className="w-4 h-4 text-gray-500" />
            <span>Confidential Application Status</span>
          </div>
          <p>
            This demo application is held strictly confidential and is not published on any public roster. You can instantly transmit these details to the talent inbox at <strong>{siteConfig.contactEmail}</strong>.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200/50 bg-gray-50 p-4 space-y-2 text-xs font-mono">
          <div className="flex justify-between border-b border-gray-200/50 pb-1.5">
            <span className="text-gray-500">Creator / Handle:</span>
            <span className="text-gray-900 font-sans">{submittedData.name}</span>
          </div>
          <div className="flex justify-between border-b border-gray-200/50 pb-1.5">
            <span className="text-gray-500">Platform & Niche:</span>
            <span className="text-gray-600 font-sans">{submittedData.platform} • {submittedData.niche}</span>
          </div>
          <div className="flex justify-between border-b border-gray-200/50 pb-1.5">
            <span className="text-gray-500">Channel:</span>
            <span className="text-gray-900 font-sans truncate max-w-[200px]">{submittedData.channelUrl}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href={generateCreatorMailto(submittedData)}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-semibold px-6 py-3 shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all text-sm"
          >
            <Mail className="w-4 h-4" />
            <span>Send Application via Email</span>
          </a>

          <Button
            type="button"
            variant="outline"
            onClick={handleReset}
            className="border-gray-200 hover:border-gray-300 text-sm"
          >
            <RefreshCw className="w-4 h-4 mr-1.5" />
            <span>Submit Another Application</span>
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
        {/* Name / Handle */}
        <div className="space-y-1.5">
          <label htmlFor="creator-name" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Name or Creator Handle <span className="text-gray-400">*</span>
          </label>
          <Input
            id="creator-name"
            placeholder="e.g. Maya Chen / @MayaTech"
            value={formData.name || ""}
            onChange={(e) => handleChange("name", e.target.value)}
            error={!!errors.name}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "creator-name-error" : undefined}
          />
          {errors.name && (
            <p id="creator-name-error" className="text-xs text-red-400 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3 h-3" /> {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="creator-email" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Contact Email <span className="text-gray-400">*</span>
          </label>
          <Input
            id="creator-email"
            type="email"
            placeholder="maya@creator.com"
            value={formData.email || ""}
            onChange={(e) => handleChange("email", e.target.value)}
            error={!!errors.email}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "creator-email-error" : undefined}
          />
          {errors.email && (
            <p id="creator-email-error" className="text-xs text-red-400 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3 h-3" /> {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Primary Platform */}
        <div className="space-y-1.5">
          <label htmlFor="creator-platform" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Primary Platform <span className="text-gray-400">*</span>
          </label>
          <select
            id="creator-platform"
            value={formData.platform || ""}
            onChange={(e) => handleChange("platform", e.target.value)}
            className="flex h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2 text-sm text-gray-900 focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <option value="" disabled className="bg-white text-gray-500">
              Select platform...
            </option>
            {platforms.map((p) => (
              <option key={p} value={p} className="bg-white text-gray-900">
                {p}
              </option>
            ))}
          </select>
          {errors.platform && (
            <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3 h-3" /> {errors.platform}
            </p>
          )}
        </div>

        {/* Channel or Profile URL */}
        <div className="space-y-1.5">
          <label htmlFor="creator-url" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            Channel or Profile URL <span className="text-gray-400">*</span>
          </label>
          <Input
            id="creator-url"
            placeholder="https://youtube.com/@yourchannel"
            value={formData.channelUrl || ""}
            onChange={(e) => handleChange("channelUrl", e.target.value)}
            error={!!errors.channelUrl}
            aria-invalid={!!errors.channelUrl}
            aria-describedby={errors.channelUrl ? "creator-url-error" : undefined}
          />
          {errors.channelUrl && (
            <p id="creator-url-error" className="text-xs text-red-400 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3 h-3" /> {errors.channelUrl}
            </p>
          )}
        </div>
      </div>

      {/* Content Niche */}
      <div className="space-y-1.5">
        <label htmlFor="creator-niche" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          Primary Content Niche <span className="text-gray-400">*</span>
        </label>
        <select
          id="creator-niche"
          value={formData.niche || ""}
          onChange={(e) => handleChange("niche", e.target.value)}
          className="flex h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2 text-sm text-gray-900 focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/40"
        >
          <option value="" disabled className="bg-white text-gray-500">
            Select content focus...
          </option>
          {niches.map((n) => (
            <option key={n} value={n} className="bg-white text-gray-900">
              {n}
            </option>
          ))}
        </select>
        {errors.niche && (
          <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
            <AlertCircle className="w-3 h-3" /> {errors.niche}
          </p>
        )}
      </div>

      {/* Introduction */}
      <div className="space-y-1.5">
        <label htmlFor="creator-bio" className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          Brief Introduction & Audience Focus <span className="text-gray-400">*</span>
        </label>
        <Textarea
          id="creator-bio"
          rows={3}
          placeholder="Tell us about the kinds of software/AI topics you cover and who follows your content..."
          value={formData.bio || ""}
          onChange={(e) => handleChange("bio", e.target.value)}
          error={!!errors.bio}
          aria-invalid={!!errors.bio}
          aria-describedby={errors.bio ? "creator-bio-error" : undefined}
        />
        {errors.bio && (
          <p id="creator-bio-error" className="text-xs text-red-400 flex items-center gap-1 mt-1">
            <AlertCircle className="w-3 h-3" /> {errors.bio}
          </p>
        )}
      </div>

      {/* Mandatory Representation Disclaimer per PRD */}
      <div className="rounded-xl border border-gray-200/50 bg-gray-50 p-4 flex items-start gap-3 text-xs text-gray-600">
        <ShieldAlert className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Important notice:</strong> Submitting an application does not guarantee acceptance, representation, or commercial brand placement. Applications are reviewed confidentially by GrowthiveMedia for upcoming campaign alignments.
        </p>
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
              <RefreshCw className="w-4 h-4 animate-spin" /> Recording Application...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Apply Now
            </span>
          )}
        </Button>

        <span className="text-xs text-gray-500/80">
          Evaluated confidentially for future brand collaborations.
        </span>
      </div>
    </form>
  );
}