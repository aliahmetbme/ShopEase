import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchTodos } from '../Redux/productSlice'
const CategoryDisplayingCard = ({ item }) => {
    const dispatch = useDispatch()
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => dispatch(fetchTodos(`https://dummyjson.com/products/category/${item}`))}>
                <Text style={styles.categoryname}>{item.replace(/^\w/, c => c.toUpperCase())}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CategoryDisplayingCard

const styles = StyleSheet.create({
    container: {
        margin: 10,
        paddingHorizontal: 20,
        backgroundColor: "white",
        justifyContent: "center",
        borderRadius: 20,
        padding:10
    },
    categoryname: {
        fontWeight: "bold",
        fontSize: 18,
        
    }
})