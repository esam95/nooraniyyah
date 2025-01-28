import LETTERSURI from '@/constants/Uri';
import { Audio } from 'expo-av';

const soundRef = { current: null as Audio.Sound | null };

export async function PlaySound(letter: string) {
  try {
    // Unload any previously loaded sound
    if (soundRef.current) {
      await soundRef.current.unloadAsync();
      soundRef.current = null;
    }
    
    const uriLetter = LETTERSURI.find(element => element.letter === letter)
    // Load and play new sound
    const { sound } = await Audio.Sound.createAsync(
      { uri: `https://www.islamcan.com/learn-arabic/arabic-alphabets/${uriLetter ? uriLetter.file: null}.mp3` },
      { shouldPlay: true }
    );
    soundRef.current = sound;
    await sound.playAsync();
  } catch (error) {
    console.error('Error playing sound:', error, letter);
  }
}