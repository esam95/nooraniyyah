import { LETTERWITHTANWEEN, LETTERWITHVOWELS, VOWELS, VOWELSWITHOUTSPACE } from '@/constants/lettersVowels';
import LETTERSURI from '@/constants/uri';
import { Audio } from 'expo-av';
const soundRef = { current: null as Audio.Sound | null };

export async function PlayLetter(letter: string, setIsPlaying?: React.Dispatch<React.SetStateAction<boolean>>) {
  try {
    console.log('Playing:', letter);

    // Unload any previously loaded sound
    if (soundRef.current) {
      await soundRef.current.unloadAsync();
      soundRef.current = null;
    }

    //Find the letter's link
    const uriLetter = LETTERSURI.find(element => element.letter === letter);
    const uri = `https://mualim-alquran.com/wp-includes/audio/s1/l1/001_silence_${uriLetter ? uriLetter.file: null}.mp3`;

    // Load and play new sound
    const { sound } = await Audio.Sound.createAsync(
      { uri: uri },
      { shouldPlay: true }
    );
    soundRef.current = sound;
    setIsPlaying?.(true);

    //Determine when sound has finished playing
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded && status.didJustFinish) {
        setIsPlaying?.(false);
        console.log('PlayLetter did just finish')
      }
    });
  } catch (error) {
    console.error('Error playing sound:', error, letter);
  }
}

export async function PlayVowel(vowel: string, setIsPlaying: React.Dispatch<React.SetStateAction<boolean>> ) {
  try {
    console.log('Playing:', vowel);

    // Unload any previously loaded sound
    if (soundRef.current) {
      await soundRef.current.unloadAsync();
      soundRef.current = null;
    }

    // Map Arabic vowels to sound filenames
    const file = 
    (vowel === VOWELS.fatha || vowel === VOWELSWITHOUTSPACE.fatha) ? require('../assets/fatha.mp3'): 
    (vowel === VOWELS.kasra || vowel === VOWELSWITHOUTSPACE.kasra) ? require('../assets/kasra.mp3'): 
    (vowel === VOWELS.damma || vowel === VOWELSWITHOUTSPACE.damma) ? require('../assets/damma.mp3'): 
    (vowel === VOWELS.fathateen || vowel === VOWELSWITHOUTSPACE.fathateen) ? require('../assets/fathateen.mp3'): 
    (vowel === VOWELS.kasrateen || vowel === VOWELSWITHOUTSPACE.kasrateen) ? require('../assets/kasrateen.mp3'): 
    require('../assets/dammateen.mp3');

    // Load and play sound
    const { sound } = await Audio.Sound.createAsync(
      file, 
      { shouldPlay: true }
    );
    soundRef.current = sound;
    setIsPlaying?.(true);

    //Determine when sound has finished playing
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded && status.didJustFinish) {
        setIsPlaying?.(false);
        console.log('PlayVowel did just finish');
      }
    });
  } catch (error) {
    console.error('Error playing sound:', error, vowel);
  }
}

export async function PlayLetterWithVowel(letter: string, vowel: string | null, isPlaying: boolean, setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>) {
  try {
    //Wait for current sound to finish playing
    await new Promise((resolve) => {
      const interval = setInterval(() => {
        if (isPlaying === false) {
          clearInterval(interval); // ✅ Stop checking
          resolve(true);           // ✅ Resume execution
        }
      }, 200);
    });

    // Unload any previously loaded sound
    if (soundRef.current) {
      await soundRef.current.unloadAsync();
      soundRef.current = null;
    }
    
    //Find the letter's link
    const uriLetter = LETTERWITHVOWELS.find(object => object.letter === letter);
    const uri = `https://mualim-alquran.com/wp-includes/audio/s1/l4/004_silence_${
      vowel === VOWELS.fatha ? uriLetter?.fatha:
      vowel === VOWELS.kasra ? uriLetter?.kasra:
      uriLetter?.dammah}.mp3`

    console.log('Playing:', letter, vowel , uri);

    // Load and play new sound
    const { sound } = await Audio.Sound.createAsync(
      { uri: uri },
      { shouldPlay: true }
    );
    soundRef.current = sound;
    setIsPlaying(true);

    //Determine when sound has finished playing
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded && status.didJustFinish) {
        setIsPlaying(false);
        console.log('PlayLetterWithVowel did just finish');
      }
    });
  } catch (error) {
    console.error('Error playing sound:', error, letter);
  }
}

export async function PlayLetterWithTanween(letter: string, vowel: string | null, isPlaying: boolean, setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>) {
  try {
    //Wait for current sound to finish playing
    await new Promise((resolve) => {
      const interval = setInterval(() => {
        if (isPlaying === false) {
          clearInterval(interval); // ✅ Stop checking
          resolve(true);           // ✅ Resume execution
        }
      }, 200);
    });

    // Unload any previously loaded sound
    if (soundRef.current) {
      await soundRef.current.unloadAsync();
      soundRef.current = null;
    }
        
    //Find the letter's link
    const uriLetter = LETTERWITHTANWEEN.find(object => object.letter === letter);
    const uri = `https://mualim-alquran.com/wp-includes/audio/s1/l4_/004__silence_${
    vowel === VOWELS.fathateen ? uriLetter?.fathateen:
    vowel === VOWELS.kasrateen ? uriLetter?.kasrateen:
    uriLetter?.dammateen}.mp3`

    console.log('Playing:', letter, vowel , uri);

    // Load and play new sound
    const { sound } = await Audio.Sound.createAsync(
      { uri: uri },
      { shouldPlay: true }
    );
    soundRef.current = sound;
    setIsPlaying(true);

    //Determine when sound has finished playing
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded && status.didJustFinish) {
        setIsPlaying(false);
        console.log('PlayLetterWithVowel did just finish');
      }
    });
  } catch (error) {
    console.error('Error playing sound:', error, letter);
  }
}

export async function PlayWord(wordIndex: number, setIsPlaying: React.Dispatch<React.SetStateAction<boolean>> ) {
  try {
    console.log('Playing:', wordIndex);

    // Unload any previously loaded sound
    if (soundRef.current) {
      await soundRef.current.unloadAsync();
      soundRef.current = null;
    }

    // Map Arabic words to sound filenames
    const file = 
    wordIndex === 0 ? require('../assets/words/amara.mp3'): 
    wordIndex === 1 ? require('../assets/words/adhina.mp3'): 
    wordIndex === 2 ? require('../assets/words/akhadha.mp3'): 
    wordIndex === 3 ? require('../assets/words/ahadun.mp3'): 
    require('../assets/words/abadan.mp3');

    // Load and play sound
    const { sound } = await Audio.Sound.createAsync( file, { shouldPlay: true });
    soundRef.current = sound;
    setIsPlaying?.(true);

    //Determine when sound has finished playing
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded && status.didJustFinish) {
        setIsPlaying?.(false);
        console.log('PlayWord did just finish');
      }
    });
  } catch (error) {
    console.error('Error playing sound:', error, wordIndex);
  }
}