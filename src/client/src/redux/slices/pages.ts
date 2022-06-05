import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Epages } from '../../types';

interface pageState {
    isActive: string;
    // allPages: [object];
    isMenuActive: boolean;
}

const initialState: pageState = {
    isActive: 'Main',
    // allPages: [{ name: 'news', element: 'News' }],
    isMenuActive: false,
};

export const pagesSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        changePage: (state, action: PayloadAction<Epages>) => {
            state.isActive = action.payload;
        },
        toggleMenu: (state) => {
            state.isMenuActive = !state.isMenuActive;
        },
    },
});

export const { changePage, toggleMenu } = pagesSlice.actions;

export default pagesSlice.reducer;
