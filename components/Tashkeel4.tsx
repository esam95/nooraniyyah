import { VOWELS } from '@/constants/lettersVowels';
import { disableDammateen, disableFathateen, disableKasrateen } from '@/functions/DisablingFunctions';
import { PlayVowel } from '@/functions/PlaySound';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { VOWEL_CONTAINER_WIDTH } from '@/constants/screenDimensions';
import { tashkeelProps } from '@/types/props';
import VowelButton from './VowelButton';

export default function Tashkeel4({ 
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
        isDisabled={disableFathateen(disabledPeriod, isPlaying, vowelArray)}
        onVowelPress={handlePressVowelButton}
        vowel={VOWELS.fathateen}
        vowelStyle={styles.vowelTextFathateen}
        vowelAsText={VOWELS.fatha}
      />
      <VowelButton 
        isDisabled={disableKasrateen(disabledPeriod, isPlaying)}
        onVowelPress={handlePressVowelButton}
        vowel={VOWELS.kasrateen}
        vowelStyle={styles.vowelTextKasrateen}
        vowelAsText={VOWELS.kasra}
      />
      <VowelButton 
        isDisabled={disableDammateen(disabledPeriod, isPlaying)}
        onVowelPress={handlePressVowelButton}
        vowel={VOWELS.dammateen}
        vowelStyle={styles.vowelTextDammateen}
        vowelAsText={VOWELS.damma}
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
vowelContainer: {
  backgroundColor: '#9C8F8F',
  borderRadius: 5,
  width: VOWEL_CONTAINER_WIDTH,
  height: 45,
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.4,
  shadowRadius: 3,
  elevation: 5,
},
vowelTextFathateen: {
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
vowelTextKasrateen: {
  height: '100%',
  fontSize: 65,
  fontWeight: 'bold',
  color: '#B71C1C', 
  writingDirection: 'rtl',
  fontFamily: 'Amiri',
  lineHeight: 25, 
  textAlign: 'center', 
},
vowelTextDammateen: {
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