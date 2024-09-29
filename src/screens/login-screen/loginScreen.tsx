import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {Styles} from './loginScreen.styles';
import {chefHat} from '../../assets';
import {section} from '../../constants/constants';
import {TextInputCustom} from '../../components';
import {endpoints} from '../../api/endpoints';
import {s} from 'react-native-size-matters';

const LoginScreen = () => {
  const [selectedSection, setSelectedSection] = useState(section.login);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [createEmail, setCreateEmail] = useState('');
  const [name, setName] = useState('');
  const navigation = useNavigation();
  const handleLogin = async () => {
    try {
      const params = {
        identifier: email,
        password: password,
      };
      const res = await axios.post(endpoints.login, params);
      if (res.status == '200') {
        navigation.navigate('Catalogue');
      }
    } catch (err) {
      console.log('err:', err);
    }
  };
  const handleRegister = async () => {
    try {
      const params = {
        email: createEmail,
        password: createPassword,
        username: createEmail,
        name: name,
        mobileNumber: mobileNumber,
      };
      const res = await axios.post(endpoints.register, params);
      console.log('ress:', JSON.stringify(res));

      // if (res.status == '200') {
      //   navigation.navigate('Catalogue');
      // }
    } catch (err) {
      console.log('err:', err);
    }
  };

  return (
    <View style={Styles.container}>
      <View style={[Styles.firstHalf, Styles.shadowBottom]}>
        <Image source={chefHat} style={Styles.img} />
        <View style={Styles.selectView}>
          <TouchableOpacity
            style={[
              Styles.switch,
              selectedSection === section.login && Styles.bottomSelected,
            ]}
            onPress={() => {
              setSelectedSection(section.login);
            }}>
            <Text style={Styles.switchText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Styles.switch,
              selectedSection === section.signUp && Styles.bottomSelected,
            ]}
            onPress={() => {
              setSelectedSection(section.signUp);
            }}>
            <Text style={Styles.switchText}>Sign-up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={Styles.secondHalf}>
        {selectedSection === section.login ? (
          <>
            <TextInputCustom
              placeholder="Email Address"
              onChangeText={e => {
                setEmail(e);
              }}
              value={email}
            />
            <TextInputCustom
              placeholder="Password"
              onChangeText={e => {
                setPassword(e);
              }}
              value={password}
              containerStyles={Styles.margin}
              isSecure
            />
            <Text style={Styles.forgotPasswordText}>Forgot Password ?</Text>
          </>
        ) : (
          <ScrollView>
            <TextInputCustom
              placeholder="Name"
              onChangeText={e => {
                setName(e);
              }}
              value={name}
            />
            <TextInputCustom
              placeholder="Email"
              onChangeText={e => {
                setCreateEmail(e);
              }}
              value={createEmail}
              containerStyles={Styles.mTop}
            />
            <TextInputCustom
              placeholder="Mobile number"
              onChangeText={e => {
                setMobileNumber(e);
              }}
              value={mobileNumber}
              containerStyles={Styles.mTop}
            />

            <TextInputCustom
              placeholder="Password"
              onChangeText={e => {
                setCreatePassword(e);
              }}
              value={createPassword}
              containerStyles={Styles.mTop}
              isSecure
            />
          </ScrollView>
        )}
        <View style={Styles.flex} />

        <View style={Styles.flex} />
        <View style={Styles.btnContainer}>
          <TouchableOpacity
            onPress={
              selectedSection === section.login ? handleLogin : handleRegister
            }
            style={Styles.btn}>
            <Text style={Styles.text}>
              {selectedSection === section.login ? 'Login' : 'SignUp'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
