import { VOWELS, VOWELSWITHOUTSPACE } from '@/constants/lettersVowels';
import { disableDammateen, disableFathateen, disableKasrateen, disableDamma, disableFatha, disableKasra } from '@/functions/DisablingFunctions';
import { PlayVowel } from '@/functions/PlaySound';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { VOWEL_CONTAINER_WIDTH } from '@/constants/screenDimensions';
import { tashkeel5Props } from '@/types/props';

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

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback 
        disabled={/* disableFatha(vowelArray, disabledPeriod, isPlaying) */currentCharIndex % 2 == 0}
        onPress={() => {
          const newVowel = VOWELSWITHOUTSPACE.fatha;  
          // targetLetterClicked ? 
          // (
            // setDisabledPeriod(true),
            // setTimeout(function() { setDisabledPeriod(false)}, 4000),
            setClickedVowel(newVowel),
            setVowelClicked(true)
            // setVowelArray((prevVowelArray) => !prevVowelArray.includes(newVowel) ? [...prevVowelArray, newVowel]: prevVowelArray),
            // PlayVowel(newVowel, setIsPlaying)
          // ): null
          }}
        >
        <View style={[styles.vowelContainer, { opacity: disableFatha(vowelArray, disabledPeriod, isPlaying) ? 0.5 : 1 }]}>
          <Text style={styles.vowelTextFatha}>{VOWELS.fatha}</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback 
        disabled={/* disableKasra(vowelArray, disabledPeriod, isPlaying) */currentCharIndex % 2 == 0}
        onPress={() => {
          const newVowel = VOWELSWITHOUTSPACE.kasra;  
          // targetLetterClicked ? 
          // (
            // setDisabledPeriod(true),
            // setTimeout(function() { setDisabledPeriod(false)}, 4000),
            setClickedVowel(newVowel),
            setVowelClicked(true)
            // setVowelArray((prevVowelArray) => !prevVowelArray.includes(newVowel) ? [...prevVowelArray, newVowel]: prevVowelArray),
            // PlayVowel(newVowel, setIsPlaying)
          // ): null
          }}
        >
        <View style={[styles.vowelContainer, { opacity: disableKasra(vowelArray, disabledPeriod, isPlaying) ? 0.5 : 1 }]}>
          <Text style={styles.vowelTextKasra}>{VOWELS.kasra}</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback 
        disabled={/* disableDamma(vowelArray, disabledPeriod, isPlaying) */currentCharIndex % 2 == 0}
        onPress={() => {
          const newVowel = VOWELSWITHOUTSPACE.damma;  
          // targetLetterClicked ? 
          // (
            // setDisabledPeriod(true),
            // setTimeout(function() { setDisabledPeriod(false)}, 4000),
            setClickedVowel(newVowel),
            setVowelClicked(true)
            // setVowelArray((prevVowelArray) => !prevVowelArray.includes(newVowel) ? [...prevVowelArray, newVowel]: prevVowelArray),
            // PlayVowel(newVowel, setIsPlaying)
          // ): null
          }}
        >
        <View style={[styles.vowelContainer, { opacity: disableDamma(vowelArray, disabledPeriod, isPlaying) ? 0.5 : 1 }]}>
          <Text style={styles.vowelTextDamma}>{VOWELS.damma}</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback 
        disabled={/* disableFathateen(vowelArray, disabledPeriod, isPlaying) */currentCharIndex % 2 == 0}
        onPress={() => {
          const newVowel = VOWELSWITHOUTSPACE.fathateen;  
          // targetLetterClicked ? 
          // (
            // setDisabledPeriod(true),
            // setTimeout(function() { setDisabledPeriod(false)}, 4000),
            setClickedVowel(newVowel),
            setVowelClicked(true)
            // setVowelArray((prevVowelArray) => !prevVowelArray.includes(newVowel) ? [...prevVowelArray, newVowel]: prevVowelArray),
            // PlayVowel(newVowel, setIsPlaying)
          // ): null
          }}
        >
        <View style={[styles.vowelContainer, { opacity: disableFathateen(vowelArray, disabledPeriod, isPlaying) ? 0.5 : 1 }]}>
          <Text style={styles.vowelTextFathateen}>{VOWELS.fathateen}</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback 
        disabled={/* disableKasrateen(vowelArray, disabledPeriod, isPlaying) */currentCharIndex % 2 == 0}
        onPress={() => {
          const newVowel = VOWELSWITHOUTSPACE.kasrateen;  
          // targetLetterClicked ? 
          // (
            // setDisabledPeriod(true),
            // setTimeout(function() { setDisabledPeriod(false)}, 4000),
            setClickedVowel(newVowel),
            setVowelClicked(true)
            // setVowelArray((prevVowelArray) => !prevVowelArray.includes(newVowel) ? [...prevVowelArray, newVowel]: prevVowelArray),
            // PlayVowel(newVowel, setIsPlaying)
          // ): null
          }}
        >
        <View style={[styles.vowelContainer, { opacity: disableKasrateen(vowelArray, disabledPeriod, isPlaying) ? 0.5 : 1 }]}>
          <Text style={styles.vowelTextKasrateen}>{VOWELS.kasrateen}</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback 
        disabled={/* disableDammateen(vowelArray, disabledPeriod, isPlaying) */currentCharIndex % 2 == 0}
        onPress={() => {
          const newVowel = VOWELSWITHOUTSPACE.dammateen;  
          // targetLetterClicked ? 
          // (
            // setDisabledPeriod(true),
            // setTimeout(function() { setDisabledPeriod(false)}, 4000),
            setClickedVowel(newVowel),
            setVowelClicked(true)
            // setVowelArray((prevVowelArray) => !prevVowelArray.includes(newVowel) ? [...prevVowelArray, newVowel]: prevVowelArray),
            // PlayVowel(newVowel, setIsPlaying)
          // ): null
          }}
        >
        <View style={[styles.vowelContainer, { opacity: disableDammateen(vowelArray, disabledPeriod, isPlaying) ? 0.5 : 1 }]}>
          <Text style={styles.vowelTextDammateen}>{VOWELS.dammateen}</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback 
        disabled={/* disableDammateen(vowelArray, disabledPeriod, isPlaying) */currentCharIndex % 2 == 0}
        onPress={() => {
          const newVowel = VOWELSWITHOUTSPACE.sukoon;  
          // targetLetterClicked ? 
          // (
            // setDisabledPeriod(true),
            // setTimeout(function() { setDisabledPeriod(false)}, 4000),
            setClickedVowel(newVowel),
            setVowelClicked(true)
            // setVowelArray((prevVowelArray) => !prevVowelArray.includes(newVowel) ? [...prevVowelArray, newVowel]: prevVowelArray),
            // PlayVowel(newVowel, setIsPlaying)
          // ): null
          }}
        >
        <View style={[styles.vowelContainer, { opacity: disableDammateen(vowelArray, disabledPeriod, isPlaying) ? 0.5 : 1 }]}>
          <Text style={styles.vowelTextDammateen}>{VOWELS.sukoon}</Text>
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