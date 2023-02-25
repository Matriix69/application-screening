import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import { mockData, mockType } from "../libs/mockData";
// import { Cart, cartUpdateColor, cartUpdateSize, Currencies, products } from "../utiles/types";
// import { getCartFromLocalStorage, mockData, setCarttoLocalStorage } from "../utiles/utiles";

// Define a type for the slice state
interface Shop {
    applicants: mockType[];
    selectedApplicant: mockType | null;
    // disQualifiedApplicant: mockType[]
}

// Define the initial state using that type
const initialState: Shop = {
    applicants: [...mockData],
    selectedApplicant: null,
    // disQualifiedApplicant: []
};

const findJustOne = (state: Shop) => {
    let getOne = state.applicants.find((item) => !item.disQualified && !item.shortlisted) || null;
    getOne ||= state.applicants.find((item) => item.disQualified && !item.shortlisted) || null;
    state.selectedApplicant = getOne;
};

export const applicantSlice = createSlice({
    name: "applicants",

    initialState,

    reducers: {
        viewApplicant: (state, action: PayloadAction<number>) => {
            const findApplicant = state.applicants.find((item) => item.id === action.payload);
            if (findApplicant) state.selectedApplicant = findApplicant;
        },
        disqualifyApplicant: (state, action: PayloadAction<number>) => {
            const findApplicantIndex = state.applicants.findIndex((item) => item.id === action.payload);
            state.applicants[findApplicantIndex].disQualified = true;

            findJustOne(state);
        },
        shortListApplicant: (state, action: PayloadAction<number>) => {
            const findApplicantIndex = state.applicants.findIndex((item) => item.id === action.payload);
            state.applicants[findApplicantIndex].shortlisted = true;

            findJustOne(state);
        },
        switchSelected: (state, action: PayloadAction<string>) => {
            if (action.payload === "shortListed") {
                state.selectedApplicant = state.applicants.find((item) => item.shortlisted) || null;
                return;
            }
            if (action.payload === "recommended") {
                findJustOne(state);
            }
        },
    },
});

export const { viewApplicant, disqualifyApplicant, shortListApplicant, switchSelected } = applicantSlice.actions;

export const allApplicants = (state: RootState) => state.Applicants.applicants;
export const activeSelectedApplicant = (state: RootState) => state.Applicants.selectedApplicant;
// export const disQualifiedApplicant = (state: RootState) => state.Applicants.disQualifiedApplicant;

export default applicantSlice.reducer;
