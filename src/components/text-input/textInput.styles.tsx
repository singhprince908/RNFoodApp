import {StyleSheet} from 'react-native';
import {s} from 'react-native-size-matters';
import {fonts} from '../../assets/fonts/fonts';

export const Styles = StyleSheet.create({
  displayNone: {display: 'none'},
  borderBottom: {borderBottomWidth: s(1)},
  textInput: {
    paddingVertical: s(10),
    fontFamily: fonts.sfRoundedSemibold,
    fontSize: s(17),
  },
});
