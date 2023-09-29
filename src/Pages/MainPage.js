import React from "react";
import { View, SafeAreaView, FlatList, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../Redux/productSlice";
import ProductsDescCards from "../Components/ProductsDescCards";
import CategoryDisplayingCard from "../Components/CategoryDisplayingCard";
import SearchBar from "../Components/SearchBar";
import ProfileComponent from "../Components/ProfileComponent";

export default function MainPage({ navigation }) {

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