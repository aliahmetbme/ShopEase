import React, { useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import LottieView from 'lottie-react-native';
import BagButton from '../Components/BagButton';
import ProductsInBag from '../Components/ProductsInBag';


const MyBag = ({ navigation }) => {

  try {
    const data = useSelector((state) => state.bag);
    const total = data.bag.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0);




    const renderData = ({ item }) => {
      return (
        <ProductsInBag
          onPress={() => navigation.navigate("Details", { id: item.id })}
          brand={item.brand}
          thumbnail={item.thumbnail}
          name={item.title}
          rate={item.rating}
          price={item.price}
          stock={item.stock}
          amount={item.amount}
          id={item.id}
        />
      );
    };


    if (Array.isArray(data.bag) && data.bag.length === 0) {
      return (
        <View style={{ flex: 1, justifyContent: "center", backgroundColor:"#d1d5db" }}>
          <LottieView
            style={{ flex: 0.5 }}
            source={require("../Assests/vPmqkZWwb3.json")}
            autoPlay={true}
          />
          <Text style={{ alignSelf: "center", verticalAlign: "top", color: "#FF7F00", fontWeight: "800", fontSize: 30 }}>Your Bag is Empty</Text>
        </View>

      );
    } else {
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={data.bag}
            renderItem={renderData} />
          <View style={{ backgroundColor:"white", borderColor:"#FF7F00",flexDirection: "row", borderTopWidth: 2, justifyContent: "space-between", alignItems: "flex-end" }}>
            <View style={{margin:10, marginLeft:20 }}>
              <Text style={{color:"#898989",fontSize:16}}>Total</Text>
              <Text style={{color:"black",fontSize:20}}>{total} $</Text>
              <Text style={{ color: "green" }}>Delivery free !!</Text>
            </View>
            <BagButton onPress={() => navigation.navigate("PaidPage", {total:total})}/>
          </View>
        </SafeAreaView>
      );
    }
  } catch (error) {
    console.log(error)
  }
}


export default MyBag;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d1d5db"
  },
});
