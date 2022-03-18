import React, {useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TempMovie} from '../slider';
import {MovieOptionsModal} from '../modals/MovieOptionsModal';

const MOVIE_WIDTH = 150;
const MARGIN_HORIZONTAL = 5;
const MOVIE_WIDTH_MARGIN = MOVIE_WIDTH + MARGIN_HORIZONTAL;

const styles = StyleSheet.create({
  movieContainer: {
    width: MOVIE_WIDTH,
    height: 100,
    backgroundColor: '#f00',
    marginHorizontal: MARGIN_HORIZONTAL / 2,
    position: 'relative',
    display: 'flex',
    borderRadius: 100 * 0.1,
    overflow: 'hidden',
  },
  movieContainerPressed: {
    position: 'absolute',
    zIndex: 1,
    width: MOVIE_WIDTH,
    height: 100,
  },
  movieImage: {
    width: MOVIE_WIDTH,
    height: 100,
    position: 'absolute',
  },
  movieImagePressed: {
    width: MOVIE_WIDTH,
    height: 100,
    position: 'absolute',
    zIndex: -1,
  },
  movieData: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'rgba(36,74,103,0.49)',
  },
  movieContent: {
    textAlign: 'center',
    color: '#fff',
  },
  movieTitle: {
    color: '#fff',
  },
});

interface MovieCardProps {
  movieData: TempMovie;
  x: Animated.Value;
  index: number;
  onLongPress: (data: TempMovie) => void;
}

export function MovieCard({movieData, index, x, onLongPress}: MovieCardProps) {
  const scale = x.interpolate({
    inputRange: [
      -100,
      0,
      MOVIE_WIDTH_MARGIN * index,
      MOVIE_WIDTH_MARGIN * (index + 2),
    ],
    outputRange: [1, 1, 1, 0],
    extrapolate: 'clamp',
  });

  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const handleLongPress = () => {
    onLongPress(movieData);
  };

  return (
    <Animated.View style={{transform: [{scale}]}}>
      <Pressable
        onPressIn={handlePress}
        onPressOut={handlePressOut}
        onLongPress={handleLongPress}
        style={styles.movieContainer}>
        {isPressed && (
          <View style={styles.movieContainerPressed}>
            <View style={styles.movieData}>
              <Text style={styles.movieContent}>{movieData.title}</Text>
              <Text style={styles.movieContent}> {movieData.id}</Text>
            </View>
            <Image
              source={{uri: movieData.img}}
              style={styles.movieImagePressed}
              blurRadius={2}
            />
          </View>
        )}
        <Image source={{uri: movieData.img}} style={styles.movieImage} />
      </Pressable>
    </Animated.View>
  );
}
