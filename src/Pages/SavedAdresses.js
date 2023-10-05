import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import AdressCard from '../Components/AdressCard'
import Icon from "react-native-vector-icons/Ionicons"
import Modal from "react-native-modal"
import AddingAdress from "../Components/AddingAdress"
import database from "@react-native-firebase/database"
import auth from "@react-native-firebase/auth"
import LottieView from 'lottie-react-native'
const SavedAdresses = ({ isModal }) => {
  const [isModalVisible, setModalVisible] = useState(false)
  const [adresses, setAdresses] = useState([])

  function toggleModal() {
    setModalVisible(!isModalVisible)
  }
  function renderItem({ item, index }) {
    return (
      <AdressCard isModal={isModal} props={item}></AdressCard>
    )
  }
  useEffect((
    () => {
      database()
        .ref(`/${auth().currentUser.uid}/adresses`)
        .on("value", snapshot => {
          const data = snapshot.val();
          if (data !== null) {
            setAdresses(Object.values(data))
          } else {

          }

        })
    }
  ), [])


  return (
    <SafeAreaView style={styles.container}>
      {adresses.length !== 0 ? <FlatList
        data={adresses}
        renderItem={renderItem}
        ListFooterComponent={
          !isModal ? <TouchableOpacity onPress={toggleModal} style={{ alignItems: "flex-end", justifyContent: "flex-end", alignSelf: "center" }}>
            <Icon name="add-circle-outline" size={80} color={"black"} />
          </TouchableOpacity> : null
        } />
        :
        <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <LottieView
          style={{ flex: 1 }}
          source={require("../Assests/animation_lnd6na2d.json")}
          autoPlay={true}
        />
        <TouchableOpacity onPress={toggleModal} style={{ alignItems: "flex-end", justifyContent: "flex-end", alignSelf: "center" }}>
            <Icon name="add-circle-outline" size={80} color={"black"} />
          </TouchableOpacity> 
      </SafeAreaView>}

      <Modal style={{ justifyContent: "flex-end", margin: 0, paddingTop: 10, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} swipeDirection="down" onBackdropPress={toggleModal} propagateSwipe={true} hideModalContentWhileAnimating={true} useNativeDriver={true} backdropOpacity={0.5} isVisible={isModalVisible}>
        <AddingAdress onPress={toggleModal}></AddingAdress>
      </Modal>
    </SafeAreaView>
  )
}

export default SavedAdresses

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
})