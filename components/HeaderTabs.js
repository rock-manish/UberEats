import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {text} from 'express';

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState('Delivery');

  return (
    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <HeaderButton
        text="Delivery"
        btncolor="black"
        textcolor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btncolor="white"
        textcolor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

const HeaderButton = props => (
  <TouchableOpacity
    onPress={() => props.setActiveTab(props.text)}
    style={{
      backgroundColor: props.activeTab === props.text ? 'black' : 'white',
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}>
    <Text style={{color: props.activeTab === props.text ? 'white' : 'black'}}>
      {props.text}
    </Text>
  </TouchableOpacity>
);

export default HeaderTabs;
