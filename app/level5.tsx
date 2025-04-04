import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View } from "react-native";
import { LETTERS, VOWELS } from '@/constants/LettersAndVowels';
import TargetLetter5 from '@/components/TargetLetter5';
import Tashkeel5 from '@/components/Tashkeel5';
import GameSection5 from '@/components/GameSection5';

export default function Level5() {
  const [ letterArray, setLetterArray ] = useState<string[]>(LETTERS)
  const [ targetLetter, setTargetLetter ] = useState<string>(letterArray[0]);
  const [ clickedVowel, setClickedVowel ] = useState<string | null>(null);
  const [ vowelClicked, setVowelClicked ] = useState<boolean>(false);
  const [ vowelArray, setVowelArray ] = useState<string[]>([]);
  const [ targetLetterClicked, setTargetLetterClicked ] = useState<boolean>(false);

  useEffect(() => {
    if(vowelArray.find(vowel => vowel === VOWELS[0])) {
      if(vowelArray.find(vowel => vowel === VOWELS[1])) {
        if(vowelArray.find(vowel => vowel === VOWELS[2])) {
          // Filter out the current target letter from the array
          const updatedArray = letterArray.filter((letter) => targetLetter !== letter);
          setLetterArray(updatedArray);
          setVowelArray([]);
        }
      }
    }
  }, [vowelArray])

  useEffect(() => {
    if (letterArray.length > 0) {
      setTargetLetter(letterArray[0]);  // Set to the first element of the updated array
    }
  }, [letterArray]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Target Letter Section */}
      <View style={styles.targetSection}>
        <TargetLetter5 
          targetLetter={targetLetter} 
          targetLetterClicked={targetLetterClicked} 
          letterArray={letterArray} 
          setTargetLetterClicked={setTargetLetterClicked} />
      </View>
      
      {/* Tashkeel Section */}
      <View style={styles.tashkeelSection}>
        <Tashkeel5
          targetLetterClicked={targetLetterClicked} 
          setVowelArray={setVowelArray} 
          setClickedVowel={setClickedVowel} 
          setVowelClicked={setVowelClicked} />
      </View>

      {/* Game Section */}
      <View style={styles.gameSection}>
        <GameSection5
          vowelArray={vowelArray} 
            targetLetterClicked={targetLetterClicked} 
            setTargetLetterClicked={setTargetLetterClicked} 
            targetLetter={targetLetter} 
            clickedVowel={clickedVowel} 
            vowelClicked={vowelClicked} 
            setVowelClicked={setVowelClicked} />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#2D2E32', // Dark theme background
  },
  targetSection: {
    flex: 2,
    backgroundColor: '#FFD700', // Bright gold background
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#FFC107', // Lighter yellow border
    zIndex: 2,
  },
  tashkeelSection: {
    flex: 0.5,
    backgroundColor: '#FFCDD2', // Light pink
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 2,
    borderColor: '#E57373', // Light red border
  },
  gameSection: {
    flex: 5,
    backgroundColor: '#2D2E32', // Keep game section dark
  },
  button: {
    width: 100,
    height: 100,
  }
});
