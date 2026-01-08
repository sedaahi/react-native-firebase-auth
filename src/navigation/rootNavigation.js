import React from "react";
import { useSelector } from "react-redux";

import AuthNavigation from "./AuthNavigation";
import UserNavigation from "./UserNavigation";

export default function RootNavigation() {
  const { isAuth } = useSelector((state) => state.user);

  // İstersen geçişte navigation state sıfırlansın diye key ekleyebilirsin:
  return isAuth ? <UserNavigation key="user" /> : <AuthNavigation key="auth" />;
}
