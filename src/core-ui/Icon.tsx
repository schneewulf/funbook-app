import React, {Component} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../constants/Colors';
import {IconSize} from '../constants/Icon';

type Props = {
  name: string;
  /** Boolean props to change Icon behaviour
   *
   */
  isFocused?: boolean;
  /** Icon Size
   * the defaul value is "medium"
   */
  size?: 'small' | 'large' | 'xtraLarge';
  style?: StyleProp<ViewStyle>;
};

export default class Icon extends Component<Props, {}> {
  render() {
    return (
      <MaterialIcon
        name={this.props.name}
        size={this.props.size ? IconSize[this.props.size] : IconSize.medium}
        style={this.props.style && this.props.style}
        color={
          this.props.isFocused ? Colors.tabIconSelected : Colors.tabIconDefault
        }
      />
    );
  }
}
