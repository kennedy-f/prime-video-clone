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
import {useAppDispatch, useAppSelector} from '../../store/hook';
import {makeLogin, selectHasToken} from '../../store/modules/auth';

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
  const dispatch = useAppDispatch();
  const handleLogin = (login: LoginData) => {
    if (
      login.email === localLogin.email &&
      login.password === localLogin.password
    ) {
      dispatch(makeLogin('logged'));
    }
  };
  const IOS = Platform.OS === 'ios';

  const token = useAppSelector(selectHasToken);
  console.log(token);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={IOS ? 'padding' : undefined}
        style={[styles.container, {justifyContent: 'center'}]}>
        {token ? (
          <Text style={styles.title}>Logado com sucesso!</Text>
        ) : (
          <>
            <View>
              <Text style={styles.title}> Prime video</Text>
            </View>
            <LoginForm onComplete={handleLogin} />
          </>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
