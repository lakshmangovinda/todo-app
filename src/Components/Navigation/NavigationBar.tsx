/* eslint-disable jsx-a11y/anchor-is-valid */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { HomePageTitle, NavBarWrapper } from "./styledNav";

export const NavigationBar = () => {
    let navigate = useNavigate();
    return (
        <NavBarWrapper>
            <Navbar bg="dark" expand="lg" variant="dark">
                <HomePageTitle><a onClick={() => navigate("/home")}>Todo Application</a></HomePageTitle>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="justify-content-end" style={{ width: "100%" }}>
                            <Nav.Link onClick={() => navigate("/about")}>About Us</Nav.Link>
                            {sessionStorage.getItem("token") == null ? (
                                <Nav.Link onClick={() => navigate("/login")}>Signin</Nav.Link>
                            ) : null}
                            {sessionStorage.getItem("token") == null ? (
                                <Nav.Link onClick={() => navigate("/register")}>SignUp</Nav.Link>
                            ) : null}
                            {sessionStorage.getItem("token") != null ? (
                                <Nav.Link
                                    onClick={() => {
                                        sessionStorage.removeItem("token");
                                        navigate("/login");
                                    }}
                                >
                                    Logout
                                </Nav.Link>
                            ) : null}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </NavBarWrapper>
    );
}

export default NavigationBar;