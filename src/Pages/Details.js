import { SafeAreaView, StyleSheet, Text, View, StatusBar, Button, ImageBackground, Touchable, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState, useCallback, useMemo, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchDetails } from '../Redux/productSlice';
import { ImageSlider } from 'react-native-image-slider-banner';
import StarRating from 'react-native-star-rating-widget';
import Icon from "react-native-vector-icons/Ionicons";
import Modal from 'react-native-modal';
import AddBagButton from '../Components/AddBagButton';
import { FlatList } from 'react-native-gesture-handler';

const Details = ({ route }) => {
  const detailedData = useSelector(state => state.todos).detailedData
  const collectionsData = useSelector(state => state.collections).collections

  const dispatch = useDispatch()
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    dispatch(fetchDetails(`https://dummyjson.com/products/${id}`))
  }, [])

  const oldPrice = (detailedData?.price * 100) / (100 - detailedData?.discountPercentage)
  const sliderData = detailedData?.images?.map((item) => {
    return { img: item }
  })

  if (detailedData.loadingDetails) {
    return (
      <SafeAreaView>
        <Text>jdoijsa</Text>
      </SafeAreaView>
    )
  }

  function renderData({item}) {
    return(
      <TouchableOpacity onPress={() => dispatch({type:"ADD_PRODUCT_COLLECTION", payload:[detailedData, item]} )} style={{padding:10,justifyContent:"center",backgroundColor:"#DADADA", alignSelf:"center",paddingHorizontal:20,borderRadius:20,margin:10}}>
        <Text style={{fontSize:30}}>{item}</Text>
      </TouchableOpacity>
    )
  }

  const id = route.params.id;

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ backgroundColor: "white" }}>
        <ImageSlider
          previewImageContainerStyle={{ marginTop: StatusBar.currentHeight }}
          data={sliderData}></ImageSlider>
        <Text style={styles.brand}>{detailedData.brand}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 10, margin: 10, borderWidth: 2, borderColor: "#DADADA" }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.rating}>{detailedData.rating}</Text>
            <StarRating
              style={{ marginVertical: -15, padding: 10, borderRadius: 20, alignSelf: "flex-start" }}
              starSize={25}
              maxStars={5}
              rating={detailedData.rating}
              onChange={() => {}}>
            </StarRating>
          </View>
          <TouchableOpacity onPress={() => { dispatch({ type: "ADD_FAVORITES", payload: detailedData }) }}>
            <Icon name="heart-outline" size={25} color="black"></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionDetails}>{detailedData.description}</Text>
          <Text style={{ fontWeight: 900, color: "#DC143C", marginVertical: 10, fontSize: 20 }}>Stock: {detailedData.stock}</Text>
        </View>
        <View style={styles.collectionContainer}>
          <Icon onPress={toggleModal} name="bookmark-outline" color="#FF7F00" size={30}></Icon>
          <Text style={{ fontWeight: "bold", color: "black" }}>  ADD COLLECTION</Text>
        </View>
      </ScrollView>
      <SafeAreaView style={styles.footer}>
        <View style={styles.prices}>
          <Text style={styles.oldPrice}>{oldPrice.toFixed(2)} $</Text>
          <Text style={styles.newPrice}>{detailedData.price} $</Text>
          <Text style={{ color: "green" }}>Delivery free !!</Text>
        </View>
        <AddBagButton />
      </SafeAreaView>
      <Modal style={{justifyContent:"flex-end",margin:0}} swipeDirection="down" onBackdropPress={toggleModal} propagateSwipe={true}	hideModalContentWhileAnimating={true} useNativeDriver={true} backdropOpacity={0.5} isVisible={isModalVisible}>
        <SafeAreaView style={{ flex: 0.3, backgroundColor:"#ffffff",borderTopWidth:5,borderColor:"#FF7F00"}}>
           <FlatList
            data={Object.keys(collectionsData)}
            renderItem={renderData}
            keyExtractor={(item) => item.toString()}
          />
        </SafeAreaView>
      </Modal>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  rating: {
    fontWeight: "bold",
    fontSize: 15
  },
  description: {
    padding: 10,
    borderWidth: 2,
    borderColor: "#DADADA",
    margin: 10
  },
  descriptionDetails: {
    color: "black",
    fontWeight: 700,
    fontSize: 15
  },
  footer: {
    borderTopWidth: 1,
    flexDirection: "row",
    borderColor: "#DADADA",
    justifyContent: "space-between",
    padding: 30
  },
  prices: {
    margin: 10,
    marginLeft: 20
  },
  oldPrice: {
    color: "gray",
    fontSize: 13,
    textDecorationLine: "line-through"
  },
  newPrice: {
    color: "#DC143C",
    fontWeight: "600",
    fontSize: 20
  },
  collectionContainer: {
    margin: 10,
    borderWidth: 1,
    borderColor: "#DADADA",
    padding: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  brand: {
    color: "black",
    fontWeight: 900,
    fontSize: 20,
    margin: 10
  }
})