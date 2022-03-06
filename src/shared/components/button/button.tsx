import React from 'react';
import {Button, ButtonProps, TouchableOpacity, View} from 'react-native';

import {ButtonStyle} from './button.style';

type DefaultButtonProps = Omit<ButtonProps, 'title'> & {
  title?: string;
  children?: React.ReactFragment;
  width?: number;
  height?: number;
};

type UIButtonProps = DefaultButtonProps;

export function UIButton({title, children, ...props}: UIButtonProps) {
  return (
    <View
      style={[
        ButtonStyle.button,
        {
          width: props.width || '80%',
          height: props.height || 40,
        },
      ]}>
      {children ? (
        <TouchableOpacity>{children}</TouchableOpacity>
      ) : (
        <Button color={ButtonStyle.button.color} title={title || ''} {...props} />
      )}
    </View>
  );
}
