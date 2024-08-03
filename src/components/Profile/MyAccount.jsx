import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCalendar, faMapLocation, faPenToSquare, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../store/thunk/logoutThunk';
import { fetchProfileData, updateProfileData } from '../../store/profileUser/profileReducer';
import toast, { Toaster } from 'react-hot-toast';
import NavRestaurants from '../NavRestaurants/NavRestaurants';
import NavClinics from '../NavClinics/NavClinics';

export default function MyAccount() {
  const { typePage } = useSelector((state) => state.User);
  const { data: profileData, loading, error } = useSelector((state) => state.profile);
  const [isUpdate, setIsUpdate] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      Name: '',
      email: '',
      phone: '',
    },
    validationSchema: Yup.object({
      Name: Yup.string().required('Name is required').min(2).max(50),
      email: Yup.string().email('Invalid email address').required('Email is required').max(65),
      phone: Yup.string().required('Phone is required').matches(/^[0-9]{11}$/, 'Phone must be exactly 11 digits'),
    }),
    onSubmit: (values) => {
      const hasChanges = values.Name !== profileData.name ||
        values.email !== profileData.email ||
        values.phone !== profileData.phone;

      if (!hasChanges) {
        toast.error('No changes detected in profile fields.');
        return;
      }

      dispatch(updateProfileData(values))
        .unwrap()
        .then(() => {
          toast.success('Profile updated successfully!');
          setIsUpdate(false);
        })
        .catch((error) => toast.error('Error updating profile: ' + error));
    },
  });

  useEffect(() => {
    dispatch(fetchProfileData())
      .unwrap()
      .then((data) => {
        formik.setValues({
          Name: data.name || '',
          email: data.email || '',
          phone: data.phone || '',
        });
      })
      .catch((error) => toast.error('Error fetching profile data: ' + error));
  }, [dispatch]);

  const handleLogOut = async () => {
    const resultAction = await dispatch(logoutUser());
    if (logoutUser.fulfilled.match(resultAction)) {
      navigate('/login');
    }
  };

  return (
    <>
      <Toaster />
      <div className="Profile">
        <div className="Main_bg_profile">
          {typePage === 'restaurant' ? <NavRestaurants /> : <NavClinics />}
        </div>
        <div className="MyAccount">
          <h1>My Profile</h1>
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-10">
                <div className="card">
                  <div className="card-body p-0">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="List_group">
                          <ul>
                            <li>My Account</li>
                            <li className="active">
                              <FontAwesomeIcon icon={faPenToSquare} className="profile-icon" />
                              <Link to="/MyAccount"> Edit Profile</Link>
                            </li>
                            {typePage === 'restaurant' ? (
                              <li>
                                <FontAwesomeIcon icon={faBagShopping} className="profile-icon" />
                                <Link to="/MyOrder"> My Order</Link>
                              </li>
                            ) : (
                              <li>
                                <FontAwesomeIcon icon={faCalendar} className="profile-icon" />
                                <Link to="/MyReservations">My Reservations</Link>
                              </li>
                            )}
                            <li>
                              <FontAwesomeIcon icon={faMapLocation} className="profile-icon" />
                              <Link to="/MyAddress"> Saved Address</Link>
                            </li>
                            <li onClick={handleLogOut}>
                              <FontAwesomeIcon icon={faRightFromBracket} className="profile-icon" />
                              <Link to="#"> Log Out </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="content">
                          <form onSubmit={formik.handleSubmit}>
                            <div className="form-group row mb-3">
                              <label className="col-lg-3 col-form-label">Name</label>
                              <div className="col-lg-7">
                                <input
                                  type="text"
                                  className="form-control"
                                  {...formik.getFieldProps('Name')}
                                  disabled={!isUpdate}
                                />
                                {formik.touched.Name && formik.errors.Name && (
                                  <div className="text-danger">{formik.errors.Name}</div>
                                )}
                              </div>
                            </div>

                            <div className="form-group row mb-3">
                              <label className="col-lg-3 col-form-label">Email</label>
                              <div className="col-lg-7">
                                <input
                                  type="email"
                                  className="form-control"
                                  {...formik.getFieldProps('email')}
                                  disabled={!isUpdate}
                                />
                                {formik.touched.email && formik.errors.email && (
                                  <div className="text-danger">{formik.errors.email}</div>
                                )}
                              </div>
                            </div>

                            <div className="form-group row mb-3">
                              <label className="col-lg-3 col-form-label">Phone</label>
                              <div className="col-lg-7">
                                <input
                                  type="text"
                                  className="form-control"
                                  {...formik.getFieldProps('phone')}
                                  disabled={!isUpdate}
                                />
                                {formik.touched.phone && formik.errors.phone && (
                                  <div className="text-danger">{formik.errors.phone}</div>
                                )}
                              </div>
                            </div>

                            <div className="form-group row mb-3">
                              <div className="col-lg-12 d-flex justify-content-center text-center">
                                {isUpdate ? (
                                  <button type="submit" className="btn btn-primary text-white btnAccount btnAccountSave">
                                    Update
                                  </button>
                                ) : (
                                  <button type="button" onClick={() => setIsUpdate(true)} className="btn btn-primary text-white btnAccount btnAccountSave">
                                    Edit
                                  </button>
                                )}
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <Toaster position="top-center" reverseOrder={false} theme="colored" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
