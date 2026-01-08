import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const login = createAsyncThunk(
  "user/login",
  async ({ username, password }) => {
    try {
      const auth = getAuth(); // giriş yap
      const userCredential = await signInWithEmailAndPassword(
        auth,
        username,
        password
      ); // giriş bilgilerini kontrol et

      const user = userCredential.user;
      const token = user.stsTokenManager.accessToken;

      const userData = {
        token,
        user: user,
      };
      return userData;
    } catch (error) {
      console.log("userSlice 21 Line", error);
      throw error;
    }
  }
);

const initialState = {
  email: null,
  password: null,
  isLoading: false,
  isAuth: false,
  token:null,
  user:null,
  error:null

};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      const lowerCaseEmail = action.payload.toLowerCase();
      state.email = lowerCaseEmail;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setLogin: (state, action) => {
      if (
        state.email === state.users.userEmail &&
        state.password === state.users.userPassword
      ) {
        console.log(true);
        state.isAuth = true;
      } else {
        console.log(false);
      }
    },
  },
  extraReducers:(builder)=>{
    builder
    .addCase(login.pending, (state)=>{
        state.isLoading = true;
        state.isAuth =false;
    })
    .addCase(login.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.isAuth=true;
        state.user = action.payload.user;
        state.token = action.payload.token;
    })
    .addCase(login.rejected,(state,action)=>{
        state.isLoading=false;
        state.isAuth =false;
        state.error = action.error.message;
    })
  }
});

export const { setEmail, setPassword, setIsLoading, setLogin } =
  userSlice.actions;
export default userSlice.reducer;
