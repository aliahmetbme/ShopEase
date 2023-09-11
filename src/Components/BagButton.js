import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const BagButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.contianer}>
      <Text style={styles.title}>Confirm Bag</Text>
    </TouchableOpacity>
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
        margin:20,
        marginTop:10
    },
    title:{
        fontSize:20,
        fontWeight:"900",
        color:"white"
    }
})