import React from 'react';
import {View, Text, Button} from 'react-native';

const Cases = ({ navigation }) => {
  const onGoAnimation = () => {
    navigation.navigate('CasesAnimation');
  };
  return (
    <View>
      <Text>Cases 1</Text>
      <Button title="Animation" onPress={onGoAnimation} />
    </View>
  );
};

export default Cases;
