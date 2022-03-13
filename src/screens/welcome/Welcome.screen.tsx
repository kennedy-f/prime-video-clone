import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {AppContainer} from '../../shared/components/AppContainer';
import {UIButton} from '../../shared';
import {useNavigation} from '@react-navigation/native';
import {AuthenticationNavigatorParamList} from '../../navigation/AuthenticationNavigator/Authentication.navigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    height: height * 0.5,
    paddingTop: height * 0.35,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  subTitle: {
    fontSize: 16,
    color: '#fff',
  },
  buttonContainer: {
    paddingTop: 20,
    paddingHorizontal: 30,
    margin: 0,
    height: height * 0.5,
  },
  button: {
    marginBottom: 20,
  },
});
type ProfileScreenNavigationProp = NativeStackNavigationProp<
  AuthenticationNavigatorParamList,
  'SignIn'
>;

export function WelcomeScreen() {
  const {navigate} = useNavigation<ProfileScreenNavigationProp>();
  const handlePressSignIn = () => {
    navigate('SignIn');
  };

  const handlePressSignUp = () => {
    // TODO: navigate to sign up screen
  };

  return (
    <AppContainer>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> Prime video </Text>
        <Text style={styles.subTitle}> Watch, anytime, anywhere </Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <UIButton variant={'primary'} onPress={handlePressSignIn}>
            Sign in
          </UIButton>
        </View>
        <View>
          <UIButton onPress={handlePressSignUp}> Sign Up </UIButton>
        </View>
      </View>
    </AppContainer>
  );
}
