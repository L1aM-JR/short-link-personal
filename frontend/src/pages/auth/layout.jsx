import React from "react";
import "./style.css";

export function AuthPageLayout(props) {
  return (
    <div className="auth_page">
      {props.children}
    </div>
  );
}