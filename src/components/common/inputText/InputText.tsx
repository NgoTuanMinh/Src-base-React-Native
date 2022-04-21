import * as React from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {sizes} from '../../../utils/sizings';

interface InputTextProps {
  onChange?: (e: any) => void;
  value?: string;
  label?: string;
}

const InputText = ({onChange, value, label}: InputTextProps) => {
  return (
    <View style={styles.wrapInput}>
      <TextInput
        style={styles.input}
        label={label}
        onChangeText={onChange}
        value={value}
        mode="outlined"
        blurOnSubmit={true}
        onSubmitEditing={Keyboard.dismiss}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapInput: {
    width: '100%',
    height: sizes.size_56,
  },
  input: {
    borderRadius: sizes.size_10,
    height: sizes.size_56,
    width: '100%',
  },
});

export default InputText;
