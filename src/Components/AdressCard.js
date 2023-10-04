import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"

const AdressCard = ({props}) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.icon}>
                <Icon name="storefront" color={"black"} size={30}></Icon>
            </View>
            <View style={styles.adressDescription}>
                <Text style={styles.adressTitle}>{props.Title}</Text>
                <Text style={styles.name}>{props.name} {props.sirname}</Text>
                <Text style={styles.adress}>{props.detailedAdress}</Text>
                <Text style={styles.adress}>{props.town} {props.city} {props.country}</Text>
            </View>
        </SafeAreaView>
    )
}

export default AdressCard

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 15,
        backgroundColor: "#DADADA",
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    adressDescription: {
        margin: 10,
        padding: 10,
        justifyContent: "space-around",
        flex: 1
    },
    icon:{
        margin:20,
        marginHorizontal:0
    },
    adressTitle:{
        fontSize:25,
        fontWeight:"700",
        marginBottom:5
    },
    name:{
        fontSize:15,
        marginBottom:5
    },
    adress:{
        fontSize:15,
        marginVertical:5
    }
})