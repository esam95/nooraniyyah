import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { VowelButtonProps } from '@/types/props';
import { VOWEL_CONTAINER_WIDTH } from '@/constants/screenDimensions';

export default function VowelButton ({ 
  isDisabled,
  onVowelPress,
  vowel,
  vowelStyle,
  vowelAsText,
  }: VowelButtonProps) {
  return(
    <TouchableWithoutFeedback 
      disabled={isDisabled}
      onPress={() => onVowelPress(vowel)}
    >
      <View style={[styles.vowelContainer, { opacity: isDisabled ? 0.5 : 1 }]}>
        <Text style={vowelStyle}>{vowelAsText}</Text>
      </View>
    </TouchableWithoutFeedback>
)
}

const styles = StyleSheet.create({
vowelContainer: {
  backgroundColor: '#9C8F8F',
  borderRadius: 5,
  width: VOWEL_CONTAINER_WIDTH,
  height: 45,
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.4,
  shadowRadius: 3,
  elevation: 5,
},
})