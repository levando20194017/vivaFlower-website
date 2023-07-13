import React, { useState, useEffect } from "react";
// import FontAwesomeIcon from ''
import "./style.scss";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import 'bootstrap-icons/font/bootstrap-icons.css';

interface Props {
  title: string; // required
  btnLabel: string; // optional
}

export const LoginForm = ({ title, btnLabel }: Props) => {
 
  return (
    <div className="login">
        Login page
      </div>
  );
};
