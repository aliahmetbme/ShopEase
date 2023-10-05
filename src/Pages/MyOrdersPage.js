import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import database from "@react-native-firebase/database"
import auth from "@react-native-firebase/auth"
import OrderCard from '../Components/orderCard'

const MyOrders = ({navigation}) => {
    const [orderList, setOrderList] = useState([])

    function renderItem({ item, index }) {
        return (
            <OrderCard onPress={() => navigation.navigate("OrderDetails", {id: index +1})} props={item}></OrderCard>
        )
      }
    useEffect(() => {
        database()
            .ref(`/${auth().currentUser.uid}/orders`)
            .on('value', snapshot => {
                const orders = snapshot.val()
                if (orders !== null) {
                    setOrderList(Object.values(orders))
                }
            });
    }, []); 

    return (
        <SafeAreaView>
            <FlatList 
                data={orderList}
                renderItem={renderItem}/>
        </SafeAreaView>
    )
}

export default MyOrders

const styles = StyleSheet.create({})