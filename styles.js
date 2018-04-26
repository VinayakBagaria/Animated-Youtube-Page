import { StyleSheet } from 'react-native';

const padding = {
  paddingVertical: 15,
  paddingHorizontal: 15,
};

const appStyles = StyleSheet.create({
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
});

const playlistComponentStyles = StyleSheet.create({
  padding,
  playlistUpNext: {
    fontSize: 24,
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

const runningVideoDetailsStyles = StyleSheet.create({
  padding,
  title: {
    fontSize: 28,
  },
  likeRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
  channelInfo: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
  channelIcon: {
    width: 50,
    height: 50,
  },
  channelText: {
    marginLeft: 15,
  },
  channelTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
});

const touchableIconStyles = StyleSheet.create({
  touchIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    marginTop: 5,
  },
});

export {
  appStyles,
  playlistComponentStyles,
  playlistVideoStyles,
  runningVideoDetailsStyles,
  touchableIconStyles,
};
