import { LETTERWITHVOWELS, VOWELS } from '@/constants/LettersAndVowels';
import LETTERSURI from '@/constants/Uri';
import { Audio } from 'expo-av';

const soundRef = { current: null as Audio.Sound | null };

export async function PlayLetter(letter: string) {
  try {
    // Unload any previously loaded sound
    if (soundRef.current) {
      await soundRef.current.unloadAsync();
      soundRef.current = null;
    }

    console.log('Playing:', letter);

    const uriLetter = LETTERSURI.find(element => element.letter === letter)
    console.log('Playing:', `https://mualim-alquran.com/wp-includes/audio/s1/l1/001_silence_${uriLetter ? uriLetter.file: null}.mp3`);

    // Load and play new sound
    const { sound } = await Audio.Sound.createAsync(
      { uri: `https://mualim-alquran.com/wp-includes/audio/s1/l1/001_silence_${uriLetter ? uriLetter.file: null}.mp3` },
      { shouldPlay: true }
    );
    soundRef.current = sound;
    await sound.playAsync();
  } catch (error) {
    console.error('Error playing sound:', error, letter);
  }
}

export async function PlayLetterWithVowel(letter: string, vowel: string | null) {
  try {
    // Unload any previously loaded sound
    if (soundRef.current) {
      await soundRef.current.unloadAsync();
      soundRef.current = null;
    }
    const uriLetter = LETTERWITHVOWELS.find(object => object.letter === letter);
    console.log('Playing:', letter, vowel , `https://mualim-alquran.com/wp-includes/audio/s1/l4/004_silence_${vowel === VOWELS[0] ? uriLetter?.fatha: vowel === VOWELS[1] ? uriLetter?.kasra: uriLetter?.dammah}.mp3`);

    // Load and play new sound
    const { sound } = await Audio.Sound.createAsync(
      { uri: `https://mualim-alquran.com/wp-includes/audio/s1/l4/004_silence_${vowel === VOWELS[0] ? uriLetter?.fatha: vowel === VOWELS[1] ? uriLetter?.kasra: uriLetter?.dammah}.mp3` },
      { shouldPlay: true }
    );
    soundRef.current = sound;
    await sound.playAsync();
  } catch (error) {
    console.error('Error playing sound:', error, letter);
  }
}

export async function PlayVowel(letter: string) {
  try {
    // Unload any previously loaded sound
    if (soundRef.current) {
      await soundRef.current.unloadAsync();
      soundRef.current = null;
    }

    console.log('Playing:', letter);

    // Map Arabic vowels to sound filenames
    const file = letter === VOWELS[0] ? require('../assets/fatha.mp3'): letter === VOWELS[1] ? require('../assets/kasra.mp3'): require('../assets/damma.mp3');

    // Load and play sound
    console.log(file)
    const { sound } = await Audio.Sound.createAsync(file, { shouldPlay: true });
    soundRef.current = sound;
    await sound.playAsync();
  } catch (error) {
    console.error('Error playing sound:', error, letter);
  }
}