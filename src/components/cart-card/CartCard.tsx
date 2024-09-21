import {Image, ImageSourcePropType, Text, View} from 'react-native';
import React from 'react';
import {Styles} from './CartCard.styles';
import {s} from 'react-native-size-matters';

interface CartCardProps {
  title: string;
  price: string;
  img: ImageSourcePropType;
}
const CartCard = (props: CartCardProps) => {
  return (
    <View style={Styles.card}>
      <Image
        source={props.img}
        resizeMode="cover"
        style={{
          width: s(69),
          height: s(69),
          borderRadius: s(120),
          backgroundColor: 'red',
          //   margin,
        }}
      />
      <View style={Styles.foodHeading}>
        <Text style={Styles.textH}>{props.title}</Text>
        <Text style={Styles.price}>
          {'Rs '}
          {props.price}
        </Text>
      </View>
      <View style={Styles.qtyContainer}>
        <Text style={Styles.qtyText}>-</Text>
        <Text style={Styles.qtyText}>1</Text>
        <Text style={Styles.qtyText}>+</Text>
      </View>
    </View>
  );
};

export default CartCard;
