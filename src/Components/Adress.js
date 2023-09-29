import { ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, KeyboardAvoidingView, Alert, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import ComplateShopping from "./ComplateShopping"
import { Formik } from "formik"

const Address = ({ navigation }) => {

    const initialValues = {
        name: "",
        sirName: "",
        phoneNumber: "",
        Country: "",
        city: "",
        town: "",
        detailedAdress: "",
        cardOwner: "",
        cardNumber: "",
        month: "",
        year: "",
        cvv: ""
    }

    const getPaid = (values) => {
        if (Object.values(values).includes("")) {
            Alert.alert("Boş bırakılamaz")
            return
        }

        
        navigation.navigate("ComplatedPage")
    }

    return (
        <KeyboardAvoidingView
            style={{flex:1}}
            behavior="height">
        <ScrollView
          keyboardDismissMode="on-drag">
            
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values) => getPaid(values)}>
                    {({ handleChange, handleSubmit, values }) => (
                        <>
                            {/* Customer Info */}
                            <Text style={{ margin: 10, fontWeight: "700", fontSize: 19, color: "#FF7F00" }}>Customer Info</Text>
                            <View style={{ flexDirection: "row" }}>
                                <TextInput
                                    placeholder='Name'
                                    value={values.name}
                                    onChangeText={handleChange("name")}
                                    style={{ backgroundColor: "#DADADA", flex: 1, margin: 10, padding: 20, borderRadius: 10 }} />
                                <TextInput
                                    placeholder='Sir Name'
                                    value={values.sirName}
                                    onChangeText={handleChange("sirName")}
                                    style={{ backgroundColor: "#DADADA", flex: 1, margin: 10, padding: 20, borderRadius: 10 }} />
                            </View>
                            <TextInput
                                keyboardType="numeric"
                                placeholder='Phone Number'
                                value={values.phoneNumber}
                                onChangeText={handleChange("phoneNumber")}
                                style={{ borderWidth: 2, borderColor: "#DADADA", margin: 10, padding: 20, borderRadius: 10 }} />
                            {/* Customer Info */}
                            {/* Adress Info */}
                            <Text style={{ margin: 10, fontWeight: "700", fontSize: 19, color: "#FF7F00" }}>Adress Information</Text>
                            <View style={{ flexDirection: "row" }}>
                                <TextInput
                                    placeholder='Country'
                                    value={values.Country}
                                    onChangeText={handleChange("Country")}
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
                            {/* Adress Info */}
                            {/* Credit Card Info */}
                            <TextInput
                                placeholder='Detailed Adress'
                                value={values.detailedAdress}
                                onChangeText={handleChange("detailedAdress")}
                                style={{ backgroundColor: "#DADADA", margin: 10, padding: 20, borderRadius: 10 }} />
                            <Text style={{ margin: 10, fontWeight: "700", fontSize: 19, color: "#FF7F00" }}>Credit Card Information</Text>
                            <TextInput
                                placeholder='Card Owner'
                                fontSize={15}
                                value={values.cardOwner}
                                onChangeText={handleChange("cardOwner")}
                                style={{ backgroundColor: "#DADADA", margin: 10, padding: 20, borderRadius: 10 }} />
                            <TextInput
                                keyboardType="numeric"
                                placeholder='Card Number'
                                maxLength={16}
                                fontSize={15}
                                value={values.cardNumber}
                                onChangeText={handleChange("cardNumber")}
                                style={{ borderWidth: 2, borderColor: "#DADADA", margin: 10, padding: 20, borderRadius: 10 }} />
                            <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 15 }}>
                                <TextInput
                                    keyboardType='numeric'
                                    placeholder='Year'
                                    fontSize={15}
                                    maxLength={4}
                                    value={values.year}
                                    onChangeText={handleChange("year")}
                                    style={{ backgroundColor: "#DADADA", flex: 1, marginRight: 0, padding: 5, paddingHorizontal: 30, borderRadius: 10, borderTopRightRadius: 0, borderBottomRightRadius: 0, }} />
                                <TextInput
                                    keyboardType='numeric'
                                    placeholder='Month'
                                    fontSize={15}
                                    maxLength={2}
                                    value={values.month}
                                    onChangeText={handleChange("month")}
                                    style={{ backgroundColor: "#DADADA", flex: 1, marginRight: 100, marginLeft: 0, padding: 5, borderRadius: 10, paddingHorizontal: 30, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderLeftWidth: 1 }} />
                                <TextInput
                                    keyboardType='numeric'
                                    placeholder='Cvv'
                                    fontSize={15}
                                    maxLength={3}
                                    value={values.cvv}
                                    onChangeText={handleChange("cvv")}
                                    style={{ backgroundColor: "#DADADA", padding: 20, borderRadius: 10 }} />
                            </View>
                            {/* Credit Card Info */}
                            <ComplateShopping onPress={handleSubmit} navigation={navigation} />
                        </>
                    )}
                </Formik>
         </ScrollView>
         </KeyboardAvoidingView>

    )
}

export default Address

const styles = StyleSheet.create({})
