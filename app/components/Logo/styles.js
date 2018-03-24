import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const backgroundSize = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logo: {
    position: 'absolute',
    width: backgroundSize / 2,
    height: backgroundSize,
  },
  logoBackground: {
    width: backgroundSize,
    height: backgroundSize,
  },
  text: {
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    color: '$white',
  },
});
