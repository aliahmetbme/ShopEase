import React from "react";
import { View, Button , StyleSheet, SafeAreaView, FlatList, Text} from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./Redux/store";
import { fetchTodos } from "./Redux/slice";
import ProductsDescCards from "./Components/ProductsDescCards";

function Main() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  React.useEffect(() => {
    () => dispatch(fetchTodos("https://dummyjson.com/products"))
  },[])

  const renderData = ({item}) => {
    return(
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
    <SafeAreaView style={{flex:1, backgroundColor:"#DADADA"}}>
      <FlatList
        numColumns={2}
        data={todos.data.products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderData}/>
    </SafeAreaView>
  );
}

export default function ProviderApp() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}