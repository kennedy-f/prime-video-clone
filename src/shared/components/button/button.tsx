import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  ViewStyle,
} from 'react-native';

import {ButtonStyle} from './button.style';

type DefaultButtonProps = PressableProps & {
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

  const mergeStyles: StyleProp<ViewStyle> = [
    ButtonStyle.baseButton,
    {
      width: props.width || '100%',
      height: props.height || 40,
    },
    buttonStyles,
  ];

  return (
    <Pressable onPress={props.onPress} style={mergeStyles} {...props}>
      <Text style={{color: buttonStyles.color}}>{children}</Text>
    </Pressable>
  );
}
