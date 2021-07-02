import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Category Screen</Text>
      <Button
        title="Ir a Categorias de Pan"
        onPress={() => {
          navigation.navigate('BreadCategory')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;
