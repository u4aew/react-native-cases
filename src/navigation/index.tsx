import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CasesStack from "./CasesStack";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen  name="Cases" component={CasesStack} />
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default Navigation;
