import { createSlice } from "@reduxjs/toolkit";

const Reducer = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        getUser: (state, action) => {
            state.user = action.payload
        },
}
})

const { actions, reducer } = Reducer

export const { getUser } = actions;

export default reducer