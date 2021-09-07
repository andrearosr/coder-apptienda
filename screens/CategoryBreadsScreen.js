import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { BREADS } from '../data/breads';
import BreadItem from '../components/BreadItem';

export default function CategoryBreadsScreen({ navigation }) {
  const categoryID = useSelector(state => state.categories.selectedID);
  const breads = BREADS.filter(bread => bread.category === categoryID);

  const handleSelected = (item) => {
    navigation.navigate('Detail', {
      productID: item.id,
      name: item.name,
    });
  } 

  const renderItemBread = ({ item }) => (
    <BreadItem item={item} onSelected={handleSelected} />
  )

  return (
    <FlatList
      data={breads}
      keyExtractor={item => item.id}
      renderItem={renderItemBread}
    />
  );
}
