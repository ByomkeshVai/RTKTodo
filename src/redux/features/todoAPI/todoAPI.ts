import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseAPI = createApi({
  reducerPath: "baseAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: () => ({
        url: `/tasks`,
        method: "GET",
      }),
      providesTags: ["todo"],
    }),
    addTodo: builder.mutation({
      query: (data) => ({
        url: `/task`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
    UpdateToggle: builder.mutation({
      query: (options) => ({
        url: `/task/${options.id}`,
        method: "PUT",
        body: options.data,
      }),
      invalidatesTags: ["todo"],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/task/${id}`,
        method: "DELETE",
        params: id,
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetTodoQuery,
  useAddTodoMutation,
  useUpdateToggleMutation,
  useDeleteTodoMutation,
} = baseAPI;
