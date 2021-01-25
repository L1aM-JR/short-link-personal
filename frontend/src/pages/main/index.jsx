import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { request } from "../../config/request";
import { Button } from "../../components";

export function MainPage() {
  const [value, setValue] = useState("");
  const [shortLink, setShortLink] = useState("");

  const handleChangeValue = (e) => setValue(e.target.value);
  const handleShorten = async () => {
    const result = await request("http://127.0.0.1:4000/shorten", "POST", value );

    console.log({ result });
  }

  return (
    <div className="main_page">
      <div className="header">
        <Link to="/" className="logo">Сокращатель ссылок</Link>
        <div className="tabs"></div>
      </div>
      <div className="body">
        <div className="body_title">Введите сюда ссылку которую надо сократить</div>
        <div className="input_wrapper">
          <input className="input" value={value} onChange={handleChangeValue} />
          <Button name="Сократить" className="button" onClick={handleShorten} />
        </div>
        {shortLink && <div>{shortLink}</div>}
      </div>
    </div>
  )
}