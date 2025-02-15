import { VOWELS } from '@/constants/LettersAndVowels';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ScoreProps {
  score: number;
}

export default function Tashkeel({ score }: ScoreProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.scoreText}>{VOWELS[0]}</Text>
      </View>
      <View>
        <Text style={styles.scoreText}>{VOWELS[1]}</Text>
      </View>
      <View>
        <Text style={styles.scoreText}>{VOWELS[2]}</Text>
      </View>
    </View>  
  );
}

const styles = StyleSheet.create({
container: {
  width: '100%',
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'space-evenly'

},
scoreText: {
  fontSize: 50,
  fontWeight: 'bold',
  color: '#B71C1C', // Deep red for the score
},
});