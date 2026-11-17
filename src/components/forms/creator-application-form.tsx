"use client";

import * as React from "react";
import { CreatorApplicationFormData } from "@/types";
import { validateCreatorApplication } from "@/lib/validations";
import { siteConfig } from "@/lib/site-config";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Mail, Send, AlertCircle, RefreshCw, ShieldAlert } from "lucide-react";

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

const selectClass =
  "flex h-12 w-full rounded-xl border border-border/70 bg-surface-2/70 px-3.5 py-2 text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/40";

/** Field key → the id of the control that carries it, so focus can move. */
const fieldIds: Record<keyof CreatorApplicationFormData, string> = {
  name: "creator-name",
  email: "creator-email",
  platform: "creator-platform",
  channelUrl: "creator-url",
  niche: "creator-niche",
  bio: "creator-bio",
};

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
  const [statusMessage, setStatusMessage] = React.useState("");

  const handleChange = (field: keyof CreatorApplicationFormData, value: string) => {
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
      const firstInvalid = Object.keys(result.errors)[0] as keyof CreatorApplicationFormData;
      const count = Object.keys(result.errors).length;
      setStatusMessage(
        `${count} field${count === 1 ? "" : "s"} need attention before this application can be sent.`
      );
      window.requestAnimationFrame(() => {
        const element = document.getElementById(fieldIds[firstInvalid]);
        element?.focus();
      });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("Checking your application.");
    // Presentation build: the form validates, it does not transmit.
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData(formData as CreatorApplicationFormData);
      setStatusMessage(
        "Your application passed validation. Nothing was emailed or stored in this presentation build."
      );
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
    setStatusMessage("");
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
            <h3 className="text-xl font-bold text-foreground">Application validated</h3>
            <p className="text-sm text-muted-foreground">
              Your application for{" "}
              <strong className="text-foreground">{submittedData.name}</strong> passed every
              check.
            </p>
          </div>
        </div>

        <div className="space-y-2 rounded-xl border border-border/60 bg-surface-2/60 p-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5 font-semibold text-foreground">
            <AlertCircle className="h-4 w-4 text-primary" />
            <span>Presentation build</span>
          </div>
          <p>
            Nothing was emailed or stored by this page, and nothing you send is published. To
            reach the agency, open your own email client with the message below — it is
            addressed to <strong className="text-foreground">{siteConfig.contactEmail}</strong>{" "}
            and already filled in.
          </p>
        </div>

        <div className="space-y-2 rounded-xl border border-border/60 bg-surface-2/60 p-4 font-mono text-xs">
          <div className="flex justify-between gap-4 border-b border-border/50 pb-1.5">
            <span className="text-muted-foreground">Creator / handle:</span>
            <span className="text-right font-sans text-foreground">{submittedData.name}</span>
          </div>
          <div className="flex justify-between gap-4 border-b border-border/50 pb-1.5">
            <span className="text-muted-foreground">Platform &amp; niche:</span>
            <span className="text-right font-sans text-foreground">
              {submittedData.platform} • {submittedData.niche}
            </span>
          </div>
          <div className="flex justify-between gap-4 border-b border-border/50 pb-1.5">
            <span className="text-muted-foreground">Channel:</span>
            <span className="truncate text-right font-sans text-foreground">
              {submittedData.channelUrl}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <a
            href={generateCreatorMailto(submittedData)}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90"
          >
            <Mail className="h-4 w-4" />
            <span>Open email to {siteConfig.contactEmail}</span>
          </a>

          <Button type="button" variant="outline" onClick={handleReset} className="text-sm">
            <RefreshCw className="mr-1.5 h-4 w-4" />
            <span>Send another application</span>
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
            htmlFor="creator-name"
            className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Name or creator handle <span className="text-accent">* required</span>
          </label>
          <Input
            id="creator-name"
            name="name"
            autoComplete="name"
            placeholder="e.g. Maya Chen / @MayaTech"
            value={formData.name || ""}
            onChange={(e) => handleChange("name", e.target.value)}
            error={!!errors.name}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "creator-name-error" : undefined}
          />
          {errors.name && (
            <p id="creator-name-error" className="mt-1 flex items-center gap-1 text-xs text-destructive">
              <AlertCircle className="h-3 w-3" /> {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="creator-email"
            className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Contact email <span className="text-accent">* required</span>
          </label>
          <Input
            id="creator-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="maya@creator.com"
            value={formData.email || ""}
            onChange={(e) => handleChange("email", e.target.value)}
            error={!!errors.email}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "creator-email-error" : undefined}
          />
          {errors.email && (
            <p id="creator-email-error" className="mt-1 flex items-center gap-1 text-xs text-destructive">
              <AlertCircle className="h-3 w-3" /> {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label
            htmlFor="creator-platform"
            className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Primary platform <span className="text-accent">* required</span>
          </label>
          <select
            id="creator-platform"
            name="platform"
            value={formData.platform || ""}
            onChange={(e) => handleChange("platform", e.target.value)}
            aria-invalid={!!errors.platform}
            aria-describedby={errors.platform ? "creator-platform-error" : undefined}
            className={selectClass}
          >
            <option value="" disabled>
              Select platform...
            </option>
            {platforms.map((platform) => (
              <option key={platform} value={platform}>
                {platform}
              </option>
            ))}
          </select>
          {errors.platform && (
            <p
              id="creator-platform-error"
              className="mt-1 flex items-center gap-1 text-xs text-destructive"
            >
              <AlertCircle className="h-3 w-3" /> {errors.platform}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="creator-url"
            className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            Channel or profile URL <span className="text-accent">* required</span>
          </label>
          <Input
            id="creator-url"
            name="url"
            type="url"
            inputMode="url"
            autoComplete="url"
            placeholder="https://youtube.com/@yourchannel"
            value={formData.channelUrl || ""}
            onChange={(e) => handleChange("channelUrl", e.target.value)}
            error={!!errors.channelUrl}
            aria-invalid={!!errors.channelUrl}
            aria-describedby={errors.channelUrl ? "creator-url-error" : undefined}
          />
          {errors.channelUrl && (
            <p id="creator-url-error" className="mt-1 flex items-center gap-1 text-xs text-destructive">
              <AlertCircle className="h-3 w-3" /> {errors.channelUrl}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="creator-niche"
          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
        >
          Primary content niche <span className="text-accent">* required</span>
        </label>
        <select
          id="creator-niche"
          name="niche"
          value={formData.niche || ""}
          onChange={(e) => handleChange("niche", e.target.value)}
          aria-invalid={!!errors.niche}
          aria-describedby={errors.niche ? "creator-niche-error" : undefined}
          className={selectClass}
        >
          <option value="" disabled>
            Select content focus...
          </option>
          {niches.map((niche) => (
            <option key={niche} value={niche}>
              {niche}
            </option>
          ))}
        </select>
        {errors.niche && (
          <p id="creator-niche-error" className="mt-1 flex items-center gap-1 text-xs text-destructive">
            <AlertCircle className="h-3 w-3" /> {errors.niche}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="creator-bio"
          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
        >
          Brief introduction &amp; audience focus <span className="text-accent">* required</span>
        </label>
        <Textarea
          id="creator-bio"
          name="bio"
          rows={3}
          maxLength={800}
          placeholder="Tell us about the kinds of software and AI topics you cover, and who follows your content..."
          value={formData.bio || ""}
          onChange={(e) => handleChange("bio", e.target.value)}
          error={!!errors.bio}
          aria-invalid={!!errors.bio}
          aria-describedby={errors.bio ? "creator-bio-error" : undefined}
        />
        {errors.bio && (
          <p id="creator-bio-error" className="mt-1 flex items-center gap-1 text-xs text-destructive">
            <AlertCircle className="h-3 w-3" /> {errors.bio}
          </p>
        )}
      </div>

      <div className="flex items-start gap-3 rounded-xl border border-border/60 bg-surface-2/60 p-4 text-xs leading-relaxed text-muted-foreground">
        <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
        <p>
          <strong className="text-foreground">Important notice:</strong> submitting an application
          does not guarantee acceptance, representation, or a commercial brand placement.
          Applications are read confidentially by GrowthiveMedia and are never published.
        </p>
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
              <RefreshCw className="h-4 w-4 animate-spin" /> Validating application...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="h-4 w-4" /> Apply Now
            </span>
          )}
        </Button>

        <span className="text-xs text-muted-foreground/80">
          Evaluated confidentially for future brand collaborations.
        </span>
      </div>
    </form>
  );
}
