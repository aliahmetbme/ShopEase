import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Adress from '../Components/Adress'

const PaidPage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Adress navigation={navigation}></Adress>
    </SafeAreaView>
  )
}

export default PaidPage

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})