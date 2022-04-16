import React from 'react';
import {TextField, TextFieldProps} from '../TextField';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-eva-icons';
import {useTheme} from '@react-navigation/native';

interface PasswordTextFieldProps extends TextFieldProps {
  showPassword?: boolean;
  toggleShowPassword?: () => void;
}

const Styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  password: {
    marginHorizontal: 16,
    color: 'white',
    position: 'absolute',
    bottom: 8,
  },
});

export function PasswordTextField({
  showPassword = false,
  toggleShowPassword,
  ...props
}: PasswordTextFieldProps) {
  const {colors} = useTheme();

  return (
    <View style={Styles.container}>
      <TextField
        endIcon={
          <TouchableOpacity onPress={toggleShowPassword}>
            <Icon
              name={showPassword ? 'eye-off' : 'eye'}
              width={24}
              height={24}
              fill={colors.text}
            />
          </TouchableOpacity>
        }
        {...props}
      />
      {showPassword && <Text style={Styles.password}> {props.value} </Text>}
    </View>
  );
}
