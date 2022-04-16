import React from 'react';
import {AppContainer} from '../../../shared/components/AppContainer';
import {SignUpForm} from '../../../modules/Authentication';
import {BackButton} from '../../../shared/components/button/BackButton/BackButton';

export function SignUpScreen() {
  return (
    <AppContainer>
      <BackButton />
      <SignUpForm />
    </AppContainer>
  );
}
