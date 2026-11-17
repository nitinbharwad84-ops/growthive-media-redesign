import { BrandEnquiryFormData, CreatorApplicationFormData } from "@/types";

export interface ValidationResult<T> {
  isValid: boolean;
  errors: Partial<Record<keyof T, string>>;
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

export function validateUrl(url: string): boolean {
  if (!url.trim()) return true; // optional
  try {
    const formatted = url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
    new URL(formatted);
    return true;
  } catch {
    return false;
  }
}

export function validateBrandEnquiry(
  data: Partial<BrandEnquiryFormData>
): ValidationResult<BrandEnquiryFormData> {
  const errors: Partial<Record<keyof BrandEnquiryFormData, string>> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (!data.workEmail || !validateEmail(data.workEmail)) {
    errors.workEmail = "Please provide a valid work email address.";
  }

  if (!data.companyName || data.companyName.trim().length < 1) {
    errors.companyName = "Please enter your company or brand name.";
  }

  if (data.websiteUrl && data.websiteUrl.trim().length > 0 && !validateUrl(data.websiteUrl)) {
    errors.websiteUrl = "Please enter a valid website or product URL.";
  }

  if (!data.campaignType || data.campaignType.trim().length < 1) {
    errors.campaignType = "Please select a campaign type.";
  }

  if (!data.campaignDetails || data.campaignDetails.trim().length < 10) {
    errors.campaignDetails = "Please describe your product and campaign goals (minimum 10 characters).";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateCreatorApplication(
  data: Partial<CreatorApplicationFormData>
): ValidationResult<CreatorApplicationFormData> {
  const errors: Partial<Record<keyof CreatorApplicationFormData, string>> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Please enter your name or creator handle.";
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.email = "Please provide a valid contact email.";
  }

  if (!data.platform || data.platform.trim().length < 1) {
    errors.platform = "Please select your primary content platform.";
  }

  if (!data.channelUrl || data.channelUrl.trim().length < 3) {
    errors.channelUrl = "Please enter your channel or profile URL / handle.";
  }

  if (!data.niche || data.niche.trim().length < 1) {
    errors.niche = "Please select or specify your content niche.";
  }

  if (!data.bio || data.bio.trim().length < 10) {
    errors.bio = "Please share a brief intro about your audience and content (minimum 10 characters).";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
