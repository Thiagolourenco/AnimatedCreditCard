import React from 'react';
import {Pressable, Text} from 'react-native';

import useStyles from './Button.style';

interface IButton {
  onPress: () => void;
}

const Button = ({onPress}: IButton): JSX.Element => {
  const styles = useStyles();

  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>OK</Text>
    </Pressable>
  );
};

export default Button;
