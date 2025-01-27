import React, { useState, useRef } from 'react';
import GameSection from "@/components/GameSection";
import { StyleSheet, View, Button } from "react-native";
import { generateRandomLetter } from '@/functions/GenerateRandomLetter';
import TargetLetter from '@/components/TargetLetter';
import Score from '@/components/Score';
import { useAudioPlayer } from 'expo-audio';

const audioSource = require('../assets/baa.mp3');
export default function Index() {
  const targetLetter = useRef<string>(generateRandomLetter());
  const [score, setScore] = useState<number>(0);
  const player = useAudioPlayer(audioSource);

  return (
    <View style={styles.container}>
      {/* Target Letter Section */}
      <View style={styles.targetSection}>

      <Button title="Play Sound" onPress={() => player.play()} />

        <TargetLetter targetLetter={targetLetter.current} />
      </View>

      {/* Game Section */}
      <View style={styles.gameSection}>
        <GameSection targetLetter={targetLetter.current} score={score} setScore={setScore} />
      </View>

      {/* Score Section */}
      <View style={styles.scoreSection}>
        <Score score={score} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#2D2E32', // Dark theme background
  },
  targetSection: {
    flex: 1,
    backgroundColor: '#FFD700', // Bright gold background
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#FFC107', // Lighter yellow border
    zIndex: 2,
  },
  gameSection: {
    flex: 5,
    backgroundColor: '#2D2E32', // Keep game section dark
  },
  scoreSection: {
    flex: 1,
    backgroundColor: '#FFCDD2', // Light pink
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 2,
    borderColor: '#E57373', // Light red border
  },
});
