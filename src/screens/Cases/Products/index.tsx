import React, {useCallback, useContext, useEffect, useState} from 'react';
import {FlatList, View, StyleSheet, Text} from 'react-native';
import Preview from './components/Preview';
import {useSelector, useDispatch} from 'react-redux';
import {BottomSheetContext} from '../../../context/BottomSheetProvider';
import {selectProducts, fetchProductsAsync} from './slice';
import {Portal} from '@gorhom/portal';

const Product = () => {
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const {isOpen, openBottomSheet} = useContext(BottomSheetContext);
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const onPressCard = useCallback(() => {
    setOpenDetails(!openDetails);
    openBottomSheet();
  }, []);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchProductsAsync());
  }, []);

  const renderItem = useCallback(({item, index}: {item: any; index: any}) => {
    return (
      <Preview
        {...item}
        onPress={onPressCard}
        isLast={index === products.length - 1}
      />
    );
  }, []);

  return (
    <View style={style.box}>
      <FlatList
        data={products}
        renderItem={renderItem}
        // @ts-ignore
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
