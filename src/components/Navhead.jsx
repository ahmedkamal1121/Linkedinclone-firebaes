import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "/images/home-logo.svg";
import ser from "/images/search-icon.svg";
import homes from "/images/nav-home.svg";
import network from "/images/nav-network.svg";
import jobs from "/images/nav-jobs.svg";
import msg from "/images/nav-messaging.svg";
import note from "/images/nav-notifications.svg";
import me from "/images/photo-icon.svg";
import works from "/images/nav-work.svg";
import { Button } from "react-bootstrap";
import "./Navhead.css";
import { connect, useSelector } from "react-redux";
import { signOut } from "../redux/actions";

function Navhead(props) {
  return (
    <div style={{ backgroundColor: "white" }}>
      <nav className="nav-bar-base d-flex justify-content-between">
        <div className="d-flex ser-brand">
          <img src={logo} width="25px" height="30px" />
          <div className="search">
            <input type="text" placeholder="Saerch" className="inp-ser" />
            <img src={ser} className="icon-search" />
          </div>
        </div>

        <div style={{ width: "50%" }}>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}

          <ul className="nav-info">
            <li>
              <img src={homes} width="20px" />
              <span>Home</span>
            </li>
            <li>
              <img src={network} width="20px" />
              <span>Network</span>
            </li>
            <li>
              <img src={jobs} width="20px" />
              <span>Jobs</span>
            </li>
            <li>
              <img src={msg} width="20px" />
              <span>Masseges</span>
            </li>
            <li>
              <img src={note} width="20px" />
              <span>Noteivation</span>
            </li>
            <li>
              {props.user && props.user.photoURL ? (
                <img
                  src={props.user.photoURL}
                  width={"30px"}
                  className="rounded"
                />
              ) : (
                <img src={me} width="20px" />
              )}

              <NavDropdown title="me" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => props.signOut()}>
                  Sign out
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            <li>
              <img src={works} />
              <span>Works</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

const mapStatToprops = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStatToprops, mapDispatchToprops)(Navhead);
