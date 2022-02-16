import {configureStore} from '@reduxjs/toolkit'
import {authApi} from "./authenticator";
import {bookApi} from "./bookFetcher";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [bookApi.reducerPath]: bookApi.reducer,
    },
    middleware: getDefaultMiddleware => [...getDefaultMiddleware(), authApi.middleware, bookApi.middleware]
})