import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const AddBagButton = () => {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.container}>
      <Text style={{color:"white", fontWeight:"bold"}}>ADD BAG</Text> 
    </TouchableOpacity>
  )
}

export default AddBagButton

const styles = StyleSheet.create({
    container:{
        flex:0.8,
        alignItems:"center",
        justifyContent:"center",
        margin:10,
        marginVertical:15,
        paddingHorizontal:40,
        backgroundColor:"#FF7F00",
        borderRadius:5
    }
})