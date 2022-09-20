import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Router from "next/router";
import { BlogPost } from "../../models/blog";
const ApiHeaders = {
  Accept: "application/json",
};
const baseUrl = "https://localhost:3000" + "/api";
const createRequest = (url: string, method: any) => ({
  url,
  headers: ApiHeaders,
  method,
});
const postRequest = (url: string, method: string, body: object) => ({
  url,
  headers: ApiHeaders,
  method,
  body: body
});
const connectedAwardsApi = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["Post", "Get"],

  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => createRequest(`/posts/posts`, "GET"),
      transformResponse: (response: { data: BlogPost[] }) => response.data,
      providesTags: ["Get"],
    }),
      getPost: builder.query({
          query: (slug: string) => createRequest(`/posts/post/?slug=${slug}`, "GET"),
          transformResponse: (response: { data: BlogPost }) => response.data,
          providesTags: ["Get"],
      }),
      createPost: builder.mutation({
          query: (body: any) => postRequest(`/posts/create`, "POST", body),
            invalidatesTags: ["Post"],
      }),
    createComment: builder.mutation({
          query: (body: any) => postRequest(`/posts/comments/create`, "POST", body),
            invalidatesTags: ["Post"],
    }),
    getComments: builder.query({
      query: (slug:string) => createRequest(`/posts/comments/comments/?slug=${slug}`, "GET"),
      transformResponse: (response: { data: BlogPost[] }) => response.data,
      providesTags: ["Get"],
    }),
  }),
});
export const { useGetPostsQuery, useGetPostQuery, useCreatePostMutation } = connectedAwardsApi;
export default connectedAwardsApi;
