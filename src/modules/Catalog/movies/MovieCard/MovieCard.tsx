import React from 'react';
import {Animated, Image, Pressable, StyleSheet, Text} from 'react-native';
import {TempMovie} from '../slider';

const MOVIE_WIDTH = 150;
const MARGIN_HORIZONTAL = 5;
const MOVIE_WIDTH_MARGIN = MOVIE_WIDTH + MARGIN_HORIZONTAL;

const styles = StyleSheet.create({
  movieContainer: {
    width: MOVIE_WIDTH,
    height: 100,
    backgroundColor: '#f00',
    marginHorizontal: MARGIN_HORIZONTAL / 2,
  },
  movieImage: {
    width: MOVIE_WIDTH,
    height: 100,
    borderRadius: 100 * 0.1,
    position: 'absolute',
  },
  movieTitle: {
    color: '#fff',
  },
});

interface MovieCardProps {
  movieData: TempMovie;
  x: Animated.Value;
  index: number;
}

export function MovieCard({movieData, index, x}: MovieCardProps) {
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

  return (
    <Animated.View style={{transform: [{scale}]}}>
      <Pressable style={styles.movieContainer}>
        <Image source={{uri: movieData.img}} style={styles.movieImage} />
        <Text>{movieData.title}</Text>
        <Text> {movieData.id}</Text>
      </Pressable>
    </Animated.View>
  );
}
