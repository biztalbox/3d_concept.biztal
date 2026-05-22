"use client";

import Image from "next/image";

export type AlternatingFeatureRow = {
  imageSrc: string;
  imageAlt: string;
  accentClass: string;
  title: string;
  description: string;
  imageFirst: boolean;
};

function FeatureImage({
  src,
  alt,
  animation,
  priority,
}: {
  src: string;
  alt: string;
  animation: "fade-right" | "fade-left";
  priority?: boolean;
}) {
  return (
    <div
      data-aos={animation}
      data-aos-duration="900"
      data-aos-easing="ease-out-cubic"
      className="relative aspect-[4/3] w-full min-h-[200px] overflow-hidden rounded-[24px] ring-1 ring-neutral-200 sm:min-h-[220px] md:aspect-[3/2] md:min-h-0 md:flex-1 md:basis-0 dark:ring-0"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
      />
    </div>
  );
}

function FeatureCard({
  accentClass,
  title,
  description,
  animation,
}: {
  accentClass: string;
  title: string;
  description: string;
  animation: "fade-right" | "fade-left";
}) {
  return (
    <div
      data-aos={animation}
      data-aos-duration="900"
      data-aos-easing="ease-out-cubic"
      data-aos-delay="80"
      className="flex w-full flex-col justify-center md:flex-1 md:basis-0"
    >
      <div className="overflow-hidden rounded-[24px] border border-neutral-200 bg-white dark:border-0 dark:bg-[#1e1e1e]">
        <span className={`block h-2 w-14 ${accentClass}`} aria-hidden />
        <div className="flex flex-col justify-center px-7 py-9 sm:px-8 sm:py-10 md:px-9 md:py-12 lg:py-14">
          <h4 className="text-xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-2xl md:text-[1.75rem] dark:text-white">
            {title}
          </h4>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-[0.9375rem] md:text-base md:leading-relaxed dark:text-[#b0b0b0]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AlternatingFeatureRows({
  rows,
  className = "bg-neutral-50 py-16 dark:bg-black sm:py-20 md:py-24",
}: {
  rows: AlternatingFeatureRow[];
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="container max-w-6xl">
        <div className="flex flex-col gap-14 md:gap-20 lg:gap-24">
          {rows.map((row, index) => {
            const imageAnimation = row.imageFirst ? "fade-right" : "fade-left";
            const cardAnimation = row.imageFirst ? "fade-left" : "fade-right";

            const image = (
              <FeatureImage
                key={`${row.title}-image`}
                src={row.imageSrc}
                alt={row.imageAlt}
                animation={imageAnimation}
                priority={index === 0}
              />
            );

            const card = (
              <FeatureCard
                key={`${row.title}-card`}
                accentClass={row.accentClass}
                title={row.title}
                description={row.description}
                animation={cardAnimation}
              />
            );

            const imageOrder = row.imageFirst ? "order-1 md:order-1" : "order-1 md:order-2";
            const cardOrder = row.imageFirst ? "order-2 md:order-2" : "order-2 md:order-1";

            return (
              <div
                key={row.title}
                className="flex flex-col items-stretch gap-8 md:flex-row md:items-center md:gap-10 lg:gap-14"
              >
                <div className={`w-full min-w-0 ${imageOrder}`}>{image}</div>
                <div className={`w-full min-w-0 ${cardOrder}`}>{card}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
