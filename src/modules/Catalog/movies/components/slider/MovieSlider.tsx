import React, {useState} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {MovieCard} from '../MovieCard';
import {MovieOptionsModal} from '../modals/MovieOptionsModal';

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

  const [modalMovie, setModalMovie] = useState<TempMovie>();

  const handleOptionOpen = (movie: TempMovie) => {
    setModalMovie(movie);
  };

  const handleOptionsClose = () => {
    setModalMovie(undefined);
  };

  return (
    <View style={{paddingVertical: 10}}>
      <Text style={styles.categoryTitle}> {category} </Text>
      <Animated.FlatList
        horizontal
        data={data}
        pagingEnabled={true}
        keyExtractor={item => String(item.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={({index, item}) => (
          <MovieCard
            movieData={item as TempMovie}
            {...{index, x}}
            onLongPress={handleOptionOpen}
          />
        )}
        {...{onScroll, x}}
      />
      {modalMovie && (
        <MovieOptionsModal
          movie={modalMovie}
          open={!!modalMovie}
          onClose={handleOptionsClose}
        />
      )}
    </View>
  );
}
