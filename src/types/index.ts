export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  features: string[];
  iconName: "Flame" | "Tv" | "Sparkles" | "Compass" | "Users";
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  detail: string;
}

export interface MontageItem {
  id: string;
  title: string;
  category: string;
  aspect: "landscape" | "portrait" | "square";
  duration: string;
  viewsEstimate: string;
  gradient: string;
  accentColor: string;
}

export interface BrandEnquiryFormData {
  name: string;
  workEmail: string;
  companyName: string;
  websiteUrl?: string;
  campaignType: string;
  campaignDetails: string;
  budget?: string;
}

export interface CreatorApplicationFormData {
  name: string;
  email: string;
  platform: string;
  channelUrl: string;
  niche: string;
  bio: string;
}
