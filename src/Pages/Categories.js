import 'react-native-gesture-handler';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCategories } from '../Redux/categoriesSlice';
import CategoriesCard from '../Components/CategoriesCard';


const Categories = () => {
    const dispatch = useDispatch();
    const variables = useSelector((state) => state.categories)
    console.log(variables)
    
    function renderItem({item}) {
        return(
            <CategoriesCard name={item} />
        )
    }

    useEffect(() => {
        dispatch(fetchCategories('https://dummyjson.com/products/categories'))
    }, [])

    return (
        <SafeAreaView style={{flex:1}} >
            <FlatList
                columnWrapperStyle={{flexWrap:"wrap"}}
                numColumns={4}
                data={variables.categories}
                renderItem={renderItem}/>
        </SafeAreaView>
    )
}

export default Categories

const styles = StyleSheet.create({})