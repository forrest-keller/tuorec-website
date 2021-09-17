import truncate from "truncate"

export const getDescription = (fullText: string) => {
    return truncate(fullText, 100).replace(/\\n/g, '');
}