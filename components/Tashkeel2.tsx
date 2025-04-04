import { VOWELS } from '@/constants/LettersAndVowels';
import { PlayVowel } from '@/functions/playSound';
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

type LeftPositionsType = {
  damma: number;
  kasra: number;
  fatha: number;
};
interface Props {
  clickedVowel: string | null;
  setClickedVowel: (clickedVowel: string) => void;
  setVowelClicked: (vowelClicked: boolean) => void;
  vowelArray: string[];
  setVowelArray: React.Dispatch<React.SetStateAction<string[]>>;
  targetLetterClicked: boolean;
  setLeftPositions: React.Dispatch<React.SetStateAction<LeftPositionsType>>;
}

const vowelContainerWidth = 45;

export default function Tashkeel2({ setLeftPositions, targetLetterClicked, clickedVowel, setClickedVowel, setVowelClicked, vowelArray, setVowelArray }: Props) {
  const vowelRefs = useRef<{ damma: View | null; kasra: View | null; fatha: View | null }>({
    damma: null,
    kasra: null,
    fatha: null,
  });
  
  useEffect(() => {
    setTimeout(() => {
      vowelRefs.current.damma?.measureInWindow((x) => setLeftPositions((prevLeftPositions) => ({...prevLeftPositions, damma: x + vowelContainerWidth / 2})));
      vowelRefs.current.kasra?.measureInWindow((x) => setLeftPositions((prevLeftPositions) => ({...prevLeftPositions, kasra: x + vowelContainerWidth / 2})));
      vowelRefs.current.fatha?.measureInWindow((x) => setLeftPositions((prevLeftPositions) => ({...prevLeftPositions, fatha: x + vowelContainerWidth / 2})));
    }, 0);
  }, []);
  
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => {
        const newVowel = VOWELS[0];  
        targetLetterClicked ? 
        (
          setClickedVowel(newVowel),
          setVowelClicked(true), 
          setVowelArray((prevVowelArray) => !prevVowelArray.includes(newVowel) ? [...prevVowelArray, newVowel]: prevVowelArray),
          PlayVowel(newVowel)
        ): null
        }}>
        <View style={styles.vowelContainer} ref={(ref) => (vowelRefs.current.damma = ref)}>
          <Text style={styles.vowelTextFatha} >{VOWELS[0]}</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => {
        const newVowel = VOWELS[1]; 
        targetLetterClicked ? 
        (
          setClickedVowel(newVowel),
          setVowelClicked(true), 
          setVowelArray((prevVowelArray) => !prevVowelArray.includes(newVowel) ? [...prevVowelArray, newVowel]: prevVowelArray),
          PlayVowel(newVowel)
        ): null
        }}>
        <View style={styles.vowelContainer} ref={(ref) => (vowelRefs.current.kasra = ref)}>
          <Text style={styles.vowelTextKasra}>{VOWELS[1]}</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => {
        const newVowel = VOWELS[2]; 
        targetLetterClicked ? 
        (
          setClickedVowel(newVowel),
          setVowelClicked(true), 
          setVowelArray((prevVowelArray) => !prevVowelArray.includes(newVowel) ? [...prevVowelArray, newVowel]: prevVowelArray),
          PlayVowel(newVowel)
        ): null
        }}>
        <View style={styles.vowelContainer} ref={(ref) => (vowelRefs.current.fatha = ref)}>
          <Text style={styles.vowelTextDamma}>{VOWELS[2]}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>  
  );
}

const styles = StyleSheet.create({
container: {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'space-around',
  alignItems: 'center'
},
vowelContainer: {
  backgroundColor: '#9C8F8F',
  borderRadius: 5,
  width: vowelContainerWidth,
  height: 45,
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.4,
  shadowRadius: 3,
  elevation: 5,
},
vowelTextDamma: {
  height: '100%',
  fontSize: 65,
  fontWeight: 'bold',
  color: '#B71C1C', 
  writingDirection: 'rtl',
  fontFamily: 'Amiri',
  lineHeight: 65, 
  textAlign: 'center', 
  paddingTop: 10,
},
vowelTextKasra: {
  height: '100%',
  fontSize: 65,
  fontWeight: 'bold',
  color: '#B71C1C', 
  writingDirection: 'rtl',
  fontFamily: 'Amiri',
  lineHeight: 25, 
  textAlign: 'center', 
},
vowelTextFatha: {
  height: '100%',
  fontSize: 65,
  fontWeight: 'bold',
  color: '#B71C1C', 
  writingDirection: 'rtl',
  fontFamily: 'Amiri',
  lineHeight: 65,
  textAlign: 'center', 
  paddingTop: 10,
},
});