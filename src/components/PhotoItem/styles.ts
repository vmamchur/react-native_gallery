import {StyleSheet} from 'react-native';

import hexToRGBA from '../../helpers/hexToRGBA';
import Colors from '../../constants/theme';

export const styles = StyleSheet.create({
  top: {
    position: 'relative',
  },
  loader: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 240,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: Colors.primary,
  },
  imageTitle: {
    width: '100%',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: hexToRGBA(Colors.primary, 0.6),
    color: Colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bottom: {
    padding: 10,
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  description: {
    fontSize: 16,
    color: Colors.dark100,
  },
});
