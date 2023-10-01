import { StyleSheet, Text, Touchable, View, StatusBar, Dimensions } from 'react-native'
import React, {useMemo} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { RFPercentage } from 'react-native-responsive-fontsize'
const CategoriesCard = React.memo(({ name }) => {
  const dispatch = useDispatch()

  const data = useSelector((state) => state.category)
  
  const fav_Categories = useMemo(() => {
    return data.fav_categories;
  }, [data.fav_categories]);
  

  const handlePress = () => {
    dispatch({ type: "SET_CATEGORIES", payload: name })
  }
  return (
    <TouchableOpacity onPress={handlePress} style={[styles.container,  fav_Categories.includes(name) ? {backgroundColor:  "#FF7F00" } : null]}>
      <Text style={[styles.categoryName,  fav_Categories.includes(name) ? {color:  "white" } : null]}>{name.replace(/^\w/, c => c.toUpperCase())}</Text>
    </TouchableOpacity>
  )
})

export default CategoriesCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: "#DADADA",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 30,   
  },
  categoryName: {
    fontSize: RFPercentage(2.5),
    fontWeight: "900",
  }
})