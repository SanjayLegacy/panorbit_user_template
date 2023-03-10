import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://panorbit.in/api',
    prepareHeaders: (headers) => {
        return headers;
    },
})

export const allApis = createApi({
    reducerPath: "allApi",
    baseQuery: baseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({})
});