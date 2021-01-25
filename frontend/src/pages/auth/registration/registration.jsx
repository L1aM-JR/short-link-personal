import React from "react";
import { AuthPageLayout } from "../layout";
import { Form } from "../components";

export function Registration() {
  const formProps = {
    title: "Регистрация",
    linkName: "Вход ->",
    linkUrl: "/login",
    confirmButtonName: "Зарегестрироваться",
    confirmButtonOnClick: ({ email, password }) => console.log({ email, password }),
  }

  return (
    <AuthPageLayout>
      <Form {...formProps} />
    </AuthPageLayout>
  );
}