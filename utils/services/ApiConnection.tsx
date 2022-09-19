import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const ApiHeaders = {
    "Accept": "application/json"
}
const baseUrl = 'https://seashell-app-dnjfe.ondigitalocean.app';
export interface Categories {
    id: number,
    name: string,
    created_at?: string,
    updated_at?: string
}
export interface Category {
    id: number,
    name: string,
    votes: string,
    user_image: string,
    category: string
}
export interface GetCelebratedTechies {
    id: number;
    user_image: string;
}
export interface Search {
    id: number,
    name: string,
    votes?: string,
    user_image?: string,
    category_id?: number,
    created_at?: string,
    updated_at?: string,
    type?: string

}
export interface Payload {
    name?: string;
    email?: string;
}
interface Headers {
    Authorization: string;
}
interface SearchPayload {
    search: string
}
interface PricingResponse {
    price: number,
    count: number
}
export interface PostVote {
    category_id: number,
    nominee_id: number,
    payload: { points: number }
}
const createRequest = (url: string, method: any) => ({ url, headers: ApiHeaders, method });
const postRequest = (url: string, method: string, body: object) => ({ url, headers: ApiHeaders, method, body });
const postRequestWithHeader = (url: string, method: string, headers: any) => ({ url, headers, method });
const connectedAwardsApi = createApi({
    reducerPath: 'Api',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ["Post", "Get"],

    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => createRequest(`/api/categories`, "GET"),
            transformResponse: (response: { data: Categories[] }) => response.data,
            providesTags: ["Get"],
        }),
        
    })
});
export const {  } = connectedAwardsApi;
export default connectedAwardsApi;