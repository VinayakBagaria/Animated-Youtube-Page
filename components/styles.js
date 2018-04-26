import { StyleSheet } from 'react-native';

const touchableIconStyles = StyleSheet.create({
  touchIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    marginTop: 5,
  },
});

const runningVideoStyles = StyleSheet.create({
  padding: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 28,
  },
  likeRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
});

const playlistVideoStyles = StyleSheet.create({
  playlistVideo: {
    flexDirection: 'row',
    height: 100,
    marginTop: 15,
    marginBottom: 15,
  },
  playlistThumbnail: {
    width: null,
    height: null,
    flex: 1,
  },
  playlistText: {
    flex: 2,
    paddingLeft: 15,
  },
  playlistVideoTitle: {
    fontSize: 18,
  },
  playlistSubText: {
    color: '#555',
  },
});

export { touchableIconStyles, runningVideoStyles, playlistVideoStyles };
