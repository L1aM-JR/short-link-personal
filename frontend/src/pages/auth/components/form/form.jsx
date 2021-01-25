import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components";
import "./style.css";

export function Form(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  return (
    <div className="form">
      <div className="title">{props.title}</div>
      <input
        className="form_input"
        onChange={onChangeEmail}
        value={email}
        placeholder="Введите email..."
        type="text"
      />
      <input
        className="form_input"
        onChange={onChangePassword}
        value={password}
        placeholder="Введите пароль..."
        type="password"
      />
      <div className="buttons">
        <Link className="link" to={props.linkUrl} children={props.linkName} />
        <Button name={props.confirmButtonName} onClick={props.confirmButtonOnClick} className="confirm_button" />
      </div>
    </div>
  );
}