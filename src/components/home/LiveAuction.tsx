import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import colors from '../../utils/colors';
import images from '../../utils/images';
import {fontWeights, sizes} from '../../utils/sizings';
import Avatar from '../common/avatar/Avatar';

interface IProps {
  imageUrl: string;
  nameProduct: string;
  nameCreator: string;
  avatarUrlCreator: string;
  viewAuction: () => void;
  likeAuction: () => void;
  liked: boolean;
  currentBid: number;
  isOnline: boolean;
}

const LiveAuction = ({
  imageUrl,
  nameCreator,
  nameProduct,
  avatarUrlCreator,
  liked = false,
  currentBid,
  viewAuction,
  isOnline = false,
}: IProps) => {
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
              isOnline={isOnline}
              height={sizes.size_52}
              name={nameCreator}
            />
            <View style={styles.wrapNameCreator}>
              <Text style={styles.textNameCreator}>{nameCreator}</Text>
              <Text style={styles.textCreatorDescription}>Creator</Text>
            </View>
            <View style={styles.wrapHeart}>
              <Image
                source={liked ? images.heartActive : images.heart}
                style={styles.heart}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.wrapInfoAuction}>
        <View style={styles.leftInfoAuction}>
          {true && <View style={styles.onlineStatus} />}
          <Text style={styles.leftInfoAuctionText}>Current Bid</Text>
          <Text style={styles.leftInfoAuctionPrice}>{currentBid} ETH</Text>
        </View>
        <View>
          <Text style={styles.leftInfoAuctionText}>Ending in</Text>
          <Text style={styles.leftInfoAuctionPrice}>27m 30s</Text>
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
    marginBottom: sizes.size_24,
  },
  wrapper: {
    borderRadius: sizes.size_32,
    overflow: 'hidden',
    backgroundColor: colors.white,
    padding: sizes.size_16,
    marginBottom: sizes.size_16,
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
    resizeMode: 'cover',
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
    height: sizes.size_60,
  },
  wrapNameCreator: {
    marginLeft: sizes.size_12,
  },
  textNameCreator: {
    fontSize: sizes.size_18,
    lineHeight: sizes.size_28,
    fontWeight: fontWeights.fontWeight_700,
  },
  textCreatorDescription: {
    fontSize: sizes.size_14,
    fontWeight: fontWeights.fontWeight_500,
    lineHeight: sizes.size_20,
  },
  wrapHeart: {
    marginLeft: 'auto',
    justifyContent: 'center',
    marginBottom: sizes.size_16,
    marginRight: sizes.size_8,
  },
  heart: {
    width: sizes.size_24,
    height: sizes.size_24,
  },
  wrapReservePrice: {
    flexDirection: 'row',
    marginTop: sizes.size_8,
    marginBottom: sizes.size_16,
  },
  reservePriceTitle: {
    fontSize: sizes.size_16,
    lineHeight: sizes.size_22,
    fontWeight: fontWeights.fontWeight_400,
    paddingTop: sizes.size_8,
    color: colors.grayTitleActive,
  },
  reserverPrice: {
    fontSize: sizes.size_24,
    lineHeight: sizes.size_32,
    fontWeight: fontWeights.fontWeight_700,
    color: colors.grayTitleActive,
  },
  wrapInfoAuction: {
    backgroundColor: colors.white,
    borderColor: colors.grayBody,
    borderRadius: sizes.size_50,
    borderWidth: sizes.size_1,
    width: '96%',
    paddingVertical: sizes.size_12,
    marginHorizontal: sizes.size_4,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  leftInfoAuction: {
    position: 'relative',
  },
  leftInfoAuctionText: {
    fontSize: sizes.size_16,
    fontWeight: fontWeights.fontWeight_400,
    color: colors.grayLabel,
  },
  leftInfoAuctionPrice: {
    fontSize: sizes.size_20,
    fontWeight: fontWeights.fontWeight_700,
    lineHeight: sizes.size_28,
    color: colors.grayTitleActive,
  },
  onlineStatus: {
    backgroundColor: colors.success,
    width: sizes.size_10,
    height: sizes.size_10,
    borderRadius: sizes.size_5,
    position: 'absolute',
    top: sizes.size_4,
    left: -sizes.size_12,
    borderWidth: sizes.size_2,
    borderColor: colors.white,
  },
});

export default LiveAuction;
