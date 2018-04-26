import React from 'react';
import { View, Text } from 'react-native';

import PlaylistVideo from './PlaylistVideo';

import { playlistComponentStyles as styles } from '../styles';

import Thumbnail from '../thumbnail.jpg';

const PlaylistComponent = () => (
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
);

export default PlaylistComponent;
