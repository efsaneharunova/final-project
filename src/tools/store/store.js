import { configureStore } from "@reduxjs/toolkit";
import { featuresApi } from "../api/features.js";
import { serviceApi } from "../api/service.js";
import { sliderApi } from "../api/slider.js";

const store = configureStore({
  reducer: {
    [featuresApi.reducerPath]: featuresApi.reducer,
    [serviceApi.reducerPath]: serviceApi.reducer,
    [sliderApi.reducerPath]: sliderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(featuresApi.middleware)
      .concat(serviceApi.middleware)
      .concat(sliderApi.middleware),
});

export default store;
