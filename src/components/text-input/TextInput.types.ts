import {StyleProp, ViewStyle} from 'react-native';

export type TTextInputProps = {
  onChangeText: (e: string) => void;
  value: string;
  placeholder: string;
  containerStyles?: StyleProp<ViewStyle>;
  isSecure?: boolean;
};
