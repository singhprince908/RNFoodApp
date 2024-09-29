import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import {useAppSelector, useAppDispatch} from '../../store/hooks';
import {addCart, removeCart} from '../../slices/cartSlice';
import {Styles} from './Card.styles';
import {TCardProps} from './Card.types';
const Card = (props: TCardProps) => {
  const count = useAppSelector(state => state);
  const countVal = count.cart.find(item => item.title == props.title)?.qty;
  const dispatch = useAppDispatch();
  return (
    <View style={Styles.card}>
      <Image source={{uri: props.img}} resizeMode="cover" style={Styles.img} />
      <View style={Styles.foodHeading}>
        <Text style={Styles.textH}>{props.title}</Text>
        <Text style={Styles.price}>{props.price}</Text>
      </View>
      {countVal ? (
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
          <Text style={Styles.qtyText}>
            {count.cart.find(item => item.title == props.title)?.qty}
          </Text>
          <Pressable
            onPress={() => {
              dispatch(
                addCart({
                  price: props.price,
                  qty: 1,
                  title: props.title,
                  img: props.img,
                }),
              );
            }}>
            <Text style={Styles.qtyText}>+</Text>
          </Pressable>
        </View>
      ) : (
        <View style={Styles.qtyContainer}>
          <Pressable
            onPress={() => {
              dispatch(
                addCart({
                  price: props.price,
                  qty: 1,
                  title: props.title,
                  img: props.img,
                }),
              );
            }}>
            <Text style={Styles.qtyText}>{'Add To Cart'}</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Card;
