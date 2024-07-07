
// Hooks
import useNav from "../../hooks/useNav";

// React-Bootstrap
import { Container, Nav, Navbar } from "react-bootstrap";

// Svg
import logo from "../../assets/logo.png";





import "./header.css";
import { Link } from "react-router-dom";


export default function Header({ MainPage, IconOne, IconTwo, IconThree }) {
  const { loginBtn, navStatus } = useNav();

  return (
    <>
      <Navbar expand="lg" className="pt-3">
        <Container>
          <Navbar.Brand href="#home" className='logoStyle'>
            <img src={logo} className="w-100" alt="logo" />
          </Navbar.Brand>
          {navStatus ? (
            <>
              <div className="d-flex gap-2 align-items-center">
                <div className="navBarIcons d-flex gap-3 align-items-center">
                  <button className="btn border-0 bg-transparent text-white p-0"> {IconOne}</button>
                  <button className="btn border-0 bg-transparent text-white p-0"> {IconTwo}</button>
                  <button className="btn border-0 bg-transparent text-white p-0">{IconThree}</button>

                </div>
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  className="bg-white"
                />
              </div>
              <Navbar.Collapse
                id="basic-navbar-nav"
                className={`"justify-content-center" navStyle z-3`}
              >
                <Nav>
                  <Nav.Link
                    to="/"
                    className={`links text-white d-flex justify-content-center `}
                  >
                    <Link exact="true" to="/"> Home</Link>
                  </Nav.Link>
                  <Nav.Link
                    to="/clinics"
                    className={`links text-white d-flex justify-content-center`}
                  >
                    <Link to={MainPage === "Restaurants" ? "/restaurants" : "/CLinics"}>{MainPage}</Link>
                  </Nav.Link>
                  <Nav.Link

                    className={`links text-white d-flex justify-content-center`}
                  >
                    <Link to="/BecomeAPartner">Become a partner</Link>
                  </Nav.Link>
                  <Nav.Link
                    className={`links text-white d-flex justify-content-center`}
                  >
                    <Link to={"/AboutUs"}> About us</Link>

                  </Nav.Link>
                </Nav>
                {loginBtn ? (
                  <>
                    <div className="d-flex justify-content-center">
                      <button
                        className={`btnStyle btn text-white text-center mt-3 active`}
                      >
                        <Link exact="true" className="LinkLogin" to="/Login">Login</Link>

                      </button>
                    </div>
                  </>
                ) : null}
              </Navbar.Collapse>
            </>
          ) : (
            <>
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-content-center"
              >
                <Nav>
                  <Nav.Link to="/" className={`links text-white`}>
                    <Link exact="true" to="/">Home</Link>
                  </Nav.Link>
                  <Nav.Link className={`links text-white`}>
                    <Link to={MainPage === "Restaurants" ? "/restaurants" : "/CLinics"}>{MainPage}</Link>
                  </Nav.Link>
                  <Nav.Link className={`links text-white`}>
                    <Link to="/BecomeAPartner">Become a partner</Link>
                  </Nav.Link>
                  <Nav.Link to="/AboutUs" className={`links text-white`}>
                    <Link to='/AboutUs'>About us</Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <div className="d-flex gap-2 align-items-center">
                <div className="navBarIcons d-flex gap-3 align-items-center">
                  <button className="btn border-0 bg-transparent text-white p-0"> {IconOne}</button>
                  <button className="btn border-0 bg-transparent text-white p-0"> {IconTwo}</button>
                  <button className="btn border-0 bg-transparent text-white p-0">{IconThree}</button>

                  <button
                    className={`btnStyle btn text-white ms-2 text-center`}
                  >
                    <Link exact="true" className="LinkLogin" to="/Login">Login</Link>
                  </button>
                </div>
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  className="bg-danger"
                />
              </div>
            </>
          )}
        </Container>
      </Navbar >
    </>
  );
}
