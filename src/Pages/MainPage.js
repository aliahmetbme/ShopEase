import React from "react";
import { View, Button, StyleSheet, SafeAreaView, FlatList, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../Redux/slice";
import ProductsDescCards from "../Components/ProductsDescCards";

export default function Main() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const categories = useSelector((state) => state.category)
  console.log(todos)

  React.useEffect(() => {
    dispatch(fetchTodos("https://dummyjson.com/products?limit=0"))
  }, [])

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
      <FlatList 
        horizontal={true}
        data={categories.fav_categories}
        renderItem={({ item }) => <Text>{item}</Text>} />
      <FlatList
        numColumns={2}
        data={todos.data.products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderData} />
    </SafeAreaView>
  );
}
