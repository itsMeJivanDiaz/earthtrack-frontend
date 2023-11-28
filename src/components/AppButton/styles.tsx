import {StyleSheet} from 'react-native';
import {AppButtonPropType} from '.';
import APP_COLORS from '../../common/colors';

const styles = (props: AppButtonPropType) => {
  return StyleSheet.create({
    button: {
      height: props.height,
      width: props.width,
      backgroundColor: props.backgroundColor,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: APP_COLORS.light,
      fontFamily: 'Urbanist-SemiBold',
      fontSize: 18,
    },
  });
};

export default styles;
