import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const AddCollectionButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.container,{alignSelf: props.isNull ? "center" : "flex-end"}]}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default AddCollectionButton

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FF7F00",
        alignSelf:"flex-end",
        margin:20,
        padding:10,
        paddingHorizontal:20,
        borderRadius:50
    }, title:{
      color:"white",
      fontSize:20,
      fontWeight:"900"
    }
})