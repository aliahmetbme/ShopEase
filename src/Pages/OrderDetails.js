import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView,ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import database from "@react-native-firebase/database"
import auth from "@react-native-firebase/auth"
import AdressCard from '../Components/AdressCard'
import Icon from "react-native-vector-icons/Ionicons"
import CreditCard from '../Components/CreditCard'
import { RFPercentage } from 'react-native-responsive-fontsize'
const OrderDetails = ({ route }) => {
    const id = route.params.id
    const [orderDetail, setOrderDetail] = useState()
    useEffect(() => {
        database()
            .ref(`/${auth().currentUser.uid}/orders/orders${id}`)
            .on('value', snapshot => {
                const orderDetail = snapshot.val()
                if (orderDetail !== null) {
                    setOrderDetail(orderDetail)
                }
            });
    }, []);

    const Images = orderDetail?.products?.bag.map((item, index) => {
        return (
            <View style={{ flexDirection: "row", alignItems: "center", margin: 10 }}>
                <Image key={index} source={{ uri: item.thumbnail }} style={{ marginRight: 10, marginVertical: 10, width: 80, height: 80, resizeMode: "contain", borderRadius: 10 }}></Image>
                <View>
                    <Text>{item.title}</Text>
                    <Text>Quantity: {item.amount} | {item.price} $</Text>
                </View>
            </View>
        )
    })


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <SafeAreaView style={{ backgroundColor: "#DADADA", margin: 15, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 10 }}>
                    <Text style={styles.adressTitle}>Products</Text>
                    {Images}
                    <Text style={[styles.price,{marginHorizontal:10,fontSize:18,fontWeight:"bold"}]}>Total Price: {orderDetail?.price} $</Text>
                </SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.icon}>
                        <Text style={styles.adressTitle}>Deliver Adress</Text>
                    </View>
                    <View style={styles.adressDescription}>
                        <Text style={styles.name}>{orderDetail?.name} {orderDetail?.sirName}</Text>
                        <Text style={styles.adress}>{orderDetail?.detailedAdress}</Text>
                        <Text style={styles.adress}>{orderDetail?.town} {orderDetail?.city} {orderDetail?.Country}</Text>
                    </View>
                </View>
                
                <ImageBackground source={require("../Assests/bg.png")} imageStyle={{padding:10,borderRadius:20}} style={{ padding: 10, paddingHorizontal: 20, margin: 15}}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Image source={require("../Assests/logo.png")} style={{ width: 50, height: 50, resizeMode: "contain" }}></Image>
                            <Text style={{ color: "white", paddingHorizontal: 5, alignSelf: "center" }}>CreditCard</Text>
                        </View>
                        <Image source={require("../Assests/chip.png")} style={{ width: 50, height: 50, resizeMode: "contain" }}></Image>
                    </View>
                    <View style={{ justifyContent: "space-between", marginTop: RFPercentage(8), }}>
                        <Text style={{ color: "white", paddingHorizontal: 5 }}>Card Number</Text>
                        <Text style={{ color: "white", paddingHorizontal: 5, marginTop: 5, fontSize: 25 }}>{orderDetail?.cardNumber}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: RFPercentage(3) }}>
                        <Text style={{ color: "white", paddingHorizontal: 5, alignSelf: "center" }}>{orderDetail?.cardOwner}</Text>
                        <View style={{ justifyContent: "space-between" }}>
                            <Text style={{ color: "white", paddingHorizontal: 5 }}>Valid Thru</Text>
                            <Text style={{ color: "white", paddingHorizontal: 5 }}>{orderDetail?.month}/{orderDetail?.year}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    )
}

export default OrderDetails

const styles = StyleSheet.create({

    container: {
        margin: 15,
        backgroundColor: "#DADADA",
        paddingHorizontal: 10,
        borderRadius: 20,
    },
    adressDescription: {
        marginTop: 0,
        padding: 10,
        justifyContent: "space-around",
        flex: 1,
        color: "black"
    },
    icon: {
        flex: 1,
        margin: 10,
        flexDirection: "row",
        color: "black"
    },
    adressTitle: {
        fontSize: 25,
        fontWeight: "700",
        color: "black"
    },
    name: {
        fontSize: 18,
        marginBottom: 10,
        color: "black"
    },
    adress: {
        fontSize: 15,
        marginVertical: 5,
        color: "black"
    },
    price: {
        marginVertical: 20,
        fontSize: 15,
        color: "#DC143C",
        fontWeight: "bold"
    }
})