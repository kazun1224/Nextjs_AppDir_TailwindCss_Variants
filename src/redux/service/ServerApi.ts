import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const serverApi = createApi({
  reducerPath: 'serverApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => 'posts',
    }),
    getPost: builder.query<Post, string>({
      query: (id) => `posts/${id}`,
    }),
  }),
});

export const {useGetPostQuery, useGetPostsQuery} = serverApi;
