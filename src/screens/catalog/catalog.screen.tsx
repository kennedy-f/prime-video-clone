import React from 'react';
import {View} from 'react-native';
import {MovieSlider} from '../../modules/Catalog';

interface TempMovie {
  id: number;
  title: string;
  img: string;
}

export function CatalogScreen() {
  const generateMovies = (numberOfData: number): TempMovie[] => {
    const array = new Array(numberOfData).fill(0);

    return array.map((value, index) => {
      return {
        id: Number(index),
        title: `Movie ${index}`,
        img: 'https://picsum.photos/150/100',
      };
    });
  };
  const data = generateMovies(30);

  return (
    <View>
      <MovieSlider data={data} category={'Action'} />
    </View>
  );
}
