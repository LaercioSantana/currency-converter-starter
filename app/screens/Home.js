import React from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container/index';
import { Logo } from '../components/Logo/index';

export default () => (
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <Logo />
  </Container>
);
