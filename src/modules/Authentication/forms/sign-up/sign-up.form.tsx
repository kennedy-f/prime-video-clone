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
    },
    validationSchema: SignUpValidationSchema,
    onSubmit: fields => {
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
        value={values.password}
        onChangeText={handleChange('password')}
        secureTextEntry={true}
        label={'repeat password'}
        placeholder={'Repeat Password'}
        keyboardType={'default'}
        autoCapitalize={'none'}
        textContentType={'password'}
        autoComplete={'password'}
        error={errors.password}
      />
      <UIButton onPress={handleSubmit} variant={'primary'}>
        complete
      </UIButton>
    </>
  );
}
