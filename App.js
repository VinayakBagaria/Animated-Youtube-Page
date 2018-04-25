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

import TouchableIcon from './components/TouchableIcon';

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
          <Animated.ScrollView style={[styles.scrollView]}>
            <View style={styles.padding}>
              <Text style={styles.title}>Beautiful DJ Mixing Lights</Text>
              <Text>1M Views</Text>
              <View style={styles.likeRow}>
                <TouchableIcon name="thumbs-up">10,000</TouchableIcon>
                <TouchableIcon name="thumbs-down">4</TouchableIcon>
                <TouchableIcon name="share">Share</TouchableIcon>
                <TouchableIcon name="download">Save</TouchableIcon>
                <TouchableIcon name="plus">Add to</TouchableIcon>
              </View>
            </View>
            <View style={[styles.channelInfo, styles.padding]}>
              <Image
                source={ChannelIcon}
                style={styles.channelIcon}
                resizeMode="contain"
              />
              <View style={styles.channelText}>
                <Text style={styles.channelTitle}>Prerecorded MP3s</Text>
                <Text>1M Subscribers</Text>
              </View>
            </View>
          </Animated.ScrollView>
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
  },
  title: {
    fontSize: 28
  },
  likeRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15
  },
  padding: {
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  channelInfo: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    borderTopWidth: 1,
    borderTopColor: '#DDD'
  },
  channelIcon: {
    width: 50,
    height: 50
  },
  channelText: {
    marginLeft: 15
  },
  channelTitle: {
    fontSize: 18,
    marginBottom: 5
  },
  playlistUpNext: {
    fontSize: 24
  }
});

AppRegistry.registerComponent('rnvideo', () => rnvideo);
