import React, {useCallback, useContext, useEffect, useState} from 'react';
import {FlatList, View, StyleSheet, Text} from 'react-native';
import Preview from './containers/Preview';
import {useSelector, useDispatch} from 'react-redux';
import {BottomSheetContext} from '../../../context/BottomSheetProvider';
import {selectProducts, fetchProductsAsync} from './slice';
import ProductCard from './components/ProductCard';
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
        <ProductCard
          images={[
            {
              uri: 'https://images.unsplash.com/photo-1562952546-12992a813a51?&auto=format&fit=crop&w=670',
            },
            {
              uri: 'https://images.unsplash.com/photo-1590240568022-6d30acfd5dbd?&auto=format&fit=crop&w=670',
            },
          ]}
        />
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
