
// Hooks
import useNav from "../../hooks/useNav";

// React-Bootstrap
import { Container, Nav, Navbar } from "react-bootstrap";

// Svg
import logo from "../../assets/logo.png";


import Bag from "../bag/Bag";
import FavRestaurant from "../favorite-restaurants/FavRestaurant";
import LanguageMenu from "../LanguageSwitch/LanguageMenu";
import "./header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageProvider";
import ProfileMenu from "../ProfileResturant/ProfileMenu";
export default function Header({ MainPage, IconOne, IconTwo, IconThree,IconFour }) {
  const { loginBtn, navStatus } = useNav();
  const [openMenu,setOpenMenu] = useState("");
  // const {language} = useLanguage();
  function handleOpenBag(){
    if(openMenu === "bag"){
      setOpenMenu("")
    }
    else{
      setOpenMenu("bag")
    }
  }
  function handleOpenFav(){
    if(openMenu === "fav"){
      setOpenMenu("")
    }
    else{
      setOpenMenu("fav")
    }
  }
  function handleOpenLang(){
    if(openMenu === "lang"){
      setOpenMenu("")
    } 
    else{
      setOpenMenu("lang")
    }
  }
  function handleOpenProf(){
    if(openMenu === "prof"){
      setOpenMenu("")
    } 
    else{
      setOpenMenu("prof")
    }
  }
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
                    <Link to={MainPage === "Restaurants" ? "/Restaurants" : "/CLinics"}>{MainPage}</Link>
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
                    <Link to={MainPage === "Restaurants" ? "/Restaurants" : "/CLinics"}>{MainPage}</Link>
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
                <div className = "Fav-open">
                 <button onClick={() => handleOpenFav()} className="btn border-0 bg-transparent text-white p-0"> {IconOne}</button>
                {openMenu === "fav" && <FavRestaurant/>}

                </div>
                <div className="Lang-open">
                <button onClick={() => handleOpenLang()} className="btn border-0 bg-transparent text-white p-0"> {IconTwo}</button>
                {openMenu === "lang" && <LanguageMenu setOpenMenu={setOpenMenu}/>}
                </div>
                <div className = "Bag-open">
                <button onClick={() => handleOpenBag()} className="btn border-0 bg-transparent text-white p-0">{IconThree}</button>
                {openMenu === "bag" && <Bag/>}
                </div>
                <div className = "prof-open">
                 <button onClick={() => handleOpenProf()} className="btn border-0 bg-transparent text-white p-0"> {IconFour}</button>
                {openMenu === "prof" && <ProfileMenu/>}

                </div>
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
