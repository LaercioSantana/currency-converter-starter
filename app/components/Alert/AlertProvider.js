import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, StatusBar, Platform } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';

class AlertProvider extends Component {
  static get childContextTypes() {
    return {
      alertWithType: PropTypes.func,
      alert: PropTypes.func,
    };
  }

  static get propTypes() {
    return {
      children: PropTypes.any,
    };
  }

  getChildContext() {
    return {
      alert: (...args) => this.dropdown.alert(...args),
      alertWithType: (...args) => this.dropdown.alertWithType(...args),
    };
  }

  render() {
    const dropdownContainer = {
      padding: 8,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20,
      flexDirection: 'row',
    };

    return (
      <View style={{ flex: 1 }}>
        {React.Children.only(this.props.children)}
        <DropdownAlert
          defaultContainer={dropdownContainer}
          ref={(ref) => {
            this.dropdown = ref;
          }}
        />
      </View>
    );
  }
}

export default AlertProvider;
