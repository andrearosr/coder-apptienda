import React from 'react';
import { FlatList } from 'react-native';
import CategoryGridItem from '../components/CategoryGridItem';
import { CATEGORIES } from '../data/categories';

const CategoriesScreen = ({ navigation }) => {
  const handleSelected = (item) => {
    navigation.navigate('BreadCategory', {
      categoryID: item.id,
      name: item.name,
    });
  }
  const renderItem = ({ item }) => <CategoryGridItem item={item} onSelected={handleSelected} />
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
    />
  )
}

export default CategoriesScreen;
