import React, { useState, useEffect } from 'react';
import { View, Text, Animated, StyleSheet, ScrollView } from 'react-native';
import { LETTERS, VOWELS } from '@/constants/LettersAndVowels';
import { PlayLetterWithVowel } from '@/functions/playSound';
import {Dimensions} from 'react-native';

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
  scaleAnimation: Animated.Value;
  left: number;
  letter: string;
  vowel: string;
  vowelTopPosition: number;
}

//CONSTANTS
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const ballWidth = 70;

export default function GameSection5({ leftPositions, vowelArray, setVowelArray, targetLetterClicked, setTargetLetterClicked, targetLetter, clickedVowel, vowelClicked, setVowelClicked, letterArray }: Props ) {
  const [balls, setBalls] = useState<Ball[]>([]);

  useEffect(() => {
    if (vowelArray.length === 0) return; // Prevents running on initialization
    targetLetterClicked && vowelClicked ? setTimeout(() => { spawnBall() }, 1000): null;
  }, [vowelArray]);

  const spawnBall = () => {
    const newBall: Ball = {
      id: Date.now(), // Unique ID based on timestamp
      scaleAnimation: new Animated.Value(1),
      left: clickedVowel === VOWELS[0] ? leftPositions.damma - ballWidth / 2: clickedVowel === VOWELS[1] ? leftPositions.kasra - ballWidth / 2: leftPositions.fatha - ballWidth / 2,
      letter: targetLetter,
      vowel: clickedVowel ? clickedVowel: '',
      vowelTopPosition: clickedVowel === VOWELS[0] || clickedVowel === VOWELS[2] ? - 1: 25,
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
            styles.ballContainer,
            {
              transform: [{ scale: ball.scaleAnimation }],
              width: screenWidth / 3,
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
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    rowGap: screenHeight / 70,
    backgroundColor: '#282c34',
    marginTop: 10,
    marginBottom: 10,
  },
  ballContainer: {
    height: ballWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ballInner: {
    backgroundColor: '#145DA0',
    borderRadius: 25,
    width: ballWidth,
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