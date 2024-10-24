import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'users',
    initialState: {
        list: [],
        loading: false,
        error: null,
    },
    reducers: {
        setUsers(state, action) {
            state.list = action.payload;
        },
        addUser(state, action) {
            state.list.push(action.payload);
        },
        updateUser(state, action) {
            const index = state.list.findIndex((user) => user.id === action.payload.id);
            if (index !== -1) {
                state.list[index] = action.payload;
            }
        },
        deleteUser(state, action) {
            state.list = state.list.filter((user) => user.id !== action.payload);
        },
    },
});

export const { setUsers, addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
