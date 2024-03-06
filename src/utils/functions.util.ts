import { IMovie } from "@interfaces/movies.interface";

export const movieOverviewCutter = (text: string): string => {
  if (text.length > 150) {
    return text.slice(0, 175) + "...";
  }
  return text;
};

export const generateRandomNumbers = (n: number): number[] => {
  const randomNumbers: number[] = [];
  for (let i = 0; i < n; i++) {
    randomNumbers.push(Math.floor(Math.random() * 20));
  }
  return randomNumbers;
};

export const generateShowCases = (result: IMovie[]) => {
  const randomNumbers = generateRandomNumbers(5);
  const showcases: IMovie[] = [];
  for (let i = 0; i < 5; i++) {
    showcases.push(result[randomNumbers[i]]);
  }
  return showcases;
};
