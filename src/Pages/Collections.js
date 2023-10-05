import { Button, SafeAreaView, StyleSheet, Text, TextInput, Alert, Touchable, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'
import Modal from 'react-native-modal';
import AddCollectionButton from '../Components/AddCollectionButton';
import CollecitonCard from '../Components/CollecitonCard';
import { RFPercentage } from 'react-native-responsive-fontsize';
import database from "@react-native-firebase/database"
import auth from "@react-native-firebase/auth"
import LottieView from 'lottie-react-native';
const Collecitons = ({navigation}) => {

  const dispatch = useDispatch()
  const data = useSelector(state => state.collections)

  const [collectionName, setCollecitonName] = useState("")
  const [isModalVisible, setModalVisible] = useState(false)




  function toggleModal(){
    setModalVisible(!isModalVisible)
  }

  function showFocusecCollections (collectionName) {
    
    dispatch({type:"SET_FOCUSED_COLLECTION", payload:collectionName})
    navigation.navigate("ProductsCollectionPage", {data: data.collections[collectionName]})
  }

  function renderData({item}) {
    
    return(
      <CollecitonCard onPress={() => showFocusecCollections(item)} name={item} size={data.collections[item].length} data={data.collections[item]}></CollecitonCard>
    )
  }

  function addCollection(){
    dispatch({type:"ADD_COLLECTIONS", payload:collectionName})
    toggleModal()
    setCollecitonName("")
  }

  return (
    <SafeAreaView style={styles.container}>
      {Object.keys(data.collections).length !==0  ? <FlatList
        numColumns={2}
        data={Object.keys(data.collections)}
        renderItem={renderData}></FlatList> 
        :         
        <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <LottieView
          style={{ flex: 0.5 }}
          source={require("../Assests/OpckBVdJfy.json")}
          autoPlay={true}
        />
        <Text style={{textAlign:"center", alignSelf: "center", verticalAlign: "top", color: "#FF7F00", fontWeight: "800", fontSize: 30 }}>There are not any Collecitons</Text>
      </SafeAreaView>}
      <Modal swipeDirection="down" onBackdropPress={toggleModal} propagateSwipe={true}	hideModalContentWhileAnimating={true} useNativeDriver={true} backdropOpacity={0.5} isVisible={isModalVisible}>
        <SafeAreaView style={{ flex: RFPercentage(0.01), backgroundColor:"#ffffff",borderWidth:5,borderColor:"#FF7F00",padding:10,borderRadius:20}}>
           <Text style={{ margin:10, fontWeight:"bold", fontSize:18}}>Colleciton Name</Text>
           <TextInput
            style={{ backgroundColor:"#DADADA", margin:RFPercentage(1), padding:RFPercentage(1), paddingHorizontal:RFPercentage(2)}}
            placeholder={"Collection Name"}
            value={collectionName}
            onChangeText={setCollecitonName}/>
            <TouchableOpacity onPress={addCollection} style={{ alignSelf:"center", margin:10, padding:10,paddingHorizontal:20, borderRadius:20, backgroundColor:"#FF7F00"}}>
              <Text style={{color:"white",fontWeight:"700"}}>Create Colleciton</Text>
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