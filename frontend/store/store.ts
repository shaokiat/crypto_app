import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../pages/api/cryptoApi';
import { cryptoNewsApi } from '../pages/api/cryptoNewsApi';

export const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware).concat(cryptoNewsApi.middleware),
});
