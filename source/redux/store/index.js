// // store.js
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { createStore } from 'redux';
// import { persistReducer, persistStore } from 'redux-persist';
// import rootReducer from '../reducer';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: []
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const store = createStore(persistedReducer)
// const persistor = persistStore(store);

// export { persistor, store };
