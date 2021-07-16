import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import BreadItem from '../components/BreadItem';
import ShowCart from '../components/ShowCart';
import { filterBread, selectBread } from '../store/actions/bread.action';

const CategoryBreadScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const categoryBreads = useSelector(state => state.breads.filteredBreads);
  const category = useSelector(state => state.categories.selected);

  useEffect(() => {
    dispatch(filterBread(category.id));
  }, []);

  const handleSelected = (item) => {
    dispatch(selectBread(item.id));
    navigation.navigate('DetailBread', { name: item.name });
  }
  const renderItem = ({ item }) => <BreadItem item={item} onSelected={handleSelected} />

  return (
    <View>
      <FlatList
        data={categoryBreads}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <ShowCart navigation={navigation} />
    </View>
  )
}

export default CategoryBreadScreen;
