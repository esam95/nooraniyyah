import { VOWELS } from '@/constants/lettersVowels';
import { disableFatha, disableKasra, disableDamma } from '@/functions/DisablingFunctions';
import { PlayVowel } from '@/functions/PlaySound';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { tashkeelProps } from '@/types/props';
import VowelButton from './VowelButton';

export default function Tashkeel3({ 
  targetLetterClicked, 
  setClickedVowel, 
  setVowelClicked, 
  vowelArray, 
  setVowelArray, 
  isPlaying, 
  setIsPlaying 
  }: tashkeelProps) {
  const [ disabledPeriod, setDisabledPeriod ] = useState(false);

  const handlePressVowelButton = (vowel: string) => {
    targetLetterClicked ? 
    (
      setDisabledPeriod(true),
      setTimeout(function() { setDisabledPeriod(false)}, 4000),
      setClickedVowel(vowel),
      setVowelClicked(true), 
      setVowelArray((prevVowelArray) => !prevVowelArray.includes(vowel) ? [...prevVowelArray, vowel]: prevVowelArray),
      PlayVowel(vowel, setIsPlaying)
    ): null
  }

  return (
    <View style={styles.container}>
      <VowelButton
        isDisabled={disableFatha(vowelArray, disabledPeriod, isPlaying)}   
        onVowelPress={handlePressVowelButton}
        vowel={VOWELS.fatha}
        vowelStyle={styles.vowelTextFatha}
      />
      <VowelButton
        isDisabled={disableKasra(vowelArray, disabledPeriod, isPlaying)}   
        onVowelPress={handlePressVowelButton}
        vowel={VOWELS.kasra}
        vowelStyle={styles.vowelTextKasra}
      />
      <VowelButton
        isDisabled={disableDamma(vowelArray, disabledPeriod, isPlaying)}   
        onVowelPress={handlePressVowelButton}
        vowel={VOWELS.damma}
        vowelStyle={styles.vowelTextDamma}
      />
    </View>  
  );
}

const styles = StyleSheet.create({
container: {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'space-around',
  alignItems: 'center'
},
vowelTextDamma: {
  height: '100%',
  fontSize: 65,
  fontWeight: 'bold',
  color: '#B71C1C', 
  writingDirection: 'rtl',
  fontFamily: 'Amiri',
  lineHeight: 65, 
  textAlign: 'center', 
  paddingTop: 10,
},
vowelTextKasra: {
  height: '100%',
  fontSize: 65,
  fontWeight: 'bold',
  color: '#B71C1C', 
  writingDirection: 'rtl',
  fontFamily: 'Amiri',
  lineHeight: 25, 
  textAlign: 'center', 
},
vowelTextFatha: {
  height: '100%',
  fontSize: 65,
  fontWeight: 'bold',
  color: '#B71C1C', 
  writingDirection: 'rtl',
  fontFamily: 'Amiri',
  lineHeight: 65,
  textAlign: 'center', 
  paddingTop: 10,
},
});