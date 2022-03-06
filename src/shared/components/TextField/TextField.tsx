import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

interface TextFieldProps extends TextInputProps {
  label: string;
  labelStyle?: ViewStyle;
  error?: string;
}

export function TextField({
  label,
  labelStyle,
  error,
  ...props
}: TextFieldProps) {
  return (
    <View>
      <View style={labelStyle || styles.label}>
        <Text>{label}</Text>
      </View>
      <View style={styles.input}>
        <TextInput {...props} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    padding: 10,
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#000',
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },
});
