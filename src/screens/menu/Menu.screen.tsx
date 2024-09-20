import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Styles} from './Menu.styles';
import {
  Buy,
  Close,
  Offer,
  Profile,
  RightArrow,
  Security,
  StickyNote,
  chefHat,
} from '../../assets';
import {useNavigation} from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={Styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Catalogue')}
        style={Styles.close}>
        <Close width={20} height={20} />
      </TouchableOpacity>
      <View style={Styles.menu}>
        {/* Profile */}
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('Login');
          }}
          style={Styles.btn}>
          <Profile />
          <Text style={Styles.text}>{'Profile'}</Text>
        </TouchableOpacity>
        <View style={Styles.divider} />
        {/* Orders */}
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('Login');
          }}
          style={Styles.btn}>
          <Buy />
          <Text style={Styles.text}>{'Orders'}</Text>
        </TouchableOpacity>
        <View style={Styles.divider} />
        {/* Offer */}
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('Login');
          }}
          style={Styles.btn}>
          <Offer />
          <Text style={Styles.text}>{'Offer and Promo'}</Text>
        </TouchableOpacity>
        <View style={Styles.divider} />
        {/* Privacy Policy */}
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('Login');
          }}
          style={Styles.btn}>
          <StickyNote />
          <Text style={Styles.text}>{'Privacy Policy'}</Text>
        </TouchableOpacity>
        <View style={Styles.divider} />
        {/* Security */}
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate('Login');
          }}
          style={Styles.btn}>
          <Security />
          <Text style={Styles.text}>{'Security'}</Text>
        </TouchableOpacity>
      </View>
      {/* Security */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={Styles.signout}>
        <Text style={Styles.text}>{'Sign Out'}</Text>
        <RightArrow height={24} width={24} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Menu;
