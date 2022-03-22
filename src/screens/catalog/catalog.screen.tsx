import React from 'react';
import {
  Dimensions,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {MovieSlider} from '../../modules/Catalog';

interface TempMovie {
  id: number;
  title: string;
  img: string;
}

const {width} = Dimensions.get('window');
const TITLE_HEIGHT = 50;

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
  const data = generateMovies(15);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          height: TITLE_HEIGHT,
          position: 'static',
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 16,
            textAlign: 'center',
          }}>
          Prime video
        </Text>
      </View>
      <ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              justifyContent: 'center',
              justifyItens: 'center',
              paddingHorizontal: 25,
            }}>
            <Image
              source={{uri: 'https://picsum.photos/500/300'}}
              style={{
                width: width - 50,
                height: 200,
                marginBottom: 30,
                borderRadius: 20,
              }}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              justifyItens: 'center',
              paddingHorizontal: 25,
            }}>
            <Image
              source={{uri: 'https://picsum.photos/500/300'}}
              style={{
                width: width - 50,
                height: 200,
                marginBottom: 50,
                borderRadius: 20,
              }}
            />
          </View>
        </ScrollView>
        <MovieSlider data={data} category={'Action'} />
        <MovieSlider data={data} category={'Romance'} />
        <MovieSlider data={data} category={'Comedy'} />
        <MovieSlider data={data} category={'Drama'} />
        <MovieSlider data={data} category={'Animes'} />

        <MovieSlider data={data} category={'Surprise-me'} />
      </ScrollView>
    </SafeAreaView>
  );
}
