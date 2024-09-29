import {StyleSheet} from 'react-native';
import {fonts} from '../../assets/fonts/fonts';
import {s} from 'react-native-size-matters';
import {palette} from '../../assets/palette/palette';

export const Styles = StyleSheet.create({
  card: {
    backgroundColor: palette.white,
    marginHorizontal: s(30),
    margin: s(12),
    borderRadius: s(20),
    flexDirection: 'row',
    padding: s(12),
    gap: s(8),
  },
  img:{
    width: s(69),
    height: s(69),
    borderRadius: s(120),
    backgroundColor: 'red',
  },
  foodHeading: {justifyContent: 'center', gap: s(6)},
  textH: {
    fontFamily: fonts.sfRoundedSemibold,
    fontSize: s(17),
    textAlign: 'center',
  },
  price: {
    fontFamily: fonts.sfRoundedSemibold,
    fontSize: s(15),
    color: palette.coral,
  },
  qtyContainer: {
    backgroundColor: palette.coral,
    flexDirection: 'row',
    gap: s(6),
    position: 'absolute',
    bottom: s(12),
    right: s(12),
    padding: s(2),
    paddingHorizontal: s(8),
    borderRadius: s(30),
  },
  qtyText: {color: palette.white},
});
