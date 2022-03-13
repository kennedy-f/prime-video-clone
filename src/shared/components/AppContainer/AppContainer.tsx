import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

interface AppContainerProps {
  children: React.ReactFragment;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export function AppContainer({children}: AppContainerProps) {
  const IOS = Platform.OS === 'ios';

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={IOS ? 'padding' : undefined}
        style={[styles.container]}>
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
