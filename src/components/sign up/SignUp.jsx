import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { faApple, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./signUp.css";
import { registerUser } from "../../store/thunk/registerThunk";
import NavRestaurants from "../NavRestaurants/NavRestaurants";
import { useTranslation } from "react-i18next";
import Loader from "../loader/Loader";
import { Toaster, toast } from "react-hot-toast";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.User);
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Phone: "",
      Password: "",
    },
    validationSchema: Yup.object({
      Name: Yup.string().required('Name is required'),
      Email: Yup.string().email('Invalid email address').required('Email is required'),
      Phone: Yup.string().required('Phone is required'),
      Password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
      dispatch(registerUser({ values, navigate }));
    },
  });

  const { t } = useTranslation();
  const lang = localStorage.getItem("i18nextLng");

  return (
    <div className="SignUp Main_bg">
      <NavRestaurants />
      <div className={`container p-5 ${lang === "ar" ? "ar" : ""}`}>
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="card p-4">
              <form className="py-2 px-2" onSubmit={formik.handleSubmit}>
                <h2 className="text-center mb-5">{t('Create Account')}</h2>
                <div className="form-group my-4">
                  <input
                    type="text"
                    placeholder={`${t('Name *')}`}
                    className="form-control rounded-pill px-4 py-3 border-secondary"
                    {...formik.getFieldProps('Name')}
                  />
                  {formik.touched.Name && formik.errors.Name ? (
                    <span className="error text-danger">{formik.errors.Name}</span>
                  ) : null}
                </div>
                <div className="form-group my-4">
                  <input
                    type="email"
                    placeholder={`${t('Email *')}`}
                    className="form-control rounded-pill px-4 py-3 border-secondary"
                    {...formik.getFieldProps('Email')}
                  />
                  {formik.touched.Email && formik.errors.Email ? (
                    <span className="error text-danger">{formik.errors.Email}</span>
                  ) : null}
                </div>
                <div className="form-group my-4">
                  <input
                    type="text"
                    placeholder={`${t('Phone *')}`}
                    className="form-control rounded-pill px-4 py-3 border-secondary"
                    {...formik.getFieldProps('Phone')}
                  />
                  {formik.touched.Phone && formik.errors.Phone ? (
                    <span className="error text-danger">{formik.errors.Phone}</span>
                  ) : null}
                </div>
                <div className="form-group my-2 position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder={`${t('Password *')}`}
                    className="form-control rounded-pill px-4 py-3 border-secondary"
                    {...formik.getFieldProps('Password')}
                  />
                  <span
                    className={`position-absolute top-50 ${lang === "ar" ? "startEye" : "endEye"} translate-middle-y`}
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
                  <button
                    type="submit"
                    className="btn btn-primary btnLogin btn-block"
                  >
                    {t('Sign Up')}
                  </button>
                </div>
                <div className="text-center mt-4">
                  <div className="separator">
                    <hr className="line" />
                    <span>{t('or')}</span>
                    <hr className="line" />
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <Link to="https://www.facebook.com" className="me-2">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="me-2 social-icon"
                    />
                  </Link>
                  <Link to="https://www.apple.com" className="me-2">
                    <FontAwesomeIcon
                      icon={faApple}
                      className="me-2 social-icon social-icon2"
                    />
                  </Link>
                  <Link to="https://www.google.com" id="google">
                    <FontAwesomeIcon
                      icon={faGoogle}
                      className="me-2 social-icon social-icon3"
                    />
                  </Link>
                </div>
                <div className="text-center SignUp">
                  <span>
                    {t('Already have an account?')} <Link to="/Login">{t('Log in')}</Link>
                  </span>
                </div>
              </form>
              {status === 'loading' && <Loader />}
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
};

export default SignUp;
