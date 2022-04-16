import React, {useState} from 'react';
import {TextField} from '../../../../shared/components';
import {useFormik} from 'formik';
import {UIButton} from '../../../../shared';
import {SignUpValidationSchema} from './sign-up.validation-schema';
import {PasswordTextField} from '../../../../shared/components';

export function SignUpForm() {
  const {values, errors, handleSubmit, handleChange} = useFormik({
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
    <>
      <TextField
        value={values.email}
        onChangeText={handleChange('email')}
        label={'Email'}
        placeholder={'Email'}
        keyboardType={'email-address'}
        autoCapitalize={'none'}
        textContentType={'emailAddress'}
        autoComplete={'email'}
        error={errors.email}
      />
      <PasswordTextField
        value={values.password}
        onChangeText={handleChange('password')}
        secureTextEntry={true}
        label={'Password'}
        placeholder={'Password'}
        keyboardType={'default'}
        autoCapitalize={'none'}
        textContentType={'password'}
        autoComplete={'password'}
        error={errors.password}
        showPassword={showPassword}
        toggleShowPassword={toggleShowPassword}
      />
      <TextField
        value={values.confirmPassword}
        onChangeText={handleChange('confirmPassword')}
        secureTextEntry={true}
        label={'Confirm password'}
        placeholder={'Confirm Password'}
        keyboardType={'default'}
        autoCapitalize={'none'}
        textContentType={'password'}
        autoComplete={'password'}
        error={errors.confirmPassword}
      />
      <UIButton onPress={handleSubmit} variant={'primary'}>
        complete
      </UIButton>
    </>
  );
}
