import React from 'react';
import {Dimensions, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const {height} = Dimensions.get('window');

const styles = {
  container: {
    paddingTop: height * 0.05,
    paddingLeft: 16,
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
};

export function BackButton() {
  const {goBack} = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable onPress={goBack}>
        <Icon name="arrow-back-outline" style={styles.text} />
      </Pressable>
    </View>
  );
}
