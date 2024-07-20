import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./FrogrtPasss.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import apiAuthenticate from "../../services/authentication/apiAuthenticate";
import NavRestaurants from "../NavRestaurants/NavRestaurants";
export default function ForgetPass() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      Email: '',
      Password: '',
    },
    validationSchema: Yup.object({
      Email: Yup.string()
        .email('Invalid email address')
        .required('Email is required')
        .max(65, 'Email cannot be longer than 65 characters')
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          'email is required'
        ),
    }),
    onSubmit: async (values) => {
      const { Email } = values;
      console.log({ email: Email })
      try {
        const response = await apiAuthenticate.post('/forgetpassword', {
          email: Email,
        });
        if (response.status === 200) {
          toast.success(response.data.message);
          console.log(localStorage.getItem('token'));
          // localStorage.setItem('token', response.data.data);
          // setTimeout(() => {
          //   navigate('/HomeRestaurants')

          // }, 2000);
          console.log(response.data);
          return response.data;
        } else {
          toast.error(response.data.message);
          return response.data.message;
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <div className="ForgetPass Main_bg">
        <NavRestaurants />
        <div className="container p-5">
          <div className="row justify-content-center">
            <div className=" col-lg-7 ">
              <div className="card p-4">
                <form className="py-5 px-4" onSubmit={formik.handleSubmit}>
                  <h2 className="text-center mt-5 mb-3">Forgot Password?</h2>
                  <p className="mt-2 text-center">
                    Don't worry, we'll send you reset instructions
                  </p>
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
                  <div className="d-grid gap-2 mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary btnLogin btn-block"
                    >
                      Reset Password
                    </button>
                  </div>

                  <div className="text-center mt-3 BackLogin ">
                    <span>
                      <Link exact="true" to="/Login">
                        Back to login
                      </Link>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
