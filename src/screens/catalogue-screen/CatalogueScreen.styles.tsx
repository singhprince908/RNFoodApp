import {StyleSheet} from 'react-native';
import {palette} from '../../assets/palette/palette';
import {s} from 'react-native-size-matters';
import {fonts} from '../../assets/fonts/fonts';

export const Styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: palette.greyBg},
  header: {
    marginTop: s(54),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: s(34),
  },
  title: {marginHorizontal: s(30), marginTop: s(44)},
  titleText: {
    fontFamily: fonts.sfRoundedSemibold,
    fontSize: s(34),
    maxWidth: s(185),
  },
  search: {
    flexDirection: 'row',
    backgroundColor: 'hsl(0, 0%, 88%)',
    marginHorizontal: s(30),
    marginTop: s(30),
    gap: 10,
    alignItems: 'center',
    padding: s(18),
    borderRadius: s(32),
  },
  shadowBottom: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 16.0,
    elevation: 24,
  },
  searchtext: {
    fontFamily: fonts.sfRoundedSemibold,
    fontSize: s(17),
    color: '#000000',
  },
  categoriesScroll: {
    flexDirection: 'row',
    marginTop: s(40),
  },
  categoryUnSelected: {
    fontFamily: fonts.sfRoundedRegular,
    fontSize: s(17),
    color: palette.darkGrey,
  },
  categoryUnselectedView: {
    marginRight: s(35),
  },
  categorySelectedView: {
    marginRight: s(35),
    borderBottomWidth: s(2),
    paddingBottom: s(6),
    borderBottomColor: palette.coral,
  },
  categorySelected: {
    fontFamily: fonts.sfRoundedRegular,
    fontSize: s(17),
    color: palette.coral,
  },
  scrollContainer: {marginHorizontal: s(40)},
  margin: {marginRight: s(40)},
  circle: {
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // height: s(164),
    // width: s(164),
    backgroundColor: 'blue',
    borderRadius: s(164),
  },
  seemore: {
    position: 'absolute',
    right: s(20),
    top: s(20),
    fontFamily: fonts.sfRoundedRegular,
    fontSize: s(15),
    color: palette.coral,
  },
});
