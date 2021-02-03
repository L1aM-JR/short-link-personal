import React from "react";
import { AuthPageLayout } from "../layout";
import { Form } from "../components";
import { api } from "../../../api";

export function Registration() {
  const formProps = {
    title: "Регистрация",
    linkName: "Вход ->",
    linkUrl: "/login",
    confirmButtonName: "Зарегестрироваться",
    confirmButtonOnClick: ({ email, password }) => api.user.registration({ email, password }),
  }

  return (
    <AuthPageLayout>
      <Form {...formProps} />
    </AuthPageLayout>
  );
}