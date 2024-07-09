import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faApple, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Header from "../header/Header";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import "./signUp.css";
import { registerUser } from "../../store/UserSlice.js";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector(state => state.User);
  console.log(status, error, 'store');


  const formik = useFormik({
    initialValues: {
      Name: '',
      Email: '',
      Phone: '',
      Password: ''
    },
    validationSchema: Yup.object({
      Name: Yup.string().required('Name is required'),
      Email: Yup.string().email('Invalid email address').required('Email is required'),
      Phone: Yup.string().required('Phone is required'),
      Password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
      localStorage.setItem('token', 'token');
      dispatch(registerUser(values));
      navigate('/login')
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
                    className="form-control rounded-pill px-4 py-3 border-secondary"
                    {...formik.getFieldProps('Name')}
                  />
                  {formik.touched.Name && formik.errors.Name ? (
                    <span className="error">{formik.errors.Name}</span>
                  ) : null}
                </div>
                <div className="form-group my-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control rounded-pill px-4 py-3 border-secondary"
                    {...formik.getFieldProps('Email')}
                  />
                  {formik.touched.Email && formik.errors.Email ? (
                    <span className="error">{formik.errors.Email}</span>
                  ) : null}
                </div>
                <div className="form-group my-4">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="form-control rounded-pill px-4 py-3 border-secondary"
                    {...formik.getFieldProps('Phone')}
                  />
                  {formik.touched.Phone && formik.errors.Phone ? (
                    <span className="error">{formik.errors.Phone}</span>
                  ) : null}
                </div>
                <div className="form-group my-2">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control rounded-pill px-4 py-3 border-secondary"
                    {...formik.getFieldProps('Password')}
                  />
                  {formik.touched.Password && formik.errors.Password ? (
                    <span className="error">{formik.errors.Password}</span>
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
              {status === 'loading' && <p>Loading...</p>}
              {status === 'failed' && <p>Error: {error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
