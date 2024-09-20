import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  Cart,
  FoodPlate,
  FoodPlate2,
  FoodPlate3,
  FoodPlate4,
  MenuIcon,
  Search,
} from '../../assets';
import Card from '../../components/card/Card';
import {Styles} from './CatalogueScreen.styles';
import {useNavigation} from '@react-navigation/native';

const CatalogueScreen = () => {
  const [chosenCategory, setChosenCategory] = useState('Foods');
  const categories = [
    'Foods',
    'Drinks',
    'Snacks',
    'Sauce',
    'Foods1',
    'Drinks1',
    'Snacks1',
    'Sauce1',
  ];
  const navigation = useNavigation();
  return (
    <ScrollView style={Styles.container}>
      <SafeAreaView>
        <View style={Styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Menu');
            }}>
            <MenuIcon />
          </TouchableOpacity>
          <Cart />
        </View>
        <View style={Styles.title}>
          <Text style={Styles.titleText}>{'Delicious food for you'}</Text>
        </View>
        <View style={[Styles.search, Styles.shadowBottom]}>
          <Search height={18} width={18} />
          <TextInput placeholder="Search" style={Styles.searchtext} />
        </View>
        <View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={Styles.scrollContainer}
            horizontal
            style={Styles.categoriesScroll}>
            {categories.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setChosenCategory(item);
                }}
                style={[
                  Styles.categoryUnselectedView,
                  chosenCategory === item && Styles.categorySelectedView,
                ]}>
                <Text
                  style={[
                    Styles.categoryUnSelected,
                    chosenCategory === item && Styles.categorySelected,
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
            <View style={Styles.margin} />
          </ScrollView>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Card img={FoodPlate} price="Rs 100" title="Veggie tomato mix" />
          <Card img={FoodPlate2} price="Rs 100" title="Veggie tomato mix" />
          <Card img={FoodPlate3} price="Rs 100" title="Veggie tomato mix" />
          <Card img={FoodPlate4} price="Rs 100" title="Veggie tomato mix" />
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default CatalogueScreen;
