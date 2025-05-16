import { LETTERS } from "@/constants/lettersVowels";

export const generateRandomLetter = (): string => {
  const randomIndex = Math.floor(Math.random() * LETTERS.length);
  return LETTERS[randomIndex];
};