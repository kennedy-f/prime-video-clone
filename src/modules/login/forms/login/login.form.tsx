import React from 'react';
import {TextField} from '../../../../shared/components/TextField';
import {TouchableOpacity} from 'react-native';
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

interface LoginData {
  email: string;
  password: string;
}

type LoginFormProps = FormProps<LoginData>;

export function LoginForm(props: LoginFormProps) {
  const {values, handleChange, handleSubmit, errors, touched, handleBlur} =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: LoginFormSchema,
      onSubmit: fields => {
        props.onComplete(fields);
      },
    });

  const [seePassword, setSeePassword] = React.useState(true);
  const toggleSeePassword = () => {
    setSeePassword(!seePassword);
  };

  const {colors} = useTheme();

  return (
    <>
      <TextField
        label={'Email'}
        value={values.email}
        onChangeText={handleChange('email')}
        placeholder={'example@email.com'}
        keyboardType={'email-address'}
        textContentType={'emailAddress'}
        onBlur={handleBlur('email')}
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
      <UIButton onPress={handleSubmit} title={'Fazer login'} />
    </>
  );
}
