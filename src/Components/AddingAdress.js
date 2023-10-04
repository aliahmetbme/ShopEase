import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput, Image, ImageBackground, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import { Formik } from 'formik'

import auth from "@react-native-firebase/auth"
import database from "@react-native-firebase/database"

export default function AddingAdress({ onPress }) {

    const initialValues = {
        Title: "",
        name: "",
        sirname: "",
        detailedAdress: "",
        country: "",
        city: "",
        town: "",
        phoneNumber:""
    }

    function addAdreesToDB(values) {
        

        if (Object.values(values).includes("")) {
            Alert.alert("HATA", "BOŞ BIRAKILMAZ")
            return;
        }

        database()
            .ref(`/${auth().currentUser.uid}/adresses`)
            .once("value") // Veriyi bir kez al
            .then((snapshot) => {
                const data = snapshot.val();
                let order_number = 0;

                if (data !== null) {
                    // Veri varsa mevcut adres ayısını al
                    order_number = Object.keys(data).length;
                }

                // Yeni adres eklemek için bir nesne oluştur
                const newCreditCard = {
                    [`adress${order_number + 1}`]: values, // Yeni adres ekleyin
                };

                // Firebase Realtime Database'e yeni adres ekleyin
                return database()
                    .ref(`/${auth().currentUser.uid}/adresses`)
                    .update(newCreditCard);
            })
            .then(() => {
               Alert.alert("Tebrikler","Adress Başarıyla eklendi.");
            })
            .catch((error) => {
                console.error("Adress eklenirken hata oluştu: ", error);
            });

       
    }



    return (
        <SafeAreaView style={{ backgroundColor: "#ffffff", padding: 40, justifyContent: "flex-end", borderRadius: 40 }}>
            <Formik
                initialValues={initialValues}
                onSubmit={values => addAdreesToDB(values)}
            >
                {({ handleChange, handleSubmit, values }) => (
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ margin: 10, fontWeight: "700", fontSize: 20, color: "black" }}>New Adress</Text>
                        <TextInput
                            placeholder='Title'
                            value={values.Title}
                            onChangeText={handleChange("Title")}
                            style={{ backgroundColor: "#DADADA", margin: 10, padding: 20, borderRadius: 10 }} />
                        <View style={{ flexDirection: "row" }}>
                            <TextInput
                                placeholder='Name'
                                value={values.name}
                                onChangeText={handleChange("name")}
                                style={{ backgroundColor: "#DADADA", flex: 1, margin: 10, padding: 20, borderRadius: 10 }} />
                            <TextInput
                                placeholder='Sir Name'
                                value={values.sirname}
                                onChangeText={handleChange("sirname")}
                                style={{ backgroundColor: "#DADADA", flex: 1, margin: 10, padding: 20, borderRadius: 10 }} />
                        </View>
                        <TextInput
                            keyboardType='numeric'
                            placeholder='Phone Number'
                            value={values.phoneNumber}
                            onChangeText={handleChange("phoneNumber")}
                            style={{ borderWidth: 2, borderColor: "#DADADA", margin: 10, padding: 20, borderRadius: 10 }} />

                        <TextInput
                            placeholder='Detailed Adress'
                            value={values.detailedAdress}
                            onChangeText={handleChange("detailedAdress")}
                            style={{ borderWidth: 2, borderColor: "#DADADA", margin: 10, padding: 20, borderRadius: 10 }} />

                        <View style={{ flexDirection: "row" }}>
                            <TextInput
                                placeholder='Country'
                                value={values.country}
                                onChangeText={handleChange("country")}
                                style={{ backgroundColor: "#DADADA", flex: 1, margin: 10, padding: 20, borderRadius: 10 }} />
                            <TextInput
                                placeholder='City'
                                value={values.city}
                                onChangeText={handleChange("city")}
                                style={{ backgroundColor: "#DADADA", flex: 1, margin: 10, padding: 20, borderRadius: 10 }} />
                            <TextInput
                                placeholder='Town'
                                value={values.town}
                                onChangeText={handleChange("town")}
                                style={{ backgroundColor: "#DADADA", flex: 1, margin: 10, padding: 20, borderRadius: 10 }} />
                        </View>
                        <TouchableOpacity onPress={handleSubmit} style={{ alignSelf: "flex-end", margin: 15, backgroundColor: "black", padding: 10, paddingHorizontal: 20, borderRadius: 10 }}>
                            <Text style={{ color: "white", fontWeight: "900", fontSize: 20 }}>ADD ADRESS</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
            <TouchableOpacity onPress={onPress} style={{ alignSelf: "center" }}>
                <Icon name="arrow-down-sharp" size={80} color={"black"} />
            </TouchableOpacity>

        </SafeAreaView>
    )
}

