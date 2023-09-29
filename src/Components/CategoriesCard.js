import { StyleSheet, Text, Touchable, View, StatusBar, Dimensions } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
const CategoriesCard = ({ name }) => {
  const dispatch = useDispatch()

  const data = useSelector((state) => state.category)

  const handlePress = () => {
    dispatch({ type: "SET_CATEGORIES", payload: name })
  }
  return (
    <TouchableOpacity onPress={handlePress} style={[styles.container,  data.fav_categories.includes(name) ? {backgroundColor:  "#FF7F00" } : null]}>
      <Text style={[styles.categoryName,  data.fav_categories.includes(name) ? {color:  "white" } : null]}>{name}</Text>
    </TouchableOpacity>
  )
}

export default CategoriesCard

const styles = StyleSheet.create({
  container: {
    //marginTop: StatusBar.currentHeight || 0,
    flex: 1,
    margin: 10,
    backgroundColor: "#DADADA",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    alignSelf: "center",
    width:Dimensions.get("screen").width / 2 * 0.8,
    
  },
  categoryName: {
    fontSize: 20,
    fontWeight: "900",
  }
})