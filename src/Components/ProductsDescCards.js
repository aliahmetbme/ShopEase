import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import StarRating from "react-native-star-rating-widget"

const ProductsDescCards = (props) => {
    const sliderData = props.images.map((item) => {
        return {img : item}
    })

    return (
        <TouchableOpacity style={styles.container}>
            <Image source={{uri : props.images[0]}} style={{width:100,height:100, alignSelf:"center",resizeMode:"contain"}}></Image>
            <View style={{ flexDirection: "row", flexWrap: "wrap", marginVertical: 10, alignItems: "flex-end" }}>
                <Text ellipsizeMode='tail' numberOfLines={20} style={styles.brand}>{props.brand}</Text>
                <Text numberOfLines={20} style={styles.name}>{props.name}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", flexWrap:"wrap" }}>
                <StarRating
                    style={{ marginLeft: -5 }}
                    onChange={() => { }}
                    rating={props.rate}
                    starSize={18}></StarRating>
                <Text style={{ fontSize: 12, verticalAlign:"middle" }}>{props.rate}</Text>
            </View>
            <Text style={styles.price}>{props.price} TL</Text>
        </TouchableOpacity>
    )
}

export default ProductsDescCards

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: "white",
        padding: 12,
        flex: 1,
        borderRadius: 10,
    },
    brand: {
        fontSize: 15,
        fontWeight: "bold",
        marginRight: 5
    },
    name: {
        fontWeight: "200",
        fontSize: 10,
        verticalAlign: "bottom"
    },
    price:{
        fontWeight:"900",
        marginTop:10
    }
})