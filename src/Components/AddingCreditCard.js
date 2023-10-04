import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput, Image, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import { RFPercentage } from 'react-native-responsive-fontsize'
import { Formik } from 'formik'

import auth from "@react-native-firebase/auth"
import database from "@react-native-firebase/database"

export default function AddCreditCard({ onPress }) {

    const initialValues = {
        cardOwner: "",
        cardNumber: "",
        year: "",
        month: "",
        cvv: ""
    }

    function addCreditCardToDB(values) {
        database()
            .ref(`/${auth().currentUser.uid}/creditcards`)
            .once("value") // Veriyi bir kez al
            .then((snapshot) => {
                const data = snapshot.val();
                let order_number = 0;
    
                if (data !== null) {
                    // Veri varsa mevcut kredi kartlarının sayısını al
                    order_number  = Object.keys(data).length;
                }
    
                // Yeni kredi kartını eklemek için bir nesne oluştur
                const newCreditCard = {
                    [`card${order_number + 1}`]: values, // Yeni kredi kartını ekleyin
                };
    
                // Firebase Realtime Database'e yeni kredi kartını ekleyin
                return database()
                    .ref(`/${auth().currentUser.uid}/creditcards`)
                    .update(newCreditCard);
            })
            .then(() => {
                console.log("Kredi kartı başarıyla eklendi.");
            })
            .catch((error) => {
                console.error("Kredi kartı eklenirken hata oluştu: ", error);
            });
    }
    


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff", padding: 10 }}>
            <Formik
                initialValues={initialValues}
                onSubmit={values => addCreditCardToDB(values)}
            >
                {({ handleChange, handleSubmit, values }) => (
                    <View style={{flex:1}}>
                    <SafeAreaView style={{ flex: 0.4, }}>
                        <ImageBackground source={require("../Assests/bg.png")} imageStyle={{ borderRadius: 20 }} style={{ margin: 10, padding: 10 }}>
                            
                            <View style={{ flexDirection: "row", backgroundColor: "#DADADA", margin: 10, marginVertical: 20, padding: 10, borderRadius: 10 }}>
                                <Image source={require("../Assests/logo.png")} style={{ resizeMode: "contain", width: 30, height: 30 }}></Image>
                                <TextInput
                                    autoCapitalize="characters"
                                    value={values.cardNumber}
                                    onChangeText={handleChange("cardNumber")}
                                    placeholder='Card Number'
                                    keyboardType="numeric"
                                    fontSize={15}
                                    style={{ marginHorizontal: 10, backgroundColor: "#DADADA" }} />
                            </View>
                            <View style={{ flexDirection: "row", backgroundColor: "#DADADA", margin: 10, marginVertical: 10, padding: 10, borderRadius: 10, justifyContent:"space-between" }}>
                                <TextInput
                                    value={values.cardOwner}
                                    onChangeText={handleChange("cardOwner")}
                                    placeholder='Card Owner'
                                    maxLength={16}
                                    fontSize={15}
                                    style={{}} />
                                <Image source={require("../Assests/chip.png")} style={{ width: 50, height: 50, resizeMode: "contain", alignSelf: "flex-start" }}></Image>

                            </View>


                            <View style={{ flexDirection: "row", margin: 10 }}>
                                <TextInput
                                    value={values.year}
                                    onChangeText={handleChange("year")}
                                    keyboardType='numeric'
                                    placeholder='Year'
                                    fontSize={15}
                                    maxLength={4}
                                    style={{ width: 40, backgroundColor: "#DADADA", flex: 1, marginRight: 0, padding: 5, paddingHorizontal: 30, borderRadius: 10, borderTopRightRadius: 0, borderBottomRightRadius: 0, }} />
                                <TextInput
                                    value={values.month}
                                    onChangeText={handleChange("month")}
                                    keyboardType='numeric'
                                    placeholder='Month'
                                    fontSize={15}
                                    maxLength={2}
                                    style={{ width: 40, backgroundColor: "#DADADA", flex: 1, marginRight: RFPercentage(5), marginLeft: 0, padding: 5, borderRadius: 10, paddingHorizontal: 30, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderLeftWidth: 1 }} />
                                <TextInput
                                    value={values.cvv}
                                    onChangeText={handleChange("cvv")}
                                    keyboardType='numeric'
                                    placeholder='Cvv'
                                    fontSize={15}
                                    maxLength={3}
                                    style={{ width: 60, backgroundColor: "#DADADA", padding: 15, borderRadius: 10, alignSelf: "center" }} />
                            </View>

                        </ImageBackground>
                    </SafeAreaView>
                    <View style={{flex:0.2, justifyContent:"center"}}>
                    <TouchableOpacity onPress={handleSubmit} style={{ alignSelf: "flex-end", margin:15, backgroundColor:"black", padding:10, paddingHorizontal:20, borderRadius:20 }}>
                            <Text style={{color:"white", fontWeight:"900", fontSize:20}}>ADD CREDIT CARD</Text>
                    </TouchableOpacity>
                    </View>

                    </View>
                )}
            </Formik>
            <TouchableOpacity onPress={onPress} style={{ alignSelf: "center" }}>
                <Icon name="arrow-down-sharp" size={80} color={"black"} />
            </TouchableOpacity>

        </SafeAreaView>
    )
}

