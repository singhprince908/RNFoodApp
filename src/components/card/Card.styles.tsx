import {StyleSheet} from 'react-native';
import {fonts} from '../../assets/fonts/fonts';
import {s} from 'react-native-size-matters';
import {palette} from '../../assets/palette/palette';

export const Styles = StyleSheet.create({
  card: {
    height: s(230),
    width: s(184),
    backgroundColor: 'white',
    margin: s(30),
    borderRadius: s(20),
    alignItems: 'center',
    top: s(50),
    marginBottom: s(90),
  },
  img:{
    backgroundColor: 'red',
    width: s(128),
    height: s(128),
    borderRadius: s(128),
    top: -s(50),
  },
  qtyContainerAdd: {
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
  qtyContainer: {
    backgroundColor: palette.coral,
    flexDirection: 'row',
    gap: s(6),
    position: 'absolute',
    bottom: s(12),
    right: s(12),
    padding: s(2),
    paddingHorizontal: s(14),
    borderRadius: s(30),
  },
  qtyText: {color: palette.white, fontSize: s(14)},
});
