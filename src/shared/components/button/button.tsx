import React from 'react';
import {BaseButton} from './button.styled';
import {Button, ButtonProps} from 'react-native';

type UIButtonProps = ButtonProps;

export function UIButton(props: UIButtonProps) {
  return (
    <BaseButton>
      <Button color={'#fff'} {...props} />
    </BaseButton>
  );
}
