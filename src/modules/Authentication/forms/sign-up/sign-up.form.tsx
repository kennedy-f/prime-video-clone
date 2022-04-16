import React, {useState} from 'react';
import {TextField} from '../../../../shared/components';
import {useFormik} from 'formik';
import {UIButton} from '../../../../shared';
import {SignUpValidationSchema} from './sign-up.validation-schema';
import {PasswordTextField} from '../../../../shared/components';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 16,
  },
});

export function SignUpForm() {
  const {values, errors, handleSubmit, handleChange, handleBlur, touched} =
    useFormik({
      initialValues: {
        email: '',
        password: '',
        confirmPassword: '',
      },
      validationSchema: SignUpValidationSchema,
      onSubmit: fields => {
        if (fields.password !== fields.confirmPassword) {
          console.log('Passwords do not match');
        }
        console.log('submit', fields);
      },
    });

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <View style={styles.formContainer}>
      <TextField
        value={values.email}
        onChangeText={handleChange('email')}
        label={'Email'}
        keyboardType={'email-address'}
        autoCapitalize={'none'}
        textContentType={'emailAddress'}
        autoComplete={'email'}
        error={touched.email ? errors.email : undefined}
        onBlur={handleBlur('email')}
      />
      <PasswordTextField
        value={values.password}
        onChangeText={handleChange('password')}
        secureTextEntry={true}
        label={'Password'}
        keyboardType={'default'}
        autoCapitalize={'none'}
        textContentType={'password'}
        autoComplete={'password'}
        error={touched.password ? errors.password : undefined}
        showPassword={showPassword}
        toggleShowPassword={toggleShowPassword}
        onBlur={handleBlur('password')}
      />
      <TextField
        value={values.confirmPassword}
        onChangeText={handleChange('confirmPassword')}
        secureTextEntry={true}
        label={'Confirm password'}
        keyboardType={'default'}
        autoCapitalize={'none'}
        textContentType={'password'}
        autoComplete={'password'}
        error={touched.confirmPassword ? errors.confirmPassword : undefined}
        onBlur={handleBlur('confirmPassword')}
      />
      <UIButton onPress={handleSubmit} variant={'primary'}>
        complete
      </UIButton>
    </View>
  );
}
