import 'react-native-gesture-handler';
import { FlatList, SafeAreaView, StyleSheet, View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCategories } from '../Redux/categoriesSlice';
import CategoriesCard from '../Components/CategoriesCard';


const Categories = () => {
    const dispatch = useDispatch();
    const variables = useSelector((state) => state.categories)
    console.log(variables)

    function renderItem({ item }) {
        return (
            <CategoriesCard name={item} />
        )
    }

    useEffect(() => {
        dispatch(fetchCategories('https://dummyjson.com/products/categories'))
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <View style={styles.CategoriesTitleContainer}>
                <Text style={styles.CategoriesTitle}>Categories</Text>
            </View>
            <FlatList
                columnWrapperStyle={{ flexWrap: "wrap", justifyContent: "space-evenly" }}
                numColumns={2}
                data={variables.categories}
                renderItem={renderItem} />
        </SafeAreaView>
    )
}

export default Categories

const styles = StyleSheet.create({
    CategoriesTitle:{
        fontSize:35,
        color:"#FF7F00",
        fontWeight:"900"
      },
      CategoriesTitleContainer:{
        padding:10,
        borderBottomWidth:4,
        borderColor:"#FF7F00"
      }
})