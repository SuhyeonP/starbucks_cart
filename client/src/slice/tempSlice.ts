import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';

export interface Temp{
    temp1: string;
    temp2: string;
}

const initialState: Temp = {
    temp1: 'temp',
    temp2: 'temp',
};

const tempSlice = createSlice({
    name: 'tempSlice',
    initialState,
    reducers: {
        fetchTemp1(state, action: PayloadAction<string>){
            state.temp1 = action.payload
        },
        fetchTemp2(state, action: PayloadAction<string>){
            state.temp2 = action.payload
        },
    },
});

export const { fetchTemp1, fetchTemp2 } = tempSlice.actions;
export default tempSlice.reducer;
