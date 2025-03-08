import React, { useState, useEffect } from 'react';
import { View, Text, Animated, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { LETTERS, VOWELS } from '@/constants/LettersAndVowels';
import { PlayLetterWithVowel } from '@/functions/playSound';

interface Props {
  clickedVowel: string | null;
  vowelClicked: boolean;
  setVowelClicked: React.Dispatch<React.SetStateAction<boolean>>;
  letterArray: string[];
  vowelArray: string[];
  setVowelArray: React.Dispatch<React.SetStateAction<string[]>>;
  targetLetter: string;
  targetLetterClicked: boolean;
  setTargetLetterClicked: React.Dispatch<React.SetStateAction<boolean>>;
  leftPositions: {damma: number, kasra: number, fatha: number};
}

interface Ball {
  id: number;
  height: number;
  scaleAnimation: Animated.Value;
  left: number;
  letter: string;
  vowel: string;
  vowelTopPosition: number;
}

//CONSTANTS
const ballWidth = 70;

export default function GameSection3({ leftPositions, vowelArray, setVowelArray, targetLetterClicked, setTargetLetterClicked, targetLetter, clickedVowel, vowelClicked, setVowelClicked, letterArray }: Props ) {
  const [balls, setBalls] = useState<Ball[]>([]);

  useEffect(() => {
    if (vowelArray.length === 0) return; // Prevents running on initialization
    targetLetterClicked && vowelClicked ? setTimeout(() => { spawnBall() }, 1000): null;
  }, [vowelArray]);

  const spawnBall = () => {
    const newBall: Ball = {
      id: Date.now(), // Unique ID based on timestamp
      height: LETTERS.findIndex(letter => letterArray[0] === letter) * 100, // Start at the top of the screen
      scaleAnimation: new Animated.Value(1),
      left: clickedVowel === VOWELS[0] ? leftPositions.damma - ballWidth / 2: clickedVowel === VOWELS[1] ? leftPositions.kasra - ballWidth / 2: leftPositions.fatha - ballWidth / 2,
      letter: targetLetter,
      vowel: clickedVowel ? clickedVowel: '',
      vowelTopPosition: clickedVowel === VOWELS[0] || clickedVowel === VOWELS[2] ? -1: 25,
    };
    setBalls((prevBalls) => [...prevBalls, newBall]);
    setTargetLetterClicked(false);
    setVowelClicked(false);
    PlayLetterWithVowel(targetLetter, clickedVowel);
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      {balls.map((ball) => (
        <Animated.View
          key={ball.id}
          style={[
            styles.ball,
            {
              transform: [{ translateY: ball.height }, { scale: ball.scaleAnimation }],
              left: ball.left,
            },
          ]}
        >
          <View style={styles.ballInner}>
            <Text style={styles.letter}>{ball.letter}</Text>
            <Text 
              style={[
                styles.vowel,
                {
                  top: ball.vowelTopPosition
                },
              ]}>{ball.vowel}</Text> 
          </View>
        </Animated.View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    marginTop: 10,
    marginBottom: 10,
  },
  ball: {
    position: 'absolute',
    width: ballWidth,
    height: ballWidth,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ballInner: {
    backgroundColor: '#145DA0',
    borderRadius: 25,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  letter: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    writingDirection: 'rtl',
    textAlign: 'center',
    fontFamily: 'Amiri',
    lineHeight: 40,
    height: 40,
    textAlignVertical: 'center',

  },
  vowel: {
    position: 'absolute',
    fontSize: 40,
    writingDirection: 'rtl',
    color: 'white',
    fontFamily: 'Amiri',
  },
});