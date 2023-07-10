import React, {useCallback} from 'react';
import {View, Text, FlatList} from 'react-native';
import Preview from './components/Preview';
import productList from './const/productList';

const Product = () => {
  const renderItem = useCallback(({item, index}) => {
    return <Preview {...item} isLast={index === productList.length - 1} />;
  }, []);

  return (
    <FlatList
      data={productList}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
    />
  );
};

export default Product;
