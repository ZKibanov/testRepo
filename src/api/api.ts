import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Site, Test } from '../types';

export const kameloonApi = createApi({
  reducerPath: 'kameloonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3100/' }),
  endpoints: (builder) => ({
    getSome: builder.query<Site[] | Test[], string>({
      query: (endpoint) => endpoint,
    }),
  }),
});

export const { useGetSomeQuery } = kameloonApi;
