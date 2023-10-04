import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import { useDispatch } from 'react-redux'

const AdressCard = ({isModal,props}) => {
    const dispatch = useDispatch()

    return (
        <TouchableOpacity onPress={() => dispatch({type:"SET_ADRESS", payload:props })} disabled={!isModal} >
            <View style={styles.container}>
            <View style={styles.icon}>
                <Icon name="storefront" color={"black"} size={30}></Icon>
                <Text style={styles.adressTitle}>{props.Title}</Text>
            </View>
            <View style={styles.adressDescription}>
                <Text style={styles.name}>{props.name} {props.sirname}</Text>
                <Text style={styles.adress}>{props.detailedAdress}</Text>
                <Text style={styles.adress}>{props.town} {props.city} {props.country}</Text>
            </View>
            </View>
        </TouchableOpacity>
    )
}

export default AdressCard

const styles = StyleSheet.create({
    container: {
        margin: 15,
        backgroundColor: "#DADADA",
        paddingHorizontal: 10,
        borderRadius: 20,
    },
    adressDescription: {
        marginTop:0,
        padding: 10,
        justifyContent: "space-around",
        flex: 1,
        color:"black"
    },
    icon:{
        flex:1,
        margin:10,
        flexDirection: "row",
        color:"black"
    },
    adressTitle:{
        marginHorizontal:10,
        fontSize:25,
        fontWeight:"700",
        color:"black"
    },
    name:{
        fontSize:15,
        color:"black"
    },
    adress:{
        fontSize:15,
        marginVertical:5,
        color:"black"
    }
})