import { VOWELS, VOWELSWITHOUTSPACE } from '@/constants/lettersVowels';
import { disableDammateen, disableFathateen, disableKasrateen, disableDamma, disableFatha, disableKasra } from '@/functions/DisablingFunctions';
import { PlayVowel } from '@/functions/PlaySound';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { VOWEL_CONTAINER_WIDTH } from '@/constants/screenDimensions';
import { tashkeel5Props } from '@/types/props';
import VowelButton from './VowelButton';

export default function Tashkeel5({ 
  targetLetterClicked, 
  setClickedVowel, 
  setVowelClicked, 
  vowelArray,
  setVowelArray, 
  isPlaying, 
  setIsPlaying,
  currentCharIndex
  }: tashkeel5Props) {
  const [ disabledPeriod, setDisabledPeriod ] = useState(false);

  const handlePressVowelButton = (vowel: string) => {
    setDisabledPeriod(true),
    setTimeout(function() { setDisabledPeriod(false)}, 4000),
    setClickedVowel(vowel),
    PlayVowel(vowel, setIsPlaying)
  }

  return (
    <View style={styles.container}>
      <VowelButton 
        isDisabled={isPlaying || currentCharIndex % 2 == 0}
        onVowelPress={handlePressVowelButton}
        vowel={VOWELSWITHOUTSPACE.fatha}
        vowelStyle={styles.vowelTextFatha}
        vowelAsText={VOWELS.fatha}
      />
      <VowelButton 
        isDisabled={isPlaying || currentCharIndex % 2 == 0}
        onVowelPress={handlePressVowelButton}
        vowel={VOWELSWITHOUTSPACE.kasra}
        vowelStyle={styles.vowelTextKasra}
        vowelAsText={VOWELS.kasra}
      />
      <VowelButton 
        isDisabled={isPlaying || currentCharIndex % 2 == 0}
        onVowelPress={handlePressVowelButton}
        vowel={VOWELSWITHOUTSPACE.damma}
        vowelStyle={styles.vowelTextDamma}
        vowelAsText={VOWELS.damma}
      />
      <VowelButton 
        isDisabled={isPlaying || currentCharIndex % 2 == 0}
        onVowelPress={handlePressVowelButton}
        vowel={VOWELSWITHOUTSPACE.fathateen}
        vowelStyle={styles.vowelTextFathateen}
        vowelAsText={VOWELS.fathateen}
      />
      <VowelButton 
        isDisabled={isPlaying || currentCharIndex % 2 == 0}
        onVowelPress={handlePressVowelButton}
        vowel={VOWELSWITHOUTSPACE.kasrateen}
        vowelStyle={styles.vowelTextKasrateen}
        vowelAsText={VOWELS.kasrateen}
      />
      <VowelButton 
        isDisabled={isPlaying || currentCharIndex % 2 == 0}
        onVowelPress={handlePressVowelButton}
        vowel={VOWELSWITHOUTSPACE.dammateen}
        vowelStyle={styles.vowelTextDammateen}
        vowelAsText={VOWELS.dammateen}
      />
      <VowelButton 
        isDisabled={isPlaying || currentCharIndex % 2 == 0}
        onVowelPress={handlePressVowelButton}
        vowel={VOWELSWITHOUTSPACE.sukoon}
        vowelStyle={styles.vowelTextDammateen}
        vowelAsText={VOWELS.sukoon}
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