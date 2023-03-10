import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: [],
    loggedInUser: {},
    chatUser: {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userArray: (state, action) => {
            state.userData = action.payload;
        },
        setLoggedInUser: (state, action) => {
            state.loggedInUser = action.payload;
        },
        setChatUser: (state, action) => {
            state.chatUser = action.payload;
        }
    }
});

export const { userArray, setLoggedInUser, setChatUser } = userSlice.actions;
export default userSlice.reducer;
