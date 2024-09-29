import {Text, TextInput, View} from 'react-native';
import React from 'react';
import {palette} from '../../assets/palette/palette';
import {Styles} from './TextInput.styles';
import {TTextInputProps} from './TextInput.types';

const TextInputCustom = ({
  onChangeText,
  value,
  placeholder,
  containerStyles,
  isSecure,
}: TTextInputProps) => {
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
        value={value}
        style={Styles.textInput}
        placeholder={placeholder}
        textContentType="password"
        secureTextEntry={isSecure}
      />
    </View>
  );
};

export default TextInputCustom;
