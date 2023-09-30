import { StyleSheet, Text, View,Alert, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import Input from '../Components/Input'
import Icon from "react-native-vector-icons/Entypo"
import LoginButton from '../Components/LoginButton'
import {Formik} from "formik"
import LottieView from 'lottie-react-native'
import auth from "@react-native-firebase/auth"
import { useDispatch } from 'react-redux'
const Registration = ({navigation}) => {
  const dispatch = useDispatch()
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: ""
  }

  function register(values) {
    if (!values.email || !values.password || !values.confirmPassword) {
      Alert.alert("Hata","Boş bırakılamaz")
      return
    }

    if (values.password !== values.confirmPassword){
      Alert.alert("Hata","Şifreler Eşleşmelidir")
      return
    }

    auth().createUserWithEmailAndPassword(values.email, values.password).then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      console.log(error)
    }); 
}

  return (
    <SafeAreaView style={{flex:1}}>
      <KeyboardAvoidingView style={{flex:1}}
      behavior="padding">
      <LottieView source={require("../Assests/animation_ln3qynjc.json")} useNativeLooping autoPlay loop style={{flex:0.85,}}></LottieView>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => register(values)}
      >
        {({ handleSubmit, handleChange, values }) => (
          <View>
            <Input onChangeText={handleChange("email")} value={values.email} placeholder={"Email"} name="email" />
            <Input onChangeText={handleChange("password")} value={values.password} password={true} placeholder={"Password"} name="password" />
            <Input onChangeText={handleChange("confirmPassword")} value={values.confirmPassword} password={true} placeholder={"Confirm Password"} name="confirmPassword" />
            <LoginButton title={"Sign Up"} onPress={handleSubmit} />
          </View>
        )}
      </Formik>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Registration