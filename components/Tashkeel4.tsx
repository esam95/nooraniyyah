import { VOWELS } from '@/constants/LettersAndVowels';
import { disableDammateen, disableFathateen, disableKasrateen } from '@/functions/disablingFunctions';
import { PlayVowel } from '@/functions/playSound';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

interface Props {
  setClickedVowel: (clickedVowel: string) => void;
  setVowelClicked: (vowelClicked: boolean) => void;
  vowelArray: string[];
  setVowelArray: React.Dispatch<React.SetStateAction<string[]>>;
  targetLetterClicked: boolean;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

const vowelContainerWidth = 45;

export default function Tashkeel4({ targetLetterClicked, setClickedVowel, setVowelClicked, vowelArray, setVowelArray, isPlaying, setIsPlaying }: Props) {
  const [ disabledPeriod, setDisabledPeriod ] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback 
        disabled={disableFathateen(vowelArray, disabledPeriod, isPlaying)}
        onPress={() => {
          const newVowel = VOWELS[3];  
          targetLetterClicked ? 
          (
            setDisabledPeriod(true),
            setTimeout(function() { setDisabledPeriod(false)}, 4000),
            setClickedVowel(newVowel),
            setVowelClicked(true), 
            setVowelArray((prevVowelArray) => !prevVowelArray.includes(newVowel) ? [...prevVowelArray, newVowel]: prevVowelArray),
            PlayVowel({ letterOrVowel: newVowel, setIsPlaying })
          ): null
          }}
        >
        <View style={[styles.vowelContainer, { opacity: disableFathateen(vowelArray, disabledPeriod, isPlaying) ? 0.5 : 1 }]}>
          <Text style={styles.vowelTextFathateen} >{VOWELS[3]}</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback 
        disabled={disableKasrateen(vowelArray, disabledPeriod, isPlaying)}
        onPress={() => {
          const newVowel = VOWELS[4];  
          targetLetterClicked ? 
          (
            setDisabledPeriod(true),
            setTimeout(function() { setDisabledPeriod(false)}, 4000),
            setClickedVowel(newVowel),
            setVowelClicked(true), 
            setVowelArray((prevVowelArray) => !prevVowelArray.includes(newVowel) ? [...prevVowelArray, newVowel]: prevVowelArray),
            PlayVowel({ letterOrVowel: newVowel, setIsPlaying })
          ): null
          }}
        >
        <View style={[styles.vowelContainer, { opacity: disableKasrateen(vowelArray, disabledPeriod, isPlaying) ? 0.5 : 1 }]}>
          <Text style={styles.vowelTextKasrateen} >{VOWELS[4]}</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback 
        disabled={disableDammateen(vowelArray, disabledPeriod, isPlaying)}
        onPress={() => {
          const newVowel = VOWELS[5];  
          targetLetterClicked ? 
          (
            setDisabledPeriod(true),
            setTimeout(function() { setDisabledPeriod(false)}, 4000),
            setClickedVowel(newVowel),
            setVowelClicked(true), 
            setVowelArray((prevVowelArray) => !prevVowelArray.includes(newVowel) ? [...prevVowelArray, newVowel]: prevVowelArray),
            PlayVowel({ letterOrVowel: newVowel, setIsPlaying })
          ): null
          }}
        >
        <View style={[styles.vowelContainer, { opacity: disableDammateen(vowelArray, disabledPeriod, isPlaying) ? 0.5 : 1 }]}>
          <Text style={styles.vowelTextDammateen} >{VOWELS[5]}</Text>
        </View>
      </TouchableWithoutFeedback>
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
  width: vowelContainerWidth,
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