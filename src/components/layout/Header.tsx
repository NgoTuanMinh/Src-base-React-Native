import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import images from '../../utils/images'
import { sizes } from '../../utils/sizings'
import colors from '../../utils/colors'

export default function Header() {
  return (
    <View style={styles.wrapHeader}>
      <Image source={images.logo} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapHeader: {
		padding: sizes.size_16,
		paddingBottom: 0,
		backgroundColor: colors.grayOffWhite,
	},
	image: {

	},
})