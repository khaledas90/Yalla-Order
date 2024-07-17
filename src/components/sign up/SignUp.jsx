import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faApple, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Header from "../header/Header";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { registerUser } from "../../store/thunk/registerThunk";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./signUp.css";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      Name: '',
      Email: '',
      Phone: '',
      Password: ''
    },
    validationSchema: Yup.object({
      Name: Yup.string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name cannot be longer than 50 characters'),
      Email: Yup.string()
        .email('Invalid email address')
        .required('Email is required')
        .max(65, 'Email cannot be longer than 65 characters')
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          'email is required'
        ),
      Phone: Yup.string()
        .required('Phone is required')
        .matches(/^[0-9]{11}$/, 'Phone must be exactly 11 digits'),
      Password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .max(20, 'Password cannot be longer than 20 characters')
        .matches(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
          'Password must contain an uppercase letter, a lowercase letter, a number, and a special character'
        ),
    }),
    onSubmit: async (values) => {
      dispatch(registerUser({ userData: values, navigate }));
    },
  });

  return (
    <div className="SignUp Main_bg">
      <Header MainPage={"Restaurants"} IconOne={<FavoriteBorderOutlinedIcon />} IconTwo={<LanguageOutlinedIcon />} IconThree={<ShoppingBagOutlinedIcon />} />
      <div className="container p-5">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="card p-4">
              <form className="py-2 px-2" onSubmit={formik.handleSubmit}>
                <h2 className="text-center mb-5">Create Account</h2>
                <div className="form-group my-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className={`form-control rounded-pill px-4 py-3 ${formik.touched.Name && formik.errors.Name ? 'border-danger' : formik.touched.Name ? 'border-info' : 'border-secondary'}`}
                    {...formik.getFieldProps('Name')}
                  />
                  {formik.touched.Name && formik.errors.Name ? (
                    <span className="error  text-danger">{formik.errors.Name}</span>
                  ) : null}
                </div>
                <div className="form-group my-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className={`form-control rounded-pill px-4 py-3 ${formik.touched.Email && formik.errors.Email ? 'border-danger' : formik.touched.Email ? 'border-info' : 'border-secondary'}`}
                    {...formik.getFieldProps('Email')}
                  />
                  {formik.touched.Email && formik.errors.Email ? (
                    <span className="error  text-danger">{formik.errors.Email}</span>
                  ) : null}
                </div>
                <div className="form-group my-4">
                  <input
                    type="text"
                    placeholder="Phone"
                    className={`form-control rounded-pill px-4 py-3 ${formik.touched.Phone && formik.errors.Phone ? 'border-danger' : formik.touched.Phone ? 'border-info' : 'border-secondary'}`}
                    {...formik.getFieldProps('Phone')}
                  />
                  {formik.touched.Phone && formik.errors.Phone ? (
                    <span className="error  text-danger">{formik.errors.Phone}</span>
                  ) : null}
                </div>
                <div className="form-group my-2 position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className={`form-control rounded-pill px-4 py-3 ${formik.touched.Password && formik.errors.Password ? 'border-danger' : formik.touched.Password ? 'border-info' : 'border-secondary'}`}
                    {...formik.getFieldProps('Password')}
                  />
                  <span
                    className="position-absolute top-50 end-0 translate-middle-y pe-4"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ cursor: "pointer" }}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </span>

                </div>
                <div className="">
                  {formik.touched.Password && formik.errors.Password ? (
                    <span className="error text-danger">{formik.errors.Password}</span>
                  ) : null}
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
                    Already have an account? <Link to="/Login">Log in</Link>
                  </span>
                </div>
              </form>

              <Toaster
                position="top-center"
                reverseOrder={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;