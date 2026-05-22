import { getPayload as getPayloadInstance } from "payload";
import configPromise from "@payload-config";

let cached: ReturnType<typeof getPayloadInstance> | null = null;

/**
 * Returns a singleton Payload instance for server-side use.
 *
 * Usage in Server Components / Server Actions / Route Handlers:
 *   const payload = await getPayload();
 *   const { docs } = await payload.find({ collection: "pages", where: { slug: { equals: "home" } } });
 */
export const getPayload = async () => {
  if (!cached) {
    cached = getPayloadInstance({ config: configPromise });
  }
  return cached;
};
