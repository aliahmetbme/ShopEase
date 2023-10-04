import database  from "@react-native-firebase/database";
import auth from "@react-native-firebase/auth"
import { Alert } from "react-native";

const INITIAL_STATE = {
  collections: {
    MyCollection: []
  },
  focusedCollectionName: ""
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_COLLECTIONS_FROM_DB":
      const collections = action.payload 
      return {
        ...state,
        collections: collections
      };
    case "ADD_COLLECTIONS":
      if (action.payload === "") { return { ...state } }
      const newCollections = {
        ...state.collections,
        [action.payload]: []
      };
      database().ref(`/${auth().currentUser.uid}/collections`).set(
        newCollections
      )
      return {
        ...state,
        collections: newCollections
      };
    case "ADD_PRODUCT_COLLECTION":
      const collectionName = action.payload[1];
      const product = action.payload[0];

      // Eğer koleksiyon adı mevcutsa sadece bu koleksiyona veri ekler
      if (state.collections[collectionName] !== undefined &&
        !state.collections[collectionName].some(item => item.id === product.id)) {
        const newCollectionState = {
          ...state.collections,
          [collectionName]: [...state.collections[collectionName], product]
        };
        database().ref(`/${auth().currentUser.uid}/collections`).set(
          newCollectionState
        )
        Alert.alert("Congratss", `You added the product to ${collectionName} colleciton succesfully`)
        return {
          ...state,
          collections: newCollectionState
        };
      }
      case "SET_FOCUSED_COLLECTION":
        const focusedCollection = action.payload;

        return {
          ...state,
          focusedCollectionName:  focusedCollection
        }
        
      // Eğer koleksiyon adı mevcut değilse herhangi bir değişiklik yapmaz
      return state;
    default:
      return state;
  }
};
