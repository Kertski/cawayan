import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

const App = () => {
  return (
    <ScrollView stickyHeaderIndices={[1]}>
      <View>
        <Text style={styles.header}>
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  overline: {
    fontSize: 12,
    fontWeight: '100'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  spacer: {
    height: 10,
  }
});

export default App;