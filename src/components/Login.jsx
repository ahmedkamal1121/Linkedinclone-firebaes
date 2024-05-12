import React from "react";
import "./Home.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import logoHero from "../../public/images/login-hero.svg";
import google from "../../public/images/google.svg";
import { signinAPI } from "../redux/actions";
import { connect } from "react-redux";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../public/images/login-logo.svg";
import { useNavigate } from "react-router-dom";

function Login(props) {
  console.log(props.user);
  const nav = useNavigate();
  return (
    <>
      {props.user && nav("/home")}
      <Navbar expand="lg" className="bg-body-tertiary p-2">
        <div className="d-flex justify-content-between w-100">
          <Navbar.Brand style={{ width: "15%" }}>
            <img src={logo} style={{ width: "100%" }} />
          </Navbar.Brand>
          <div style={{ width: "30%" }}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="d-flex justify-content-around w-100">
                <Nav.Link>Join now</Nav.Link>
                <Nav.Link>
                  <Button variant="outline-primary">Sign in</Button>
                </Nav.Link>{" "}
              </Nav>
            </Navbar.Collapse>
          </div>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
        </div>
      </Navbar>

      <Container>
        <Row>
          <Col className="left-home">
            <h1 className="mb-5">Welcome to linkedin</h1>
            <Button
              variant="outline-secondary"
              className="rounded"
              onClick={() => props.sigin()}
            >
              <img src={google} /> Sign With Google
            </Button>
          </Col>
          <Col className="h-100">
            <img src={logoHero} width={"100%"} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

const mapStatToprops = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    sigin: () => dispatch(signinAPI()),
  };
};

export default connect(mapStatToprops, mapDispatchToprops)(Login);
