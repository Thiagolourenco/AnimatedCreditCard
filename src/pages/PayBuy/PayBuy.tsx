import React, {useState} from 'react';
import {View} from 'react-native';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {CreditCard, Button} from '../../components';

import useStyles from './PayBuy.style';

const PayBuy = (): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(false);

  const cardValue = useSharedValue<number>(0);

  const styles = useStyles();

  const handleCreditCard = () => {
    const newCardValue = cardValue.value === 0 ? 1 : 0;
    setVisible(!visible);

    cardValue.value = withTiming(newCardValue, {duration: 200});
  };

  const styleCardFront = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateY: `${interpolate(cardValue.value, [0, 1], [0, 180])}deg`,
        },
      ],
    };
  });

  const styleCardBack = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateY: `${interpolate(cardValue.value, [0, 1], [180, 360])}deg`,
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      {!visible ? (
        <CreditCard
          nameCard="THIAGO L S SILVA"
          numberOfCard="1111 1111 1111 1111"
          valid="03/22"
          style={styleCardFront}
        />
      ) : (
        <CreditCard codCard={321} style={[styleCardBack]} />
      )}

      <Button onPress={handleCreditCard} />
    </View>
  );
};

export default PayBuy;
