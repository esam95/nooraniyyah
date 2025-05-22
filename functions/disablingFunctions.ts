import { VOWELS } from '@/constants/lettersVowels';

export function disableFatha (vowelArray: string[], disabledPeriod: boolean, isPlaying: boolean) {
    let disabled = false;
    vowelArray.find(vowel => vowel === VOWELS.fatha) || disabledPeriod || isPlaying ? disabled = true: disabled = false;
    return disabled;
  }

  export function disableKasra (vowelArray: string[], disabledPeriod: boolean, isPlaying: boolean) {
    let disabled = false;
    if(vowelArray.find(vowel => vowel === VOWELS.fatha) && !vowelArray.find(vowel => vowel === VOWELS.kasra) && !disabledPeriod && !isPlaying){
      disabled = false;
    } else {
      disabled = true;
    }
    return disabled;
  }

  export function disableDamma (vowelArray: string[], disabledPeriod: boolean, isPlaying: boolean) {
    let disabled = false;
    if(vowelArray.find(vowel => vowel === VOWELS.fatha) && vowelArray.find(vowel => vowel === VOWELS.kasra) && !vowelArray.find(vowel => vowel === VOWELS.damma) &&!disabledPeriod && !isPlaying){
      disabled = false;
    } else {
      disabled = true;
    }
    return disabled;
  }

  export function disableFathateen (vowelArray: string[], disabledPeriod: boolean, isPlaying: boolean) {
    let disabled = false;
    vowelArray.find(vowel => vowel === VOWELS.fathateen) || disabledPeriod || isPlaying ? disabled = true: disabled = false;
    return disabled;
  }

  export function disableKasrateen (vowelArray: string[], disabledPeriod: boolean, isPlaying: boolean) {
    let disabled = false;
    if(vowelArray.find(vowel => vowel === VOWELS.fathateen) && !vowelArray.find(vowel => vowel === VOWELS.kasrateen) && !disabledPeriod && !isPlaying){
      disabled = false;
    } else {
      disabled = true;
    }
    return disabled;
  }

  export function disableDammateen (vowelArray: string[], disabledPeriod: boolean, isPlaying: boolean) {
    let disabled = false;
    if(vowelArray.find(vowel => vowel === VOWELS.fathateen) && vowelArray.find(vowel => vowel === VOWELS.kasrateen) && !vowelArray.find(vowel => vowel === VOWELS.dammateen) &&!disabledPeriod && !isPlaying){
      disabled = false;
    } else {
      disabled = true;
    }
    return disabled;
  }