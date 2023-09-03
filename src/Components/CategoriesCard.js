import { StyleSheet, Text, Touchable, View,StatusBar } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector} from 'react-redux'
const CategoriesCard = ({name}) => {
    const dispatch = useDispatch()
    const handlePress = () => {
        dispatch({ type: "SET_CATEGORIES", payload: name })
    }
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.categoryName}>{name}</Text>
    </TouchableOpacity>
  )
}

export default CategoriesCard

const styles = StyleSheet.create({
    container:{
        //marginTop: StatusBar.currentHeight || 0,
        flex:1,
        margin:10,
        backgroundColor:"#DADADA",
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:20,
        alignSelf:"center"
    },
    categoryName:{
        fontSize:25, 
        fontWeight:"900",
    }
})