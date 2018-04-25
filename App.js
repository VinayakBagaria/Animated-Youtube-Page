/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  PanResponder,
  Animated
} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';

import Lights from './lights.mp4';
import Thumbnail from './thumbnail.jpg';
import ChannelIcon from './icon.png';

type Props = {};
export default class rnvideo extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text>Content below: Click To Reopen Video</Text>
          <View style={StyleSheet.absoluteFill} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('rnvideo', () => rnvideo);
