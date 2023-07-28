import React, {useCallback, useContext, useEffect, useState} from 'react';
import {FlatList, View, StyleSheet, Text} from 'react-native';
import Preview from './components/Preview';
import productList from './const/productList';
import {BottomSheetContext} from '../../../context/BottomSheetProvider';
import {Portal} from '@gorhom/portal';

const Product = () => {
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const {isOpen, openBottomSheet} = useContext(BottomSheetContext);
  const onPressCard = useCallback(item => {
    setOpenDetails(!openDetails);
    openBottomSheet();
  }, []);

  const renderItem = useCallback(({item, index}) => {
    return (
      <Preview
        {...item}
        onPress={onPressCard}
        isLast={index === productList.length - 1}
      />
    );
  }, []);

  return (
    <View style={style.box}>
      <FlatList
        data={productList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
      <Portal hostName="BottomSheetContent">
        <Text>Text to be teleported to the CustomView component</Text>
      </Portal>
    </View>
  );
};

const style = StyleSheet.create({
  box: {
    flex: 1,
  },
});

export default Product;
