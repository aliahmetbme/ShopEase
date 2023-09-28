import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const AddBagButton = ({onPress}) => {

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={{color:"white", fontWeight:"bold",fontSize:20}}>Complate</Text> 
    </TouchableOpacity>
  )
}

export default AddBagButton

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        margin:10,
        marginTop:40,
        paddingHorizontal:40,
        backgroundColor:"#FF7F00",
        borderRadius:10,
        padding:15,
        alignSelf:"flex-end",
        verticalAlign:"bottom"
    }
})