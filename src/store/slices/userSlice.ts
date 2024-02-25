  {/** import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { RootState } from '../store';



interface useserData {
   
    name : string;
    lastname : string;
}

const initialvalue:useserData[] =
[
{
    name : "kong",
    lastname : "nualsaard",
},
{
    name : "kong",
    lastname : "nualsaard",
},
{
    name : "kong",
    lastname : "nualsaard",
},
]


export  const userSlice = createSlice({
    name: "userData",
    initialState : initialvalue,
    reducers:{
     changname :(state:useserData ,action:PayloadAction<string>)=>{
            return state.name = "action"; 
        }
    },
 
})

//export const { changname} =userSlice.action;
export const userDataSelector= (store :RootState) =>store.userReducer; // เอาไปใช้งาน แค่ usertDataselector
export default userSlice.reducer ;
*/}