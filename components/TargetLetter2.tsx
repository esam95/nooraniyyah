import { LETTERS } from '@/constants/LettersAndVowels';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TargetLetterProps {
  targetLetter: string;
  score: number;
  letterArray: string[];
}

export default function TargetLetter2({ targetLetter, score, letterArray }: TargetLetterProps) {
  console.log('targetLetter, letterArray', targetLetter, letterArray)
  return ( 
    <View style={styles.container}>
      {LETTERS.map((letter) => (
        <View 
          key={letter} 
          style={[
            styles.targetLetterContainer, 
            { 
              opacity: letterArray.find(letterFromLetterArray => letterFromLetterArray === letter ) ? 1: 0.5 
            }
          ]}>
          <Text style={styles.targetLetterText}>{letter}</Text>
        </View>
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
    gap: '5px'
  },
  targetLetterContainer: {
    backgroundColor: '#FF9800', // Vibrant orange
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  targetLetterText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
