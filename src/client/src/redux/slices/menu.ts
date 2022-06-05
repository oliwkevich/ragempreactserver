import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface menuState {
    isActive: boolean;
}

const initialState: menuState = {
    isActive: true,
};

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        changeActive: (state) => {
            state.isActive = !state.isActive;
        },
        changeActiveAdmin: (state, action: PayloadAction<Number>) => {
            state.isActive = !state.isActive;
        },
    },
});

export const { changeActive, changeActiveAdmin } = menuSlice.actions;

export default menuSlice.reducer;
