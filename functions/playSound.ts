import { LETTERWITHVOWELS, VOWELS } from '@/constants/LettersAndVowels';
import LETTERSURI from '@/constants/Uri';
import { Audio } from 'expo-av';
const soundRef = { current: null as Audio.Sound | null };

interface Props {
  letterOrVowel: string;
  setIsPlaying?: React.Dispatch<React.SetStateAction<boolean>>;
}


export async function PlayLetter({ letterOrVowel, setIsPlaying }: Props) {
  try {
    // Unload any previously loaded sound
    if (soundRef.current) {
      await soundRef.current.unloadAsync();
      soundRef.current = null;
    }

    console.log('Playing:', letterOrVowel);

    const uriLetter = LETTERSURI.find(element => element.letter === letterOrVowel)
    const uri = `https://mualim-alquran.com/wp-includes/audio/s1/l1/001_silence_${uriLetter ? uriLetter.file: null}.mp3`;

    // Load and play new sound
    const { sound } = await Audio.Sound.createAsync(
      { uri: uri },
      { shouldPlay: true }
    );
    soundRef.current = sound;
    setIsPlaying?.(true);

    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded && status.didJustFinish) {
        setIsPlaying?.(false);
        console.log('PlayLetter did just finish')
      }
    });
  } catch (error) {
    console.error('Error playing sound:', error, letterOrVowel);
  }
}

export async function PlayVowel({ letterOrVowel, setIsPlaying }: Props) {
  try {
    console.log('Playing:', letterOrVowel);

    // Unload any previously loaded sound
    if (soundRef.current) {
      await soundRef.current.unloadAsync();
      soundRef.current = null;
    }

    // Map Arabic vowels to sound filenames
    const file = 
    letterOrVowel === VOWELS[0] ? require('../assets/fatha.mp3'): 
    letterOrVowel === VOWELS[1] ? require('../assets/kasra.mp3'): 
    letterOrVowel === VOWELS[2] ? require('../assets/kasra.mp3'): 
    letterOrVowel === VOWELS[3] ? require('../assets/fathateen.mp3'): 
    letterOrVowel === VOWELS[4] ? require('../assets/kasrateen.mp3'): 
    require('../assets/dammateen.mp3');

    // Load and play sound
    const { sound } = await Audio.Sound.createAsync(file, { shouldPlay: true });
    soundRef.current = sound;
    setIsPlaying?.(true);

    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded && status.didJustFinish) {
        setIsPlaying?.(false);
        console.log('PlayVowel did just finish')
      }
    });
  } catch (error) {
    console.error('Error playing sound:', error, letterOrVowel);
  }
}

export async function PlayLetterWithVowel(letter: string, vowel: string | null, isPlaying: boolean, setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>) {
  try {
    await new Promise((resolve) => {
      const interval = setInterval(() => {
        if (isPlaying === false) {
          clearInterval(interval); // ✅ Stop checking
          resolve(true);           // ✅ Resume execution
        }
      }, 200);
    });

    // ✅ This runs only after `isPlaying === false`
    if (soundRef.current) {
      await soundRef.current.unloadAsync();
      soundRef.current = null;
    }
    
    const uriLetter = LETTERWITHVOWELS.find(object => object.letter === letter);
    const uri = `https://mualim-alquran.com/wp-includes/audio/s1/l4/004_silence_${
      vowel === VOWELS[0] ? uriLetter?.fatha:
      vowel === VOWELS[1] ? uriLetter?.kasra:
      uriLetter?.dammah}.mp3`

    console.log('Playing:', letter, vowel , uri);

    // Load and play new sound
    const { sound } = await Audio.Sound.createAsync(
      { uri: uri },
      { shouldPlay: true }
    );
    soundRef.current = sound;
    setIsPlaying(true);

    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded && status.didJustFinish) {
        setIsPlaying(false);
        console.log('PlayLetterWithVowel did just finish')
      }
    });
  } catch (error) {
    console.error('Error playing sound:', error, letter);
  }
}
