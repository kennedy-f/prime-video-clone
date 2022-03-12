import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {LoginData} from '../../services';
import {LoginForm} from '../../modules/Authentication';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    paddingBottom: 32,
  },
});

const localLogin = {
  email: 'teste@app.com',
  password: 'teste@app',
};

export function LoginScreen() {
  const handleLogin = (login: LoginData) => {
    if (
      login.email === localLogin.email &&
      login.password === localLogin.password
    ) {
      return true;
    }
  };
  const IOS = Platform.OS === 'ios';

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={IOS ? 'padding' : undefined}
        style={[styles.container, {justifyContent: 'center'}]}>
        <View>
          <Text style={styles.title}> Prime video</Text>
        </View>
        <LoginForm onComplete={handleLogin} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
