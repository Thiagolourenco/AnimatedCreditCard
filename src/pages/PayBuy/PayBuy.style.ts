import {StyleSheet, ViewStyle} from 'react-native';

interface IPayBuyStyle {
  container: ViewStyle;
}

export default (): IPayBuyStyle => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
  });
};
