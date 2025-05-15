import { VOWELS } from '@/constants/LettersAndVowels';

export function disableFatha (vowelArray: string[], disabledPeriod: boolean, isPlaying: boolean) {
    let disabled = false;
    vowelArray.find(vowel => vowel === VOWELS[0]) || disabledPeriod || isPlaying ? disabled = true: disabled = false;
    return disabled;
  }

  export function disableKasra (vowelArray: string[], disabledPeriod: boolean, isPlaying: boolean) {
    let disabled = false;
    if(vowelArray.find(vowel => vowel === VOWELS[0]) && !vowelArray.find(vowel => vowel === VOWELS[1]) && !disabledPeriod && !isPlaying){
      disabled = false;
    } else {
      disabled = true;
    }
    return disabled;
  }

  export function disableDamma (vowelArray: string[], disabledPeriod: boolean, isPlaying: boolean) {
    let disabled = false;
    if(vowelArray.find(vowel => vowel === VOWELS[0]) && vowelArray.find(vowel => vowel === VOWELS[1]) && !vowelArray.find(vowel => vowel === VOWELS[2]) &&!disabledPeriod && !isPlaying){
      disabled = false;
    } else {
      disabled = true;
    }
    return disabled;
  }

  export function disableFathateen (vowelArray: string[], disabledPeriod: boolean, isPlaying: boolean) {
    let disabled = false;
    vowelArray.find(vowel => vowel === VOWELS[3]) || disabledPeriod || isPlaying ? disabled = true: disabled = false;
    return disabled;
  }

  export function disableKasrateen (vowelArray: string[], disabledPeriod: boolean, isPlaying: boolean) {
    let disabled = false;
    if(vowelArray.find(vowel => vowel === VOWELS[3]) && !vowelArray.find(vowel => vowel === VOWELS[4]) && !disabledPeriod && !isPlaying){
      disabled = false;
    } else {
      disabled = true;
    }
    return disabled;
  }

  export function disableDammateen (vowelArray: string[], disabledPeriod: boolean, isPlaying: boolean) {
    let disabled = false;
    if(vowelArray.find(vowel => vowel === VOWELS[3]) && vowelArray.find(vowel => vowel === VOWELS[4]) && !vowelArray.find(vowel => vowel === VOWELS[5]) &&!disabledPeriod && !isPlaying){
      disabled = false;
    } else {
      disabled = true;
    }
    return disabled;
  }