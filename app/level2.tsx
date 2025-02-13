import React, { useState, useRef, useEffect } from 'react';
import GameSection2 from "@/components/GameSection2";
import { StyleSheet, View, Button } from "react-native";
import { generateRandomLetter } from '@/functions/GenerateRandomLetter';
import TargetLetter2 from '@/components/TargetLetter2';
import Score from '@/components/Score';
import { LETTERS } from '@/constants/Letters';

export default function Level2() {
  const [letterArray, setLetterArray] = useState<string[]>(LETTERS)
  const [ targetLetter, setTargetLetter ] = useState<string>(letterArray[0]);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    console.log('Score:', score);
    
    if (score === 10) {
      // Filter out the current target letter from the array
      const updatedArray = letterArray.filter((letter) => targetLetter !== letter);
      setLetterArray(updatedArray);   // Update letterArray
      setScore(0);                   // Reset score
    }
  }, [score]);
  
  // New useEffect to update targetLetter when letterArray changes
  useEffect(() => {
    if (letterArray.length > 0) {
      setTargetLetter(letterArray[0]);  // Set to the first element of the updated array
    }
  }, [letterArray]);

  return (
    <View style={styles.container}>
      {/* Target Letter Section */}
      <View style={styles.targetSection}>
        <TargetLetter2 targetLetter={targetLetter} score={score} letterArray={letterArray} />
      </View>
      
      {/* Game Section */}
      <View style={styles.gameSection}>
        <GameSection2 targetLetter={targetLetter} score={score} setScore={setScore} />
      </View>

      {/* Score Section */}
      <View style={styles.scoreSection}>
        <Score score={score} />
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
