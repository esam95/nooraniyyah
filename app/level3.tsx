import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View } from "react-native";
import { LETTERS, VOWELS } from '@/constants/LettersAndVowels';
import Tashkeel from '@/components/Tashkeel';
import GameSection3 from '@/components/GameSection3';
import TargetLetter3 from '@/components/TargetLetter3';

export default function Level3() {
  const [ letterArray, setLetterArray ] = useState<string[]>(LETTERS)
  const [ targetLetter, setTargetLetter ] = useState<string>(letterArray[0]);
  const [ clickedVowel, setClickedVowel ] = useState<string | null>(null);
  const [ vowelClicked, setVowelClicked ] = useState<boolean>(false);
  const [ vowelArray, setVowelArray ] = useState<string[]>([]);
  const [ targetLetterClicked, setTargetLetterClicked ] = useState<boolean>(false);

  useEffect(() => {
    if(vowelArray.find(vowel => vowel === VOWELS[0])) {
      console.log('fatha found!')
      if(vowelArray.find(vowel => vowel === VOWELS[1])) {
        console.log('kasra found!')
        if(vowelArray.find(vowel => vowel === VOWELS[2])) {
          // Filter out the current target letter from the array
          const updatedArray = letterArray.filter((letter) => targetLetter !== letter);
          setLetterArray(updatedArray);   // Update letterArray
          setVowelArray([]); // Empty array
          console.log('Damma found. VowelArray emptied!')
        }
      }
    }
  }, [vowelArray])

  useEffect(() => {
    if (letterArray.length > 0) {
      setTargetLetter(letterArray[0]);  // Set to the first element of the updated array
    }
    console.log('new targetletter!')
  }, [letterArray]);

  return (
    <View style={styles.container}>
      {/* Target Letter Section */}
      <View style={styles.targetSection}>
        <TargetLetter3 targetLetter={targetLetter} targetLetterClicked={targetLetterClicked} letterArray={letterArray} setTargetLetterClicked={setTargetLetterClicked} />
      </View>
      
      {/* Tashkeel Section */}
      <View style={styles.scoreSection}>
        <Tashkeel  targetLetterClicked={targetLetterClicked} setTargetLetterClicked={setTargetLetterClicked} vowelArray={vowelArray} setVowelArray={setVowelArray} clickedVowel={clickedVowel} setClickedVowel={setClickedVowel} vowelClicked={vowelClicked} setVowelClicked={setVowelClicked} />
      </View>

      {/* Game Section */}
      <View style={styles.gameSection}>
        <GameSection3 vowelArray={vowelArray} setVowelArray={setVowelArray} targetLetterClicked={targetLetterClicked} setTargetLetterClicked={setTargetLetterClicked} targetLetter={targetLetter} letterArray={letterArray} clickedVowel={clickedVowel} vowelClicked={vowelClicked} setVowelClicked={setVowelClicked} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#2D2E32', // Dark theme background
  },
  targetSection: {
    flex: 1,
    backgroundColor: '#FFD700', // Bright gold background
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#FFC107', // Lighter yellow border
    zIndex: 2,
  },
  gameSection: {
    flex: 5,
    backgroundColor: '#2D2E32', // Keep game section dark
  },
  scoreSection: {
    flex: 1,
    backgroundColor: '#FFCDD2', // Light pink
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 2,
    borderColor: '#E57373', // Light red border
  },
  button: {
    width: 100,
    height: 100,
  }
});
