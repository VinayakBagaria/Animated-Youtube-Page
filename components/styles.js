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

export { touchableIconStyles, runningVideoStyles };
