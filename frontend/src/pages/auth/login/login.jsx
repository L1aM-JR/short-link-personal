import React from "react";
import { AuthPageLayout } from "../layout";
import { Form } from "../components";
import { api } from "../../../api";

export function Login() {
  const formProps = {
    title: "Вход",
    linkName: "Регистрация ->",
    linkUrl: "/registration",
    confirmButtonName: "Войти",
    confirmButtonOnClick: ({ email, password }) => api.user.login({ email, password }),
  }

  return (
    <AuthPageLayout>
      <Form {...formProps} />
    </AuthPageLayout>
  );
}