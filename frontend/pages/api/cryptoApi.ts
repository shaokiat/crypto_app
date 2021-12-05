import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
interface CryptoType {
  data?: any;
}
const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'a124ad852amsh295784959993f95p1c164ejsn2b8a46722d2e',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query<CryptoType, number>({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
    // getCryptoDetails: builder.query({
    //   query: (coinId) => createRequest(`/coin/${coinId}`),
    // }),
    // getCryptoHistory: builder.query({
    //   query: ({ coinId, timeperiodddd }) => createRequest(`coin/${coinId}/history/${timeperiod}`),
    // }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetCryptosQuery, useGetExchangesQuery } = cryptoApi;
