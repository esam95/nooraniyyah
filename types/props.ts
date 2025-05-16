export interface gameSectionProps {
  clickedVowel: string | null;
  vowelClicked: boolean;
  setVowelClicked: React.Dispatch<React.SetStateAction<boolean>>;
  vowelArray: string[];
  targetLetter: string;
  targetLetterClicked: boolean;
  setTargetLetterClicked: React.Dispatch<React.SetStateAction<boolean>>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface targetLetterProps {
  letterArray: string[];
  targetLetterClicked: boolean;
  targetLetter: string;
  setTargetLetterClicked: React.Dispatch<React.SetStateAction<boolean>>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface tashkeelProps {
  setClickedVowel: (clickedVowel: string) => void;
  setVowelClicked: (vowelClicked: boolean) => void;
  vowelArray: string[];
  setVowelArray: React.Dispatch<React.SetStateAction<string[]>>;
  targetLetterClicked: boolean;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}