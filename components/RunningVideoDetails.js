import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import TouchableIcon from './TouchableIcon';

import { runningVideoDetailsStyles as styles } from '../styles';

const RunningVideoDetails = ({
  title,
  views,
  likes,
  dislikes,
  channelIcon,
  channelName,
  channelSubscribers,
}) => (
  <Fragment>
    <View style={styles.padding}>
      <Text style={styles.title}>{title}</Text>
      <Text>{views} Views</Text>
      <View style={styles.likeRow}>
        <TouchableIcon name="thumbs-up">{likes}</TouchableIcon>
        <TouchableIcon name="thumbs-down">{dislikes}</TouchableIcon>
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
        <Text style={styles.channelTitle}>{channelName}</Text>
        <Text>{channelSubscribers} Subscribers</Text>
      </View>
    </View>
  </Fragment>
);

RunningVideoDetails.propTypes = {
  title: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  likes: PropTypes.string.isRequired,
  dislikes: PropTypes.string.isRequired,
  channelIcon: PropTypes.number.isRequired,
  channelName: PropTypes.string.isRequired,
  channelSubscribers: PropTypes.string.isRequired,
};

export default RunningVideoDetails;
