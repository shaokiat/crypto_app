import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface iQuery {
  newsCategory: string;
  count: number;
}

const newsApiHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
  'x-rapidapi-key': 'a124ad852amsh295784959993f95p1c164ejsn2b8a46722d2e',
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
