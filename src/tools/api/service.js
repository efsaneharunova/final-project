import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "../../././../utils/supabase";

export const serviceApi = createApi({
    reducerPath: "serviceApi",
    baseQuery: fakeBaseQuery(),
    tagTypes: ["Service"],
    endpoints: (build) => ({
        getService: build.query({
            async queryFn() {
                try {
                    const { data, error } = await supabase
                        .from("service")
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
            providesTags: ["Service"],
        }),
        addService: build.mutation({
            async queryFn(newService) {
                try {
                    const { data, error } = await supabase
                        .from("service")
                        .insert([newService])
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
            invalidatesTags: ["Service"],
        }),
        updateService: build.mutation({
            async queryFn({ id, ...updates }) {
                const { data, error } = await supabase.from("service").update(updates).eq("id", id).select();
                if (error) return { error };
                return { data };
            },
            invalidatesTags: ["Service"],
        }),
        deleteService: build.mutation({
            async queryFn(id) {
                const { error } = await supabase.from("service").delete().eq("id", id);
                if (error) return { error };
                return { data: id };
            },
            invalidatesTags: ["Service"],
        }),
    }),
});

export const {
    useGetServiceQuery,
    useAddServiceMutation,
    useUpdateServiceMutation,
    useDeleteServiceMutation,
} = serviceApi;
