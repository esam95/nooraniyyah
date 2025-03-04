export const spawnBall = () => {
    const newBall: Ball = {
      id: Date.now(), // Unique ID based on timestamp
      fallingAnimation: new Animated.Value(-50), // Start at the top of the screen
      scaleAnimation: new Animated.Value(1),
      opacityAnimation: new Animated.Value(1),
      left: Math.random() * (width - 50), // Random horizontal position
      letter: generateRandomLetter(), // Random letter between A and D
    };

    setBalls((prevBalls) => [...prevBalls, newBall]); // Add new ball to the state
    
    // Animate the ball to fall down
    Animated.timing(newBall.fallingAnimation, {
      toValue: distanceToTravel, // Move to the bottom of the screen
      duration: duration, // Falls over 5 seconds
      useNativeDriver: true,
    }).start(() => {
      // Remove the ball once the animation is complete
      setBalls((prevBalls) => prevBalls.filter((ball) => ball.id !== newBall.id));
    });
  };