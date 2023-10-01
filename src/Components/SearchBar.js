import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import { useDispatch } from 'react-redux'
import { fetchTodos } from '../Redux/productSlice'
import { RFPercentage } from 'react-native-responsive-fontsize'

const searchBar = () => {

  const dispatch = useDispatch()
  const [text, setText] = useState("")

  function searchProduct() {
    dispatch(fetchTodos(`https://dummyjson.com/products/search?q=${text}`))
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => searchProduct()}>
        <Icon name="search-outline" color="black" size={25} style={styles.icon} />
      </TouchableOpacity>
      <TextInput
        style={{flex:1}}
        autoCapitalize='none'
        placeholder='Search...'
        value={text}
        onChangeText={(newText) => setText(newText)}
      />
      <TouchableOpacity onPress={() => setText("")}>
        <Icon name="trash-bin-outline" color="black" size={25}/>
      </TouchableOpacity>
    </View>
  )
}

export default searchBar

const styles = StyleSheet.create({
    container:{
        overflow:"hidden",
        margin:10,
        borderRadius: RFPercentage(6),
        paddingHorizontal:20,
        padding:RFPercentage(1),
        backgroundColor:"white",
        flexDirection:"row",
        alignItems:"center"
    },
    icon:{
      marginRight:10,
      alignSelf:"center",
    }
})