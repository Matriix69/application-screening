import { configureStore } from "@reduxjs/toolkit";
import ApplicantsSlice from "./applicantsSlice";

const store = configureStore({
    reducer: {
        Applicants: ApplicantsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
