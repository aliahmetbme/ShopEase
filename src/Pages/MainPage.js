import React from "react";
import { View, Button, StyleSheet, SafeAreaView, FlatList, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../Redux/productSlice";
import ProductsDescCards from "../Components/ProductsDescCards";
import CategoryDisplayingCard from "../Components/CategoryDisplayingCard";

export default function Main() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const categories = useSelector((state) => state.category)

  React.useEffect(() => {
    dispatch(fetchTodos("https://dummyjson.com/products?limit=0"))
  }, [])

  const renderCategories = ({ item }) => {
    return (
      <CategoryDisplayingCard item={item} />
    )
  }

  const renderData = ({ item }) => {
    return (
      <ProductsDescCards
        brand={item.brand}
        description={item.description}
        images={item.images}
        name={item.title}
        rate={item.rating}
        price={item.price}></ProductsDescCards>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#DADADA" }}>
      <View>
      <FlatList 
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={categories.fav_categories}
        renderItem={renderCategories}/>
      </View>
      <FlatList
        numColumns={2}
        data={todos.data.products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderData} />
    </SafeAreaView>
  );
}
