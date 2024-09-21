import {Image, Pressable, Text, View} from 'react-native';
import {s} from 'react-native-size-matters';
import React from 'react';
import {FoodPlate} from '../../assets';
import {Styles} from './Card.styles';
import {TCardProps} from './Card.types';
import {useAppSelector, useAppDispatch} from '../../store/hooks';
import {addCart, removeCart} from '../../slices/cartSlice';
const Card = (props: TCardProps) => {
  const count = useAppSelector(state => state);
  console.log(count);

  const dispatch = useAppDispatch();
  return (
    <View style={Styles.card}>
      <Image
        source={{uri: props.img}}
        resizeMode="cover"
        style={{
          backgroundColor: 'red',
          width: s(128),
          height: s(128),
          borderRadius: s(128),
          top: -s(50),
        }}
      />
      <View style={Styles.foodHeading}>
        <Text style={Styles.textH}>{props.title}</Text>
        <Text style={Styles.price}>{props.price}</Text>
      </View>
      <View style={Styles.qtyContainer}>
        <Pressable
          // style={{zIndex: 20, backgroundColor: 'red'}}
          onPress={() => {
            console.log('hello');
            dispatch(
              removeCart({price: props.price, qty: 1, title: props.title}),
            );
          }}>
          <Text style={Styles.qtyText}>-</Text>
        </Pressable>
        <Text style={Styles.qtyText}>1</Text>
        <Pressable
          // style={{zIndex: 20, backgroundColor: 'red'}}
          onPress={() => {
            console.log('hello');
            dispatch(addCart({price: props.price, qty: 1, title: props.title}));
          }}>
          <Text style={Styles.qtyText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Card;
