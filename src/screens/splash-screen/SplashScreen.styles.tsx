import {StyleSheet} from 'react-native';
import {s} from 'react-native-size-matters';
import {fonts} from '../../assets/fonts/fonts';
import {palette} from '../../assets/palette/palette';

export const Styles = StyleSheet.create({
  container: {
    backgroundColor: palette.coral,
    height: '100%',
    width: '100%',
  },
  imgView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: s(73),
    height: s(73),
    borderRadius: s(73),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: s(56),
    marginLeft: s(49),
  },
  img: {width: s(45), height: s(45)},

  textHeading: {
    zIndex: 2,
    marginTop: s(31),
    fontSize: s(65),
    fontFamily: fonts.sfRoundedHeavy,
    color: palette.white,
    marginLeft: s(51),
    letterSpacing: s(-4),
    lineHeight: s(64),
  },
  imgIntro: {
    height: s(310),
    flexDirection: 'row',
    width: '100%',
  },
  btnContainer: {
    margin: s(15),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontFamily: fonts.sfRoundedSemibold,
    fontSize: s(17),
    color: palette.coral,
  },
  btn: {
    backgroundColor: palette.white,
    padding: s(15),
    paddingHorizontal: s(70),
    borderRadius: s(30),
  },
  shadowTop: {
    shadowColor: palette.coral,
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowOpacity: 1,
    shadowRadius: 16.0,
    elevation: 24,
  },
  cont: {width: '100%'},
});
