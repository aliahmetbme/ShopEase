import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon from "react-native-vector-icons/Ionicons"

const ProfileSectionsPart = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.sectionName}>{item}</Text>
      <Icon name="chevron-forward-circle" size={40}></Icon>
    </TouchableOpacity>
  )
}

export default ProfileSectionsPart

const styles = StyleSheet.create({
    container: {
       borderBottomWidth:RFPercentage(0.1),
       justifyContent:"space-between",
       flexDirection:"row",
       alignItems:"center",
       padding:20,
       paddingVertical:30
    },
    sectionName: {
        fontSize:20,
        color:"black"
    }
})