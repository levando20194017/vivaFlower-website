import React, { useState, useEffect } from "react";
// import FontAwesomeIcon from ''
import "./style.scss";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo4 from "../../assets/images/logo4.png"
interface Props {
  title: string; // required
  btnLabel: string; // optional
}

export const SignupForm = ({ title, btnLabel }: Props) => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const [colors, setColors] = useState({
    a: '#ff652f',
    b: 'white',
  });
  const [colorsContent, setColorsContent] = useState('white');
  useEffect(() => {
    let intervalId1: NodeJS.Timeout;
    let intervalId2: NodeJS.Timeout;
    let intervalId3: NodeJS.Timeout;

    // Thiết lập interval để mỗi 1000ms tăng currentIndex lên 1
    intervalId1 = setInterval(() => {
      setColors({
        a: "#ff652f",
        b: "white",
      });
    }, 2000);

    setTimeout(() => {
      intervalId2 = setInterval(() => {
        setColors({
          a: "white",
          b: "#ff652f",
        });
      }, 2000);
    }, 1000);

    intervalId3 = setInterval(() => {
      setColorsContent(prev => (prev === "orange" ? "white" : "orange"))
    }, 500);

    return () => {
      // Xóa interval khi component bị unmount
      clearInterval(intervalId1);
      clearInterval(intervalId2);
      clearInterval(intervalId3);
    }
  }, []);
  return (
    <div className="signUp">
      <h1 className="w3ls">Signup Form</h1>
      <div className="content-w3ls">
        <div className="content-agile1">
          <div className="brand"><img className="headerUser-right-avt rounded-circle" src={logo4} alt='avatar' width={85} height={80} /></div>
          <h2 className="agileits1 mt-2"><span style={{ color: colors.a }}>Viva</span><span style={{ color: colors.b, marginLeft: "15px" }}>flower</span></h2>
          <p className="agileits2 offset-1" style={{ color: colorsContent }}>Welcome to Viva Flower – Where You Can Find The Best And Freshest Flowers For Your Special Occasions.</p>
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

            <input type="submit" className="register" value="SIGN UP" />
          </form>
          <p className="wthree w3l">Quick registration with your favorite social profiles.</p>
          <ul className="social-agileinfo wthree2">
            <li><a href="#"><i className="bi bi-facebook"></i></a></li>
            <li><a href="#"><i className="bi bi-google"></i></a></li>
            <li><a href="#"><i className="bi bi-twitter"></i></a></li>
          </ul>
        </div>
        <div className="clear"></div>
      </div>
    </div>
  );
};
