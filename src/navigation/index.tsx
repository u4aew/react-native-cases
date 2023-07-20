import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import Index from './CasesStack';
import BottomSheet from '../components/BottomSheet';
import {BottomSheetProvider} from '../context/BottomSheetProvider';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Cases" component={Index} />
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <BottomSheetProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
      <BottomSheet />
    </BottomSheetProvider>
  );
};

export default Navigation;
