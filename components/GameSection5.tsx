import React, { useState, useEffect } from 'react';
import { View, Text, Animated, StyleSheet, ScrollView } from 'react-native';
import { VOWELS } from '@/constants/lettersVowels';
import { PlayLetterWithTanween } from '@/functions/PlaySound';
import { SCREEN_HEIGHT, SCREEN_WIDTH, BALL_WIDTH } from '@/constants/screenDimensions';
import { stationaryBall } from '@/types/ballTypes';
import { gameSection5Props } from '@/types/props';
import { WORDS } from '@/constants/words';

export default function GameSection5({ 
  vowelArray, 
  targetLetterClicked, 
  setTargetLetterClicked, 
  targetLetter, 
  clickedVowel, 
  vowelClicked, 
  setVowelClicked,
  isPlaying,
  setIsPlaying,
  wordIndex
  }: gameSection5Props ) {
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    setWords((prevWords) => [...prevWords, WORDS[wordIndex]]);
  }, [wordIndex]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {words.map((word) => (
        <Animated.View
          key={word}
        >
          <View style={styles.ballInner}>
            <Text style={styles.letter}>{word}</Text>
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