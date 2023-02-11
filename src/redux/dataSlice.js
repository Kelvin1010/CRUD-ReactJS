import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    data: [],
    error: false
}


const dataSlice = createSlice({
    name:'dataTable',
    initialState,
    reducers: {
        getData(state,action) {
            state.data.push(action.payload)
        },
        getDataFailed(state,action){
            state.data = false;
            state.error = true;
        }
    }
})

export const {
    getData,
    getDataFailed,
} = dataSlice.actions


export default dataSlice.reducer