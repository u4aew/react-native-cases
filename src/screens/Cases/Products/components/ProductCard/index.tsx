import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Gallery from '../../containers/Gallery';

type Props = {
  images: {
    uri: string;
  }[];
};

const ProductCard = ({images}: Props) => {
  return (
    <View style={styles.box}>
      <Gallery images={images} />
      <Animated.View>
        <Text>Product desc</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: 'lightGray'
  }
})

export default ProductCard;
