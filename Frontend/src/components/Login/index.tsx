import React, { useState } from "react";
// import FontAwesomeIcon from ''
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

interface Props {
  title: string; // required
  btnLabel: string; // optional
}

const admin = {
  userName: "admin",
  password: "123456",
};

export const LoginForm = ({ title, btnLabel }: Props) => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setIsLoading(true);
    const { userName, password: adminPassword } = admin;
    if (name === userName && password === adminPassword) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      setTimeout(() => {
        setIsError(true);
        setIsLoading(false);
      }, 3000);
    }
  };

  return (
    <>
      <h1 className="w3ls">Signup Form</h1>
      <div className="content-w3ls">
        <div className="content-agile1">
          <h2 className="agileits1">Official</h2>
          <p className="agileits2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="content-agile2">
          <form action="#" method="post">
            <div>
              <input type="text" id="firstname" name="firstname" placeholder="Full Name" title="Please enter your Full Name" />
            </div>
            <div>
              <input type="email" id="email" name="email" placeholder="mail@example.com"
                title="Please enter a valid email" />
            </div>

            <div >
              <input type="password" className="lock" name="password" placeholder="Password" id="password1"
              />
            </div>

            <div>
              <input type="password" className="lock" name="confirm-password" placeholder="Confirm Password"
                id="password2" />
            </div>

            <input type="submit" className="register" value="Đăng ký" />
          </form>
          <p className="wthree w3l">Đăng ký nhanh với hồ sơ xã hội yêu thích của bạn.</p>
          <ul className="social-agileinfo wthree2">
            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#"><i className="fa fa-youtube"></i></a></li>
            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
          </ul>
        </div>
        <div className="clear"></div>
      </div>
    </>
  );
};
