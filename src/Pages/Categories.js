import 'react-native-gesture-handler';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodos } from '../Redux/slice';
import CategoriesCard from '../Components/CategoriesCard';


const Categories = () => {
    const dispatch = useDispatch();
    const variables = useSelector((state) => state.todos)
    
    function renderItem({item}) {
        return(
            <CategoriesCard name={item} />
        )
    }

    useEffect(() => {
        dispatch(fetchTodos('https://dummyjson.com/products/categories'))
    }, [])

    return (
        <SafeAreaView style={{flex:1}} >
            <FlatList
                columnWrapperStyle={{flexWrap:"wrap"}}
                numColumns={2}
                data={variables.data}
                renderItem={renderItem}/>
        </SafeAreaView>
    )
}

export default Categories

const styles = StyleSheet.create({})