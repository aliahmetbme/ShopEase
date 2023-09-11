const INITIAL_STATE={
    collections:{
        MyCollection:[]
    }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_COLLECTIONS":
            const newCollections = {
                ...state.collections,
                [action.payload] : []
              };
            return {
                ...state,
                collections: newCollections
            };
            case "ADD_PRODUCT_COLLECTION":
                const collectionName = action.payload[1];
                const product = action.payload[0];
          
                // Eğer koleksiyon adı mevcutsa sadece bu koleksiyona veri ekler
                if (state.collections[collectionName] !== undefined) {
                  const newCollectionState = {
                    ...state.collections,
                    [collectionName]: [...state.collections[collectionName], product]
                  };
                  return {
                    ...state,
                    collections: newCollectionState
                  };
                }
          
                // Eğer koleksiyon adı mevcut değilse herhangi bir değişiklik yapmaz
                return state;
        default:
            return state;
    }
};
