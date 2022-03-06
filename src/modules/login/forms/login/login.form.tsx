import React from 'react';
import {TextField} from '../../../../shared/components/TextField';
import {Text, TouchableOpacity} from 'react-native';
import {UIButton} from '../../../../shared';
import {useFormik} from 'formik';

export function LoginForm() {
  const {values, handleChange, handleSubmit} = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: fields => {
      console.log(fields);
    },
  });

  const [seePassword, setSeePassword] = React.useState(false);
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
      />
      <TextField
        label={'Senha'}
        value={values.password}
        onChangeText={handleChange('password')}
        placeholder={'password'}
        secureTextEntry={seePassword}
        textContentType={'password'}
      />
      <TouchableOpacity onPress={toggleSeePassword}>
        <Text>Imagina o olhinho</Text>
      </TouchableOpacity>

      <UIButton onPress={handleSubmit} title={'Fazer login'} />
    </>
  );
}
