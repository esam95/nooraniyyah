import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View } from "react-native";
import { LETTERS, VOWELS } from '@/constants/lettersVowels';
import TargetLetter5 from '@/components/TargetLetter5';
import Tashkeel5 from '@/components/Tashkeel5';
import GameSection5 from '@/components/GameSection5';
import { WORDS } from '@/constants/words';

export default function Level5() {
  const [ letterArray, setLetterArray ] = useState<string[]>(LETTERS)
  const [ targetLetter, setTargetLetter ] = useState<string>(letterArray[0]);
  const [ clickedLetter, setClickedLetter ] = useState<string>('');
  const [ clickedVowel, setClickedVowel ] = useState<string | null>(null);
  const [ vowelClicked, setVowelClicked ] = useState<boolean>(false);
  const [ vowelArray, setVowelArray ] = useState<string[]>([]);
  const [ targetLetterClicked, setTargetLetterClicked ] = useState<boolean>(false);
  const [ isPlaying, setIsPlaying ] = useState<boolean>(false);
  const [ disabledPeriod, setDisabledPeriod ] = useState(false);
  const [ currentCharIndex, setCurrentCharIndex ] = useState<number>(0);
  const [ wordIndex, setWordIndex ] = useState<number>(0);
  const infoObject = {
    clickedLetter: clickedLetter,
    clickedLetterCode: clickedLetter.charCodeAt(0),
    clickedVowel: clickedVowel,
    clickedVowelCode: clickedVowel?.charCodeAt(0),
    currentCharIndex: currentCharIndex,
    targetCharacter: WORDS[wordIndex].charAt(currentCharIndex),
    targetCharacterCode: WORDS[wordIndex].charCodeAt(currentCharIndex)
  }

  useEffect(() => {
    if(wordIndex !== WORDS.length) {
      //If current character is alif or alif with vowel, then make the clicked letter into current character, if clicked letter is alif
      (WORDS[wordIndex].charAt(currentCharIndex) === "أ" 
      || WORDS[wordIndex].charAt(currentCharIndex) === "إ" 
      || WORDS[wordIndex].charAt(currentCharIndex) === "ا") 
      && clickedLetter === LETTERS[0] ?
      (
        setClickedLetter(WORDS[wordIndex].charAt(currentCharIndex)), 
        console.log('Target character is alif, clickedLetter is alif', infoObject)
      ): null;

      //Check if we are on letter or vowel
      if(currentCharIndex % 2 == 0) {
        console.log('Target character is letter', infoObject);
        //Did the target letter and the clicked letter match?
        WORDS[wordIndex].charAt(currentCharIndex) === clickedLetter ? 
        (
          setCurrentCharIndex((prevCurrentCharIndex) => prevCurrentCharIndex + 1), 
          console.log('Target char and clickedLetter are the same', infoObject), 
          setClickedLetter('')
        )
        : null;
      } else {
        //Did the target vowel and the clicked vowel match?
        console.log('Target character is vowel', infoObject);
        WORDS[wordIndex].charAt(currentCharIndex) === clickedVowel ? 
        (
          setCurrentCharIndex((prevCurrentCharIndex) => prevCurrentCharIndex + 1), 
          console.log('Target char and clickedVowel are the same', infoObject)
          , setClickedVowel('')
        )
        : null;
      }

      //Check if we have reached end of string
      WORDS[wordIndex].length === currentCharIndex ? 
      (
        setWordIndex((prevWordIndex) => prevWordIndex + 1),
        setCurrentCharIndex(0)
      ): null;
    }
  }, [clickedLetter, clickedVowel])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Target Letter Section */}
      <View style={styles.targetSection}>
        <TargetLetter5
          targetLetter={targetLetter} 
          targetLetterClicked={targetLetterClicked} 
          letterArray={letterArray} 
          setTargetLetterClicked={setTargetLetterClicked}
          isPlaying={isPlaying} 
          setIsPlaying={setIsPlaying}
          disabledPeriod={disabledPeriod} 
          setDisabledPeriod={setDisabledPeriod}
          setClickedLetter={setClickedLetter}
          currentCharIndex={currentCharIndex}/>
      </View>
      
      {/* Tashkeel Section */}
      <View style={styles.tashkeelSection}>
        <Tashkeel5
          targetLetterClicked={targetLetterClicked} 
          vowelArray={vowelArray}
          setVowelArray={setVowelArray} 
          setClickedVowel={setClickedVowel} 
          setVowelClicked={setVowelClicked}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          disabledPeriod={disabledPeriod} 
          setDisabledPeriod={setDisabledPeriod}
          currentCharIndex={currentCharIndex}/>
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
            setVowelClicked={setVowelClicked}
            isPlaying={isPlaying} 
            setIsPlaying={setIsPlaying}
            wordIndex={wordIndex}/>
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
