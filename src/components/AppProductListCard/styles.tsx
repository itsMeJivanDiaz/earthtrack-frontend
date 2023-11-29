import {StyleSheet} from 'react-native';
import APP_COLORS from '../../common/colors';

const styles = StyleSheet.create({
  listCardContainer: {
    height: 60,
    width: '100%',
    borderBottomWidth: 1.5,
    borderBottomColor: APP_COLORS.primary,
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  imageContainer: {},
  image: {
    width: 40,
    height: 40,
  },
  descriptionContainer: {
    flex: 0.9,
  },
  title: {
    fontFamily: 'Urbanist-Bold',
    color: APP_COLORS.dark,
    fontSize: 17,
  },
  description: {
    fontFamily: 'Urbanist-Regular',
    color: APP_COLORS.dark,
    fontSize: 14,
  },
  price: {
    fontFamily: 'Urbanist-Bold',
    color: APP_COLORS.dark,
    fontSize: 20,
  },
  flex1: {
    flex: 1,
    flexDirection: 'row',
    gap: 15,
  },
});

export default styles;
