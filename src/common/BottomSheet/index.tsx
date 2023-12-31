import React, {useEffect, useContext} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import {BottomSheetContext} from '../../context/BottomSheetProvider';
import { PortalHost } from "@gorhom/portal";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

const windowHeight = Dimensions.get('window').height;

type Props = {
  isOpen: boolean;
  content?: React.ReactDOM;
  onClose: () => void;
};

export default function BottomSheet() {
  const {isOpen, closeBottomSheet} = useContext(BottomSheetContext);
  const translateY = useSharedValue(windowHeight);
  const opacity = useSharedValue(0);

  const gestureHandler = (event: PanGestureHandlerGestureEvent) => {
    if (event.nativeEvent.translationY > 0) {
      translateY.value = withSpring(windowHeight);
      closeBottomSheet();
    }
  };

  useEffect(() => {
    translateY.value = withTiming(isOpen ? 0 : windowHeight);
    opacity.value = withTiming(isOpen ? 0.75 : 0);
  }, [isOpen]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  return (
    <View pointerEvents={isOpen ? 'auto' : 'none'} style={styles.box}>
      <GestureHandlerRootView style={styles.box}>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <View style={styles.box}>
            <Animated.View
              style={[styles.box, styles.overlay, {opacity: opacity}]}
            />
            <Animated.View style={[styles.container, animatedStyles]}>
              <PortalHost name="BottomSheetContent" />
            </Animated.View>
          </View>
        </PanGestureHandler>
      </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  overlay: {
    backgroundColor: 'black',
  },
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '95%',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden'
  },
});
