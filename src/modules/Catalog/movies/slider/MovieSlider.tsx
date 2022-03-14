import React from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {MovieCard} from '../MovieCard/MovieCard';

export interface TempMovie {
  id: number;
  title: string;
  img: string;
}

interface MovieSliderProps {
  data: TempMovie[];
  category: string;
}

const styles = StyleSheet.create({
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
});

export function MovieSlider({data, category}: MovieSliderProps) {
  const x = new Animated.Value(0);

  const onScroll = Animated.event([{nativeEvent: {contentOffset: {x}}}], {
    useNativeDriver: true,
  });

  return (
    <View>
      <Text style={styles.categoryTitle}> {category} </Text>
      <Animated.FlatList
        horizontal
        data={data}
        pagingEnabled={true}
        keyExtractor={item => String(item.id)}
        renderItem={({index, item}) => (
          <MovieCard movieData={item as TempMovie} {...{index, x}} />
        )}
        {...{onScroll, x}}
      />
    </View>
  );
}
