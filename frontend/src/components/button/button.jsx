import React from "react";
import "./style.css";

export function Button(props) {
  return (
    <div onClick={props.onClick} className={`button ${props.className}`}>
      <span>{props.name}</span>
    </div>
  )
}