import {StyleSheet} from 'react-native';
import {s} from 'react-native-size-matters';
import {fonts} from '../../assets/fonts/fonts';
import {palette} from '../../assets/palette/palette';

export const Styles = StyleSheet.create({
  close: {
    margin: s(16),
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  container: {backgroundColor: palette.coral, flex: 1},
  text: {
    zIndex: 3,
    fontFamily: fonts.sfRoundedHeavy,
    fontWeight: '600',
    fontSize: s(17),
    color: palette.white,
  },
  btn: {
    marginLeft: s(28),
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(8),
    borderRadius: s(30),
  },
  signout: {
    position: 'absolute',
    bottom: s(64),
    marginLeft: s(28),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: s(30),
    gap: s(16),
  },
  divider: {
    height: s(0.5),
    justifyContent: 'center',
    alignSelf: 'center',
    width: '60%',
    backgroundColor: palette.white,
    marginVertical: s(20),
  },
  menu: {marginTop: s(28)},
});
