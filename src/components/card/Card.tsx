import {Image, Text, View} from 'react-native';
import {s} from 'react-native-size-matters';
import React from 'react';
import {FoodPlate} from '../../assets';
import {Styles} from './Card.styles';
import {TCardProps} from './Card.types';

const Card = (props: TCardProps) => {
  return (
    <View style={Styles.card}>
      <Image
        source={props.img}
        resizeMode="cover"
        style={{width: s(184), height: s(184), top: -s(50)}}
      />
      <View style={Styles.foodHeading}>
        <Text style={Styles.textH}>{props.title}</Text>
        <Text style={Styles.price}>{props.price}</Text>
      </View>
    </View>
  );
};

export default Card;
