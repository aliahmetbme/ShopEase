import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const AmountComponent = ({amount}) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button]}>
                <Text style={styles.text}>+</Text>
            </TouchableOpacity>
            <Text style={styles.amount}>{amount}</Text>
            <TouchableOpacity style={[styles.button, {borderRightWidth:0,borderLeftWidth:1}]}>
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
        backgroundColor:"#DADADA",
        borderRadius:15,
        alignItems:"center"

    },
    button:{
        marginHorizontal:5,
        alignItems:"center",
        justifyContent:"center",
        borderRightWidth:1,
        borderColor:"black",
        padding:10
    },
    text:{
        fontSize:16,
        fontWeight:"900",
    },
    amount:{
        padding:10,
        fontSize:20,
        fontWeight:"800",
        color:"black"
    }
})