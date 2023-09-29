import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import { useDispatch } from 'react-redux'

const Profile = ({navigation}) => {
    const dispatch = useDispatch()
    function handlelogout() {
        dispatch({type:"LOG_OUT"})
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "pink", }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 20 }}>
                <Icon name="home-sharp" size={50} color="black" onPress={() => navigation.navigate("MainPage")}></Icon>
                <Icon name="log-out" size={50} color="black" onPress={handlelogout}></Icon>
            </View>
        </SafeAreaView>

    )
}

export default Profile

const styles = StyleSheet.create({})