import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface iQuery {
  newsCategory: string;
  count: number;
}

const newsApiHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': process.env.NEXT_PUBLIC_NEWS_RAPIDAPI_HOST,
  'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url: string) => ({ url, headers: newsApiHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query<any, iQuery>({
      query: ({ newsCategory, count }) =>
        createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
