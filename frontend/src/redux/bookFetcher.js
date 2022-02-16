import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import TokenStorage from "../utils/storage/TokenStorage";
import tokenStorage from "../utils/storage/TokenStorage";

const token = TokenStorage.getToken().toString().replace(/^"(.*)"$/, '$1');
export const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000/",
        prepareHeaders(headers) {
            headers.set("Authorization", `Bearer ${token}`)

            return headers;
        }
    }),
    endpoints(build) {
        return {
            getAllBooks: build.query({
                query() {
                    return ({
                        url: `api/books/g`,
                        method: 'GET',
                    })
                }
            })
        }
    }

})

export const {useGetAllBooksQuery} = bookApi
