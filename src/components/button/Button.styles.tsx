import {StyleSheet} from 'react-native';
import {s} from 'react-native-size-matters';
import {palette} from '../../assets/palette/palette';
import {fonts} from '../../assets/fonts/fonts';

export const Styles = StyleSheet.create({
  btnContainer: {
    margin: s(15),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: palette.coral,
    borderRadius: s(30),
  },
  btnText: {
    padding: s(15),
    paddingHorizontal: s(70),
    borderRadius: s(30),
    fontFamily: fonts.sfRoundedSemibold,
    fontSize: s(14),
    color: palette.white,
  },
});
