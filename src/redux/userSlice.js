import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendEmailVerification } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }) => {
    console.log(password);
    try {
      const auth = getAuth(); // giriş yap
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      ); // giriş bilgilerini kontrol et

      const user = userCredential.user;
      const token = user.stsTokenManager.accessToken;

      const userData = {
        token,
        user: user,
      };

      await AsyncStorage.setItem("userToken", token);

      return userData;
    } catch (error) {
      console.log("userSlice 21 Line", error);
      throw error;
    }
  }
);

//KULLANICI OTOMATİK GİRİŞ İŞLEMLERİ
export const autoLogin = createAsyncThunk("user/autoLogin", async () => {
  try {
    const token = await AsyncStorage.getItem("userToken");

    if (token) {
      return token;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    throw error;
  }
});

// Kullanıcı çıkış İşlemleri
export const logout = createAsyncThunk("user/logout", async()=>{
  try {
    const auth = getAuth();
    await signOut(auth);

    await AsyncStorage.removeItem("userToken");
    return null;
  } catch (error) {
    throw error;
  }
})

//KULLANICI KAYIT İŞLEMLERİ
export const register = createAsyncThunk("user/register", async({email,password})=>{
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    const user= userCredential.user;
    const token = user.stsTokenManager.accessToken;

    await sendEmailVerification(user);

    await AsyncStorage.setItem("userToken", token);
    return token;
  } catch (error) {
    throw error;
  }
})

const initialState = {
  // email: null,
  // password: null,
  isLoading: false,
  isAuth: false,
  token: null,
  user: null,
  error: null,
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
    // setLogin: (state, action) => {
    //   if (
    //     state.email === state.users.userEmail &&
    //     state.password === state.users.userPassword
    //   ) {
    //     console.log(true);
    //     state.isAuth = true;
    //   } else {
    //     console.log(false);
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isAuth = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuth = false;
        state.error = action.error.message;
      })


// Kullanıcı token ile giriş kontrolü
      .addCase(autoLogin.pending,(state)=>{
        state.isLoading = true;
        state.isAuth = false;
      })
      //Başarılı giriş yaptıysa
      .addCase(autoLogin.fulfilled,(state,action)=>{
        state.isLoading = false; //kullanıcı griş yaptı loadin durmalı
        state.isAuth = true;
        state.token = action.payload;
      })
      //Reddedildiyse
      .addCase(autoLogin.rejected,(state,action)=>{
        state.isLoading=false;
        state.isAuth = false;
        state.token = null;
      })

//Logout İşlemleri
      .addCase(logout.pending, (state)=>{
        state.isLoading = true;
      })
      .addCase(logout.fulfilled,(state)=>{
        state.isLoading=false;
        state.isAuth = false;
        state.token = null;
        state.error = null;
      })
      .addCase(logout.rejected, (state,action)=>{
        state.isLoading=false;
        state.error = action.payload; //hatayı göster

      })

      //Kayıt İşlemleri
      .addCase(register.pending, (state)=>{
        state.isLoading = true;
        state.isAuth=false;
      })
      .addCase(register.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.isAuth = true; //giriş yaptı
        state.token = action.payload;
      })
      .addCase(register.rejected, (state,action)=>{
        state.isLoading=false;
        state.isAuth=false;
        state.error = "Invalid Email or Password" //hatayı göster

      })
  },
});

export const { setEmail, setPassword, setLogin } = userSlice.actions;
export default userSlice.reducer;
