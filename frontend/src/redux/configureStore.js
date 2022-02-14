import {configureStore} from '@reduxjs/toolkit'
import {authApi} from "./authenticator";

export const store = configureStore({
    reducer: {
       [authApi.reducerPath]: authApi.reducer,
    },
    middleware: getDefaultMiddleware => [...getDefaultMiddleware(), authApi.middleware]
})