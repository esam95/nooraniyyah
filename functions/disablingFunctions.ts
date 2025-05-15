import { VOWELS } from '@/constants/LettersAndVowels';

export function disableVowel1 (vowelArray: string[], disabledPeriod: boolean) {
    let disabled = false;
    vowelArray.find(vowel => vowel === VOWELS[0]) || disabledPeriod ? disabled = true: disabled = false;
    return disabled;
  }

  export function disableVowel2 (vowelArray: string[], disabledPeriod: boolean) {
    let disabled = false;
    if(vowelArray.find(vowel => vowel === VOWELS[0]) && !vowelArray.find(vowel => vowel === VOWELS[1]) && !disabledPeriod){
      disabled = false;
    } else {
      disabled = true;
    }
    return disabled;
  }

  export function disableVowel3 (vowelArray: string[], disabledPeriod: boolean) {
    let disabled = false;
    if(vowelArray.find(vowel => vowel === VOWELS[0]) && vowelArray.find(vowel => vowel === VOWELS[1]) && !vowelArray.find(vowel => vowel === VOWELS[2]) &&!disabledPeriod){
      disabled = false;
    } else {
      disabled = true;
    }
    return disabled;
  }