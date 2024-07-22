import React from "react";
import "./ContactUs.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import apiAuthenticate from "../../services/authentication/apiAuthenticate";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import NavRestaurants from "../NavRestaurants/NavRestaurants";
import { useTranslation } from "react-i18next";

export default function ContactUs() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required('First Name is required')
        .min(2, 'First Name must be at least 2 characters')
        .max(50, 'First Name cannot be longer than 50 characters'),
      lastName: Yup.string()
        .required('Last Name is required')
        .min(2, 'Last Name must be at least 2 characters')
        .max(50, 'Last Name cannot be longer than 50 characters'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required')
        .max(65, 'Email cannot be longer than 65 characters')
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          'Invalid email address'
        ),
      phone: Yup.string()
        .required('Phone is required')
        .matches(/^[0-9]{11}$/, 'Phone must be exactly 11 digits'),
      message: Yup.string()
        .required('Message is required')
        .min(10, 'Message must be at least 10 characters')
        .max(500, 'Message cannot be longer than 500 characters'),
    }),
    onSubmit: async (values) => {
      const { firstName, lastName, email, phone, message } = values;
      console.log({
        fname: firstName,
        lname: lastName,
        email: email,
        phone: phone,
        message: message
      });
      try {
        const response = await apiAuthenticate.post('/contactus', {
          fname: firstName,
          lname: lastName,
          email: email,
          phone: phone,
          message: message
        });
        console.log(response);
        if (response.status === 200) {
          toast.success(response.data.message);
          setTimeout(() => {
            navigate('/ContactUs/ContactUsDone')
          }, 1000)
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.");
      }
    },
  })
  const getInputClassName = (touched, error) =>
    `form-control rounded-pill px-4 py-3 ${touched && error ? 'border-danger' : touched ? 'border-info' : 'border-secondary'}`;

  // { t('') }
  const { t } = useTranslation();

  const lang = localStorage.getItem("i18nextLng");
  return (
    <>
      <div className={` ContactUs Main_bg  `}>
        <NavRestaurants />
        <div className="container p-5">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="card p-4">
                <h1 className="text-center my-2">{t('CONTACT US')}</h1>
                <h6>{t('Need')} <span>{t('help?')}</span></h6>
                <form className={`py-5 px-4 ${lang === "ar" ? "ar" : ""}`} onSubmit={formik.handleSubmit}>
                  <div className="form-group my-2">
                    <input
                      type="text"
                      placeholder={t('First Name *')}
                      className={getInputClassName(formik.touched.firstName, formik.errors.firstName)}
                      {...formik.getFieldProps('firstName')}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <small className="error text-danger">{formik.errors.firstName}</small>
                    ) : null}
                  </div>
                  <div className="form-group my-2">
                    <input
                      type="text"
                      placeholder={t('Last Name *')}
                      className={getInputClassName(formik.touched.lastName, formik.errors.lastName)}
                      {...formik.getFieldProps('lastName')}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <small className="error text-danger">{formik.errors.lastName}</small>
                    ) : null}
                  </div>
                  <div className="form-group my-2">
                    <input
                      type="email"
                      placeholder={t('Email *')}
                      className={getInputClassName(formik.touched.email, formik.errors.email)}
                      {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <small className="error text-danger">{formik.errors.email}</small>
                    ) : null}
                  </div>
                  <div className="form-group d-flex align-items-center my-2">
                    <span className="Code_country">+20</span>
                    <input
                      type="tel"
                      required
                      placeholder={t('Phone *')}
                      className={getInputClassName(formik.touched.phone, formik.errors.phone)}
                      {...formik.getFieldProps('phone')}
                    />
                  </div>
                  {formik.touched.phone && formik.errors.phone ? (
                    <small className="error text-danger">{formik.errors.phone}</small>
                  ) : null}
                  <div className="form-group my-2">
                    <textarea
                      required
                      placeholder={t('Message *')}
                      className={getInputClassName(formik.touched.message, formik.errors.message)}
                      {...formik.getFieldProps('message')}
                    />
                    {formik.touched.message && formik.errors.message ? (
                      <small className="error text-danger">{formik.errors.message}</small>
                    ) : null}
                  </div>
                  <div className="Btn d-grid">
                    <button type="submit" className="btn btn-primary btn-contact btn-block rounded-pill py-3 font-weight-bold display-6">
                      {t('Send')}
                    </button>
                  </div>
                </form>
                <Toaster position="top-center" reverseOrder={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


