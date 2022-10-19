import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import HeaderTabs from '../components/HeaderTabs';
import Categories from '../components/Categories';
import SearchBar from '../components/SearchBar';
import RastaurantItem, {localRestaurants} from '../components/RastaurantItems';
const Home = () => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);

  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RastaurantItem restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
