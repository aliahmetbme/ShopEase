import { StyleSheet, Text, TouchableOpacity, Image, FlatList, View } from 'react-native'
import React from 'react'
import ProductsDescCards from './ProductsDescCards'
const noImageData = 'data:image/png;base64,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'
const CollecitonCard = ({ name, onPress, size, data }) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const renderData = ({ item }) => {
    return (
      <ProductsDescCards
        onPress={() => { }}
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
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <View style={{flexDirection:"row", flexWrap:"wrap"}}>
      <Image source={{ uri: data[0]?.thumbnail || noImageData }} style={{ minWidth: '50%', minHeight: 100, borderRadius: 10, marginTop: 10, resizeMode: "contain" }} />
      <Image source={{ uri: data[1]?.thumbnail || noImageData }} style={{ minWidth: '50%', minHeight: 100, borderRadius: 10, marginTop: 10, resizeMode: "contain" }} />
      </View>
      <Text style={styles.size}>{size} products</Text>
      {isVisible ? <FlatList
        data={data}
        renderItem={renderData}></FlatList> : null}
    </TouchableOpacity>
  )
}

export default CollecitonCard

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    alignSelf: "center",
    flex: 1
  },
  title: {
    fontWeight: "bold",
    fontSize: 15
  },
  size:{
    marginTop:5,
    fontSize:15,
    color:"gray"
  }
})