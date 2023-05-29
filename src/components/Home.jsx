import React from "react";
import NotVerified from "./user/NotVerified";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks";
import HomePage from "./HomePage";

export default function Home() {
  const { authInfo } = useAuth();
  const { isLoggedIn } = authInfo;
  const isVerified = authInfo.profile?.isVerified;

  const navigateToVerification = () => {
    navigate("/auth/verification", { state: { user: authInfo.profile } });
  };

  const navigate = useNavigate();

  return <>
     {isLoggedIn && !isVerified ? (
    <NotVerified />
        ) : <HomePage />} 
        </>
}
