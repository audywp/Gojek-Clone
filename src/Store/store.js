import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import allReducer from './reducer';

const persistConfig = {
  key: 'root',
  storage: storage,
};
// create persist tempat penyimpanan
const persistRootReducer = persistReducer(persistConfig, allReducer);

// create store, apa yang di simpan.
const Store = createStore(persistRootReducer, applyMiddleware(thunk, logger));

export const Persist = persistStore(Store);
export default Store;
