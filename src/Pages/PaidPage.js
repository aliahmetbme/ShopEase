import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Adress from '../Components/Adress'

const PaidPage = ({navigation, route}) => {
  const price = route.params.total
  return (
    <SafeAreaView style={styles.container}>
      <Adress totalPrice={price} navigation={navigation}></Adress>
    </SafeAreaView>
  )
}

export default PaidPage

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})