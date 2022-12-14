import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';

const items = [
  {
    image: require('../assets/images/shopping-bag.png'),
    text: 'Pick-up',
  },
  {
    image: require('../assets/images/soft-drink.png'),
    text: 'Soft-drinks',
  },
  {
    image: require('../assets/images/bread.png'),
    text: 'Bakery Items',
  },
  {
    image: require('../assets/images/shopping-bag.png'),
    text: 'Pick-up',
  },
  {
    image: require('../assets/images/fast-food.png'),
    text: 'Fast-foods',
  },
  {
    image: require('../assets/images/deals.png'),
    text: 'Deals',
  },
  {
    image: require('../assets/images/coffee.png'),
    text: 'Coffee',
  },
  {
    image: require('../assets/images/desserts.png'),
    text: 'Desserts',
  },
];

const Categories = () => {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingLeft: 20,
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Loop start here */}
        {items.map((item, index) => (
          <View key={index} style={{alignItems: 'center', marginRight: 30}}>
            <Image
              source={item.image}
              style={{
                height: 50,
                width: 40,
                resizeMode: 'contain',
              }}
            />
            <Text style={{fontSize: 13, fontWeight: '900', color: 'black'}}>
              {item.text}
            </Text>
          </View>
        ))}
        {/* loop end here/ */}
      </ScrollView>
    </View>
  );
};

export default Categories;
