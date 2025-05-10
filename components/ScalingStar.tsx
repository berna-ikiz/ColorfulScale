import { View, Text, Animated, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const ScalingStar = () => {
  return (
    <Animated.View style ={styles.starContainer}>
        <Text>aaa</Text>
        <FontAwesome name='star' size={50} color="white" />
    </Animated.View>
  )
}
const styles = StyleSheet.create({
    starContainer : {
        width: 100,
        height: 100,
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default ScalingStar