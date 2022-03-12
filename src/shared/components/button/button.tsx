import React from 'react';
import {Pressable, PressableProps, Text, View} from 'react-native';

import {ButtonStyle} from './button.style';

type DefaultButtonProps = Omit<PressableProps, 'title'> & {
  title?: string;
  children?: React.ReactFragment;
  width?: number;
  height?: number;
  variant?: 'primary' | 'default';
};

export function UIButton({
  children,
  variant = 'default',
  ...props
}: DefaultButtonProps) {
  const buttonStyles =
    variant === 'default' ? ButtonStyle.default : ButtonStyle.primary;

  return (
    <Pressable
      onPress={props.onPress}
      style={[
        ButtonStyle.baseButton,
        {
          width: props.width || '100%',
          height: props.height || 40,
        },
        buttonStyles,
      ]}>
      <Text style={{color: buttonStyles.color}}>{children}</Text>
    </Pressable>
  );
}
