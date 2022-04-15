import React from 'react';
import {AppContainer} from '../../../shared/components/AppContainer';
import {SignUpForm} from '../../../modules/Authentication';

export function SignUpScreen() {
  return (
    <AppContainer>
      <SignUpForm />
    </AppContainer>
  );
}
