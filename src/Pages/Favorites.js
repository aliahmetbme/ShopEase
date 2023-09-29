import { StyleSheet, Text, View ,FlatList, SafeAreaView} from 'react-native'
import React from 'react'
import ProductsDescCards from '../Components/ProductsDescCards'
import {useSelector} from "react-redux"

const Favorites = ({navigation}) => {
  const favorites = useSelector(state => state.favorites)
  let x = {id:10,ds:"lskld"} 
  let y = {id:10,ds:"lskld"}

  const renderData = ({ item }) => {
    return (
      <ProductsDescCards
        onPress={() => navigation.navigate("Details", {id : item.id })}
        brand={item.brand}
        description={item.description}
        thumbnail={item.thumbnail}
        name={item.title}
        rate={item.rating}
        price={item.price}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.favoritesTitleContainer}>
        <Text style={styles.favoritesTitle}>Favorites</Text>
      </View>
      <FlatList 
        numColumns={2}
        data={favorites.favorites}
        renderItem={renderData}/>
    </SafeAreaView>
  )
}

export default Favorites

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  favoritesTitle:{
    fontSize:35,
    color:"#FF7F00",
    fontWeight:"900"
  },
  favoritesTitleContainer:{
    padding:10,
    borderBottomWidth:4,
    borderColor:"#FF7F00"
  }
})