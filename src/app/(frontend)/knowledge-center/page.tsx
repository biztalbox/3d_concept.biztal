import { KnowledgeCenterFaq } from "@/component/knowledge-center/KnowledgeCenterFaq";

const KnowledgeCenterPage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white p-10 sm:p-16 lg:p-20 dark:bg-black">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,211,255,0.2)_0%,rgba(0,164,190,0.12)_48%,rgba(245,250,252,0.96)_90%)] dark:bg-[radial-gradient(circle_at_center,rgba(0,211,255,0.46)_0%,rgba(0,164,190,0.28)_46%,rgba(0,0,0,0.88)_88%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.38)_0%,rgba(255,255,255,0)_38%,rgba(255,255,255,0.42)_100%)] dark:bg-[linear-gradient(180deg,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0)_38%,rgba(0,0,0,0.72)_100%)]" />

        <div className="container relative flex flex-col items-center justify-center py-16 text-center sm:py-20 lg:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-primary">
            Knowledge Center
          </div>

          <h1 className="mt-6 text-foreground">
            Meet <span className="text-primary!">ZerofAI</span>
          </h1>

          <p className="mt-4 max-w-190 font-bold! text-xl!">
            Your one-stop solution for seamless IT support, incident rectification, and automated service requests.
          </p>
        </div>
      </section>

      <KnowledgeCenterFaq />
    </main>
  );
};

export default KnowledgeCenterPage;
