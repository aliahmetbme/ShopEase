import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import database from "@react-native-firebase/database"
import auth from "@react-native-firebase/auth"
import OrderCard from '../Components/orderCard'
import LottieView from 'lottie-react-native'

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
        <SafeAreaView  style={{flex:1, backgroundColor:"white"}}>
          {orderList.length > 0 ? (
            <FlatList 
              data={orderList}
              renderItem={renderItem}
            />
          ) : (
            <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
              <LottieView
                style={{ flex: 1 }}
                source={require("../Assests/animation_lnd6na2d.json")}
                autoPlay={true}
              />
            </SafeAreaView>
          )}
        </SafeAreaView>
      )
}

export default MyOrders

const styles = StyleSheet.create({})