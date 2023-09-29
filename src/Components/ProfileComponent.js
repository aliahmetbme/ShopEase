import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import Icon from "react-native-vector-icons/Ionicons"
// import auth from '@react-native-firebase/auth'

const ProfileComponent = ({onPress}) => {

    // const [name] = useState(auth().currentUser.displayName)
    // console.log(auth().currentUser.displayName,"auth().currentUser.displayName")
    // console.log(name,"name")

    return (
        <SafeAreaView style={{justifyContent:"space-between",flexDirection:"row",margin:10}}>
            <View>
                <Text style={{fontSize:25,fontWeight:"bold",color:"black"}}>Welcome Name Surname</Text>
                <Text style={{marginTop:5,fontSize:15,color:"black"}}>Let's shop, find like buy</Text>
            </View>
            <TouchableOpacity onPress={onPress}>
                <Icon name={"person-circle"} size={60} color="black" />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ProfileComponent

const styles = StyleSheet.create({})