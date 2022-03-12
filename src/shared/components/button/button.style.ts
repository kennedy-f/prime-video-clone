import {StyleSheet} from 'react-native';

import {theme} from '../../../theme/theme';

const {button} = theme();

export const ButtonStyle = StyleSheet.create({
  baseButton: {
    borderRadius: 10,
    backgroundColor: button.primary.backgroundColor,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  default: {
    backgroundColor: '#333',
    color: '#fff',
  },
  primary: {
    backgroundColor: button.primary.backgroundColor,
    color: '#fff',
  },
});
