import Image from "next/image";
import { CARD_STAGGER_MS } from "@/lib/aos-config";

export type IntelligenceAlternatingRow = {
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageFirst: boolean;
  imageAccent: "top-left" | "top-right";
};

export default function IntelligenceAlternatingRows({
  rows,
  className,
}: {
  rows: IntelligenceAlternatingRow[];
  className?: string;
}) {
  return (
    <section className={className ?? "py-0"} aria-label="Feature capabilities">
      <div className="flex flex-col gap-16">
        {rows.map((row, rowIndex) => (
          <div
            key={row.label}
            className={
              rowIndex % 2 === 0
                ? "w-full bg-neutral-100 py-4 dark:bg-[#1a1a1a] md:py-5 lg:py-6"
                : "w-full bg-white py-4 dark:bg-black md:py-5 lg:py-6"
            }
          >
            <div className="container">
              <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-2 lg:items-center lg:gap-10 xl:gap-12">
                <div
                  className={
                    row.imageFirst
                      ? "order-2 flex flex-col justify-center lg:order-2"
                      : "order-1 flex flex-col justify-center lg:order-1"
                  }
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aos-easing="ease-out-cubic"
                  data-aos-delay={rowIndex * CARD_STAGGER_MS}
                >
                  
                  <h3 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl dark:text-white">
                    {row.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-700 sm:text-base lg:text-lg dark:text-white/90">
                    {row.description}
                  </p>
                </div>

                <div
                  className={row.imageFirst ? "order-1 lg:order-1" : "order-2 lg:order-2"}
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aos-easing="ease-out-cubic"
                  data-aos-delay={rowIndex * CARD_STAGGER_MS + 80}
                >
                  <div
                    className={[
                      "relative overflow-hidden rounded-[20px] border-t-0 border-neutral-900 dark:border-white",
                      row.imageAccent === "top-left"
                        ? "border-r-0 border-b-0 border-l-[6px] sm:border-l-[7px]"
                        : "border-l-0 border-b-0 border-r-[6px] sm:border-r-[7px]",
                    ].join(" ")}
                  >
                    <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
                      <Image
                        src={row.image}
                        alt={row.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 45vw, 100vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
