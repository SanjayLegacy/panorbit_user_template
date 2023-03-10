import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { allApis } from "../Api/allApi";
import { userApi } from "../Api/user.api";
import userReducer from "./userSlice";
import { combineReducers } from 'redux';
import { encryptTransform } from "redux-persist-transform-encrypt";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const reducers = combineReducers({
    [allApis.reducerPath]: allApis.reducer,
    [userApi.reducerPath]: userApi.reducer,
    user: userReducer,
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
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
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
            .concat(allApis.middleware)
            .concat(userApi.middleware);

        return middlewares;
    },
})

const persistor = persistStore(store);
setupListeners(store.dispatch);
export { store, persistor };
