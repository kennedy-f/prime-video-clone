import {StyleSheet} from 'react-native';

import {theme} from '../../../theme/theme';

const {button} = theme();
export const ButtonStyle = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: button.primary.backgroundColor,
    color: '#fff',
  },
});
