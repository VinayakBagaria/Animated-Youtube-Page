import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import { playlistVideoStyles as styles } from './styles';

const PlaylistVideo = ({ name, channel, views, image }) => (
  <View style={styles.playlistVideo}>
    <Image source={image} style={styles.playlistThumbnail} resizeMode="cover" />
    <View style={styles.playlistText}>
      <Text style={styles.playlistVideoTitle}>{name}</Text>
      <Text style={styles.playlistSubText}>{channel}</Text>
      <Text style={styles.playlistSubText}>{views} views</Text>
    </View>
  </View>
);

PlaylistVideo.propTypes = {
  name: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  image: PropTypes.number.isRequired,
};

export default PlaylistVideo;
