import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface userState {
    user: object;
    characters: object;
}

const initialState: userState = {
    user: {},
    characters: {},
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction) => {
            
        }
    },
});
