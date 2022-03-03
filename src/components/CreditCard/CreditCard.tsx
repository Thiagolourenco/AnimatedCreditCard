import React from 'react';
import {View, Text, ViewProps} from 'react-native';
import Animated from 'react-native-reanimated';

import useStyles from './CreditCard.style';

type ICreditCart = ViewProps & {
  text?: string;
  numberOfCard?: string;
  nameCard?: string;
  valid?: string;
  codCard?: number;
};

const CreditCard = ({
  nameCard,
  numberOfCard,
  valid,
  codCard,
  style,
}: ICreditCart): JSX.Element => {
  const styles = useStyles();

  return (
    <Animated.View style={[styles.container, style]}>
      <View style={styles.contentCard}>
        <Text style={styles.numberOfCard}>{numberOfCard}</Text>
        <Text style={styles.validDate}>{valid}</Text>

        <Text style={styles.nameCard}>{nameCard}</Text>
      </View>

      {codCard && (
        <View style={styles.viewCodCard}>
          <View style={styles.viewLine} />
          <Text style={styles.codCard}>{codCard}</Text>
        </View>
      )}
    </Animated.View>
  );
};

export default CreditCard;
