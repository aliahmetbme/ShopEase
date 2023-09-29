import { SafeAreaView, StyleSheet, Text, View, Alert , KeyboardAvoidingView} from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { Formik } from 'formik'
import RegisterMe from '../Components/RegisterMe'
import LoginButton from '../Components/LoginButton'
import RegisterPageInButton from '../Components/RegisterPageInButton'
import Input from '../Components/Input'
import { useDispatch } from 'react-redux'
import auth from "@react-native-firebase/auth"

const LoginPage = ({navigation}) => {
    const dispatch = useDispatch()
    const initialValues = {
        email: "",
        password: ""
    }
    function login(values) {
        if (!values.email || !values.password) {
            Alert.alert("Hata","Boş bırakılamaz")
            return
        }

        auth().signInWithEmailAndPassword(values.email, values.password)
        .then(() => {
            console.log("User account signed ing ")
            dispatch({type:"LOG_IN"})

        }).catch(error => {

            if (error.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }
        });             
    }

    function goSingUp() {
        navigation.navigate("RegistrationPage")
    } 

    return (
        <SafeAreaView style={{flex:1}}>
                  <KeyboardAvoidingView style={{flex:1}}
      behavior="padding">
            <LottieView source={require("../Assests/hRX7g0h08u.json")} useNativeLooping autoPlay loop style={{flex:0.9,}}></LottieView>
            <View style={{flex:1,}}>
            <Formik
                initialValues={initialValues}
                onSubmit={values => login(values)}
            >
                {({ handleChange, handleSubmit, values }) => (
                    <View>
                        <Input value={values.email} onChangeText={handleChange("email")} placeholder={"Please Provide your email"}></Input>
                        <Input value={values.password} onChangeText={handleChange("password")} password={true} placeholder={"Please Provide your password"}></Input>
                        <LoginButton title={"Login"} onPress={handleSubmit} />
                    </View>
                )}
            </Formik>
            <RegisterPageInButton onPress={goSingUp} />
            </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default LoginPage

const styles = StyleSheet.create({})