import type { Field, FieldHook } from "payload";

const formatSlug = (val: string): string =>
  val
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
    .toLowerCase();

const formatSlugHook =
  (fallback: string): FieldHook =>
  ({ data, operation, value }) => {
    if (typeof value === "string" && value.length > 0) {
      return formatSlug(value);
    }

    if (operation === "create" || !value) {
      const fallbackData = data?.[fallback];

      if (fallbackData && typeof fallbackData === "string") {
        return formatSlug(fallbackData);
      }
    }

    return value;
  };

export const slugField = (fieldToUse: string = "title"): Field => ({
  name: "slug",
  type: "text",
  label: "Slug",
  index: true,
  unique: true,
  required: true,
  admin: {
    position: "sidebar",
    description:
      "URL-friendly identifier. Auto-generated from the title. Edit with caution after publishing.",
  },
  hooks: {
    beforeValidate: [formatSlugHook(fieldToUse)],
  },
});
