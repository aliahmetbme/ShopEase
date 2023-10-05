import { ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, KeyboardAvoidingView, Alert, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import ComplateShopping from "./ComplateShopping"
import { Formik } from "formik"
import Modal from 'react-native-modal'
import SavedCardsPage from '../Pages/SavedCardsPage'
import { useSelector, useDispatch } from 'react-redux'
import database from "@react-native-firebase/database"
import auth from "@react-native-firebase/auth"
import { RFPercentage } from 'react-native-responsive-fontsize'
import SavedAdresses from '../Pages/SavedAdresses'
const Address = ({ navigation, totalPrice }) => {

    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    

    const dispatch = useDispatch()
    const ProductsInBag = useSelector((state) => state.bag);
    const card = useSelector((state) => state.id).cardId;
    const adress = useSelector((state) => state.adress).adress;

    const [isModalVisible, setModalVisible] = useState(false);
    const [isAnyCardChoose, setisAnyCardChoose] = useState(false);
    const [isAnyAdressChosen, setisAnyAdressChosen] = useState(false);
    const [isAdressModalVisible, setIsAdressModalVisible] = useState(false)

    const [initialValues, setInitialValues] = useState({
        name: "",
        sirName: "",
        phoneNumber: "",
        Country: "",
        city: "",
        town: "",
        detailedAdress: "",
        cardOwner: "",
        cardNumber: "",
        month: "",
        year: "",
        cvv: ""
    });

    useEffect(() => {
        if (isAnyCardChoose && card) {
            setInitialValues({
                ...initialValues,
                cardOwner: card.cardOwner,
                cardNumber: card.cardNumber,
                month: card.month,
                year: card.year,
                cvv: card.cvv
            });
        }
    }, [isAnyCardChoose, card]);

    useEffect(() => {
        if (isAnyAdressChosen && adress) {
            setInitialValues({
                ...initialValues,
                name: adress.name,
                sirName: adress.sirname,
                phoneNumber: adress.phoneNumber,
                Country: adress.country,
                city: adress.city,
                town: adress.town,
                detailedAdress: adress.detailedAdress,
            });
        }
    }, [isAnyAdressChosen, adress]);

    function toggleModal() {
        if (isModalVisible) {
            setisAnyCardChoose(true);
        }
        setModalVisible(!isModalVisible);
    }

    function toggleModalAdress() {
        if (isAdressModalVisible) {
            setisAnyAdressChosen(true);
        }
        setIsAdressModalVisible(!isAdressModalVisible);
    }

    const getPaid = (values) => {
        if (Object.values(values).includes("")) {
            Alert.alert("Boş bırakılamaz")
            return;
        }
        setCurrentDateTime(new Date())

        const formattedDateTime = currentDateTime.toLocaleString();

        database()
        .ref(`/${auth().currentUser.uid}/orders`)
        .once("value") // Veriyi bir kez al
        .then((snapshot) => {
            const data = snapshot.val();
            let order_number = 0;

            if (data !== null) {
                // Veri varsa mevcut adres ayısını al
                order_number = Object.keys(data).length;
            }

            // Yeni adres eklemek için bir nesne oluştur
            const newOrder = {
                [`orders${order_number + 1}`]: 
                {
                    ...values,
                    products: ProductsInBag,
                    price: totalPrice,
                    time: formattedDateTime
                }, // Yeni adres ekleyin
            };

            // Firebase Realtime Database'e yeni adres ekleyin
            return database()
                .ref(`/${auth().currentUser.uid}/orders`)
                .update(newOrder);
        })
        .then(() => {
           
        })
        .catch((error) => {
            console.error("Adress eklenirken hata oluştu: ", error);
        });

        navigation.navigate("ComplatedPage")



        dispatch({ type: "CLEAN_BAG" })

    }
    return (
        <KeyboardAvoidingView

            style={{ flex: 1 }}
            behavior="height">
            <ScrollView
                keyboardDismissMode="on-drag">

                <Formik
                    enableReinitialize={true}
                    initialValues={initialValues}
                    onSubmit={(values) => getPaid(values)}>
                    {({ handleChange, handleSubmit, values }) => (
                        <>
                            {/* Customer Info */}
                            <Text style={{ margin: 10, fontWeight: "700", fontSize: 19, color: "#FF7F00" }}>Customer Info</Text>
                            <View style={{ flexDirection: "row" }}>
                                <TextInput
                                    placeholder='Name'
                                    value={isAnyAdressChosen ? adress.name : values.name}
                                    onChangeText={handleChange("name")}
                                    style={{ backgroundColor: "#DADADA", flex: 1, margin: 10, padding: 20, borderRadius: 10 }} />
                                <TextInput
                                    placeholder='Sir Name'
                                    value={isAnyAdressChosen ? adress.sirname : values.sirName}
                                    onChangeText={handleChange("sirName")}
                                    style={{ backgroundColor: "#DADADA", flex: 1, margin: 10, padding: 20, borderRadius: 10 }} />
                            </View>
                            <TextInput
                                keyboardType="numeric"
                                placeholder='Phone Number'
                                value={isAnyAdressChosen ? adress.phoneNumber : values.phoneNumber}
                                onChangeText={handleChange("phoneNumber")}
                                style={{ borderWidth: 2, borderColor: "#DADADA", margin: 10, padding: 20, borderRadius: 10 }} />
                            {/* Customer Info */}
                            {/* Adress Info */}
                            <Text style={{ margin: 10, fontWeight: "700", fontSize: 19, color: "#FF7F00" }}>Adress Information</Text>
                            <View style={{ flexDirection: "row" }}>
                                <TextInput
                                    placeholder='Country'
                                    value={isAnyAdressChosen ? adress.country : values.Country}
                                    onChangeText={handleChange("Country")}
                                    style={{ backgroundColor: "#DADADA", flex: 1, margin: 10, padding: 20, borderRadius: 10 }} />
                                <TextInput
                                    placeholder='City'
                                    value={isAnyAdressChosen ? adress.city : values.city}
                                    onChangeText={handleChange("city")}
                                    style={{ backgroundColor: "#DADADA", flex: 1, margin: 10, padding: 20, borderRadius: 10 }} />
                                <TextInput
                                    placeholder='Town'
                                    value={isAnyAdressChosen ? adress.town : values.town}
                                    onChangeText={handleChange("town")}
                                    style={{ backgroundColor: "#DADADA", flex: 1, margin: 10, padding: 20, borderRadius: 10 }} />
                            </View>
                            {/* Adress Info */}
                            {/* Credit Card Info */}
                            <TextInput
                                placeholder='Detailed Adress'
                                value={isAnyAdressChosen ? adress.detailedAdress : values.detailedAdress}
                                onChangeText={handleChange("detailedAdress")}
                                style={{ backgroundColor: "#DADADA", margin: 10, padding: 20, borderRadius: 10 }} />
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity onPress={toggleModalAdress} style={{ backgroundColor: "#DADADA", alignSelf: "flex-start", padding: 15, marginHorizontal: 10, borderRadius: 15 }} />
                                <Text style={{ color: "black", alignSelf: "center", fontWeight: "bold" }}>Take Adress Info from saved</Text>
                            </View>
                            <Text style={{ margin: 10, fontWeight: "700", fontSize: 19, color: "#FF7F00" }}>Credit Card Information </Text>
                            <TextInput
                                placeholder='Card Owner'
                                fontSize={15}
                                value={isAnyCardChoose ? card.cardOwner : values.cardOwner}
                                onChangeText={handleChange("cardOwner")}
                                style={{ backgroundColor: "#DADADA", margin: 10, padding: 20, borderRadius: 10 }} />
                            <TextInput
                                keyboardType="numeric"
                                placeholder='Card Number'
                                maxLength={16}
                                fontSize={15}
                                value={isAnyCardChoose ? card.cardNumber : values.cardNumber}
                                onChangeText={handleChange("cardNumber")}
                                style={{ borderWidth: 2, borderColor: "#DADADA", margin: 10, padding: 20, borderRadius: 10 }} />
                            <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 15 }}>
                                <TextInput
                                    keyboardType='numeric'
                                    placeholder='Year'
                                    fontSize={15}
                                    maxLength={4}
                                    value={isAnyCardChoose ? card.year : values.year}
                                    onChangeText={handleChange("year")}
                                    style={{ backgroundColor: "#DADADA", flex: 1, marginRight: 0, padding: 5, paddingHorizontal: 30, borderRadius: 10, borderTopRightRadius: 0, borderBottomRightRadius: 0, }} />
                                <TextInput
                                    keyboardType='numeric'
                                    placeholder='Month'
                                    fontSize={15}
                                    maxLength={2}
                                    value={isAnyCardChoose ? card.month : values.month}
                                    onChangeText={handleChange("month")}
                                    style={{ backgroundColor: "#DADADA", flex: 1, marginRight: 100, marginLeft: 0, padding: 5, borderRadius: 10, paddingHorizontal: 30, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderLeftWidth: 1 }} />
                                <TextInput
                                    keyboardType='numeric'
                                    placeholder='Cvv'
                                    fontSize={15}
                                    maxLength={3}
                                    value={isAnyCardChoose ? card.cvv : values.cvv}
                                    onChangeText={handleChange("cvv")}
                                    style={{ backgroundColor: "#DADADA", padding: 20, borderRadius: 10 }} />
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <TouchableOpacity onPress={toggleModal} style={{ backgroundColor: "#DADADA", alignSelf: "flex-start", padding: 15, marginHorizontal: 10, borderRadius: 15 }} />
                                    <Text style={{ color: "black", alignSelf: "center", fontWeight: "bold" }}>Take Card Info from saved</Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ color: "black", alignSelf: "center", fontWeight: "bold" }}>clean</Text>
                                    <TouchableOpacity onPress={() => setisAnyCardChoose(false)} style={{ backgroundColor: "#DADADA", alignSelf: "flex-start", padding: 15, marginHorizontal: 10, borderRadius: 15 }} />

                                </View>
                            </View>
                            <Modal
                                swipeDirection="down"
                                onBackdropPress={toggleModal}
                                propagateSwipe={true}
                                hideModalContentWhileAnimating={true}
                                useNativeDriver={true}
                                backdropOpacity={0.5}
                                isVisible={isModalVisible}
                                style={{ alignSelf: "center", marginTop: RFPercentage(10), flex: 0.7 }}>
                                <SavedCardsPage isModal={true}></SavedCardsPage>
                            </Modal>
                            <Modal
                                swipeDirection="down"
                                onBackdropPress={toggleModalAdress}
                                propagateSwipe={true}
                                hideModalContentWhileAnimating={true}
                                useNativeDriver={true}
                                backdropOpacity={0.5}
                                isVisible={isAdressModalVisible}
                                style={{
                                    alignSelf: "center",
                                    marginHorizontal:0,
                                    marginTop: RFPercentage(20),
                                    flex: 0.7, // Modal içeriği tam ekranı kaplasın
                                }}
                            >
                                <SavedAdresses isModal={true} />
                            </Modal>
                            {/* Credit Card Info */}
                            <ComplateShopping onPress={handleSubmit} navigation={navigation} />
                        </>
                    )}
                </Formik>
            </ScrollView>
        </KeyboardAvoidingView>

    )
}

export default Address

const styles = StyleSheet.create({})
