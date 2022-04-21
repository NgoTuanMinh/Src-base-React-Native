import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LiveAuction from '../../components/home/LiveAuction';
import RecommendAuction from '../../components/home/RecommendAuction';
import Banner from '../../components/layout/Banner';
import colors from '../../utils/colors';
import {sizes} from '../../utils/sizings';

function HomeScreen() {
  const onPress = () => {
    console.log('123');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <Banner />
        {/* <RecommendAuction
          imageUrl={
            'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q='
          }
          avatarUrlCreator={
            'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q='
          }
          nameCreator="Pawel Czerwinski"
          nameProduct="Silent Wave"
          liked={false}
          reservePrice={1.5}
          viewArtWork={onPress}
          placeABid={onPress}
          likeAuction={onPress}
        /> */}
        <LiveAuction
          imageUrl={
            'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q='
          }
          avatarUrlCreator={
            'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q='
          }
          nameCreator="Pawel Czerwinski"
          nameProduct="Silent Wave"
          liked={false}
          currentBid={1.5}
          viewAuction={onPress}
          likeAuction={onPress}
          isOnline={true}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.grayBackground,
    paddingHorizontal: sizes.size_8,
  },
});

export default HomeScreen;
