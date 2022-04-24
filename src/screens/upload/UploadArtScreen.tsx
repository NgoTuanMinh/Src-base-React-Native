import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputFile from '../../components/common/inputFile/InputFile';

function UploadArtScreen() {
  return (
    <View style={styles.container}>
      <Text>Upload art screen</Text>
      <InputFile />
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

export default UploadArtScreen;
