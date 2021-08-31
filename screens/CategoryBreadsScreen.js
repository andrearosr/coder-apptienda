import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

export default function CategoryBreadsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Category Bread</Text>
      <Button title="GO TO DETAIL" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
