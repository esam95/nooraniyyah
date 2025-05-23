import { LETTERS } from '@/constants/lettersVowels';
import { PlayLetter } from '@/functions/PlaySound';
import { targetLetterProps } from '@/types/props';
import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

export default function TargetLetter4({ targetLetterClicked, letterArray, targetLetter, setTargetLetterClicked, isPlaying, setIsPlaying }: targetLetterProps) {
  return ( 
    <View style={styles.container}>
      {LETTERS.map((letter) => (
        <TouchableWithoutFeedback 
          key={letter}
          disabled={isPlaying}
          onPress={() => (!targetLetterClicked && letter === targetLetter ? (setTargetLetterClicked(true), PlayLetter(targetLetter, setIsPlaying)): null)}
        >
          <View
            style={[
              styles.targetLetterContainer, 
              { 
                opacity: letterArray.find(letterFromLetterArray => letterFromLetterArray === letter ) ? 1: 0.5 
              }
            ]}>
            <Text style={styles.targetLetterText}>{letter}</Text>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    gap: '8px'
  },
  targetLetterContainer: {
    backgroundColor: '#FF9800',
    borderRadius: 40,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  targetLetterText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF',
    writingDirection: 'rtl',
    fontFamily: 'Amiri',
  },
});
