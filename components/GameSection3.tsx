import React, { useState, useEffect } from 'react';
import { View, Text, Animated, StyleSheet, ScrollView } from 'react-native';
import { VOWELS } from '@/constants/lettersVowels';
import { PlayLetterWithVowel } from '@/functions/PlaySound';
import { SCREEN_WIDTH, SCREEN_HEIGHT, BALL_WIDTH } from '@/constants/screenDimensions';
import { stationaryBall } from '@/types/ballTypes';
import { gameSectionProps } from '@/types/props';

export default function GameSection3({ 
  vowelArray, 
  targetLetterClicked, 
  setTargetLetterClicked, 
  targetLetter, 
  clickedVowel, 
  vowelClicked, 
  setVowelClicked,
  isPlaying,
  setIsPlaying, }: gameSectionProps ) {
  const [balls, setBalls] = useState<stationaryBall[]>([]);

  useEffect(() => {
    if (vowelArray.length === 0) return; // Prevents running on initialization
    targetLetterClicked && vowelClicked ? setTimeout(() => { spawnBall() }, 2000): null;
  }, [vowelArray]);

  const spawnBall = () => {
    const newBall: stationaryBall = {
      id: Date.now(), // Unique ID based on timestamp
      scaleAnimation: new Animated.Value(1),
      letter: targetLetter,
      vowel: clickedVowel ? clickedVowel: '',
      vowelTopPosition: clickedVowel === VOWELS.fatha || clickedVowel === VOWELS.damma ? - 1: 25,
    };
    setBalls((prevBalls) => [...prevBalls, newBall]);
    setTargetLetterClicked(false);
    setVowelClicked(false);
    PlayLetterWithVowel(targetLetter, clickedVowel, isPlaying, setIsPlaying);
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
              width: SCREEN_WIDTH / 3,
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
    rowGap: SCREEN_HEIGHT / 70,
    backgroundColor: '#282c34',
    marginTop: 10,
    marginBottom: 10,
  },
  ballContainer: {
    height: BALL_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ballInner: {
    backgroundColor: '#145DA0',
    borderRadius: 25,
    width: BALL_WIDTH,
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