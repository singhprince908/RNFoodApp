import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import {img} from '../../constants/constants';
import {endpoints} from '../../api/endpoints';
type CatalogueDataItem = {
  title: string;
  price: string;
  img: string;
};
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
  const [catalogueData, setCatalogueData] = useState<Array<CatalogueDataItem>>(
    [],
  );
  const getCatalogueFood = async () => {
    const res = await fetch(endpoints.getCatalogue);
    const resJson = await res.json();
    console.log(resJson);
    setCatalogueData(
      resJson.data.map((item: any) => ({
        title: item.title,
        price: item.price,
        img: item.Image,
      })),
    );
  };
  const navigation = useNavigation();
  useEffect(() => {
    getCatalogueFood();
  }, []);
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('OrderScreen');
            }}>
            <Cart />
          </TouchableOpacity>
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
          {catalogueData.map(item => (
            <Card img={item.img} price={item.price} title={item.title} />
          ))}
          {/* <Card img={FoodPlate} price="Rs 100" title="Veggie tomato mix" />
          <Card img={FoodPlate2} price="Rs 200" title="Veggie tomato mix" />
          <Card img={FoodPlate3} price="Rs 300" title="Veggie tomato mix" />
          <Card img={FoodPlate4} price="Rs 400" title="Veggie tomato mix" /> */}
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default CatalogueScreen;
