import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface User {
  id: number;
  prefix: string;
  name: string;
  lastname: string;
  birth: string;
  nationality: string;
  idCard: string;
  phone: string;
  gender: string;
  passport: string;
  salary: string;
  prefixPhone:string
}

const initialState: User[] = JSON.parse(localStorage.getItem("Users") || "[]");

export const UserSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    addUser: (state: User[], action: PayloadAction<any>) => {
      state.push(action.payload);

      localStorage.setItem("Users", JSON.stringify(state));
    },

    deleteUser: (state: User[], action: PayloadAction<any>) => {
      const { id } = action.payload;
      const findId = state.find((item) => item.id === id);

      if (findId) {
        state = state.filter((user) => user.id !== id);
        localStorage.setItem("Users", JSON.stringify(state));
        return state;
      }
    },

    deleteUserAll: (state: User[], action: PayloadAction<any>) => {
      const { checkAll } = action.payload;

      if (checkAll) {
        localStorage.removeItem("Users");

        state = state.filter((item) => item !== item);
        localStorage.setItem("Users", JSON.stringify(state));
        return state;
      }
    },
    deleteUserSelect: (state, action) => {
      const { select } = action.payload;
      let newstate = state;
      {
        select.map((e: User) => {
          newstate = newstate.filter((call) => call.id !== e.id);
        });
      }

      state = newstate;
      localStorage.setItem("Users", JSON.stringify(state));
      return state;
    },

    EditUser :(state ,action)=>{
      const {id, prefix, name,lastname,birth, nationality,idCard,phone,gender,passport, salary, prefixPhone} =action.payload
      const edit  = state.find(user =>user.id == id);
      if(edit){
        edit.prefix =prefix;
        edit.name = name;
        edit.lastname =lastname;
        edit.nationality = nationality;
        edit.birth= birth;
        edit.idCard = idCard;
        edit.phone =phone;
        edit.gender =gender;
        edit.passport =passport;
        edit.salary =salary;
        edit.prefixPhone =prefixPhone;
      }
      localStorage.setItem("Users", JSON.stringify(state));
    }
  },
});

export const { addUser, deleteUser, deleteUserAll, deleteUserSelect ,EditUser } =
  UserSlice.actions;
export const userSelector = (store: RootState) => store.users; // เอาชื่อไว้ใน store
export default UserSlice.reducer;
