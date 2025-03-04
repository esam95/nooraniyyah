import { VOWELS } from '@/constants/LettersAndVowels';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

interface Props {
  clickedVowel: string | null;
  setClickedVowel: (clickedVowel: string) => void;
  vowelClicked: boolean;
  setVowelClicked: (vowelClicked: boolean) => void;
  vowelArray: string[];
  setVowelArray: React.Dispatch<React.SetStateAction<string[]>>;
  targetLetterClicked: boolean;
  setTargetLetterClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Tashkeel({ targetLetterClicked, setTargetLetterClicked, clickedVowel, setClickedVowel, vowelClicked , setVowelClicked, vowelArray, setVowelArray }: Props) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => {
        const newVowel = VOWELS[0];  // Store selected vowel in a variable
        // setClickedVowel(newVowel), 
        // setVowelClicked(true), 
        targetLetterClicked ? (setClickedVowel(newVowel),setVowelClicked(true), setVowelArray((prevVowelArray) => !prevVowelArray.includes(newVowel) ? [...prevVowelArray, newVowel]: prevVowelArray)): null, 
        console.log('clickedVowel', clickedVowel, 'vowelArray', vowelArray)}}>
        <View>
          <Text style={styles.scoreText}>{VOWELS[0]}</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => {
        const newVowel = VOWELS[1];  // Store selected vowel in a variable
        // setClickedVowel(newVowel),        
        // setVowelClicked(true), 
        targetLetterClicked ? (setClickedVowel(newVowel),setVowelClicked(true), setVowelArray((prevVowelArray) => !prevVowelArray.includes(newVowel) ? [...prevVowelArray, newVowel]: prevVowelArray)): null, 
        console.log('clickedVowel', clickedVowel, 'vowelArray', vowelArray)}}>
        <View>
          <Text style={styles.scoreText}>{VOWELS[1]}</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => {
        const newVowel = VOWELS[2];  // Store selected vowel in a variable
        // setClickedVowel(newVowel),        
        // setVowelClicked(true), 
        targetLetterClicked ? (setClickedVowel(newVowel),setVowelClicked(true), setVowelArray((prevVowelArray) => !prevVowelArray.includes(newVowel) ? [...prevVowelArray, newVowel]: prevVowelArray)): null, 
        console.log('clickedVowel', clickedVowel, 'vowelArray', vowelArray)}}>
        <View>
          <Text style={styles.scoreText}>{VOWELS[2]}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>  
  );
}

const styles = StyleSheet.create({
container: {
  width: '100%',
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'space-evenly'

},
scoreText: {
  fontSize: 50,
  fontWeight: 'bold',
  color: '#B71C1C', // Deep red for the score
},
});