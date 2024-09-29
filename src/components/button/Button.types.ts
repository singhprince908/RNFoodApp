import {StyleProp, ViewStyle} from 'react-native';

export type TButtonProps = {
  label: string;
  buttonColor: string;
  containerStyles?: StyleProp<ViewStyle>;
  onPress: () => void;
};
