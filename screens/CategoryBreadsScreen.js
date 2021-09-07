import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import BreadItem from '../components/BreadItem';
import { selectBread, filterBreads } from '../store/actions/bread.actions';

export default function CategoryBreadsScreen({ navigation }) {
  const dispatch = useDispatch();
  const categoryID = useSelector(state => state.categories.selectedID);
  const breads = useSelector(state => state.breads.filteredBreads);

  useEffect(() => {
    dispatch(filterBreads(categoryID));
  }, [categoryID]);

  const handleSelected = (item) => {
    dispatch(selectBread(item.id));
    navigation.navigate('Detail', {
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
