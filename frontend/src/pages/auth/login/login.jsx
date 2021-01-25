import React from "react";
import { AuthPageLayout } from "../layout";
import { Form } from "../components";

export function Login() {
  const formProps = {
    title: "Вход",
    linkName: "Регистрация ->",
    linkUrl: "/registration",
    confirmButtonName: "Войти",
    confirmButtonOnClick: ({ email, password }) => console.log({ email, password }),
  }

  return (
    <AuthPageLayout>
      <Form {...formProps} />
    </AuthPageLayout>
  );
}