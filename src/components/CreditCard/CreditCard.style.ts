import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface ICreditCardStyle {
  container: ViewStyle;
  numberOfCard: TextStyle;
  validDate: TextStyle;
  nameCard: TextStyle;
  codCard: TextStyle;
  contentCard: ViewStyle;
  viewLine: ViewStyle;
  viewCodCard: ViewStyle;
}

export default (): ICreditCardStyle => {
  return StyleSheet.create({
    container: {
      backgroundColor: '#414757',
      marginHorizontal: 32,
      height: 200,
      justifyContent: 'flex-end',
      marginTop: 32,
      borderRadius: 24,
    },
    numberOfCard: {
      fontSize: 24,
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'right',
    },
    validDate: {
      fontSize: 16,
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'right',
      marginVertical: 8,
    },
    nameCard: {
      fontSize: 16,
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'right',
      marginBottom: 12,
    },
    codCard: {
      fontSize: 16,
      color: '#fff',
      textAlign: 'right',
      fontWeight: 'bold',
      position: 'absolute',
      bottom: 12,
      right: 60,
    },
    contentCard: {
      marginRight: 12,
    },
    viewLine: {
      backgroundColor: '#000',
      height: 40,
      marginBottom: 42,
    },
    viewCodCard: {
      marginBottom: 88,
    },
  });
};
