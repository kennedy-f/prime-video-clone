import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {LoginData, LoginForm} from '../../modules/Authentication';
import {useAppDispatch} from '../../store/hook';
import {makeLogin} from '../../store/modules/auth';
import {AppContainer} from '../../shared/components/AppContainer';
import {BackButton} from '../../shared/components/button/BackButton/BackButton';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    paddingBottom: 32,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
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

  return (
    <AppContainer>
      <BackButton />
      <View style={styles.container}>
        <>
          <View>
            <Text style={styles.title}> Prime video</Text>
          </View>
          <LoginForm onComplete={handleLogin} />
        </>
      </View>
    </AppContainer>
  );
}
