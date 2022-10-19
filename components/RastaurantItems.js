import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestaurants = [
  {
    name: 'Dhampur Bar',
    image_url:
      'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/g/q/p1057-164034060761c59c7f0fb0b.jpg?w=400',
    categories: ['cafe', 'Bar'],
    prise: '$$',
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: 'Noida Bar',
    image_url:
      'https://media.istockphoto.com/photos/five-cocktails-in-hands-joined-in-celebratory-toast-picture-id1303977605?s=612x612',
    categories: ['cafe', 'Bar'],
    prise: '$$',
    reviews: 124454,
    rating: 4.5,
  },
  {
    name: 'Delhi Bar',
    image_url:
      'https://media.istockphoto.com/photos/group-of-friends-celebrating-watching-sports-game-or-match-drinking-picture-id1365101257?s=612x612',
    categories: ['cafe', 'Bar'],
    prise: '$$',
    reviews: 126644,
    rating: 4.5,
  },
];

export default function RastaurantItem(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom: 30}}>
      {props.restaurantData.map((restaurants, index) => (
        <View
          key={index}
          style={{marginTop: 10, padding: 15, backgroundColor: '#fff'}}>
          <RastaurantImage image={restaurants.image_url} />
          <RastaurantInfo
            name={restaurants.name}
            rating={restaurants.rating}
            // reviews={localrestaurants[0].reviews}
            // prise={localrestaurants[0].prise}
          />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RastaurantImage = props => (
  <>
    <Image source={{uri: props.image}} style={{width: '100%', height: 180}} />

    <TouchableOpacity style={{position: 'absolute', right: 20, top: 20}}>
      <MaterialCommunityIcons
        name="heart-outline"
        size={25}
        color="white"
        // style={{color: 'red'}}
      />
    </TouchableOpacity>
  </>
);

const RastaurantInfo = props => (
  <>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
      }}>
      <View style={{flexDirection: 'column'}}>
        <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
          {props.name}
        </Text>
        <Text style={{color: 'gray', fontSize: 13}}>30-45 • min</Text>
      </View>
      <View
        style={{
          backgroundColor: '#eee',
          height: 30,
          width: 30,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
        }}>
        <Text>{props.rating}</Text>
      </View>
    </View>
  </>
);
