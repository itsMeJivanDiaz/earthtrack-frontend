import {StyleSheet} from 'react-native';
import APP_COLORS from '../../common/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: APP_COLORS.primary,
    paddingVertical: 14,
    paddingHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    backgroundColor: APP_COLORS.light,
    height: 45,
    borderRadius: 20,
    flex: 1,
    paddingHorizontal: 14,
    fontFamily: 'Urbanist-Regular',
  },
});

export default styles;
