import {StyleProp, Text, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {Styles} from './Button.styles';

interface buttonProps {
  label: string;
  buttonColor: string;
  containerStyles?: StyleProp<ViewStyle>;
  onPress: () => void;
}
const Button = (props: buttonProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[Styles.btnContainer, props.containerStyles]}>
      <Text style={Styles.btnText}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
