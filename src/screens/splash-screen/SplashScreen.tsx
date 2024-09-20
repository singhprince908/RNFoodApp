import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Styles} from './SplashScreen.styles';
import {chefHat, imgIntro} from '../../assets';
import {useNavigation} from '@react-navigation/native';
// import {palette} from '../../assets/palette/palette';

const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={Styles.container}>
      <View style={Styles.logoImage}>
        <Image source={chefHat} style={Styles.img} />
      </View>
      <Text style={Styles.textHeading}>{'Food for Everyone'}</Text>
      <View style={Styles.imgView}>
        <Image source={imgIntro} style={Styles.imgIntro} />
      </View>
      <View style={[Styles.cont, Styles.shadowTop]}>
        <View style={Styles.btnContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}
            style={Styles.btn}>
            <Text style={Styles.text}>{'Get Started'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;
