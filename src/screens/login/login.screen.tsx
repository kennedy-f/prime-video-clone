import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {LoginForm} from '../../modules/login';
import {LoginData} from '../../services';

export function LoginScreen() {
  const handleLogin = (login: LoginData) => {
    console.log(login);
  };

  return (
    <SafeAreaView>
      <View>
        <Text> Teste</Text>
        <LoginForm onComplete={handleLogin} />
      </View>
    </SafeAreaView>
  );
}
