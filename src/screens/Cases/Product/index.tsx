import React, {useCallback, useContext, useEffect, useState} from 'react';
import {FlatList, View, StyleSheet, Text} from 'react-native';
import Preview from './components/Preview';
import productList from './const/productList';
import {BottomSheetContext} from '../../../context/BottomSheetProvider';

const Product = () => {
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const {isOpen, openBottomSheet } = useContext(BottomSheetContext);
  const onPressCard = useCallback(item => {
    setOpenDetails(!openDetails);
    openBottomSheet()
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
    </View>
  );
};

const style = StyleSheet.create({
  box: {
    flex: 1,
  },
});

export default Product;
