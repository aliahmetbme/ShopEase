import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import StarRating from "react-native-star-rating-widget"
import AmountComponent from './AmountComponent'

const ProductsInBag = (props) => {
    try {
        return (
            <TouchableOpacity style={styles.container} onPress={props.onPress}>
                <View>
                    <Image source={{ uri: props.thumbnail }} style={{ width: 150, height: 150, alignSelf: "center", resizeMode: "contain", marginHorizontal: 10 }}></Image>
                    {(props.stock < 10) ? <Text style={styles.solding}>Solding Out !!</Text> : null}
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.textRow}>
                        <Text style={styles.brand}>{props.brand}</Text>
                        <Text style={styles.name}>{props.name}</Text>
                    </View>
                    <View style={{flexDirection:"row", flex:1,justifyContent:"space-between"}}>
                        <AmountComponent amount={props.amount}/>
                        <Text style={styles.price}>{props.price} $</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    } catch (error) {
        console.log(error)
    }
}

export default ProductsInBag

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: "white",
        padding: 12,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    textContainer: {
        flex: 1,
    },
    textRow: {
        flex:1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems:"flex-end",
        alignSelf:"flex-start",
        marginVertical:15
    },
    brand: {
        fontSize: 20,
        fontWeight: "bold",
        marginRight: 5,
    },
    name: {
        fontWeight: "200",
        fontSize: 15,
    },
    price: {
        fontWeight: "900",
        fontSize:20,
        marginTop: 10,
        alignSelf:"flex-end"
    },
    solding: {
        color: "#DC143C",
        fontSize: 20,
        fontWeight: "900",
        margin: 10,
    }
})
