import truncate from "truncate";

export const descriptionLength = 100;

export const getDescription = (fullText: string) => {
  return truncate(fullText, descriptionLength).replace(/\\n/g, "");
};
