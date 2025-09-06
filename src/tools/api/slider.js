import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "../../././../utils/supabase";

export const sliderApi = createApi({
    reducerPath: "sliderApi",
    baseQuery: fakeBaseQuery(),
    tagTypes: ["Slider"],
    endpoints: (build) => ({
        getSlider: build.query({
            async queryFn() {
                try {
                    const { data, error } = await supabase
                        .from("slider")
                        .select("*")
                        .order("id", { ascending: false });

                    if (error) {
                        console.error("Supabase error:", error);
                        return { error: { status: 'CUSTOM_ERROR', error: error.message } };
                    }
                    return { data };
                } catch (error) {
                    console.error("Unexpected error:", error);
                    return { error: { status: 'CUSTOM_ERROR', error: error.message } };
                }
            },
            providesTags: ["Slider"],
        }),
        addSlider: build.mutation({
            async queryFn(newSlider) {
                try {
                    const { data, error } = await supabase
                        .from("slider")
                        .insert([newSlider])
                        .select();

                    if (error) {
                        console.error("Insert error:", error);
                        return { error: { status: 'CUSTOM_ERROR', error: error.message } };
                    }
                    return { data };
                } catch (error) {
                    return { error: { status: 'CUSTOM_ERROR', error: error.message } };
                }
            },
            invalidatesTags: ["Slider"],
        }),
        updateSlider: build.mutation({
            async queryFn({ id, ...updates }) {
                const { data, error } = await supabase.from("slider").update(updates).eq("id", id).select();
                if (error) return { error };
                return { data };
            },
            invalidatesTags: ["Slider"],
        }),
        deleteSlider: build.mutation({
            async queryFn(id) {
                const { error } = await supabase.from("slider").delete().eq("id", id);
                if (error) return { error };
                return { data: id };
            },
            invalidatesTags: ["Slider"],
        }),
    }),
});

export const {
    useGetSliderQuery,
    useAddSliderMutation,
    useUpdateSliderMutation,
    useDeleteSliderMutation,
} = sliderApi;
