import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container/index';
import { Logo } from '../components/Logo/index';
import { InputWithButton } from '../components/TextInput/index';
import { ClearButton } from '../components/Button/index';
import { LastConverted } from '../components/Text/index';
import { Header } from '../components/Header/index';

console.log(Header);


const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_LAST_CONVERTED = new Date();
const TEMP_CONVERSION_RATE = 0.79739;

class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log('press base');
  }

  handlePressQuoteCurrency = () => {
    console.log('press base');
  }

  handleSwapCurrency = () => {
    console.log('press swap currency');
  }

  handlePressOption = () => {
    console.log('press option');
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handlePressOption} />
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
        <LastConverted
          base={TEMP_BASE_CURRENCY}
          quote={TEMP_QUOTE_CURRENCY}
          date={TEMP_LAST_CONVERTED}
          conversionRate={TEMP_CONVERSION_RATE}
        />
        <ClearButton text="Reverse Currencies" onPress={this.handleSwapCurrency} />
      </Container>
    );
  }
}


export default Home;
