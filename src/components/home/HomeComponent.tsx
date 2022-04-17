import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropdownCommon from '../common/dropdown/Dropdown';

// interface IProps {

// }

const HomeComponent = () => {
  const onChange = (value: any) => {
    console.log('123', value);
  };
  return (
    <View style={styles.container}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', width: 300}}>
        <DropdownCommon
          onChange={onChange}
          items={[
            {label: 'Football', value: 'football'},
            {label: 'Baseball', value: 'baseball'},
            {label: 'Hockey', value: 'hockey'},
          ]}
          placeHolder={{label: 'Select....', value: null}}
        />
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
