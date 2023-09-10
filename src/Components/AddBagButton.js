import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const AddBagButton = () => {
  const dispatch = useDispatch()
  const amount = 1;
  const detailedData = useSelector(state => state.todos).detailedData
  return (
    <TouchableOpacity onPress={() => dispatch({type:"ADD_BAG", payload:{...detailedData,amount:amount}})} style={styles.container}>
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