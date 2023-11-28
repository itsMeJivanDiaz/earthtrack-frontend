import {StyleSheet} from 'react-native';
import APP_COLORS from '../../../common/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: APP_COLORS.light,
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    columnGap: 10,
  },
});

export default styles;
