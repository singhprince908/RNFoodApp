import {StyleSheet} from 'react-native';
import {s} from 'react-native-size-matters';
import {fonts} from '../../assets/fonts/fonts';
import {palette} from '../../assets/palette/palette';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: fonts.sfRoundedHeavy,
    fontSize: s(22),
  },
  mTop:{marginTop:s(30)},
  marginRight: {marginRight: s(0)},
  subtext: {
    fontFamily: fonts.sfRoundedLight,
    fontWeight: '300',
    color: palette.greyText,
    textAlign: 'center',
    marginHorizontal: s(48),
    fontSize: s(14),
  },
  header: {
    marginTop: s(54),
  },
  headerText: {
    fontFamily: fonts.sfRoundedLight,
    textAlign: 'center',
    fontSize: s(18),
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {position: 'absolute', left: s(16), zIndex: 1},
  innerContainer: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    gap: s(12),
  },
});
