import { ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ComplateShopping from "./ComplateShopping"
const Address = ({navigation}) => {
    const [name, setName] = useState("")
    const [sirName, setSirName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    return (
        <ScrollView style={{ flex: 1 }}>
            <Text style={{ margin: 10, fontWeight: "700", fontSize: 19, color: "#FF7F00" }}>Customer Info</Text>
            <View style={{ flexDirection: "row" }}>
                <TextInput
                    placeholder='Name'
                    value={name}
                    onChangeText={setName}
                    style={{ backgroundColor: "#DADADA", flex: 1, margin: 10, padding: 20, borderRadius: 10 }} />
                <TextInput
                    placeholder='Sir Name'
                    value={sirName}
                    onChangeText={setSirName}
                    style={{ backgroundColor: "#DADADA", flex: 1, margin: 10, padding: 20, borderRadius: 10 }} />
            </View>
            <TextInput
                keyboardType="numeric"
                placeholder='Phone Number'
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                style={{ borderWidth: 2, borderColor: "#DADADA", margin: 10, padding: 20, borderRadius: 10 }} />
            <Text style={{ margin: 10, fontWeight: "700", fontSize: 19, color: "#FF7F00" }}>Adress Information</Text>
            <View style={{ flexDirection: "row" }}>
                <TextInput
                    placeholder='Country'
                    value={name}
                    onChangeText={setName}
                    style={{ backgroundColor: "#DADADA", flex: 1, margin: 10, padding: 20, borderRadius: 10 }} />
                <TextInput
                    placeholder='City'
                    value={sirName}
                    onChangeText={setSirName}
                    style={{ backgroundColor: "#DADADA", flex: 1, margin: 10, padding: 20, borderRadius: 10 }} />
                <TextInput
                    placeholder='Town'
                    value={sirName}
                    onChangeText={setSirName}
                    style={{ backgroundColor: "#DADADA", flex: 1, margin: 10, padding: 20, borderRadius: 10 }} />
            </View>
            <TextInput
                placeholder='Detailed Adress'
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                style={{ backgroundColor: "#DADADA", margin: 10, padding: 20, borderRadius: 10 }} />
            <Text style={{ margin: 10, fontWeight: "700", fontSize: 19, color: "#FF7F00" }}>Credit Card Information</Text>
            <TextInput
                placeholder='Card Owner'
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                style={{ backgroundColor: "#DADADA", margin: 10, padding: 20, borderRadius: 10 }} />
            <TextInput
                keyboardType="numeric"
                placeholder='Card Number'
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                style={{ borderWidth: 2, borderColor: "#DADADA", margin: 10, padding: 20, borderRadius: 10 }} />
            <View style={{ flexDirection: "row" , justifyContent:"space-between"}}>
                <View style={{ flexDirection: "row" }}>
                    <TextInput
                        placeholder='Name'
                        value={name}
                        onChangeText={setName}
                        style={{ backgroundColor: "#DADADA", flex: 1, margin: 10, marginRight:0,padding: 5,paddingHorizontal:30, borderRadius: 10, borderTopRightRadius:0,borderBottomRightRadius:0, }} />
                    <TextInput
                        placeholder='Sir Name'
                        value={sirName}
                        onChangeText={setSirName}
                        style={{ backgroundColor: "#DADADA", flex: 1, margin: 10,marginLeft:0, padding: 5, borderRadius: 10,paddingHorizontal:30,borderTopLeftRadius:0,borderBottomLeftRadius:0, borderLeftWidth:1}} />
                </View>
                <TextInput
                        keyboardType='numeric'
                        placeholder='Cvv'
                        value={sirName}
                        onChangeText={setSirName}
                        style={{ backgroundColor: "#DADADA",  margin: 10, marginRight:20,padding: 20, borderRadius: 10 }} />

            </View>
            <ComplateShopping navigation={navigation}/>
        </ScrollView>
    )
}

export default Address

const styles = StyleSheet.create({})
