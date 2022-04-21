import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text>Explore screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ExploreScreen;
