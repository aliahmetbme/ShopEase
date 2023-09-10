import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BagButton = () => {
  return (
    <View style={styles.contianer}>
      <Text style={styles.title}>BagButton</Text>
    </View>
  )
}

export default BagButton

const styles = StyleSheet.create({
    contianer:{
        backgroundColor:"#FF7F00",
        alignSelf:"flex-end",
        padding:10,
        paddingHorizontal:20,
        borderRadius:20,
        margin:20
    },
    title:{
        fontSize:20,
        fontWeight:"900"
    }
})