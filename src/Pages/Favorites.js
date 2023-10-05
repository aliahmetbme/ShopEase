import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'
import React, {useEffect} from 'react'
import ProductsDescCards from '../Components/ProductsDescCards'
import { useSelector, useDispatch, } from "react-redux"
import LottieView from 'lottie-react-native'
import database from "@react-native-firebase/database"
import auth from "@react-native-firebase/auth"

const Favorites = ({ navigation }) => {
  const favoritesData = useSelector(state => state.favorites)
  const dispatch = useDispatch()

  useEffect(
    (() => {
      database().ref(`/${auth().currentUser.uid}/favorites`).on(
        "value", snaphsot => {
          const favorites = snaphsot.val()
          if (favorites){
            dispatch({type:"GET_FAVORITES_FROM_DB", payload:favorites})
          }  else {
            dispatch({type:"GET_FAVORITES_FROM_DB", payload:[]})
          }
        }
      )
    })
  ,[auth().currentUser.uid])

  const renderData = ({ item }) => {
    return (
      <ProductsDescCards
        onPress={() => navigation.navigate("Details", { id: item.id })}
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
      {favoritesData.favorites.length === 0 ? <LottieView source={require("../Assests/udVqVxOWVa.json")} useNativeLooping autoPlay loop style={{ flex: 1, }}></LottieView>
        : (
          <FlatList
            numColumns={2}
            data={favoritesData.favorites}
            renderItem={renderData}
            
          />
        )}
    </SafeAreaView>
  )
}

export default Favorites

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  favoritesTitle: {
    fontSize: 35,
    color: "#FF7F00",
    fontWeight: "900"
  },
  favoritesTitleContainer: {
    padding: 10,
    borderBottomWidth: 4,
    borderColor: "#FF7F00"
  }
})