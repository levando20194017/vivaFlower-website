import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./style.css";
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
