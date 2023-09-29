import { Button, SafeAreaView, StyleSheet, Text, TextInput, Alert, Touchable, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'
import Modal from 'react-native-modal';
import AddCollectionButton from '../Components/AddCollectionButton';
import CollecitonCard from '../Components/CollecitonCard';

const Collecitons = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.collections)

  const [collectionName, setCollecitonName] = useState("")
  const [isModalVisible, setModalVisible] = useState(false)

  function toggleModal(){
    setModalVisible(!isModalVisible)
  }

  function renderData({item}) {
    return(
      <CollecitonCard name={item} size={data.collections[item].length} data={data.collections[item]}></CollecitonCard>
    )
  }

  function addCollection(){
    dispatch({type:"ADD_COLLECTIONS", payload:collectionName})
    toggleModal()
    setCollecitonName("")
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        data={Object.keys(data.collections)}
        renderItem={renderData}></FlatList>
      <Modal swipeDirection="down" onBackdropPress={toggleModal} propagateSwipe={true}	hideModalContentWhileAnimating={true} useNativeDriver={true} backdropOpacity={0.5} isVisible={isModalVisible}>
        <SafeAreaView style={{ flex: 0.2 , backgroundColor:"#ffffff",borderWidth:5,borderColor:"#FF7F00",padding:10}}>
           <Text style={{margin:10, fontWeight:"bold", fontSize:18}}>Colleciton Name</Text>
           <TextInput
            style={{backgroundColor:"#DADADA", margin:10, padding:10, paddingHorizontal:20, borderRadius:10}}
            placeholder={"Collection Name"}
            value={collectionName}
            onChangeText={setCollecitonName}/>
            <TouchableOpacity onPress={addCollection} style={{alignSelf:"center", margin:10, padding:10,paddingHorizontal:20, borderRadius:20, backgroundColor:"#FF7F00"}}>
              <Text>Create Colleciton</Text>
            </TouchableOpacity>
        </SafeAreaView>
      </Modal>
      <AddCollectionButton onPress={toggleModal} title={Object.keys(data.collections).length === 0 ? "Create Collection" : "New Collection"} isNull={Object.keys(data.collections).length === 0}></AddCollectionButton>
    </SafeAreaView>
  )
}

export default Collecitons

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#d1d5db"
  }
})