import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';

export default EStyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    top: 0,
    '@media ios': {
      paddingTop: 12,
    },
    '@media android': {
      paddingTop: StatusBar.currentHeight,
    },
  },
  button: {
    alignSelf: 'flex-end',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  icon: {
    width: 18,
  },
});
