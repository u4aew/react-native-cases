import React from 'react';
import {View, Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(
  TouchableWithoutFeedback,
);

type Props = {
  isLast: boolean;
  onPress: (item: any) => void
}

const Preview = ({isLast, onPress, ...props}: Props) => {
  const scale = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  const handlePressIn = () => {
    scale.value = withTiming(0.9, {duration: 200});
  };

  const handlePressOut = () => {
    scale.value = withTiming(1, {duration: 200});
  };

  const handlePress = () => {
    onPress(props)
  }

  return (
    <AnimatedTouchableOpacity
      onPressIn={handlePressIn}
      onPress={handlePress}
      onPressOut={handlePressOut}
      style={[animatedStyles]}>
      <View style={styles.item}>
        <View style={[styles.card, isLast && styles.isLast]}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://images.unsplash.com/photo-1534260164206-2a3a4a72891d',
            }}
          />
        </View>
      </View>
    </AnimatedTouchableOpacity>
  );
};

export default Preview;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    maxWidth: '50%',
    padding: 5,
  },
  card: {
    height: 200,
    flex: 1,
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  isLast: {},
  tinyLogo: {
    height: 100,
    width: 100,
  },
});
