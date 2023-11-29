import {StyleSheet} from 'react-native';
import APP_COLORS from '../../../common/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: APP_COLORS.light,
  },
  scrollview: {
    flexGrow: 1,
  },
  contentContainer: {
    paddingHorizontal: 15,
    flex: 1,
  },
  flex1: {
    flex: 1,
  },
  paginationContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: APP_COLORS.dark,
    height: 70,
  },
  activePage: {
    backgroundColor: APP_COLORS.dark,
  },
  pageButton: {
    backgroundColor: APP_COLORS.primary,
    width: 35,
    height: 35,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationText: {
    fontFamily: 'Urbanist-Bold',
    color: APP_COLORS.light,
    fontSize: 15,
  },
});

export default styles;
