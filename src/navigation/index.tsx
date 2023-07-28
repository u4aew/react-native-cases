import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import Index from './CasesStack';
import BottomSheet from '../common/BottomSheet';
import {PortalProvider} from '@gorhom/portal';
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
    <PortalProvider>
      <BottomSheetProvider>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
        <BottomSheet />
      </BottomSheetProvider>
    </PortalProvider>
  );
};

export default Navigation;
