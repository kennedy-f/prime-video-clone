import React from 'react';
import {TextField} from '../../../../shared/components/TextField';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {UIButton} from '../../../../shared';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {FormProps} from '../../../../shared/components/form';

import {Icon} from 'react-native-eva-icons';
import {useTheme} from '@react-navigation/native';

const LoginFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export interface LoginData {
  email: string;
  password: string;
}

type LoginFormProps = FormProps<LoginData>;

export function LoginForm({onComplete}: LoginFormProps) {
  const {values, handleChange, handleSubmit, errors, touched, handleBlur} =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: LoginFormSchema,
      onSubmit: fields => {
        onComplete(fields);
      },
    });

  const [seePassword, setSeePassword] = React.useState(true);
  const toggleSeePassword = () => {
    setSeePassword(!seePassword);
  };

  const {colors} = useTheme();

  return (
    <View style={LoginFormStyles.container}>
      <TextField
        label={'Email'}
        value={values.email}
        onChangeText={handleChange('email')}
        placeholder={'example@email.com'}
        keyboardType={'email-address'}
        textContentType={'emailAddress'}
        onBlur={handleBlur('email')}
        autoCapitalize={'none'}
        error={touched.email ? errors.email : undefined}
      />
      <TextField
        label={'Senha'}
        value={values.password}
        onBlur={handleBlur('password')}
        onChangeText={handleChange('password')}
        placeholder={'password'}
        secureTextEntry={seePassword}
        textContentType={'password'}
        endIcon={
          <TouchableOpacity onPress={toggleSeePassword}>
            <Icon
              name={seePassword ? 'eye-off' : 'eye'}
              width={24}
              height={24}
              fill={colors.text}
            />
          </TouchableOpacity>
        }
      />
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View style={LoginFormStyles.buttonContainer}>
          <UIButton onPress={handleSubmit} variant={'primary'}>
            Login
          </UIButton>
        </View>
      </View>
    </View>
  );
}

const LoginFormStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  buttonContainer: {flex: 1, paddingHorizontal: 16, marginTop: 16},
});
