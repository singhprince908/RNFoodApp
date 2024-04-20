import {StyleProp, Text, TextInput, View, ViewStyle} from 'react-native';
import React from 'react';
import {Styles} from './textInput.styles';
import {palette} from '../../assets/palette/palette';

interface TextInputProps {
  onChangeText: (e: string) => void;
  value: string;
  placeholder: string;
  containerStyles?: StyleProp<ViewStyle>;
  isSecure?: boolean;
}
const TextInputCustom = ({
  onChangeText,
  value,
  placeholder,
  containerStyles,
  isSecure,
}: TextInputProps) => {
  return (
    <View style={[Styles.borderBottom, containerStyles]}>
      <Text
        style={[
          {
            color: palette.greyText,
          },
          value === '' && Styles.displayNone,
        ]}>
        {placeholder}
      </Text>

      <TextInput
        onChangeText={onChangeText}
        style={Styles.textInput}
        placeholder={placeholder}
        textContentType="password"
        secureTextEntry={isSecure}
      />
    </View>
  );
};

export default TextInputCustom;
