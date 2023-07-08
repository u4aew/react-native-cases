import React from 'react';
import {View, Text} from 'react-native';
import Card from "../../components/Card";

const Home = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Card>
        <Text>Hello world</Text>
      </Card>
    </View>
  );
};

export default Home;
