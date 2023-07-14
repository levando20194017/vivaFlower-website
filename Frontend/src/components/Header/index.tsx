import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./style.scss";
import { useEffect, useState } from "react";
export const Header = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 150) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="headerContainer">
       <Navbar className="d-flex navbar">
       <div className="header_left">
        <h3><span>Viva</span><span style={{marginLeft:"5px"}}>Flower</span></h3>
        </div>
       <div className="header_content">
        <ul>
          <li>HOME</li>
          <li>CONTACT</li>
          <li>ABOUT ME</li>
        </ul>
       </div>
       <div className="header_right">
       <i className="bi bi-cart4"></i>
       <img className="headerUser-right-avt rounded-circle" src="https://th.bing.com/th/id/OIP.rzU5tlNULSLFeXggfJ352QHaNK?w=187&h=333&c=7&r=0&o=5&pid=1.7" alt='avatar' width={40} height={40} />
       </div>
      </Navbar>
      <header className={visible ? "header visible" : "header"}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">Student Management</Link>
          </Navbar.Brand>
          <Nav
            className="me-auto"
            style={{ display: "flex", alignItems: "center", gap: "20px" }}
          >
            <Link to="/major">Major</Link>
            <Link to="/student">Student</Link>
          </Nav>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>welcome to ...</Navbar.Text>
            <FontAwesomeIcon
              style={{ color: "red" }}
              icon={faArrowRightFromBracket}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </header>
      <div style={{ height: "2500px" }}>hello</div>
    </div>
  );
};
