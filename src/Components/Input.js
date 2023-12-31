import { Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/Entypo"

const Input = ({ value, onChangeText, placeholder, password }) => {
    const [shownPassword, setShownPassword] = useState(false)
    return (
        <SafeAreaView style={{ margin: 10, flexDirection: "row", overflow: "hidden", backgroundColor: "#DCDCDC", borderRadius: 20, paddingHorizontal: 20, padding: 2, justifyContent: "center", alignItems: "center" }}>
            {password ? <Icon name={"lock"} size={20} color="black"></Icon> : <Icon name={"mail"} size={20} color="black"></Icon>}

            <TextInput
                style={{ flex: 1, padding: Platform.OS === "ios" ? 15 : 10 }}
                placeholder={placeholder}
                placeholderTextColor={"black"}
                clearButtonMode='always'
                autoCapitalize='none'
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password && !shownPassword}>
            </TextInput>
            {password ? <Icon name={shownPassword ? "eye-with-line" : "eye"} onPress={() => setShownPassword(!shownPassword)} size={30} color="black"></Icon> : null}
        </SafeAreaView>
    )
}

export default Input

const styles = StyleSheet.create({

})