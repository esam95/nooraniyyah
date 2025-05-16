import { VOWELS } from '@/constants/lettersVowels';
import { disableDammateen, disableFathateen, disableKasrateen, disableDamma, disableFatha, disableKasra } from '@/functions/DisablingFunctions';
import { PlayVowel } from '@/functions/PlaySound';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { VOWEL_CONTAINER_WIDTH } from '@/constants/screenDimensions';
import { tashkeelProps } from '@/types/props';

export default function Tashkeel5({ 
  targetLetterClicked, 
  setClickedVowel, 
  setVowelClicked, 
  vowelArray,
  setVowelArray, 
  isPlaying, 
  setIsPlaying 
  }: tashkeelProps) {
  const [ disabledPeriod, setDisabledPeriod ] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback 
        disabled={disableFatha(vowelArray, disabledPeriod, isPlaying)}
        onPress={() => {
          const newVowel = VOWELS[0];  
          targetLetterClicked ? 
          (
            setDisabledPeriod(true),
            setTimeout(function() { setDisabledPeriod(false)}, 4000),
            setClickedVowel(newVowel),
            setVowelClicked(true), 
            setVowelArray((prevVowelArray) => !prevVowelArray.includes(newVowel) ? [...prevVowelArray, newVowel]: prevVowelArray),
            PlayVowel(newVowel, setIsPlaying)
          ): null
          }}
        >
        <View style={[styles.vowelContainer, { opacity: disableFatha(vowelArray, disabledPeriod, isPlaying) ? 0.5 : 1 }]}>
          <Text style={styles.vowelTextFatha} >{VOWELS[0]}</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback 
        disabled={disableKasra(vowelArray, disabledPeriod, isPlaying)}
        onPress={() => {
          const newVowel = VOWELS[1];  
          targetLetterClicked ? 
          (
            setDisabledPeriod(true),
            setTimeout(function() { setDisabledPeriod(false)}, 4000),
            setClickedVowel(newVowel),
            setVowelClicked(true), 
            setVowelArray((prevVowelArray) => !prevVowelArray.includes(newVowel) ? [...prevVowelArray, newVowel]: prevVowelArray),
            PlayVowel(newVowel, setIsPlaying)
          ): null
          }}
        >
        <View style={[styles.vowelContainer, { opacity: disableKasra(vowelArray, disabledPeriod, isPlaying) ? 0.5 : 1 }]}>
          <Text style={styles.vowelTextKasra} >{VOWELS[1]}</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback 
        disabled={disableDamma(vowelArray, disabledPeriod, isPlaying)}
        onPress={() => {
          const newVowel = VOWELS[2];  
          targetLetterClicked ? 
          (
            setDisabledPeriod(true),
            setTimeout(function() { setDisabledPeriod(false)}, 4000),
            setClickedVowel(newVowel),
            setVowelClicked(true), 
            setVowelArray((prevVowelArray) => !prevVowelArray.includes(newVowel) ? [...prevVowelArray, newVowel]: prevVowelArray),
            PlayVowel(newVowel, setIsPlaying)
          ): null
          }}
        >
        <View style={[styles.vowelContainer, { opacity: disableDamma(vowelArray, disabledPeriod, isPlaying) ? 0.5 : 1 }]}>
          <Text style={styles.vowelTextDamma} >{VOWELS[2]}</Text>
        </View>
      </TouchableWithoutFeedback>

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
            PlayVowel(newVowel, setIsPlaying)
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
            PlayVowel(newVowel, setIsPlaying)
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
            PlayVowel(newVowel, setIsPlaying)
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