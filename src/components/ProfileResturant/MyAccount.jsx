import React, { useState } from "react";
import "./profile.css";
import Header from "../header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import {
  faBagShopping,
  faMapLocation,
  faPenToSquare,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NavRestaurants from "../NavRestaurants/NavRestaurants";
export default function MyAccount() {
  const [isActiveOne, setIsActiveOne] = useState(false);
  const [isActiveTwo, setIsActiveTwo] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isSave, setIsSave] = useState(true);

  const handleClick = (gender) => {
    if (gender === "Male") {
      setIsActiveOne(false);
      setIsActiveTwo(true);
    } else {
      setIsActiveOne(true);
      setIsActiveTwo(false);
    }
  };

  const handleUpdate = (type) => {
    if (type === "Save") {
      setIsUpdate(false);
      setIsSave(true);
    } else {
      setIsUpdate(true);
      setIsSave(false);
    }
  };
  return (
    <>
      <div className="Profile Main_bg_profile">
      <NavRestaurants/>

        <div className="MyAccount">
          <h1>My Profile</h1>
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-10">
                <div className="card">
                  <div className="card-body p-0">
                    <div className="row">
                      <div className="col-lg-4 ">
                        <div className="List_group">
                          <ul>
                            <li>My Account</li>
                            <li className="active">
                              <FontAwesomeIcon
                                icon={faPenToSquare}
                                className=" profile-icon"
                              />
                              <Link to="/MyAccount"> Edit Profile</Link>
                            </li>
                            <li>
                              <FontAwesomeIcon
                                icon={faBagShopping}
                                className="profile-icon"
                              />
                              <Link to="/MyOrder"> My Order</Link>
                            </li>

                            <li>
                              <FontAwesomeIcon
                                icon={faMapLocation}
                                className="profile-icon"
                              />
                              <Link to="/MyAddress"> Saved Address</Link>
                            </li>
                            <li>
                              <FontAwesomeIcon
                                icon={faRightFromBracket}
                                className=" profile-icon"
                              />
                              <Link> Log Out </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-8 ">
                        <div className="content">
                          <form>
                            <div className="form-group row mb-3">
                              <label
                                htmlFor="inputEmail3"
                                className="col-lg-3 col-ms-4 col-form-label"
                              >
                                First Name
                              </label>
                              <div className="col-lg-7 col-ms-4 ">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputEmail3"
                                  placeholder="khaled"
                                  disabled={!isUpdate}
                                />
                              </div>
                            </div>
                            <div className="form-group row mb-3">
                              <label className="col-lg-3 col-ms-4 col-form-label">
                                Last Name
                              </label>
                              <div className="col-lg-7 col-ms-4">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputPassword3"
                                  placeholder="Ahmed"
                                  disabled={!isUpdate}
                                />
                              </div>
                            </div>
                            <div className="form-group row mb-3">
                              <label className="col-lg-3 col-ms-4 col-form-label">
                                Email
                              </label>
                              <div className="col-lg-7 col-ms-4">
                                <input
                                  type="email"
                                  className="form-control"
                                  id="inputPassword3"
                                  placeholder="khaled****@gmail.com"
                                  disabled={!isUpdate}
                                />
                              </div>
                            </div>
                            <div className="form-group row mb-3">
                              <label className="col-lg-3 col-ms-4 col-form-label">
                                Password
                              </label>
                              <div className="col-lg-7 col-ms-4">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputPassword3"
                                  placeholder="Ahmed"
                                  disabled={!isUpdate}
                                />
                              </div>
                            </div>
                            <div className="form-group row mb-3">
                              <label className="col-lg-3 col-ms-3 col-form-label">
                                Gender
                              </label>
                              <div className="col-lg-7 col-ms-4">
                                <div className="row">
                                  <div className="col-lg-6  d-grid">
                                    {" "}
                                    <button
                                      onClick={() => handleClick("Male")}
                                      type="button"
                                      disabled={!isUpdate}
                                      className={`btn btn-primary  btnAccount ${isActiveTwo ? "active" : ""
                                        }`}
                                    >
                                      Male
                                    </button>
                                  </div>
                                  <div className="col-lg-6 d-grid">
                                    {" "}
                                    <button
                                      onClick={() => handleClick("female")}
                                      type="button"
                                      disabled={!isUpdate}
                                      className={`btn btn-primary  btnAccount ${isActiveOne ? "active" : ""
                                        }`}
                                    >
                                      Female
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="form-group row mb-3">
                              <label className="col-lg-3 col-ms-4 col-form-label">
                                Date of birth
                              </label>
                              <div className="col-lg-7 col-ms-4">
                                <input
                                  type="date"
                                  className="form-control"
                                  id="inputPassword3"
                                  placeholder="30/5/1998"
                                  disabled={!isUpdate}
                                />
                              </div>
                            </div>
                            <div className="form-group row mb-3">
                              <div className="col-lg-12 col-ms-4 d-flex justify-content-center text-center">
                                <button
                                  type="button"
                                  onClick={() => handleUpdate("Update")}
                                  className={`btn btn-primary active ${isUpdate && (true ? "d-none" : "d-block")
                                    } btnAccount btnAccountSave `}
                                >
                                  Update
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleUpdate("Save")}
                                  className={`btn btn-primary mb-2 active ${isSave && (true ? "d-none" : "d-block")
                                    }  btnAccount btnAccountSave `}
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
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
