import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

import {useTheme} from '@react-navigation/native';
import {DarkApplicationTheme} from '../../../theme';

export interface TextFieldProps extends TextInputProps {
  label: string;
  labelStyle?: ViewStyle;
  error?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  noLabel?: boolean;
}

export function TextField({
  label,
  labelStyle,
  error,
  startIcon,
  endIcon,
  noLabel,
  ...props
}: TextFieldProps) {
  const {colors} = useTheme();
  return (
    <View style={TextFieldStyles.TextField}>
      <View style={labelStyle || TextFieldStyles.label}>
        {!noLabel && (
          <Text
            style={{color: error ? TextFieldStyles.error.color : colors.text}}>
            {label}
          </Text>
        )}
      </View>
      <View
        style={[
          TextFieldStyles.inputView,
          {...(error && TextFieldStyles.error)},
        ]}>
        {startIcon && (
          <Text
            style={[
              TextFieldStyles.icon,
              {color: error ? TextFieldStyles.error.color : colors.text},
            ]}>
            {startIcon}
          </Text>
        )}
        <TextInput
          style={[
            TextFieldStyles.input,
            {
              color: error ? TextFieldStyles.error.color : colors.text,
            },
          ]}
          placeholderTextColor={'#757575'}
          {...props}
        />
        {endIcon && (
          <Text
            style={[
              TextFieldStyles.icon,
              {
                color: error ? TextFieldStyles.error.color : colors.text,
              },
            ]}>
            {endIcon}
          </Text>
        )}
      </View>
      {error && (
        <View>
          <Text style={[TextFieldStyles.error, TextFieldStyles.errorText]}>
            {error}
          </Text>
        </View>
      )}
    </View>
  );
}

const TextFieldStyles = StyleSheet.create({
  TextField: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: '100%',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: DarkApplicationTheme.colors.border,
    color: DarkApplicationTheme.colors.text,
    padding: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  icon: {
    justifyContent: 'flex-end',
    marginHorizontal: 8,
    width: '10%',
  },
  error: {
    color: '#f33737',
    borderColor: '#f33737',
  },
  errorText: {
    marginVertical: 8,
  },
});
