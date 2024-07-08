import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faApple, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Header from "../header/Header";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useForm } from "react-hook-form";
import apiRegister from "../../services/Authentiction/apiAuthRegister";
import "./signUp.css";
import axios from "axios";

export default function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (value) => {
    // const { Email, Name, Password } = data;

    try {
      const { data } = await axios.post('https://insta-order-site.web-allsafeeg.com/api/register', {
        username: 'jk',
        email: 'jj@sdfsd.com',
        password: '123123',
        phone: "01090563586"
      });
      console.log(data.data);
    } catch (error) {
      console.log(error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="SignUp Main_bg">
      <Header MainPage={"Restaurants"} IconOne={<FavoriteBorderOutlinedIcon />} IconTwo={<LanguageOutlinedIcon />} IconThree={<ShoppingBagOutlinedIcon />} />
      <div className="container p-5">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="card p-4">
              <form className="py-2 px-2" onClick={onSubmit}>
                <h2 className="text-center mb-5">Create Account</h2>
                <div className="form-group my-4">
                  <input
                    {...register("Name", { required: true })}
                    type="text"
                    placeholder="Name"
                    className="form-control rounded-pill px-4 py-3 border-secondary"
                  />
                  {errors.Name && <span className="error">Name is required</span>}
                </div>
                <div className="form-group my-4">
                  <input
                    {...register("Email", { required: true })}
                    type="email"
                    placeholder="Email"
                    className="form-control rounded-pill px-4 py-3 border-secondary"
                  />
                  {errors.Email && <span className="error">Email is required</span>}
                </div>
                <div className="form-group my-2">
                  <input
                    {...register("Password", { required: true })}
                    type="password"
                    placeholder="Password"
                    className="form-control rounded-pill px-4 py-3 border-secondary"
                  />
                  {errors.Password && <span className="error">Password is required</span>}
                </div>
                <div className="d-grid gap-2 mt-4">
                  <button type="submit" className="btn btn-primary btnLogin btn-block">
                    Sign Up
                  </button>
                </div>
                <div className="text-center mt-4">
                  <div className="separator">
                    <hr className="line" />
                    <span>Or</span>
                    <hr className="line" />
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <a href="https://www.facebook.com" className="me-2">
                    <FontAwesomeIcon icon={faFacebook} className="me-2 social-icon" />
                  </a>
                  <a href="https://www.apple.com" className="me-2">
                    <FontAwesomeIcon icon={faApple} className="me-2 social-icon social-icon2" />
                  </a>
                  <a href="https://www.google.com" id="google">
                    <FontAwesomeIcon icon={faGoogle} className="me-2 social-icon social-icon3" />
                  </a>
                </div>
                <div className="text-center SignUp">
                  <span>
                    Already have an account?
                    <Link to="/Login">Log in</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
