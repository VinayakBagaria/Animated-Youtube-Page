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
    const { width, height: screenHeight } = Dimensions.get('window');
    // Video dimen: 1920 * 1080. Thus 1080/1920 = 0.5625: ratio of width to height
    const height = width * 0.5625;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleOpen}>
          <Text>Content Below: Click To Reopen Video</Text>
        </TouchableOpacity>
        <View style={StyleSheet.absoluteFill}>
          <Animated.View style={[{ width, height }]}>
            <Video
              repeat
              style={StyleSheet.absoluteFill}
              source={Lights}
              resizeMode="contain"
            />
          </Animated.View>
          <Animated.ScrollView style={[styles.scrollView]} />
        </View>
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
  scrollView: {
    flex: 1,
    backgroundColor: '#FFF'
  }
});

AppRegistry.registerComponent('rnvideo', () => rnvideo);
