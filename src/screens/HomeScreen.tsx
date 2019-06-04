import React from 'react';
import {View, Text} from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }
}
