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
  /** What we need from the client to run this step well. */
  needs: string;
  /** What the client receives when the step is done. */
  output: string;
}

export interface MontageItem {
  id: string;
  title: string;
  category: string;
  aspect: "landscape" | "portrait" | "square";
  duration: string;
  /** How the format is produced. Never a view count or a reach figure. */
  format: string;
  accentColor: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface DetailBlock {
  title: string;
  body: string;
}

export interface PageContent {
  eyebrow: string;
  headline: string;
  description: string;
  blocks: DetailBlock[];
  faq: FaqItem[];
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
