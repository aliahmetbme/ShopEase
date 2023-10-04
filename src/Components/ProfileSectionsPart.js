import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon from "react-native-vector-icons/Ionicons"

const ProfileSectionsPart = ({item, onPress, icon}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name={icon} size={40} color="#FF7F00"></Icon>
      <Text style={styles.sectionName}>{item}</Text>
      <Icon name="chevron-forward-outline" size={30} color="#FF7F00"></Icon>
    </TouchableOpacity>
  )
}

export default ProfileSectionsPart

const styles = StyleSheet.create({
    container: {
       justifyContent:"space-between",
       flexDirection:"row",
       alignItems:"center",
       paddingVertical:RFPercentage(1.5),
       borderColor:"gray",
       marginHorizontal:RFPercentage(2),
       borderRadius:RFPercentage(40),
       marginVertical:10,
       paddingHorizontal:20,
       backgroundColor:"white"
      
    },
    sectionName: {
        fontSize:RFPercentage(2),
        color:"black"
    }
})