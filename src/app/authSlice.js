import { createSlice } from "@reduxjs/toolkit";
import authService from "../appWriter/authService"
import { useNavigate } from "react-router-dom";

const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            console.log("LOGOUT");
            state.status = false;
            state.userData = null;
            authService.logout().then(() => {
            })
        }
    }
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;