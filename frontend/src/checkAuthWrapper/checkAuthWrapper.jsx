import React from "react";
import { TOKEN_NAME } from "../consts";
import { Redirect } from "react-router-dom";
import { api } from "../api";

export function CheckAuthWrapper({ children }) {
  const token = localStorage.getItem(TOKEN_NAME) || "default token";
  const isAutorization = false;

  // if (token) {
    const promise = new Promise((res) => {
      const result = api.user.checkAuth(token);
      console.log({ result });
      if (result) {
        res(result);
      }
    });

    promise.then(res => {
      console.log({ res });
    });
  // }

  return (
    <>
      {!isAutorization && <Redirect to="/login" />}
      {children}
    </>
  );
}