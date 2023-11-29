import {StyleSheet} from 'react-native';
import APP_COLORS from '../../../common/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: APP_COLORS.light,
    paddingHorizontal: 15,
    paddingTop: 20,
    gap: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: APP_COLORS.primary,
    borderRadius: 30,
    width: '100%',
    height: 50,
    paddingHorizontal: 15,
    fontSize: 15,
    fontFamily: 'Urbanist-Regular',
    color: APP_COLORS.dark,
  },
  limitText: {
    fontFamily: 'Urbanist-Regular',
    color: APP_COLORS.dark,
    fontSize: 15,
  },
  modalContainer: {
    backgroundColor: 'rgba(0 0 0 / 0.8)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  modalContent: {
    height: 200,
    width: '100%',
    backgroundColor: APP_COLORS.light,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    gap: 10,
  },
  modalText: {
    fontFamily: 'Urbanist-Regular',
    color: APP_COLORS.dark,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 15,
  },
});

export default styles;
