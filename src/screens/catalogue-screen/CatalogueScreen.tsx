import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Config from 'react-native-config';
import {Cart, MenuIcon, Search} from '../../assets';
import Card from '../../components/card/Card';
import {endpoints} from '../../api/endpoints';
import {categories} from '../../constants/constants';
import {Styles} from './CatalogueScreen.styles';
import {CatalogueDataItem} from './CatalogueScreen.type';

const CatalogueScreen = () => {
  const [chosenCategory, setChosenCategory] = useState('Foods');
  const [catalogueData, setCatalogueData] = useState<Array<CatalogueDataItem>>(
    [],
  );
  const getCatalogueFood = async () => {
    const res = await fetch(endpoints.getCatalogue);
    const resJson = await res.json();
    setCatalogueData(
      resJson.data.map((item: any) => ({
        title: item.title,
        price: `₹ ${item.price}`,
        img: `${Config.API_BASE_URL}/${item.image.url}`,
      })),
    );
  };
  const navigation = useNavigation();
  useEffect(() => {
    getCatalogueFood();
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
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
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CatalogueScreen;
