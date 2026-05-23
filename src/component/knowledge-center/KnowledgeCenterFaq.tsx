"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    id: "what-is-zerofai",
    question: "What is ZerofAI?",
    answer:
      "ZerofAI is an AI-powered autonomous IT operations platform that helps enterprises move from reactive support to proactive and predictive digital operations. It automates issue resolution, improves workplace experience, and helps IT teams operate more efficiently at scale.",
  },
  {
    id: "vs-traditional-automation",
    question: "How is ZerofAI different from traditional IT automation?",
    answer:
      "Traditional automation follows predefined workflows and rules. ZerofAI goes further by continuously analyzing operational signals, identifying issues proactively, orchestrating remediation, and helping IT operations become more intelligent and autonomous.",
  },
  {
    id: "platform-or-service",
    question: "Is ZerofAI a platform, service, or both?",
    answer:
      "ZerofAI is both. Organizations can use it as a technology platform or combine it with ZerofAI-led operational services such as Autonomous Support Operations, Proactive Experience Operations, and Predictive Intelligence Operations.",
  },
  {
    id: "proactive-self-healing",
    question: "How does Proactive Self-Healing work?",
    answer:
      "ZerofAI continuously detects anomalies, identifies recurring endpoint issues, and triggers automated remediation workflows to resolve disruptions before they impact users or create support tickets.",
  },
  {
    id: "endpoint-governance",
    question: "What is Autonomous Endpoint Governance?",
    answer:
      "Autonomous Endpoint Governance helps organizations continuously manage endpoint compliance, security policies, provisioning, and operational health through intelligent automation and proactive control.",
  },
  {
    id: "sentiment-trend",
    question: "What does Sentiment Trend Analysis analyze?",
    answer:
      "ZerofAI analyzes workplace behavioral signals, support interactions, and digital experience patterns to identify employee frustration, dissatisfaction, and emerging experience issues early.",
  },
  {
    id: "predictive-health",
    question: "How does Predictive Health Analytics work?",
    answer:
      "ZerofAI analyzes historical operational patterns, real-time signals, and system behavior to identify early indicators of potential failures, helping teams act before disruptions occur.",
  },
  {
    id: "enterprise-customization",
    question: "Can ZerofAI be customized to fit enterprise business needs?",
    answer:
      "Yes. ZerofAI is designed to adapt to enterprise environments, workflows, and operational requirements. It can be aligned with existing ITSM platforms, endpoint ecosystems, security policies, support processes, and automation use cases to match specific business needs and operational maturity.",
  },
  {
    id: "operational-services",
    question: "What's included in ZerofAI's operational services?",
    answer:
      "ZerofAI's services combine AI-powered automation, operational intelligence, and managed execution to help enterprises improve support operations, workplace experience, and predictive decision-making across IT environments.",
  },
  {
    id: "replace-it-teams",
    question: "Does ZerofAI replace existing IT teams?",
    answer:
      "No. ZerofAI is designed to augment IT teams by reducing repetitive operational workload, improving response efficiency, and helping teams focus on strategic initiatives, governance, and higher-value operational decisions. AI operations models are increasingly positioned as augmentation layers rather than direct team replacements.",
  },
] as const;

export function KnowledgeCenterFaq() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 dark:bg-black">
      <div className="container">
        <header className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-primary">
            FAQ
          </div>
          <h2 className="mt-5 text-foreground">
            Frequently Asked <span className="text-primary!">Questions</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base dark:text-[#94A3B8]">
            Everything you need to know about ZerofAI — platform capabilities,
            services, and how autonomous IT operations work in practice.
          </p>
        </header>

        <div className="mx-auto mt-10 max-w-3xl sm:mt-12">
          <div className="overflow-hidden rounded-2xl border border-neutral-200/90 bg-white/90 shadow-sm dark:border-white/8 dark:bg-[#111111]/90 dark:shadow-none sm:rounded-3xl">
            <Accordion type="single" collapsible className="w-full px-4 sm:px-6 md:px-8">
              {FAQ_ITEMS.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-neutral-200/90 dark:border-white/10"
                >
                  <AccordionTrigger className="py-4 text-left text-sm font-semibold text-neutral-950 data-[state=open]:text-primary sm:py-5 sm:text-base dark:text-white">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-neutral-600 sm:text-[15px] dark:text-[#94A3B8]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
