import React, { Component } from 'react';
import { FlatList, View, StatusBar } from 'react-native';

import { ListItem, Separator } from '../components/List/index';
import currencies from '../data/currencies';

const TEMP_CURRENT_SELECTED = 'CAD';

class CurrencyList extends Component {
  handlePress = () => {
    console.log('press list item');
  }

  render() {
    return (
      <View>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === TEMP_CURRENT_SELECTED}
              onPress={this.handlePress}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

export default CurrencyList;
