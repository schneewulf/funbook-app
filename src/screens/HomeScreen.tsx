import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar, Piece} from 'react-native-avataaars';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.root}>
        <Avatar
          size={200}
          avatarStyle="Circle"
          topType="LongHairStraight"
          accessoriesType="Prescription02"
          hairColor="Black"
          facialHairType="Blank"
          clotheType="BlazerShirt"
          eyeType="Happy"
          eyebrowType="Default"
          mouthType="Default"
          skinColor="Light"
          style={styles.avatarContainer}
        />
        <View>
          <Text>Name</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarContainer: {alignItems: 'center', alignSelf: 'center'},
});
