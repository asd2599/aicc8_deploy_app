import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    modelType: "create",
    task: null
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
            state.modelType = action.payload.modelType;
            state.task = action.payload.task;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.modelType = "create";
            state.task = null;
        }
    }
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
