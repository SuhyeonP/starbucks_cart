import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IUser {
    userName: string | null;
    userId: string | null;
    userPassword: string | null;
}

const initialState: IUser = {
    userName: null,
    userId: null,
    userPassword: null,
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers:{
        fetchTestLogin(state, action: PayloadAction<string>){
            state.userName = action.payload;
        }
    }
})

export const { fetchTestLogin } = authSlice.actions;
export default authSlice.reducer;
