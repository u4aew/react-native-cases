import React from 'react';
import {View, Text, Button} from 'react-native';

const Cases = ({ navigation }) => {
  const onGoAnimation = () => {
    navigation.navigate('CasesAnimation');
  };

  const onGoProduct = () => {
    navigation.navigate('CasesProducts');
  };

  return (
    <View>
      <View style={{marginBottom: 15}}>
        <Text>Cases 1</Text>
        <Button title="Animation" onPress={onGoAnimation} />
      </View>
      <View>
        <Text>Cases 1</Text>
        <Button title="Products" onPress={onGoProduct} />
      </View>
    </View>
  );
};

export default Cases;
