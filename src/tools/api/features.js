import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "../../././../utils/supabase";

export const featuresApi = createApi({
  reducerPath: "featuresApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Features"],
  endpoints: (build) => ({
    getFeatures: build.query({
      async queryFn() {
        const { data, error } = await supabase.from("features").select("*").order("id", { ascending: false });
        if (error) return { error };
        return { data };
      },
      providesTags: ["Features"],
    }),
    addFeatures: build.mutation({
      async queryFn(newFeatures) {
        const { data, error } = await supabase.from("features").insert([newFeatures]).select();
        if (error) return { error };
        return { data };
      },
      invalidatesTags: ["Features"],
    }),
    updateFeatures: build.mutation({
      async queryFn({ id, ...updates }) {
        const { data, error } = await supabase.from("features").update(updates).eq("id", id).select();
        if (error) return { error };
        return { data };
      },
      invalidatesTags: ["Features"],
    }),
    deleteFeatures: build.mutation({
      async queryFn(id) {
        const { error } = await supabase.from("features").delete().eq("id", id);
        if (error) return { error };
        return { data: id };
      },
      invalidatesTags: ["Features"],
    }),
  }),
});

export const {
  useGetFeaturesQuery,
  useAddFeaturesMutation,
  useUpdateFeaturesMutation,
  useDeleteFeaturesMutation,
} = featuresApi;
