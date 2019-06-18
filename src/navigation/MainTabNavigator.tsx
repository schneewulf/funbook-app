import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import Icon from '../core-ui/Icon';
import HomeScreen from '../screens/HomeScreen';
import BooksScreen from '../screens/BooksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const bottomTab = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({focused}: {focused: boolean}) => (
        <Icon isFocused={focused} name={'home'} />
      ),
    },
  },
  Books: {
    screen: BooksScreen,
    navigationOptions: {
      tabBarLabel: 'Books',
      tabBarIcon: ({focused}: {focused: boolean}) => (
        <Icon isFocused={focused} name={'chrome-reader-mode'} />
      ),
    },
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({focused}: {focused: boolean}) => (
        <Icon isFocused={focused} name={'help'} />
      ),
    },
  },
});

const HomeStack = {
  Home: HomeScreen,
};
const BookStack = {
  Home: HomeScreen,
};
const SettingStack = {
  Home: HomeScreen,
};

export default createStackNavigator({
  bottomTab,
  ...HomeStack,
  ...BookStack,
  ...SettingStack,
});
