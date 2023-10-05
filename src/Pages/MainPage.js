import React, {useEffect} from "react";
import { View, SafeAreaView, FlatList, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../Redux/productSlice";
import ProductsDescCards from "../Components/ProductsDescCards";
import CategoryDisplayingCard from "../Components/CategoryDisplayingCard";
import SearchBar from "../Components/SearchBar";
import ProfileComponent from "../Components/ProfileComponent";

import database from "@react-native-firebase/database"
import auth from "@react-native-firebase/auth"

export default function MainPage({ navigation }) {

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const categories = useSelector((state) => state.category)

  React.useEffect(() => {
    dispatch(fetchTodos("https://dummyjson.com/products?limit=0&select=title,price,rating,thumbnail,brand,id"))
  }, [dispatch])

  useEffect((() => {
    database().ref(`/${auth().currentUser.uid}/bag`).on("value", snapshot => {
      
      let productsInBag = snapshot.val()
      if (productsInBag) {
        dispatch({type:"GET_BAG_FROM_DB", payload:productsInBag})
      } else {
        dispatch({type:"GET_BAG_FROM_DB", payload:[]})
      }
    })
  }), [auth().currentUser.uid])

  useEffect((() => {
    database().ref(`/${auth().currentUser.uid}/collections`).on("value", snapshot => {
      
      let data = snapshot.val();
      if (data) {
        dispatch({type:"GET_COLLECTIONS_FROM_DB", payload:data})
      } else {
        dispatch({type:"GET_COLLECTIONS_FROM_DB", payload:[]})

      }
    })
  }), [auth().currentUser.uid])

  const renderCategories = ({ item }) => {
    return (
      <CategoryDisplayingCard item={item} />
    )
  }

  const renderData = ({ item }) => {
    return (
      <ProductsDescCards
        onPress={() => navigation.navigate("Details", { id: item.id })}
        brand={item.brand}
        thumbnail={item.thumbnail}
        name={item.title}
        rate={item.rating}
        price={item.price}
      />
    );
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#d1d5db" }}>
      <FlatList
        ListHeaderComponent={
          <View>
            <ProfileComponent onPress={() => navigation.navigate("Profile")}></ProfileComponent>
            <SearchBar />
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={categories.fav_categories}
              renderItem={renderCategories} />
          </View>
        }
        numColumns={2}
        data={todos.data.products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderData} />
    </SafeAreaView>
  );
}