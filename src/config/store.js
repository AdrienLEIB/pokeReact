import {createStore} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 


import reducers from '../reducers'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['modal']
  }
  

  const persistedReducer = persistReducer(persistConfig, reducers)


let store = createStore(persistedReducer)
let persistor = persistStore(store)
export { store, persistor }