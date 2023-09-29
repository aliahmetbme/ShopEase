import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import LottieView from 'lottie-react-native'
import { useDispatch } from 'react-redux'
const ComplatedPage = ({ navigation }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: "CLEAN_BAG" })
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <LottieView
                    style={{ flex: 0.8 }}
                    source={require("../Assests/3JURTwzfmV.json")}
                    autoPlay={true}
                />
                <Text style={{ alignSelf: "center", verticalAlign: "top", color: "#FF7F00", fontWeight: "800", fontSize: 25 }}>You Complated Your Shopping</Text>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("MyBag")
                    navigation.navigate("MainPage")
                }} style={{ alignSelf: "center", flex: 0.2, justifyContent: "center" }}>
                    <Text style={{ backgroundColor: "#FF7F00", padding: 10, paddingHorizontal: 20, borderRadius: 20 }}>Back to MainPage</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ComplatedPage

const styles = StyleSheet.create({})