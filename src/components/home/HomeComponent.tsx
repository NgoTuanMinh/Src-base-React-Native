import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropdownCommon from '../common/dropdown/Dropdown';
import InputText from '../common/inputText/InputText';
import SliderCustom from '../common/slider/Slider';

// interface IProps {

// }

const HomeComponent = () => {
  const [text, setText] = useState<number>(0);
  const onChange = (value: any) => {
    console.log('value', value);
    setText(value);
  };
  return (
    <View style={styles.container}>
      <View style={{width: '100%', padding: 24}}>
        {/* <DropdownCommon
          onChange={onChange}
          items={[
            {label: 'Football', value: 'football'},
            {label: 'Baseball', value: 'baseball'},
            {label: 'Hockey', value: 'hockey'},
          ]}
          placeHolder={{label: 'Select....', value: null}}
        /> */}
        {/* <InputText onChange={onChange} value={text} label="First name" /> */}
        <SliderCustom value={text} onChange={onChange} />
      </View>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeComponent;
