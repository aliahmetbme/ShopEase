import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from "@react-native-firebase/auth"

GoogleSignin.configure({
    webClientId: '943488609818-c4n26mpcb90u5jii23hv3pg1atotqsfi.apps.googleusercontent.com',
});

const IconComponent = () => {
  return (
    <TouchableOpacity onPress={() => onGoogleButtonPress()}>
        <View style={styles.container}>
            <Image source={require("../Assests/google.png")} style={styles.icon} />
            <Text  style={styles.text}>Google Hesabı ile Giriş</Text>
        </View>
    </TouchableOpacity>

  ); 
};

async function onGoogleButtonPress() {
    // Check if your device supports Google Play
   try {await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);}
    catch (error) {
        console.log(error)
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:"white",
        margin: 10,
        borderRadius:20,
        alignItems:"center",
        borderColor:"black",
        borderWidth:2,
    },
    icon: {
      width: 30,
      height: 30,
      margin:5,
      marginLeft:15
    },
    text:{
        color:"black",
        textAlignVertical:"center",
        flex:1,
        textAlign:"center",
        fontWeight:"bold",
        fontSize:17,
        color:"#FF7F00",
       
    }
  });
  
  export default IconComponent;