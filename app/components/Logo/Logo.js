import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <Image resizeMode="contain" style={styles.logoBackground} source={require('./images/background.png')} />
    <Image resizeMode="contain" style={styles.logo} source={require('./images/logo.png')} />
    <Text style={styles.text}>Currency Converter</Text>
  </View>
);

export default Logo;
