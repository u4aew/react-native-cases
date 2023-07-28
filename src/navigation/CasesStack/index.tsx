import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CasesScreen from '../../screens/Cases';
import AnimationScreen from '../../screens/Cases/Animation';
import ProductsScreen from '../../screens/Cases/Products';

const Stack = createNativeStackNavigator();

const Index = () => {
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
      <Stack.Screen name="CasesProducts" component={ProductsScreen} />
    </Stack.Navigator>
  );
};

export default Index;
