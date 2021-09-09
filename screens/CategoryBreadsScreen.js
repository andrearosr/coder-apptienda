import React, { useEffect } from 'react';
import { FlatList, View, ActivityIndicator, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { FAB } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import BreadItem from '../components/BreadItem';
import { selectBread, filterBreads } from '../store/actions/bread.actions';
import { COLORS } from '../constants/colors';

export default function CategoryBreadsScreen({ navigation }) {
  const dispatch = useDispatch();
  const categoryID = useSelector(state => state.categories.selectedID);
  const breads = useSelector(state => state.breads.filteredBreads);

  useEffect(() => {
    // dispatch(filterBreads());
    setTimeout(() => dispatch(filterBreads(categoryID)), 1000);

    return () => {
      dispatch(filterBreads());
    }
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
    <View style={styles.container}>
      {breads.length
        ? (
          <FlatList
            data={breads}
            keyExtractor={item => item.id}
            renderItem={renderItemBread}
          />
        )
        : <ActivityIndicator color={COLORS.accent} size="large" />}
      <FAB
        icon={<Ionicons name="cart" size={24} color="white" />}
        placement="right"
        color={COLORS.primary}
        onPress={() => navigation.navigate('Cart')}
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