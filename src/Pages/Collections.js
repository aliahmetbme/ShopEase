import { Button, SafeAreaView, StyleSheet, Text, TextInput, Alert, Touchable, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'
import Modal from 'react-native-modal';
import AddCollectionButton from '../Components/AddCollectionButton';

const Collecitons = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.collections)

  const [collectionName, setCollecitonName] = useState("")
  const [isModalVisible, setModalVisible] = useState(false)

  function toggleModal(){
    setModalVisible(!isModalVisible)
  }

  // console.log(data.collections)

  function addCollection(){
    dispatch({type:"ADD_COLLECTIONS", payload:collectionName})
    toggleModal()
    setCollecitonName("")
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Object.keys(data.collections)}
        renderItem={({item}) => <Text>{item}</Text>}></FlatList>
       {/* <TextInput
          value={collectionName}
          onChangeText={setCollecitonName}
          style={{backgroundColor:"pink",padding:20,justifyContent:"center",fontSize:29}}
       ></TextInput> */}
      <Modal swipeDirection="down" onBackdropPress={toggleModal} propagateSwipe={true}	hideModalContentWhileAnimating={true} useNativeDriver={true} backdropOpacity={0.5} isVisible={isModalVisible}>
        <SafeAreaView style={{ flex: 0.2 , backgroundColor:"#ffffff",borderWidth:5,borderColor:"#FF7F00",padding:10}}>
           <Text style={{margin:10, fontWeight:"bold", fontSize:18}}>Colleciton Name</Text>
           <TextInput
            style={{backgroundColor:"#DADADA", margin:10, padding:10, paddingHorizontal:20, borderRadius:10}}
            placeholder={"Collection Name"}
            value={collectionName}
            onChangeText={setCollecitonName}/>
            <TouchableOpacity onPress={addCollection} style={{alignSelf:"center", margin:30, padding:10,paddingHorizontal:20, borderRadius:20, backgroundColor:"#FF7F00"}}>
              <Text>Create Colleciton</Text>
            </TouchableOpacity>
        </SafeAreaView>
      </Modal>
       <AddCollectionButton onPress={toggleModal} title= {Object.keys(data.collections) ? "New Collection" : "Create Colleciton"}  isNull={Object.keys(data.collections)}></AddCollectionButton>
    </SafeAreaView>
  )
}

export default Collecitons

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})