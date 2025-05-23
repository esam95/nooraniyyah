import React, { useState, useEffect } from 'react';
import { View, Text, Animated, StyleSheet, ScrollView } from 'react-native';
import { SCREEN_HEIGHT, WORD_CONTAINER_WIDTH } from '@/constants/screenDimensions';
import { gameSection5Props } from '@/types/props';
import { WORDS } from '@/constants/words';
import { PlayWord } from '@/functions/PlaySound';

export default function GameSection5({
  setIsPlaying,
  wordIndex
  }: gameSection5Props ) {
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    if(wordIndex !== 0 ) {
      setTimeout(() => { PlayWord(wordIndex-1, setIsPlaying); }, 2000)
      setTimeout(() => { setWords((prevWords) => [...prevWords, WORDS[wordIndex]]) }, 4000)
    } else {
      setWords((prevWords) => [...prevWords, WORDS[wordIndex]])
    }
  }, [wordIndex]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {words.map((word, index) => (
        <Animated.View key={word} style={styles.wordContainer}>
          <View style={styles.wordInner}>
            <Text style={[ 
              styles.word, 
              { opacity: index === wordIndex ? 0.5: 1}
              ]}>
                {word}
              </Text>
          </View>
        </Animated.View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    rowGap: SCREEN_HEIGHT / 70,
    backgroundColor: '#282c34',
    marginTop: 10,
    marginBottom: 10,
  },
  wordContainer: {
    height: WORD_CONTAINER_WIDTH / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wordInner: {
    backgroundColor: '#145DA0',
    borderRadius: 15,
    width: WORD_CONTAINER_WIDTH,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  word: {
    color: 'white',
    fontSize: 70,
    fontWeight: 'bold',
    writingDirection: 'rtl',
    fontFamily: 'Amiri',
    marginTop: 25,
  },
});