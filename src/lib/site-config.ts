import {
  NavItem,
  ServiceItem,
  ProcessStep,
  MontageItem,
  PageContent,
} from "@/types";

export const siteConfig = {
  name: "GrowthiveMedia",
  domain: "https://www.growthivemedia.in",
  description:
    "GrowthiveMedia connects AI and technology brands with creators to bring products, tools and ideas to the right audiences through influencer marketing campaigns.",
  tagline: "The next big thing has a creator behind it.",
  contactEmail: "hello@growthivemedia.in",
  agencyEmail: "krish@growthivemedia.in",
  /** Route-level navigation. Every entry resolves to a real page. */
  navItems: [
    { label: "Services", href: "/services" },
    { label: "How It Works", href: "/process" },
    { label: "Video Showcase", href: "/showcase" },
    { label: "For Creators", href: "/creators" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],
  /** In-page anchors kept on the homepage for scanning. */
  homeAnchors: [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Video Showcase", href: "#showcase" },
    { label: "For Creators", href: "#for-creators" },
  ] as NavItem[],
  services: [
    {
      id: "influencer-campaigns",
      number: "01",
      title: "Influencer Marketing Campaigns",
      description:
        "Connecting brands with relevant creators for promotional campaigns tailored to reach targeted AI and technology communities.",
      tag: "End-to-End Campaigns",
      features: [
        "Creator identification & audience vetting",
        "Strategic messaging & campaign positioning",
        "Flight scheduling & cross-platform rollout",
      ],
      iconName: "Flame",
    },
    {
      id: "dedicated-videos",
      number: "02",
      title: "Dedicated YouTube Videos",
      description:
        "Dedicated videos showcasing a product or platform in comprehensive depth with hands-on demonstrations and technical walkthroughs.",
      tag: "Full Feature Showcase",
      features: [
        "In-depth product tutorials & reviews",
        "High-engagement long-form format",
        "Evergreen technical and developer audience reach",
      ],
      iconName: "Tv",
    },
    {
      id: "youtube-integrations",
      number: "03",
      title: "YouTube Integrations",
      description:
        "Brand integrations within relevant creator content, weaving your technology naturally into high-viewership episodes and tutorials.",
      tag: "Contextual Placement",
      features: [
        "60-90s contextual sponsor segments",
        "Direct call-to-action & tracked link bio placement",
        "High trust & natural audience receptivity",
      ],
      iconName: "Sparkles",
    },
    {
      id: "creator-discovery",
      number: "04",
      title: "Creator Discovery",
      description:
        "Identifying creators suited to a brand's product and campaign goals, analyzing audience demographics and technical affinity.",
      tag: "Audience Alignment",
      features: [
        "Deep niche matching across AI/developer spheres",
        "Engagement rate & credibility verification",
        "Continuous talent pipeline monitoring",
      ],
      iconName: "Compass",
    },
    {
      id: "multi-creator-campaigns",
      number: "05",
      title: "Multi-Creator Campaigns",
      description:
        "Coordinating campaigns involving multiple creators to dominate launch weeks, product drops, and major feature updates.",
      tag: "Launch Blitz",
      features: [
        "Synchronized release waves for maximum buzz",
        "Diverse perspective coverage across creator tiers",
        "Centralized contract, brief, and asset distribution",
      ],
      iconName: "Users",
    },
  ] as ServiceItem[],
  processSteps: [
    {
      step: "01",
      title: "Share your brand and campaign goals.",
      description:
        "Tell us about your product, target user personas, launch timeline, and key performance indicators.",
      detail: "Discovery & Briefing",
      needs:
        "Your product, the audience you are trying to reach, and the window you want to launch in.",
      output:
        "A written brief that states the objective, the audience and the success criteria for the campaign.",
    },
    {
      step: "02",
      title: "Identify the right campaign approach.",
      description:
        "We pinpoint whether dedicated deep-dives, contextual integrations, or multi-creator waves best fit your objectives.",
      detail: "Strategic Architecture",
      needs:
        "A clear priority: depth on one product, repeated context, or a coordinated multi-channel launch.",
      output:
        "A recommended format mix, with the reasoning for each format and the audience it reaches.",
    },
    {
      step: "03",
      title: "Plan the deliverables and timeline.",
      description:
        "We align creator briefs, milestone dates, review protocols, and tracking links for seamless execution.",
      detail: "Roadmap & Coordination",
      needs:
        "Your review turnaround, approval contacts, and any claims or messaging that must be approved.",
      output:
        "A schedule with deliverables, dates, review steps and tracking links, agreed before production.",
    },
    {
      step: "04",
      title: "Bring the campaign to life.",
      description:
        "Content goes live across targeted creator channels, putting your technology directly in front of engaged audiences.",
      detail: "Launch & Delivery",
      needs:
        "Final sign-off on the briefs and assets you have approved during the planning step.",
      output:
        "Published creator content across the agreed channels, with the tracking links you specified.",
    },
  ] as ProcessStep[],
  montageItems: [
    {
      id: "montage-1",
      title: "AI Code Assistant Benchmark & Workflow",
      category: "Developer Tools",
      aspect: "landscape",
      duration: "14:22",
      format: "Long-form deep dive",
      accentColor: "#A78BFA",
    },
    {
      id: "montage-2",
      title: "Autonomous Agents in Production",
      category: "AI Engineering",
      aspect: "portrait",
      duration: "00:58",
      format: "Short-form cut-down",
      accentColor: "#818CF8",
    },
    {
      id: "montage-3",
      title: "Next-Gen SaaS Platform Walkthrough",
      category: "Cloud Software",
      aspect: "square",
      duration: "08:15",
      format: "Dedicated video",
      accentColor: "#C084FC",
    },
    {
      id: "montage-4",
      title: "Local LLM Fine-Tuning on Workstation",
      category: "Hardware & AI",
      aspect: "landscape",
      duration: "18:40",
      format: "Long-form deep dive",
      accentColor: "#9333EA",
    },
    {
      id: "montage-5",
      title: "Generative UI Architecture Breakdown",
      category: "Frontend Dev",
      aspect: "portrait",
      duration: "01:12",
      format: "Short-form cut-down",
      accentColor: "#E879F9",
    },
    {
      id: "montage-6",
      title: "Vector Database Performance Shootout",
      category: "Data Systems",
      aspect: "landscape",
      duration: "11:05",
      format: "Dedicated video",
      accentColor: "#60A5FA",
    },
    {
      id: "montage-7",
      title: "Real-time Voice AI Integration",
      category: "AI Interfaces",
      aspect: "portrait",
      duration: "00:45",
      format: "Short-form cut-down",
      accentColor: "#A78BFA",
    },
    {
      id: "montage-8",
      title: "Full-Stack AI App from Scratch",
      category: "Product Build",
      aspect: "landscape",
      duration: "24:30",
      format: "Long-form deep dive",
      accentColor: "#C4B5FD",
    },
    {
      id: "montage-9",
      title: "Modern API Security Architecture",
      category: "Cybersecurity",
      aspect: "square",
      duration: "09:42",
      format: "Dedicated video",
      accentColor: "#818CF8",
    },
    {
      id: "montage-10",
      title: "AI Video Generation Pipeline Test",
      category: "Creative AI",
      aspect: "portrait",
      duration: "01:05",
      format: "Short-form cut-down",
      accentColor: "#F472B6",
    },
    {
      id: "montage-11",
      title: "High-Frequency Inference Engine Bench",
      category: "Machine Learning",
      aspect: "landscape",
      duration: "16:18",
      format: "Long-form deep dive",
      accentColor: "#A855F7",
    },
    {
      id: "montage-12",
      title: "Developer Productivity Suite Setup",
      category: "Developer Tools",
      aspect: "portrait",
      duration: "00:52",
      format: "Short-form cut-down",
      accentColor: "#7C3AED",
    },
  ] as MontageItem[],
  /** Copy for the standalone routes. Every block traces back to the approved brief. */
  pageContent: {
    services: {
      eyebrow: "Campaign capabilities",
      headline: "Five ways a campaign can be built.",
      description:
        "Every engagement is assembled from the same five models. We recommend the format that fits the objective instead of the one that is easiest to sell.",
      blocks: [
        {
          title: "Pick the format that matches the objective",
          body: "A product that needs depth is not the same problem as a product that needs reach. The models below differ in depth, repetition and coordination, and each one is scoped around a different launch situation.",
        },
        {
          title: "Formats are combined, not stacked",
          body: "Most campaigns use one primary format and one supporting format. We will say so if a single format covers the brief, because a wider mix spends budget without adding reach to the right audience.",
        },
        {
          title: "Every format is scoped in writing",
          body: "Deliverables, dates, review steps and tracking links are agreed before production starts, so the campaign runs to a plan both sides have read.",
        },
      ],
      faq: [
        {
          question: "Can a campaign use more than one format?",
          answer:
            "Yes. We usually combine a primary format with one supporting format, and we will tell you when a single format is enough.",
        },
        {
          question: "Do you work with a fixed budget?",
          answer:
            "Budget is set against the format, the creator profile and the number of deliverables. Send us your range with the enquiry and we will come back with what that range supports.",
        },
        {
          question: "How long does a campaign take to plan?",
          answer:
            "Planning covers the brief, the format decision and the schedule. The timeline depends on the format and on your review turnaround, and it is agreed before production.",
        },
      ],
    } satisfies PageContent,
    process: {
      eyebrow: "How it works",
      headline: "From first brief to published content.",
      description:
        "Four steps, in order. Each one has an input we need from you and an output you can hold us to.",
      blocks: [
        {
          title: "Nothing starts before the brief is written",
          body: "The first conversation produces a short written brief. If we cannot describe the objective, the audience and the launch window on paper, the campaign is not ready to plan.",
        },
        {
          title: "The format decision is made against your goal",
          body: "Depth, context or coordinated waves are chosen for what the product needs at this moment, and the reasoning is written down so you can disagree with it early rather than late.",
        },
        {
          title: "Approval is part of the schedule",
          body: "Review steps and turnaround are scheduled before production. We agree how long you have to review, because an unplanned approval cycle is what usually breaks a launch window.",
        },
        {
          title: "Delivery is tracked the way you specified",
          body: "Tracking links and destinations are set during planning and carried through to the published content.",
        },
      ],
      faq: [
        {
          question: "What do you need from us to start?",
          answer:
            "Your product, the audience you want to reach, the launch window, and anything you already know about the formats you are considering.",
        },
        {
          question: "How many people are involved on your side?",
          answer:
            "One contact is enough to start. Reviews usually need a single approver so the schedule holds.",
        },
        {
          question: "What happens if a deliverable is delayed?",
          answer:
            "Delays are handled in the schedule that was agreed before production, and the change is communicated before the affected date rather than after it.",
        },
      ],
    } satisfies PageContent,
    showcase: {
      eyebrow: "Creator formats",
      headline: "The formats we build campaigns in.",
      description:
        "A working library of the video formats we produce for AI and technology brands. These are formats, not a creator directory: no channel names, no audience statistics.",
      blocks: [
        {
          title: "Long-form deep dives",
          body: "Extended walkthroughs where the product is used end to end. The format suits products whose value is only visible once someone has actually used them.",
        },
        {
          title: "Dedicated videos",
          body: "A whole piece built around one product or platform. The format suits launches where the product should be the only subject on screen.",
        },
        {
          title: "Contextual integrations",
          body: "The product appears inside content that was going to be made anyway, as a segment rather than an advert. The format suits products that fit naturally into a discussion.",
        },
        {
          title: "Short-form cut-downs",
          body: "The same campaign, cut for short-form feeds, so a single production session serves more than one surface.",
        },
        {
          title: "Multi-creator waves",
          body: "Several creators publishing around the same window, each with their own brief. The format suits launches where a single voice would not be enough.",
        },
      ],
      faq: [
        {
          question: "Are the creators behind these formats available to book?",
          answer:
            "We do not publish creator names or profiles. Creator matching happens per campaign, against the brief you send us.",
        },
        {
          question: "Can we supply our own footage?",
          answer:
            "Yes. If you have licensed footage or product recordings, we can build the campaign around them.",
        },
        {
          question: "How long is a typical video?",
          answer:
            "Long-form deep dives and dedicated videos usually run long. Short-form cut-downs are built from the same production for short feeds.",
        },
      ],
    } satisfies PageContent,
    creators: {
      eyebrow: "For creators",
      headline: "Create with GrowthiveMedia.",
      description:
        "Are you creating content around AI, technology or software? Tell us about your channel and apply to be considered for future opportunities.",
      blocks: [
        {
          title: "We work with technical audiences",
          body: "The campaigns we build are aimed at developers, technical buyers and AI early adopters. If that is your audience, a campaign brief will usually be relevant to you.",
        },
        {
          title: "Your editorial voice stays yours",
          body: "We write the brief and the format. How you present the product, and whether you recommend it, is your call, and that is the point of the format.",
        },
        {
          title: "Applications are never published",
          body: "Applications are read by the agency and kept private. Nothing you send is displayed publicly, and nothing is shared with other applicants.",
        },
        {
          title: "Applying does not guarantee anything",
          body: "An application is not an offer, a representation agreement or a guarantee of a commercial placement. We read every application and come back to you either way.",
        },
      ],
      faq: [
        {
          question: "What should I send?",
          answer:
            "Your channel or profile, the platform you publish on, the niche you cover, and a short introduction to your audience.",
        },
        {
          question: "Do you only work with large channels?",
          answer:
            "Campaign fit is decided by audience and format, not by subscriber count alone. We review every application.",
        },
        {
          question: "How long does a decision take?",
          answer:
            "We respond to every application. The timing depends on the campaigns currently in planning.",
        },
      ],
    } satisfies PageContent,
    contact: {
      eyebrow: "Contact",
      headline: "Start a conversation about your campaign.",
      description:
        "Tell us about your product and campaign goals. We will come back with the format we would recommend and what it needs from you.",
      blocks: [
        {
          title: "Campaign enquiries",
          body: "For brands planning a campaign, a product launch or a creator collaboration. Send the brief and we will reply with the format we would suggest and what it needs.",
        },
        {
          title: "Creator applications",
          body: "If you create content around AI, technology or software, use the creator application instead. It is a separate path and a separate inbox.",
        },
        {
          title: "What happens after you write",
          body: "We read the brief, work out which format fits, and reply with questions where the brief is missing something. Nothing is sent to you automatically and nothing is stored beyond what you send us.",
        },
      ],
      faq: [
        {
          question: "Which email should I use?",
          answer:
            "hello@growthivemedia.in for campaign enquiries, and the creator application form for creator applications.",
        },
        {
          question: "How quickly do you reply?",
          answer:
            "Enquiries are read and answered in order. We do not publish a response-time promise, but every brief receives a reply.",
        },
        {
          question: "Can we meet before a campaign?",
          answer:
            "Yes. Once we have read the brief, a short call is usually the fastest way to settle the format and the schedule.",
        },
      ],
    } satisfies PageContent,
  },
  /** Notes that must stay visible wherever a claim could be read as a promise. */
  disclosure:
    "This is a presentation build. Figures are shown only where they are meaningful to the service itself, and no campaign results, client names or creator profiles are published.",
};
