import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CasesScreen from '../screens/Cases';
import AnimationScreen from '../screens/Cases/Animation';
import ProductScreen from '../screens/Cases/Product';

const Stack = createNativeStackNavigator();

const CasesStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen name="CasesList" component={CasesScreen} />
      <Stack.Screen name="CasesAnimation" component={AnimationScreen} />
      <Stack.Screen name="CasesProduct" component={ProductScreen} />
    </Stack.Navigator>
  );
};

export default CasesStack;
