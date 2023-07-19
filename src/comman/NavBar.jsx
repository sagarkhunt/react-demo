import { Fragment } from "react";
import { NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
const Navigation = () => {
  const { user } = useSelector((_state) => _state.auth);
  console.log("🚀 ~ file: NavBar.jsx:8 ~ Navigation ~ user:", user);
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Shoping Products</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll>
              <Nav.Link href="#action2">Products</Nav.Link>
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
            <div className="d-flex align-items-center py-2 px-4 same">
              {/* <UserIcon /> */}
              {user ? (
                <Fragment>
                  <span className="px-2 text-white">{user.username}</span>
                  <NavLink to={"/logout"} className="px-2 text-black">
                    Logout
                  </NavLink>
                </Fragment>
              ) : (
                <NavLink to={"/login"} className="px-2 text-black">
                  Login
                </NavLink>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Navigation;
