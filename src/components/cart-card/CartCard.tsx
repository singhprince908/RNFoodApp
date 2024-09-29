import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import {useAppDispatch} from '../../store/hooks';
import {addCart, removeCart} from '../../slices/cartSlice';
import {Styles} from './CartCard.styles';
import {TCartCardProps} from './CartCard.types';

const CartCard = (props: TCartCardProps) => {
  const dispatch = useAppDispatch();
  return (
    <View style={Styles.card}>
      <Image source={{uri: props.img}} resizeMode="cover" style={Styles.img} />
      <View style={Styles.foodHeading}>
        <Text style={Styles.textH}>{props.title}</Text>
        <Text style={Styles.price}>{props.price}</Text>
      </View>
      <View style={Styles.qtyContainer}>
        <Pressable
          onPress={() => {
            dispatch(
              removeCart({
                price: props.price,
                qty: 1,
                title: props.title,
                img: props.img,
              }),
            );
          }}>
          <Text style={Styles.qtyText}>-</Text>
        </Pressable>

        <Text style={Styles.qtyText}>{props.qty}</Text>
        <Pressable
          onPress={() => {
            dispatch(addCart({price: props.price, qty: 1, title: props.title}));
          }}>
          <Text style={Styles.qtyText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CartCard;
