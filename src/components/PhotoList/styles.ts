import {StyleSheet} from 'react-native';
import Colors from '../../constants/theme';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    gap: 12,
  },
  error: {
    fontSize: 18,
    color: Colors.primary,
  },
});
