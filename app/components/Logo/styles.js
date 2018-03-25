import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const backgroundSize = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  $largeBackgroundSize: backgroundSize,
  $largeLogoSize: backgroundSize / 2,
  $smallBackgroundSize: backgroundSize / 2,
  $smallLogoSize: backgroundSize / 4,
  container: {
    alignItems: 'center',
  },
  logo: {
    position: 'absolute',
    width: '$largeLogoSize',
    height: '$largeBackgroundSize',
  },
  logoBackground: {
    width: '$largeBackgroundSize',
    height: '$largeBackgroundSize',
  },
  text: {
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    color: '$white',
  },
});
