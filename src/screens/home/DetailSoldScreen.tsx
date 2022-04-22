import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import Avatar from '../../components/common/avatar/Avatar';
import TagItem from '../../components/home/Tag';
import colors from '../../utils/colors';
import images from '../../utils/images';
import { fontWeights, sizes } from '../../utils/sizings';

// const LinkItem = ()

const listTag = ["color", "circle", 'black', 'art', "color", "circle", 'black', 'art'];

function DetailSoldScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapImage}>
        <Image source={{uri: 'https://wallpaperaccess.com/full/7280.jpg'}} style={styles.image} />
      </View>

      <View style={styles.wrapNameProduct}>
        <Text style={styles.nameProduct} >Silent Color</Text>
        <View style={styles.wrapIconHeart}>
          <Image source={images.heart} style={styles.iconHeart} />
        </View>
      </View>

      <View style={styles.wrapSeller}>
        <Avatar
          urlAvatar={undefined}
          name={'openart'}
          height={30}
        />
        <Text style={styles.sellerName}>@openart</Text>
      </View>

      <Text style={styles.textDescriptionProduct}>Together with my design team, we designed this futuristic Cyberyacht concept artwork. We wanted to create something that has not been created yet, so we started to collect ideas of how we imagine the Cyberyacht could look like in the future.</Text>

      <View style={styles.wrapListTag}>
        {listTag.map((tagValue: string, idx: number) => (
          <TagItem type={tagValue} key={idx} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayBackground,
    paddingHorizontal: sizes.size_16,
    marginTop: sizes.size_16,
  },
  wrapImage: {
    overflow: 'hidden',
    borderRadius: sizes.size_32,
    marginBottom: sizes.size_8,
    alignItems: 'center',
  },
  image: {
    borderRadius: sizes.size_32,
    width: sizes.size_320,
    height: sizes.size_400,
    resizeMode: 'cover',
  },
  wrapNameProduct: {
    flexDirection: 'row',
    marginTop: sizes.size_8,
    alignItems: 'center',
    paddingLeft: sizes.size_24,
    paddingRight: sizes.size_32,
    justifyContent: 'space-between',
  },
  nameProduct: {
    fontSize: sizes.size_24,
    lineHeight: sizes.size_32,
    fontWeight: fontWeights.fontWeight_700,
    color: colors.grayTitleActive,
  },
  wrapIconHeart: {
    justifyContent: 'center',
    padding: sizes.size_12,
    backgroundColor: colors.white,
    borderRadius: sizes.size_32,
  },
  iconHeart: {
    width: sizes.size_20,
    height: sizes.size_20,
  },
  wrapSeller: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingVertical: sizes.size_8,
    paddingHorizontal: sizes.size_12,
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: sizes.size_24,
    borderRadius: sizes.size_32,
  },
  sellerName: {
    fontSize: sizes.size_16,
    fontWeight: fontWeights.fontWeight_700,
    lineHeight: sizes.size_24,
    color: colors.grayBody,
    marginLeft: sizes.size_12,
  },
  textDescriptionProduct: {
    marginHorizontal: sizes.size_24,
    marginTop: sizes.size_12,
    lineHeight: sizes.size_20,
    fontSize: sizes.size_13,
    fontWeight: fontWeights.fontWeight_500,
    color: colors.grayLabel,
    marginBottom: sizes.size_16,
  },
  wrapListTag: {
    flexDirection: 'row',
    marginHorizontal: sizes.size_24,
    flexWrap: 'wrap',
    marginBottom: sizes.size_24,
  },
})

export default DetailSoldScreen;
