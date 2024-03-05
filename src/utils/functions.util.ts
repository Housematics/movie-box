export const movieOverviewCutter = (text: string): string => {
  if (text.length > 150) {
    return text.slice(0, 175) + "...";
  }
  return text;
};
