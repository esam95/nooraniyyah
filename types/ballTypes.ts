import { Animated } from 'react-native';


export interface fallingBall {
  id: number; // Unique identifier for each ball
  fallingAnimation: Animated.Value; // Individual animation for each ball
  scaleAnimation: Animated.Value;
  opacityAnimation: Animated.Value;
  left: number; // Horizontal position
  letter: string; // Letter assigned to the ball
}

export interface stationaryBall {
  id: number;
  scaleAnimation: Animated.Value;
  letter: string;
  vowel: string;
  vowelTopPosition: number;
}