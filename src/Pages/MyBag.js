import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
import BagButton from '../Components/BagButton';
import ProductsInBag from '../Components/ProductsInBag';
const MyBag = ({navigation}) => {
  try {
  const data = useSelector((state) => state.bag);
  console.log(data.bag[0])
  const total = data.bag.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0);
  console.log(total)

  const renderData = ({ item }) => {
    return (
      <ProductsInBag
        onPress={() => navigation.navigate("Details", {id : item.id })}
        brand={item.brand}
        description={item.description}
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
      <View style={{flex:1}}>
      <LottieView
        style={{flex:0.9}}
        source={require("../Assests/KhLApmMTa1.json")}
        autoPlay={true}
      />
      <Text style={{alignSelf:"center",verticalAlign:"top", color:"#FF7F00",fontWeight:"800", fontSize:30}}>Your Bag is Empty</Text>
      </View>
      
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList 
          data={data.bag}
          renderItem={renderData}/>
        <BagButton />
      </SafeAreaView>
    );
  }
} catch(error){
  console.log(error)
}
}


export default MyBag;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
