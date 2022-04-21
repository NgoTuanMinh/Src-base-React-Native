import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import colors from '../../utils/colors';
import { fontWeights, sizes } from '../../utils/sizings';
import Avatar from '../common/avatar/Avatar';
import Banner from '../layout/Banner';

interface IProps {
  imageUrl: string;
  nameProduct: string;
  nameCreator: string;
  avatarUrlCreator: string;
  placeABid?: () => void;
  viewArtWork?: () => void;
}

const RecommendAuction = ({imageUrl, nameCreator, nameProduct, avatarUrlCreator}: IProps) => {  
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.wrapInfo}>
          <View style={styles.wrapImage}>
            <Image source={{uri: imageUrl}} style={styles.image} />
          </View>

          <Text style={styles.nameProduct}>{nameProduct}</Text>

          <View style={styles.wrapInfoCreator}>
            <Avatar
              urlAvatar={avatarUrlCreator}
              isOnline={true}
              height={sizes.size_52}
              name={nameCreator}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    borderRadius: sizes.size_32,
    overflow: 'hidden',
    backgroundColor: colors.white,
    padding: sizes.size_16,
  },
  wrapInfo: {
    borderRadius: sizes.size_32,
  },
  wrapImage: {
    overflow: 'hidden',
    borderRadius: sizes.size_32,
    marginBottom: sizes.size_8,
  },
  image: {
    borderRadius: sizes.size_32,
    width: sizes.size_320,
    height: sizes.size_400,
    resizeMode: 'cover'
  },
  nameProduct: {
    color: colors.grayTitleActive,
    fontWeight: fontWeights.fontWeight_700,
    fontSize: sizes.size_24,
    lineHeight: sizes.size_32,
  },
  wrapInfoCreator: {
    flexDirection: 'row',
    marginTop: sizes.size_4,
  }
});

export default RecommendAuction;
