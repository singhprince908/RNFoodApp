import {StyleSheet} from 'react-native';
import {fonts} from '../../assets/fonts/fonts';
import {s} from 'react-native-size-matters';
import {palette} from '../../assets/palette/palette';

export const Styles = StyleSheet.create({
  card: {
    height: s(210),
    width: s(184),
    backgroundColor: 'white',
    margin: s(30),
    borderRadius: s(20),
    alignItems: 'center',
    top: s(50),
    marginBottom: s(90),
  },
  foodHeading: {
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    top: s(80),
    padding: s(10),
    textAlign: 'center',
  },
  textH: {
    fontFamily: fonts.sfRoundedSemibold,
    fontSize: s(22),
    textAlign: 'center',
  },
  price: {
    fontFamily: fonts.sfRoundedSemibold,
    fontSize: s(17),
    textAlign: 'center',
    color: palette.coral,
    marginTop: s(15),
  },
});
