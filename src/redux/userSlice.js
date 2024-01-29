import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export const login = createAsyncThunk("user/login", async (data) => {
  try {
    const auth = getAuth();
  const {user} = await signInWithEmailAndPassword(auth, data.email, data.password);
  const token = user.stsTokenManager.accessToken;
  
  return {user, token};
  } catch (error) {
    console.log(error);
    throw error;
  }
  
});

const initalState = {
   email: null,
   password: null,
   isLoading: false,
   isAuth: false,
   token: null,
   user: null,
   error: null,
   
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
   },
   extraReducers: (builder) => {
     builder.addCase(login.pending, (state)=>{
        state.isLoading = true
     })
     .addCase( login.fulfilled, (state, action)=>{
        state.isLoading= false
        state.isAuth = true
        state.user = action.payload.user
        state.token = action.payload.token

     })
     .addCase(login.rejected, (state, action)=> {
        state.isLoading = false
        state.isAuth = false
        state.error = action.error
     })
   },
});

export const { setEmail, setPassword, setIsLoading } = userSlice.actions;
export default userSlice.reducer;