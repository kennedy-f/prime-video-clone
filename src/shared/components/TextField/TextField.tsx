import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
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
  onBlur,
  onFocus,
  ...props
}: TextFieldProps) {
  const {colors} = useTheme();

  const [isFocused, setIsFocused] = useState(!!props.value);

  const focusAnim = useRef(new Animated.Value(0)).current;
  const errorAnim = useRef(new Animated.Value(0)).current;

  const handleIsFocused = (focused: boolean) => {
    if (props.value) {
      setIsFocused(true);
      return;
    }
    setIsFocused(focused);
  };

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, focusAnim]);

  useEffect(() => {
    Animated.timing(errorAnim, {
      toValue: error ? 1 : 0,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, [error, errorAnim]);

  return (
    <View style={TextFieldStyles.TextField}>
      <View style={labelStyle || TextFieldStyles.label}>
        {!noLabel && (
          <Animated.Text
            style={[
              {
                top: focusAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [36, 0],
                }),
                left: focusAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [12, 0],
                }),
              },
              {color: error ? TextFieldStyles.error.color : colors.text},
            ]}>
            {label}
          </Animated.Text>
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
          onFocus={event => {
            handleIsFocused(true);
            onFocus?.(event);
          }}
          onBlur={event => {
            handleIsFocused(false);
            onBlur?.(event);
          }}
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
      <View>
        <Animated.Text
          style={[
            TextFieldStyles.error,
            {
              color: errorAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['#234a67', '#f33737'],
              }),
            },
          ]}>
          {error}
        </Animated.Text>
      </View>
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
});
