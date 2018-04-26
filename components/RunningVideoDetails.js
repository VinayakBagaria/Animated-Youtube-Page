import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import TouchableIcon from './TouchableIcon';

import { runningVideoDetailsStyles as styles } from './styles';

const RunningVideoDetails = ({ channelIcon }) => (
  <Fragment>
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
        source={channelIcon}
        style={styles.channelIcon}
        resizeMode="contain"
      />
      <View style={styles.channelText}>
        <Text style={styles.channelTitle}>Prerecorded MP3s</Text>
        <Text>1M Subscribers</Text>
      </View>
    </View>
  </Fragment>
);

RunningVideoDetails.propTypes = {
  channelIcon: PropTypes.number.isRequired,
};

export default RunningVideoDetails;
