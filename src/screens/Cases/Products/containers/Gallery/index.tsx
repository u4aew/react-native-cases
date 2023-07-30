import React from 'react';
import {Dimensions, Image, Text, View, StyleSheet} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

type Props = {
  images: {
    uri: string;
  }[];
};

const Gallery = ({images}: Props) => {
  const width = Dimensions.get('window').width;
  return (
    <View>
      <Carousel
        width={width}
        height={230}
        data={images}
        scrollAnimationDuration={1000}
        onSnapToItem={index => console.log('current index:', index)}
        renderItem={({index, item}) => (
          <View
            key={index}
            style={{
              flex: 1
            }}>
            <Image
              style={styles.image}
              source={{
                uri: item.uri,
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Gallery;
