export default function useAudioSource (letter: string) {
  const assetMap: { [key: string]: any } = {
    أ: require('../assets/001-alif.mp3'),
    ب: require('../assets/002-baa.mp3'),
  };

  const audioSource = assetMap[letter];
  return audioSource;
}