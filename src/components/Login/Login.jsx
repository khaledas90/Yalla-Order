import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./login.css";
import {
  faApple,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import apiAuthenticate from "../../services/authentication/apiAuthenticate";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Toaster } from "react-hot-toast";
import NavRestaurants from "../NavRestaurants/NavRestaurants";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    validationSchema: Yup.object({
      Email: Yup.string().email('Invalid email address').required('Email is required'),
      Password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
      const { Email, Password } = values;
      console.log(Email, Password)
      try {
        const response = await apiAuthenticate.post('/login', {
          email: Email,
          password: Password,
        });
        navigate('/HomeRestaurants')
        localStorage.setItem('token', response.data.data);
        console.log(response.data);
      } catch (error) {
        console.log(error.response ? error.response.data : error.message);
      }
    },
  });
  const { t } = useTranslation()
  const lang = localStorage.getItem("i18nextLng")
  return (
    <>
      <div className="Login Main_bg">

        <NavRestaurants />
        <div className={`container p-5 ${lang === "ar" ? "ar" : ""}`}>
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="card p-4">
                <form className="py-2 px-2" onSubmit={formik.handleSubmit}>
                  <h2 className="text-center mb-5">{t("Login")}</h2>
                  <div className="form-group my-4">
                    <input
                      type="text"
                      placeholder={`${t("Enter your Email")}`}
                      className="form-control rounded-pill px-4 py-3 border-secondary"
                      {...formik.getFieldProps('Email')}
                    />
                    {formik.touched.Email && formik.errors.Email ? (
                      <span className="error  text-danger">{formik.errors.Email}</span>
                    ) : null}
                  </div>
                  <div className="form-group my-2 position-relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder={`${t("Enter your Password")}`}
                      className="form-control rounded-pill px-4 py-3 border-secondary"
                      {...formik.getFieldProps('Password')}
                    />
                    <span
                      className={`position-absolute top-50  translate-middle-y pe-4 ${lang === "ar" ? "startEye" : "endEye"}`}
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ cursor: "pointer" }}
                    >
                      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </span>

                  </div>
                  <div className="text-end forgetPass mb-3">
                    <Link to="/Forgot_password">{t("Forgot Password?")}</Link>
                  </div>
                  <div className="d-grid gap-2">
                    <button
                      type="submit"
                      className="btn btn-primary btnLogin btn-block"
                    >
                      {t("Login")}
                    </button>
                  </div>
                  <div className="text-center mt-4">
                    <div className="separator">
                      <hr className="line" />
                      <span>{t("or")}</span>
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
                      {t("Don't have an account?")}
                      <Link to="/SignUp">{t("Sign Up")}</Link>
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
    </>
  );
}
