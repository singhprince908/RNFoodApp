import {StyleSheet} from 'react-native';
import {s} from 'react-native-size-matters';
import {fonts} from '../../assets/fonts/fonts';
import {palette} from '../../assets/palette/palette';

export const Styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: palette.greyBg,
  },
  firstHalf: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.white,
    flex: 0.4,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  mTop:{marginTop: s(26)},
  margin:{marginTop: s(46)},
  img: {width: s(140), height: s(140)},
  selectView: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginHorizontal: s(20),
    paddingHorizontal: s(30),
  },
  switch: {
    paddingVertical: s(10),
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'center',
  },
  switchText: {fontFamily: fonts.sfRoundedSemibold, fontSize: s(18)},
  bottomSelected: {
    borderBottomColor: palette.coral,
    borderBottomWidth: s(3),
  },
  secondHalf: {flex: 0.6, padding: s(50)},
  shadowBottom: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16.0,
    elevation: 24,
  },
  textInput: {
    paddingVertical: s(10),
    fontFamily: fonts.sfRoundedSemibold,
    fontSize: s(17),
  },
  forgotPasswordText: {
    marginTop: s(26),
    color: palette.coral,
    fontFamily: fonts.sfRoundedSemibold,
    fontSize: s(17),
  },
  btnContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontFamily: fonts.sfRoundedSemibold,
    fontSize: s(17),
    color: palette.white,
  },
  btn: {
    backgroundColor: palette.coral,
    padding: s(18),
    paddingHorizontal: s(80),
    borderRadius: s(30),
  },
  flex: {flex: 1},
});
