import {Theme} from '@react-navigation/native/src/types';
import {ThemedProps} from '../theme.types';

export const DarkTheme: ThemedProps = {
  background: '#244C6A',
  card: '#1E1F28',
  text: '#aeb4c0',
  border: '#b78c3f',
  notification: '#F9971F',
  primary: '#88939c',
  button: {
    primary: {
      backgroundColor: '#14A086',
    },
  },
};

export const DarkApplicationTheme: Theme = {
  dark: true,
  colors: {
    background: '#244C6A',
    card: '#1E1F28',
    text: '#fdfdfd',
    border: '#fdfdfd',
    notification: '#F9971F',
    primary: '#88939c',
  },
};
