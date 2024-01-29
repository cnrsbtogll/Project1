import { createSlice } from "@reduxjs/toolkit";

const initalState = {
   email: null,
   password: null,
   isLoading: false,
   isAuth: false,
   users:{ 
    userEmail:"deneme@deneme.com",
    userPassword:"123"
   }
};

export const userSlice = createSlice({
   name: "user",
   initialState: initalState,
   reducers: {
     setEmail: (state, action) => {
       state.email = action.payload;
     },
     setPassword: (state, action) => {
       state.password = action.payload;
     },
     setIsLoading: (state, action) => {
       state.isLoading = action.payload;
     },
     setLogin: (state) =>{
        if(state.email===state.users.userEmail && state.password===state.users.userPassword){
          state.isAuth = true;
        }
     }
   },
});

export const { setEmail, setPassword, setIsLoading, setLogin } = userSlice.actions;
export default userSlice.reducer;