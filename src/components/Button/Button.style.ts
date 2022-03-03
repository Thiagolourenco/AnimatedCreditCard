import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface IButtonStyle {
  button: ViewStyle;
  buttonText: TextStyle;
}

export default (): IButtonStyle => {
  return StyleSheet.create({
    button: {
      marginHorizontal: 32,
      height: 48,
      backgroundColor: '#446B94',
      borderRadius: 32,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 32,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
    },
  });
};
