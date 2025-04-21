import { VOWELS } from '@/constants/LettersAndVowels';
import { PlayVowel } from '@/functions/playSound';
import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

interface Props {
  setClickedVowel: (clickedVowel: string) => void;
  setVowelClicked: (vowelClicked: boolean) => void;
  setVowelArray: React.Dispatch<React.SetStateAction<string[]>>;
  targetLetterClicked: boolean;
}

const vowelContainerWidth = 45;

export default function Tashkeel5({ targetLetterClicked, setClickedVowel, setVowelClicked, setVowelArray }: Props) {
  
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => {
        const newVowel = VOWELS[3];  
        targetLetterClicked ? 
        (
          setClickedVowel(newVowel),
          setVowelClicked(true), 
          setVowelArray((prevVowelArray) => !prevVowelArray.includes(newVowel) ? [...prevVowelArray, newVowel]: prevVowelArray),
          PlayVowel(newVowel)
        ): null
        }}>
        <View style={styles.vowelContainer}>
          <Text style={styles.vowelTextFatha} >{VOWELS[3]}</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => {
        const newVowel = VOWELS[4]; 
        targetLetterClicked ? 
        (
          setClickedVowel(newVowel),
          setVowelClicked(true), 
          setVowelArray((prevVowelArray) => !prevVowelArray.includes(newVowel) ? [...prevVowelArray, newVowel]: prevVowelArray),
          PlayVowel(newVowel)
        ): null
        }}>
        <View style={styles.vowelContainer}>
          <Text style={styles.vowelTextKasra}>{VOWELS[4]}</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => {
        const newVowel = VOWELS[5]; 
        targetLetterClicked ? 
        (
          setClickedVowel(newVowel),
          setVowelClicked(true), 
          setVowelArray((prevVowelArray) => !prevVowelArray.includes(newVowel) ? [...prevVowelArray, newVowel]: prevVowelArray),
          PlayVowel(newVowel)
        ): null
        }}>
        <View style={styles.vowelContainer}>
          <Text style={styles.vowelTextDamma}>{VOWELS[5]}</Text>
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