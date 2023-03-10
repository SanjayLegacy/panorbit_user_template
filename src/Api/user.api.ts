import { allApis } from "./allApi";

export const userApi = allApis.injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
        getUsers: builder.query<any, void>({
            query: () => "users.json",
            providesTags: ["User"],
        })
    }),
});

export const { useGetUsersQuery } = userApi;
