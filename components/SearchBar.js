import React from 'react';
import {View, Text} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntyDesign from 'react-native-vector-icons/AntDesign';

const SearchBar = () => {
  return (
    <View style={{marginTop: 15, flexDirection: 'row'}}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            margin: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{marginLeft: 8}}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: 'row',
              marginRight: 8,
              backgroundColor: 'white',
              borderRadius: 30,
              alignItems: 'center',
              padding: 9,
            }}>
            <AntyDesign name="clockcircle" size={11} style={{marginRight: 6}} />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;
