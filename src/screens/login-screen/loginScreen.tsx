import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Styles} from './loginScreen.styles';
import {chefHat} from '../../assets';
import {section} from '../../constants/constants';
import {s} from 'react-native-size-matters';
import TextInputCustom from '../../components/text-input/textInput';

const LoginScreen = () => {
  const [selectedSection, setSelectedSection] = useState(section.login);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [name, setName] = useState('');

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
              containerStyles={{marginTop: s(46)}}
              isSecure
            />
            <Text style={Styles.forgotPasswordText}>Forgot Password ?</Text>
          </>
        ) : (
          <>
            <TextInputCustom
              placeholder="Name"
              onChangeText={e => {
                setName(e);
              }}
              value={name}
            />
            <TextInputCustom
              placeholder="Mobile Number"
              onChangeText={e => {
                setMobileNumber(e);
              }}
              value={mobileNumber}
              containerStyles={{marginTop: s(26)}}
            />
            <TextInputCustom
              placeholder="Password"
              onChangeText={e => {
                setCreatePassword(e);
              }}
              value={createPassword}
              containerStyles={{marginTop: s(26)}}
              isSecure
            />
          </>
        )}
        <View style={Styles.flex} />

        <View style={Styles.flex} />
        <View style={Styles.btnContainer}>
          <TouchableOpacity style={Styles.btn}>
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
