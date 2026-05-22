import { MinDurationLoader } from "@/components/min-duration-loader";

/** Route-level loader (page bundle / server render). 3D assets use Suspense inside HeroCanvas. */
export default function Loading() {
  return <MinDurationLoader />;
}
