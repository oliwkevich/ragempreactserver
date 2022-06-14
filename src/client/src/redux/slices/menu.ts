import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EtypeMenu } from '../../types';

interface menuState {
    isActive: boolean;
    typeMenu: EtypeMenu;
}

const initialState: menuState = {
    isActive: true,
    typeMenu: EtypeMenu.auth,
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
        changeTypeMenu: (state, action: PayloadAction<EtypeMenu>) => {
            state.typeMenu = action.payload;
        },
    },
});

export const { changeActive, changeActiveAdmin, changeTypeMenu } = menuSlice.actions;

export default menuSlice.reducer;
