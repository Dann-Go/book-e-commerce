import {configureStore} from '@reduxjs/toolkit'
import {authApi} from "./authenticator";
import {bookApi} from "./bookFetcher";
import editorReducer from "./editBookSlice"
import cartReducer from "./cartSlice"
import {orderApi} from "./orderApi";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [bookApi.reducerPath]: bookApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
        editor: editorReducer,
        cart: cartReducer,
    },
    middleware: getDefaultMiddleware => [...getDefaultMiddleware(), authApi.middleware,
        bookApi.middleware, orderApi.middleware]


    //TODO
    //Auth State
})