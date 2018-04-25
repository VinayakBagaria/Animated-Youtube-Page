import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PlaylistVideo = ({ name, channel, views, image }) => {
  return (
    <View style={styles.playlistVideo}>
      <Image
        source={image}
        style={styles.playlistThumbnail}
        resizeMode="cover"
      />
      <View style={styles.playlistText}>
        <Text style={styles.playlistVideoTitle}>{name}</Text>
        <Text style={styles.playlistSubText}>{channel}</Text>
        <Text style={styles.playlistSubText}>{views} views</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  playlistVideo: {
    flexDirection: 'row',
    height: 100,
    marginTop: 15,
    marginBottom: 15
  },
  playlistThumbnail: {
    width: null,
    height: null,
    flex: 1
  },
  playlistText: {
    flex: 2,
    paddingLeft: 15
  },
  playlistVideoTitle: {
    fontSize: 18
  },
  playlistSubText: {
    color: '#555'
  }
});

export default PlaylistVideo;
