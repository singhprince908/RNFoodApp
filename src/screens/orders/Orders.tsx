import React from 'react';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BackIcon, ShoppingCart} from '../../assets';
import {Button, CartCard} from '../../components';
import {palette} from '../../assets/palette/palette';
import {useAppSelector} from '../../store/hooks';
import {Styles} from './Orders.styles';

const OrderScreen = () => {
  const navigation = useNavigation();
  const count = useAppSelector(state => state);
  const cart = count.cart;

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

      {cart.length ? (
        <ScrollView style={Styles.mTop}>
          {cart.map(item => (
            <CartCard
              img={item.img}
              qty={item.qty}
              title={item.title}
              price={item.price}
            />
          ))}
        </ScrollView>
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
