import React from 'react';
import {TextField} from '../../../../shared/components/TextField';
import {Text, TouchableOpacity} from 'react-native';
import {UIButton} from '../../../../shared';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {FormProps} from '../../../../shared/components/form';

const LoginFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

interface LoginData {
  email: string;
  password: string;
}

type LoginFormProps = FormProps<LoginData>;

export function LoginForm() {
  const {values, handleChange, handleSubmit, errors} = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginFormSchema,
    onSubmit: fields => {
      console.log(fields);
    },
  });

  const [seePassword, setSeePassword] = React.useState(true);
  const toggleSeePassword = () => {
    setSeePassword(!seePassword);
  };

  return (
    <>
      <TextField
        label={'Email'}
        value={values.email}
        onChangeText={handleChange('email')}
        placeholder={'example@email.com'}
        keyboardType={'email-address'}
        textContentType={'emailAddress'}
        error={errors.email}
      />
      <TextField
        label={'Senha'}
        value={values.password}
        onChangeText={handleChange('password')}
        placeholder={'password'}
        secureTextEntry={seePassword}
        textContentType={'password'}
        error={errors.password}
        endIcon={
          <TouchableOpacity onPress={toggleSeePassword}>
            <Text>Olho </Text>
          </TouchableOpacity>
        }
      />

      <UIButton onPress={handleSubmit} title={'Fazer login'} />
    </>
  );
}
