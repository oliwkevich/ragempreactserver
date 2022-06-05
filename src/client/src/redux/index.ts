import { configureStore } from '@reduxjs/toolkit';
import menu from './slices/menu';
import pages from './slices/pages';

export const store = configureStore({
    reducer: {
        menu,
        pages,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
