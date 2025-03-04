import React, { useState, useEffect } from 'react';
import { View, Text, Animated, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { generateRandomLetter } from '@/functions/GenerateRandomLetter';
import { LETTERS, VOWELS } from '@/constants/LettersAndVowels';

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
}

interface Ball {
  id: number; // Unique identifier for each ball
  height: number; // Individual animation for each ball
  scaleAnimation: Animated.Value;
  left: number; // Horizontal position
  letter: string; // Letter assigned to the ball
}

//CONSTANTS
const { width, height } = Dimensions.get('window');

export default function GameSection3({ vowelArray, setVowelArray, targetLetterClicked, setTargetLetterClicked, targetLetter, clickedVowel, vowelClicked, setVowelClicked, letterArray }: Props ) {
  const [balls, setBalls] = useState<Ball[]>([]);
  
  useEffect(() => {
    if (vowelArray.length === 0) return; // Prevents running on initialization
    targetLetterClicked && vowelClicked ? spawnBall(): null;
  }, [vowelArray]);

  const spawnBall = () => {
    const newBall: Ball = {
      id: Date.now(), // Unique ID based on timestamp
      height: LETTERS.findIndex(letter => letterArray[0] === letter) * 50, // Start at the top of the screen
      scaleAnimation: new Animated.Value(1),
      left: clickedVowel === VOWELS[0] ? width *3 / 4: clickedVowel === VOWELS[1] ? width * 2 / 4: width * 1 / 4 , // horizontal position
      letter: targetLetter, // Random letter between A and D
    };
    // console.log('ball height', newBall.height, 'left', newBall.left, 'height', height, 'width', width)

    setBalls((prevBalls) => [...prevBalls, newBall]); // Add new ball to the state
    setTargetLetterClicked(false);
    setVowelClicked(false);

  };


  return (
    <View style={styles.container}>
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
          <TouchableWithoutFeedback>
            <View style={styles.ballInner}>
              <Text style={styles.letter}>{ball.letter}</Text>
            </View>
          </TouchableWithoutFeedback>
        </Animated.View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
  },
  ball: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: 'orange',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ballInner: {
    backgroundColor: 'orange',
    borderRadius: 25,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  letter: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

