// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuvFBCJc6z1j6IWEe6iPQ3nUMWQYynZUA",
  authDomain: "reactnative-authenticati-e577c.firebaseapp.com",
  projectId: "reactnative-authenticati-e577c",
  storageBucket: "reactnative-authenticati-e577c.firebasestorage.app",
  messagingSenderId: "516687690688",
  appId: "1:516687690688:web:c92fb7156e8eee0d7ea625"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);

export default app;