import React, { useState, useEffect } from "react";
// import FontAwesomeIcon from ''
import "./style.scss";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap-icons/font/bootstrap-icons.css";

interface Props {
  title: string; // required
  btnLabel: string; // optional
}

export const LoginForm = ({ title, btnLabel }: Props) => {
  return (
    <div className="login">
      <div className="container demo-1">
        <div className="content">
          <div id="large-header" className="large-header">
            <h1>Login Form</h1>
            <div className="main-agileits">
              <div className="form-w3-agile">
                <h2>login Now</h2>
                <form action="#" method="post">
                  <div className="form-sub-w3">
                    <input
                      type="text"
                      name="Username"
                      placeholder="Username "
                    />
                    <div className="icon-w3">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="form-sub-w3">
                    <input
                      type="password"
                      name="Password"
                      placeholder="Password"
                    />
                    <div className="icon-w3">
                      <i
                        className="fa fa-unlock-alt"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                  <p className="p-bottom-w3ls">
                    Forgot Password?<a href="#"> Click here</a>
                  </p>
                  <p className="p-bottom-w3ls1">
                    New User?<a href="#"> Register here</a>
                  </p>
                  <div className="clear"></div>
                  <div className="submit-w3l">
                    <input type="submit" value="Login" />
                  </div>
                </form>
                <div className="social w3layouts">
                  <div className="heading">
                    <h5>Or Login with</h5>
                    <div className="clear"></div>
                  </div>
                  <div className="icons">
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <div className="clear"></div>
                  </div>
                  <div className="clear"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
