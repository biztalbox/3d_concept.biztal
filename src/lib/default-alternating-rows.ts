import type { AlternatingFeatureRow } from "@/component/AlternatingFeatureRows";

/** Shared alternating image/text rows used on several solution pages. */
export const DEFAULT_REMEDIATION_FEATURE_ROWS: AlternatingFeatureRow[] = [
  {
    imageSrc:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    imageAlt: "Event-Driven Detection",
    accentClass: "bg-primary",
    title: "Event-Driven Detection",
    description:
      "ZerofAI captures signals from users, endpoints, and monitoring systems, triggering resolution workflows before tickets are formally created.",
    imageFirst: true,
  },
  {
    imageSrc:
      "https://media.istockphoto.com/id/2265515077/photo/echnology-consultant-integrates-artificial-intelligence-engine-with-data-visualization.webp?a=1&b=1&s=612x612&w=0&k=20&c=qD69FXAFYtbN1Q3XIVsMF9iNv-HKaPzm_s_D9q6rsHE=",
    imageAlt: "AI-Led Diagnosis and decisioning",
    accentClass: "bg-[#00bcd4]",
    title: "AI-Led Diagnosis & Decisioning",
    description:
      "Using historical data, context, and predefined policies, ZerofAI determines the root cause and selects the appropriate resolution path automatically.",
    imageFirst: false,
  },
  {
    imageSrc:
      "https://media.istockphoto.com/id/2208747071/photo/hands-of-robots-touching-on-access-management-network-connections-highlight-robotics.webp?a=1&b=1&s=612x612&w=0&k=20&c=Vch3r1Ej9lyc1Xhp_-FftSYKO7GK9sYUXsTMS9frMyA=",
    imageAlt: "Closed-Loop Resolution",
    accentClass: "bg-[#00bcd4]",
    title: "Closed-Loop Resolution",
    description:
      "ZerofAI executes actions, validates outcomes, and logs resolution details ensuring issues are fully resolved without manual follow-up.",
    imageFirst: true,
  },
];
