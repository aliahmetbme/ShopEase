import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProductsDescCards from '../Components/ProductsDescCards'
const ProductsCollectionPage = ({route,navigation}) => {
    const [products] = useState(route.params.data)

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
    <View style={styles.container}>
        <FlatList 
            data={products}
            renderItem={renderData}/>
    </View>
  )
}

export default ProductsCollectionPage

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#d1d5db"
    }
})