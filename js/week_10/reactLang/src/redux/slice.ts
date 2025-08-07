import { createSlice } from "@reduxjs/toolkit";

const initialState: StateType = {
    loading: false,
    words: [],
    result: []
}


const rootSlice = createSlice({
    name: "root",
    initialState,
    reducers: {}
})


export default rootSlice.reducer