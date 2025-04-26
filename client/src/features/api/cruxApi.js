import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REACT_APP_API_BASE_URL, PERFORMANCE } from "../../constants";

export const cruxApi = createApi({
    reducerPath: "cruxApi",
    baseQuery: fetchBaseQuery({
        baseUrl: REACT_APP_API_BASE_URL,
    }),
    endpoints: (builder) => ({
        getCruxData: builder.mutation({
            query: (urls) => ({
                url: `/${PERFORMANCE}`,
                method: "POST",
                body: { urls },
            }),
        }),
    }),
});

export const { useGetCruxDataMutation } = cruxApi;
