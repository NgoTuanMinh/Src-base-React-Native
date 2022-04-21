import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import RecommendAuction from '../../components/home/RecommendAuction';
import Banner from '../../components/layout/Banner';
import colors from '../../utils/colors';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Banner />
        <RecommendAuction
          imageUrl={`https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=`}
          avatarUrlCreator={`https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=`}
          nameCreator='Pawel Czerwinski'
          nameProduct='Silent Wave'
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.grayOffWhite, 
    // justifyContent: 'center',
  },
});

export default HomeScreen;
