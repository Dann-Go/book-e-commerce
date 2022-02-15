import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const authApi = createApi(
    {
        reducerPath: "authApi",
        baseQuery: fetchBaseQuery({
            baseUrl: "http://localhost:8000/",
        }),
        tagTypes: ['token', 'user'],
        endpoints: (build) => ({
            signUp: build.mutation({
                query: (creds) => {
                    console.log(creds)
                    return ({
                        url: 'auth/sign-up',
                        method: 'POST',
                        body: creds
                    })
                }
            }),
            signIn: build.mutation({
                query: (creds) => {
                    console.log(creds)
                    return ({
                        url: 'auth/sign-up',
                        method: 'POST',
                        body: creds
                    })
                }
            }),

        })

    }
)


export const {useSignUpMutation, useSignInMutation} = authApi