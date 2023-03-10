import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { allApis } from "../Api/allApi";
import { userApi } from "../Api/user.api";
import userReducer from "./userSlice";
import { combineReducers } from 'redux';
import { encryptTransform } from "redux-persist-transform-encrypt";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const reducers = combineReducers({
    [allApis.reducerPath]: allApis.reducer,
    [userApi.reducerPath]: userApi.reducer,
    user: userReducer,
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['user', 'token'],
    transforms: [
        encryptTransform({
            secretKey: 'my-secret-key',
            onError: function (error) { },
        }),
    ],
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => {
        const middlewares = getDefaultMiddleware({
            serializableCheck: false
        })
            .concat(allApis.middleware)
            .concat(userApi.middleware);

        return middlewares;
    },
})

const persistor = persistStore(store);
setupListeners(store.dispatch);
export { store, persistor }
