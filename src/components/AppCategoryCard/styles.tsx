import {StyleSheet} from 'react-native';
import APP_COLORS from '../../common/colors';

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 110,
    backgroundColor: 'transparent',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: APP_COLORS.primary,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    color: APP_COLORS.dark,
    fontFamily: 'Urbanist-SemiBold',
    fontSize: 15,
  },
});

export default styles;
