import {StyleSheet} from 'react-native';
import APP_COLORS from '../../../common/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: APP_COLORS.light,
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  userImageContainer: {
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  userImage: {
    height: 120,
    width: 120,
  },
  nameText: {
    fontFamily: 'Urbanist-Bold',
    fontSize: 18,
    color: APP_COLORS.dark,
  },
  subText: {
    fontFamily: 'Urbanist-Regular',
    fontSize: 15,
    color: APP_COLORS.dark,
  },
});

export default styles;
