import React from 'react';
import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/categories';
import GridItem from '../components/GridItem';

export default function CategoriesScreen({ navigation, route }) {
  const handleSelectedCategory = (item) => {
    navigation.navigate('Products', {
      categoryID: item.id,
      name: item.title,
    });
  }

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
}
