import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import TokenStorage from "../utils/storage/TokenStorage";

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
    tagTypes: ['Books', 'OwnedBooks'],
    endpoints(build) {
        return {
            getAllBooks: build.query({
                query() {
                    return ({
                        url: `api/books/g`,
                        method: 'GET',
                    })
                },
                providesTags: ['Books'],
            }),
            getAllUserBooks: build.query({
                query() {
                    return ({
                        url: `api/books/user-books`,
                        method: 'GET'
                    })
                },
                providesTags: ['OwnedBooks'],
            }),
            deleteBookById: build.mutation({
                query(id) {
                    return ({
                        url: `api/books/${id}`,
                        method: 'DELETE'
                    })
                },
                invalidatesTags: ['Books', 'OwnedBooks'],
            }),
            updateBookById: build.mutation({
                query(body) {
                    return ({
                        url: `api/books/${body.id}`,
                        method: 'PUT',
                        body: body.body,
                    })
                },
                invalidatesTags: ['Books', 'OwnedBooks'],
            }),
            createBook: build.mutation({
                query(body) {
                    return ({
                        url: `api/books/p`,
                        method: 'POST',
                        body: body,
                    })
                },
                invalidatesTags: ['Books', 'OwnedBooks'],
            })
        }
    }

})

export const {
    useGetAllBooksQuery, useGetAllUserBooksQuery, useDeleteBookByIdMutation,
    useUpdateBookByIdMutation, useCreateBookMutation
} = bookApi
