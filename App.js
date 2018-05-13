import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  PanResponder,
  Animated,
} from 'react-native';
import Video from 'react-native-video';

import PlaylistComponent from './components/PlaylistComponent';
import RunningVideoDetails from './components/RunningVideoDetails';

import { appStyles as styles } from './styles';

import Lights from './lights.mp4';
import ChannelIcon from './icon.png';

class App extends Component {
  // PanResponder = touchable and draggable content
  componentWillMount() {
    // actual animated value for offset and allow our video to be draggable to its original position
    this.y = 0;
    this.animation = new Animated.Value(0);
    this.animation.addListener(({ value }) => {
      this.y = value;
    });

    // 1st two keys tell RN that we want to receive touch events
    // dy = change in position from the original point that the finger was put down on
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dy: this.animation,
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
          Animated.timing(this.animation, {
            toValue: 300,
            duration: 200,
          }).start();
          this.animation.setOffset(300);
        } else {
          this.animation.setOffset(0);
          Animated.timing(this.animation, {
            toValue: 0,
            duration: 200,
          }).start();
        }
      },
    });
  }

  handleOpen = () => {
    this.animation.setOffset(0);
    Animated.timing(this.animation, {
      toValue: 0,
      duration: 200,
    }).start();
  };

  render() {
    const { width, height: screenHeight } = Dimensions.get('window');
    // Video dimen: 1920 * 1080. Thus 1080/1920 = 0.5625: ratio of width to height
    const height = width * 0.5625;

    // opacity of Animated.ScrollView as video is dragged away
    const opacityInterpolate = this.animation.interpolate({
      inputRange: [0, 300],
      outputRange: [1, 0],
    });
    /*
    Used for both Video and ScrollView to move our views out of the way in Y-axis.
    Final o/p: video is moved to bottom corner = length of ScrollView = screenHeight - height of video + some offset from corner.
    extrapolate = clamp, otherwise as user drags beyond 300, outputRange would cause translateY property above our calculation above and video will go offscreen down.
    */
    const translateYInterpolate = this.animation.interpolate({
      inputRange: [0, 300],
      outputRange: [0, screenHeight - height + 40],
      extrapolate: 'clamp',
    });
    // properties of the video for scale and translation along X-axis
    const scaleInterpolate = this.animation.interpolate({
      inputRange: [0, 300],
      outputRange: [1, 0.5],
      extrapolate: 'clamp',
    });
    const translateXInterpolate = this.animation.interpolate({
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
            {...this.panResponder.panHandlers}
          >
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
            <PlaylistComponent />
          </Animated.ScrollView>
        </View>
      </View>
    );
  }
}

export default App;
