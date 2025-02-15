import { VOWELS } from '@/constants/LettersAndVowels';
import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

interface Props {
  clickedVowel: string;
  setClickedVowel: (clickedVowel: string) => void;
}

export default function Tashkeel({ clickedVowel, setClickedVowel }: Props) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => setClickedVowel(VOWELS[0])}>
        <View>
          <Text style={styles.scoreText}>{VOWELS[0]}</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => setClickedVowel(VOWELS[1])}>
        <View>
          <Text style={styles.scoreText}>{VOWELS[1]}</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => setClickedVowel(VOWELS[2])}>
        <View>
          <Text style={styles.scoreText}>{VOWELS[2]}</Text>
        </View>
      </TouchableWithoutFeedback>
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