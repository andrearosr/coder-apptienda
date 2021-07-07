import React from 'react';
import { FlatList } from 'react-native';
import { BREADS } from '../data/breads';
import BreadItem from '../components/BreadItem';

const CategoryBreadScreen = ({ navigation, route }) => {
  const data = BREADS.filter(item => item.category === route.params.categoryID);
  const handleSelected = (item) => {
    navigation.navigate('DetailBread', {
      item,
      name: item.name,
    });
  }
  const renderItem = ({ item }) => <BreadItem item={item} onSelected={handleSelected} />

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  )
}

export default CategoryBreadScreen;
