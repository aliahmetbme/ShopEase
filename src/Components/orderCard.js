import { Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"
const orderCard = ({ props, onPress }) => {
    const totalProductAmount = props.products.bag.reduce((total, product) => {
        return total + product.amount;
    }, 0);

    const Images = props.products.bag.map((item, index) => {
        return (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image key={index} source={{ uri: item.thumbnail }} style={{ marginRight: 10, marginVertical: 10, width: 80, height: 80, resizeMode: "contain", borderRadius: 10 }}></Image>
                <View>
                    <Text>{item.title}</Text>
                    <Text>Quantity: {item.amount} | {item.price} $</Text>
                </View>
            </View>
        )
    })


    return (
        <SafeAreaView onPress={onPress} style={styles.container}>
            <View style={styles.subContainer}>
                <View style={{flex:0.8}}>
                    <Text style={styles.date}>Date : {props.time.split(" ")[0]}</Text>
                    <Text style={{ marginHorizontal: 10, fontSize: 15 }}>Adress: {props.detailedAdress}</Text>
                </View>
                <TouchableOpacity onPress={onPress} style={{flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}>
                    <Text style={{color:"#FF7F00",fontSize:17}}>Details</Text>
                    
                    <Icon name="chevron-forward-outline" size={30} color="#FF7F00"></Icon>

                    
                </TouchableOpacity>


            </View>
            <View style={styles.sub2Container}>
                <View>
                    {Images}
                </View>
            </View>

        </SafeAreaView>
    )
}

export default orderCard

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: "#DADADA",
        borderRadius: 10
    },
    subContainer: {
        borderBottomWidth: 1,
        borderColor: "gray",
        padding: 10,
        paddingHorizontal: 20,
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-between"

    },
    sub2Container: {
        padding: 10,
        paddingHorizontal: 20,
    },
    date: {
        color: "black",
        margin: 10,
        fontSize: 15
    },

})