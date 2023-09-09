import { Button, SafeAreaView, StyleSheet, Text, TextInput, Alert } from 'react-native'
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'

const Collecitons = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.collections)
  const [collectionName, setCollecitonName] = useState("")

  console.log(data.collections)

  function addCollection(){
    dispatch({type:"ADD_COLLECTIONS", payload:collectionName})
  }

  return (
    <SafeAreaView>
      <FlatList
        data={Object.keys(data.collections)}
        renderItem={({item}) => <Text>{item}</Text>}></FlatList>
       <TextInput
          value={collectionName}
          onChangeText={setCollecitonName}
          style={{backgroundColor:"pink",padding:20,justifyContent:"center",fontSize:29}}
       ></TextInput>
       <Button title='"dafsfsd' onPress={addCollection}></Button> 
    </SafeAreaView>
  )
}

export default Collecitons

const styles = StyleSheet.create({})