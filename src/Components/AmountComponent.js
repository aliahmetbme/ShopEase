import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const AmountComponent = ({amount, decrease, increase}) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={increase} style={[styles.button]}>
                <Text style={styles.text}>+</Text>
            </TouchableOpacity>
            <Text style={styles.amount}>{amount}</Text>
            <TouchableOpacity onPress={decrease} style={styles.button}>
                <Text style={styles.text}>-</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AmountComponent

const styles = StyleSheet.create({
    container: {
        alignSelf: "flex-end",
        flexDirection:"row",
        backgroundColor:"white",
        borderRadius:20,
        alignItems:"center",
        borderWidth:2,
        borderColor:"#DADADA",

    },
    button:{
        marginHorizontal:5,
        alignItems:"center",
        justifyContent:"center",
        padding:5
    },
    text:{
        fontSize:16,
        fontWeight:"900",
        borderRadius:20,
        color:"#FF7F00",
    },
    amount:{
        fontSize:20,
        color:"#FF7F00",
        paddingHorizontal:10,

    }
})