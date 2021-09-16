import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../../store/actions/category.actions';
import GridItem from '../../components/GridItem';

export default function CategoriesScreen({ navigation }) {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.list); 

  const handleSelectedCategory = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('Products', {
      name: item.title,
    });
  }

  const renderGridItem = ({ item }) => (
    <GridItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={renderGridItem}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
