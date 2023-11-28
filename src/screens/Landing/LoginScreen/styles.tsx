import {StyleSheet} from 'react-native';
import APP_COLORS from '../../../common/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_COLORS.primary,
    paddingBottom: 15,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Urbanist-Black',
    color: APP_COLORS.light,
    fontSize: 40,
  },
  loginText: {
    fontFamily: 'Urbanist-SemiBold',
    color: APP_COLORS.light,
    fontSize: 20,
    marginLeft: 5,
  },
  contentContainer: {
    paddingHorizontal: 15,
    gap: 25,
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    gap: 20,
    paddingTop: 10,
  },
});

export default styles;
