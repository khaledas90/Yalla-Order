import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faMapLocation,
  faPenToSquare,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import imgEmpty from "../../assets/shopping-bag.png";
import { useDispatch, useSelector } from "react-redux";
import NavRestaurants from "../NavRestaurants/NavRestaurants";
import { logoutUser } from "../../store/thunk/logoutThunk";
import NavClinics from "../NavClinics/NavClinics";

import Loader from "../loader/Loader";
import { fetchReservationList } from "../../store/reservation/ShowReservation";
export default function MyReservations() {
  const { typePage } = useSelector((state) => state.User);
  const [loading, setLoading] = useState(true);
  const { token } = useSelector((state) => state.User);
  const reservations = useSelector((state) => state.ShowReservation);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  useEffect(() => {
    console.log(reservations);
    dispatch(fetchReservationList());
    setLoading(false);
    setIsLoggedIn(!!token);
  }, [token]);


  const handleLogOut = async () => {
    const resultAction = await dispatch(logoutUser());
    if (logoutUser.fulfilled.match(resultAction)) {
      navigate("/login");
    }
  };
  return (
    <>
      <div className="Profile">
        <div className="Main_bg_profile">
          {typePage === "restaurant" ? <NavRestaurants /> : <NavClinics />}
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
                            <li>
                              <FontAwesomeIcon
                                icon={faPenToSquare}
                                className=" profile-icon"
                              />
                              <Link to="/MyAccount"> Edit Profile</Link>
                            </li>
                            <li className="active">
                              <FontAwesomeIcon
                                icon={faCalendar}
                                className="profile-icon"
                              />
                              <Link to="/MyReservations">My reservations</Link>
                            </li>

                            <li>
                              <FontAwesomeIcon
                                icon={faMapLocation}
                                className="profile-icon"
                              />
                              <Link to="/MyAddress"> Saved Address</Link>
                            </li>
                            <li>
                              <Link onClick={handleLogOut}>
                                <FontAwesomeIcon
                                  icon={faRightFromBracket}
                                  className="profile-icon"
                                />
                                Log Out
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="content">
                          {loading ? (
                            <Loader />
                          ) : reservations.data.length > 0 ? (
                            reservations.data.map((order) => (
                              <Card
                                key={order['reservation id']}
                                className="order-summary my-3 p-3 rounded"
                              >
                                <Card.Body>
                                  <Card.Title className="mb-2">
                                    <div className="d-flex justify-content-between mb-3">
                                      <span>
                                        <strong>{order.clinicname}</strong>
                                      </span>
                                      <span>{order.patientday_booking}</span>
                                    </div>
                                    <span className="mb-2 mt-4">
                                      {order["Doctor name"] || "Dr. Unknown"}
                                    </span>
                                  </Card.Title>

                                  <Card.Text className="d-flex justify-content-between mt-3">
                                    <strong>Clinic Address</strong>
                                    <p>{order.clinicAddress}</p>
                                  </Card.Text>
                                  <Card.Text className="d-flex justify-content-between mt-3">
                                    <strong>time booking</strong>
                                    <p>{order.patienttime_booking}</p>
                                  </Card.Text>
                                  <Card.Text>
                                    <div className="d-flex justify-content-between">
                                      <strong>Total Price</strong>
                                      <span>
                                        <strong>{order.totalprice}</strong>
                                      </span>
                                    </div>

                                  </Card.Text>
                                </Card.Body>
                              </Card>
                            ))
                          ) : (
                            <div className="empty_order">
                              <div className="img_empty">
                                <img src={imgEmpty} alt="order is empty" />
                              </div>
                              <h6>There are no orders to display</h6>
                            </div>
                          )}
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
