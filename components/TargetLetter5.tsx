import { LETTERS } from '@/constants/lettersVowels';
import { PlayLetter } from '@/functions/PlaySound';
import { targetLetter5Props } from '@/types/props';
import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

export default function TargetLetter5({ 
  targetLetterClicked, 
  disabledPeriod,
  setDisabledPeriod, 
  isPlaying, 
  setIsPlaying, 
  setClickedLetter,
  currentCharIndex 
  }: targetLetter5Props) {
  return ( 
    <View style={styles.container}>
      {LETTERS.map((letter) => (
        <TouchableWithoutFeedback 
          key={letter}
          disabled={disabledPeriod || currentCharIndex % 2 !== 0}
          onPress={() => {
            setDisabledPeriod(true),
            setTimeout(function() { setDisabledPeriod(false)}, 2000),
            setClickedLetter(letter), 
            PlayLetter(letter, setIsPlaying)
            }}>
          <View
            style={[
              styles.targetLetterContainer, 
              { 
                opacity: disabledPeriod || currentCharIndex % 2 !== 0 ? 0.5: 1
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
