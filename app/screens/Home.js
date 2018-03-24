import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container/index';
import { Logo } from '../components/Logo/index';
import { InputWithButton } from '../components/TextInput/index';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';

class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log('press base');
  }

  handlePressQuoteCurrency = () => {
    console.log('press base');
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onPress={this.handlePressBaseCurrency}
        />
        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          editable={false}
          defaultValue={TEMP_QUOTE_PRICE}
          onPress={this.handlePressQuoteCurrency}
        />
      </Container>
    );
  }
}


export default Home;
