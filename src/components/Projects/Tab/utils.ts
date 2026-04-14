export type ProjectTab = "website" | "design" | "playground";

export function normalizeProjectType(type?: string): ProjectTab | undefined {
  const normalizedType = type?.trim().toLowerCase();

  if (!normalizedType) {
    return undefined;
  }

  if (normalizedType === "websites") {
    return "website";
  }

  if (
    normalizedType === "website" ||
    normalizedType === "design" ||
    normalizedType === "playground"
  ) {
    return normalizedType;
  }

  return undefined;
}