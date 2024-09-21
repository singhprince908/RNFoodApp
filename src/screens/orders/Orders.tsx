import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Styles} from './Orders.styles';
import {BackIcon, Cart, FoodPlate, ShoppingCart, chefHat} from '../../assets';
import {section} from '../../constants/constants';
import {s} from 'react-native-size-matters';
import TextInputCustom from '../../components/text-input/TextInput';
import {useNavigation} from '@react-navigation/native';
import {Button, CartCard} from '../../components';
import {palette} from '../../assets/palette/palette';

const OrderScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.header}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          style={Styles.back}>
          <BackIcon />
        </Pressable>
        <Text style={Styles.headerText}>{'Order'}</Text>
      </View>
      {true ? (
        <>
          <CartCard
            img={FoodPlate}
            title={'Veggie tomato mix'}
            price={'1900'}
          />
        </>
      ) : (
        <>
          <View style={Styles.innerContainer}>
            <ShoppingCart style={Styles.marginRight} height={70} width={70} />
            <Text style={Styles.title}>No orders yet</Text>
            <Text style={Styles.subtext}>
              Hit the orange button down below to Create an order
            </Text>
          </View>
          <Button
            onPress={() => {
              navigation.navigate('Catalogue');
            }}
            label="Start Ordering"
            buttonColor={palette.coral}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default OrderScreen;
