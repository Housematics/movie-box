import { IMovie } from "@interfaces/movies.interface";

export const movieOverviewCutter = (text: string): string => {
  if (text.length > 150) {
    return text.slice(0, 175) + "...";
  }
  return text;
};

export const generateRandomNumbers = (): number[] => {
  const randomNumbers: number[] = [];
  let counter = 0;

  while (counter < 5) {
    const random = Math.floor(Math.random() * 20);
    if (!randomNumbers.includes(random)) {
      randomNumbers.push(random);
      counter++;
    }
  }
  return randomNumbers;
};

export const generateShowCases = (result: IMovie[]) => {
  const randomNumbers = generateRandomNumbers();
  const showcases: IMovie[] = [];
  for (let i = 0; i < 5; i++) {
    showcases.push(result[randomNumbers[i]]);
  }
  return showcases;
};
