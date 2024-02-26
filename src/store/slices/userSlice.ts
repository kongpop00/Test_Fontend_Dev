import { createSlice } from '@reduxjs/toolkit'
//import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'



interface User {
    id : number;
    prefix : string;
    name : string;
    lastname :string;
    birth : string;
    nationality : string ;
    idCard : string;
    phone : string;
    gerder: string;
    passport : string;
    slary : string



}


const initialState: User = {
    id : 0,
    prefix :"",
    name :"",
    lastname:"",
    birth :"",
    nationality:"",
    idCard :"",
    phone :"",
    gerder:"",
    passport :"",
    slary :"",
}

export const CreateUser = createSlice({
  name: 'createUser',
  initialState:initialState ,
  reducers: {


   
  },
})


// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

