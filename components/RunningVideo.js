import React from 'react';
import { View, Text } from 'react-native';

import TouchableIcon from './TouchableIcon';

import { runningVideoStyles as styles } from './styles';

const RunningVideo = () => (
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
);

export default RunningVideo;
