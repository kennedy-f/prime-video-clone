import {ThemedProps} from './theme.types';
import {DarkTheme} from './dark';

// need implements change theme method
export const theme = (): ThemedProps => {
  return DarkTheme;
};
