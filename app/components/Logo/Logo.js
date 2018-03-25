import React, { Component } from 'react';
import { View, Text, Keyboard, Animated, Platform } from 'react-native';

import styles from './styles';

const ANIMATION_DURATION = Platform.OS === 'android' ? 100 : 250;

class Logo extends Component {
  constructor(props) {
    super(props);
    this.logoBackgroundSize = new Animated.Value(styles.$largeBackgroundSize);
    this.logoSize = new Animated.Value(styles.$largeLogoSize);
  }

  componentDidMount() {
    let showListener = 'keyboardWillShow';
    let hideListener = 'keyboardWillHide';

    if (Platform.OS === 'android') {
      showListener = 'keyboardDidShow';
      hideListener = 'keyboardDidHide';
    }

    this.KeyboardShowListener = Keyboard.addListener(showListener, this.keyboardShow);
    this.KeyboardHideListener = Keyboard.addListener(hideListener, this.keyboardHide);
  }

  componentWillUnmount() {
    this.KeyboardShowListener.remove();
    this.KeyboardHideListener.remove();
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.logoBackgroundSize, {
        toValue: styles.$smallBackgroundSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.logoSize, {
        toValue: styles.$smallLogoSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  }

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.logoBackgroundSize, {
        toValue: styles.$largeBackgroundSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.logoSize, {
        toValue: styles.$largeLogoSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  }

  render() {
    const backgrounStyles = [
      styles.logoBackground,
      { width: this.logoBackgroundSize, height: this.logoBackgroundSize },
    ];

    const logoStyles = [
      styles.logo,
      { width: this.logoSize, height: this.logoBackgroundSize },
    ];

    return (
      <View style={styles.container}>
        <Animated.Image resizeMode="contain" style={backgrounStyles} source={require('./images/background.png')} />
        <Animated.Image resizeMode="contain" style={logoStyles} source={require('./images/logo.png')} />
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
