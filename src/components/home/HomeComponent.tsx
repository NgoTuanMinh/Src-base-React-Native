import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/reducers/authReducer';
import { sizes } from '../../utils/sizings';
import ButtonCommon from '../common/buttons/commonButton/CommonButton';
import InputText from '../common/inputText/InputText';
import Banner from '../layout/Banner';
import RecommendAuction from './RecommendAuction';

// interface IProps {

// }

const HomeComponent = () => {

  return (
    <View style={styles.container}>
      <Banner />
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
