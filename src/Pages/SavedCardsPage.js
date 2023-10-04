import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import CreditCard from '../Components/CreditCard'
import Icon from "react-native-vector-icons/Ionicons"
import Modal from 'react-native-modal'
import { RFPercentage } from 'react-native-responsive-fontsize'
import database from "@react-native-firebase/database"
import auth from "@react-native-firebase/auth"
import AddingCreditCard from "../Components/AddingCreditCard"
const SavedCardsPage = ({isModal}) => {

  const [isModalVisible, setModalVisible] = useState(false)
  const [creditcards, setCreditCards] = useState([])

  function toggleModal() {
    setModalVisible(!isModalVisible)
  }  
  function renderItem({ item, index }) {
    return (
      <CreditCard isModal={isModal} index={index} props={item}></CreditCard>
    )
  }
  useEffect((
    () => {
      database()
        .ref(`/${auth().currentUser.uid}/creditcards`)
        .on("value", snapshot => {
          const data = snapshot.val();
          if (data !== null) {
            setCreditCards(Object.values(data))
          } else {

          }

        })
    }
  ), [])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={creditcards}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()} 
        ListFooterComponent={
          !isModal  ?  <View style={{ justifyContent: "flex-end" }}>
            <TouchableOpacity onPress={toggleModal} style={{ alignSelf: "center" }}>
              <Icon name="add-circle-outline" size={80} color={"black"} />
            </TouchableOpacity>
          </View> : null
        } />

      <Modal
        swipeDirection="down"
        onBackdropPress={toggleModal}
        propagateSwipe={true}
        hideModalContentWhileAnimating={true}
        useNativeDriver={true}
        backdropOpacity={0.5}
        isVisible={isModalVisible}
        style={{ flex: 1, margin: 0, justifyContent:"flex-end",}}
      >
        <AddingCreditCard onPress={toggleModal} />
      </Modal>

    </SafeAreaView>
  )
}
export default SavedCardsPage

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  }
})