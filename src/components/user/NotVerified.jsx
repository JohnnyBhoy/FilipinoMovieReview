import React from "react";
import Container from "../Container";

export default function NotVerified() {

  return (
    <Container>
        <p className="text-lg text-center bg-blue-50 p-2">
          It looks like you haven't verified your account,{" "}
          <button
            onClick={navigateToVerification}
            className="text-blue-500 font-semibold hover:underline"
          >
            click here to verify your account.
          </button>
        </p>
    </Container>
  );
}
