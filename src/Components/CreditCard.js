import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { useDispatch } from 'react-redux'

const CreditCard = ({ index ,props }) => {
  const dispatch = useDispatch()
  function formatNumberWithSpaces(number) {
    // Sayıyı metne çevirin
    let numberString = number.toString();
    
    // Boşluksuz bir versiyon oluşturun
    let formattedNumber = '';

    // Her dört rakamda bir boşluk ekleyin
    for (let i = 0; i < numberString.length; i++) {
        formattedNumber += numberString[i];
        if ((i + 1) % 4 === 0 && i !== numberString.length - 1) {
            formattedNumber += ' ';
        }
    }

    return formattedNumber;
}


const formattedNumber = formatNumberWithSpaces(props.cardNumber);

  return (
    <TouchableOpacity onPress={() => dispatch({type:"SET_ID", payload:props })} style={{ borderRadius: 20 }}>
      <ImageBackground source={require("../Assests/bg.png")} imageStyle={styles.container} style={{ padding: 10, paddingHorizontal: 20, margin: 10 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Image source={require("../Assests/logo.png")} style={{ width: 50, height: 50, resizeMode: "contain" }}></Image>
            <Text style={{ color: "white", paddingHorizontal: 5, alignSelf: "center" }}>CreditCard</Text>
          </View>
          <Image source={require("../Assests/chip.png")} style={{ width: 50, height: 50, resizeMode: "contain" }}></Image>
        </View>
        <View style={{ justifyContent: "space-between", marginTop: RFPercentage(8), }}>
          <Text style={{ color: "white", paddingHorizontal: 5 }}>Card Number</Text>
          <Text style={{ color: "white", paddingHorizontal: 5, marginTop: 5, fontSize: 25 }}>{formattedNumber}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: RFPercentage(3) }}>
          <Text style={{ color: "white", paddingHorizontal: 5, alignSelf: "center" }}>{props.cardOwner}</Text>
          <View style={{ justifyContent: "space-between" }}>
            <Text style={{ color: "white", paddingHorizontal: 5 }}>Valid Thru</Text>
            <Text style={{ color: "white", paddingHorizontal: 5 }}>{props.month}/{props.year}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default CreditCard

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
  }
})