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
  Animated,
} from 'react-native';
import Video from 'react-native-video';

import PlaylistVideo from './components/PlaylistVideo';
import RunningVideoDetails from './components/RunningVideoDetails';

import Lights from './lights.mp4';
import Thumbnail from './thumbnail.jpg';
import ChannelIcon from './icon.png';

type Props = {};
export default class rnvideo extends Component<Props> {
  // PanResponder = touchable and draggable content
  componentWillMount() {
    // actual animated value for offset and allow our video to be draggable to its original position
    this._y = 0;
    this._animation = new Animated.Value(0);
    this._animation.addListener(({ value }) => {
      this._y = value;
    });

    // 1st two keys tell RN that we want to receive touch events
    // dy = change in position from the original point that the finger was put down on
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dy: this._animation,
        },
      ]),
      /*
      What we do here in when the video dragging is released.
      If dy > 100, means user has dragged the video more than 100px in y-direction downwards, then trigger the Animation
      to 300 with a duration of 200ms. Then set offset to 300 so that video goes to bottom corner.
      Then when the user comes to drag back the video to its original position, dy = 0. But the offset will allow us to
      keep the video in the corner and allow user to control the dragging video without other things jumping.
      300 = how far can the user drag before it cant be dragged any further - upper drag limit, should ideally be % of screen height
      */
      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.dy > 100) {
          Animated.timing(this._animation, {
            toValue: 300,
            duration: 200,
          }).start();
          this._animation.setOffset(300);
        } else {
          this._animation.setOffset(0);
          Animated.timing(this._animation, {
            toValue: 0,
            duration: 200,
          }).start();
        }
      },
    });
  }

  handleOpen = () => {
    this._animation.setOffset(0);
    Animated.timing(this._animation, {
      toValue: 0,
      duration: 200,
    }).start();
  };

  render() {
    const { width, height: screenHeight } = Dimensions.get('window');
    // Video dimen: 1920 * 1080. Thus 1080/1920 = 0.5625: ratio of width to height
    const height = width * 0.5625;

    // opacity of Animated.ScrollView as video is dragged away
    const opacityInterpolate = this._animation.interpolate({
      inputRange: [0, 300],
      outputRange: [1, 0],
    });
    /*
    Used for both Video and ScrollView to move our views out of the way in Y-axis.
    Final o/p: video is moved to bottom corner = length of ScrollView = screenHeight - height of video + some offset from corner.
    extrapolate = clamp, otherwise as user drags beyond 300, outputRange would cause translateY property above our calculation above and video will go offscreen down.
    */
    const translateYInterpolate = this._animation.interpolate({
      inputRange: [0, 300],
      outputRange: [0, screenHeight - height + 40],
      extrapolate: 'clamp',
    });
    // properties of the video for scale and translation along X-axis
    const scaleInterpolate = this._animation.interpolate({
      inputRange: [0, 300],
      outputRange: [1, 0.5],
      extrapolate: 'clamp',
    });
    const translateXInterpolate = this._animation.interpolate({
      inputRange: [0, 300],
      outputRange: [0, 85],
      extrapolate: 'clamp',
    });

    // styling according to interpolation for ScrollView
    const scrollStyles = {
      opacity: opacityInterpolate,
      transform: [{ translateY: translateYInterpolate }],
    };
    // styling according to interpolation for Video
    const videoStyles = {
      transform: [
        { translateY: translateYInterpolate },
        { translateX: translateXInterpolate },
        { scale: scaleInterpolate },
      ],
    };

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleOpen}>
          <Text>Content Below: Click To Reopen Video</Text>
        </TouchableOpacity>
        <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
          <Animated.View
            style={[{ width, height }, videoStyles]}
            {...this._panResponder.panHandlers}>
            <Video
              repeat
              style={StyleSheet.absoluteFill}
              source={Lights}
              resizeMode="contain"
            />
          </Animated.View>
          <Animated.ScrollView style={[styles.scrollView, scrollStyles]}>
            <RunningVideoDetails
              title="Beautiful DJ Mixing Lights"
              views="1M"
              likes="10,000"
              dislikes="4"
              channelIcon={ChannelIcon}
              channelName="Prerecorded MP3s"
              channelSubscribers="4M"
            />
            <View style={styles.padding}>
              <Text style={styles.playlistUpNext}>Up Next</Text>
              <PlaylistVideo
                image={Thumbnail}
                name="Next Sweet DJ Video"
                channel="Prerecorded MP3s"
                views="380K"
              />
              <PlaylistVideo
                image={Thumbnail}
                name="Next Sweet DJ Video"
                channel="Prerecorded MP3s"
                views="380K"
              />
              <PlaylistVideo
                image={Thumbnail}
                name="Next Sweet DJ Video"
                channel="Prerecorded MP3s"
                views="380K"
              />
              <PlaylistVideo
                image={Thumbnail}
                name="Next Sweet DJ Video"
                channel="Prerecorded MP3s"
                views="380K"
              />
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
    backgroundColor: '#F5FCFF',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  padding: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  playlistUpNext: {
    fontSize: 24,
  },
});

AppRegistry.registerComponent('rnvideo', () => rnvideo);
