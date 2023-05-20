import {createSlice} from "@reduxjs/toolkit";
import {getFetcher} from "../api";
import axios from "axios";


const initialState = {
    name: 'football',
    page: 1,
}

const newSlice = createSlice({
    name: 'news',
    initialState: initialState,
    reducers: {
        changeName(state, action) {
            if (action.payload) {
                state.name = action.payload
            } else {
                state.name = 'football'
            }
        },
        changePage(state, action) {
            if (action.payload) {
                state.page = action.payload
            } else {
                state.page = 1
            }
        }
    }
})

export default newSlice.reducer
export const {changeName, changePage} = newSlice.actions