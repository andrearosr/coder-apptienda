import React from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CategoryGridItem from '../components/CategoryGridItem';
import { selectCategory } from '../store/actions/category.action';

const CategoriesScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const breadCategories = useSelector(state => state.categories.list);
  
  const handleSelected = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('BreadCategory', { name: item.name });
  }

  const renderItem = ({ item }) => <CategoryGridItem item={item} onSelected={handleSelected} />
  return (
    <FlatList
      data={breadCategories}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
    />
  )
}

export default CategoriesScreen;
