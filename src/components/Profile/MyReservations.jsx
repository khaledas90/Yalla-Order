import React, { useEffect, useState } from "react";

import { Button, Card } from "react-bootstrap";

import "./profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
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
const orders = [
  {
    id: 1,
    restaurant: "El Maqam - Semouha",
    date: "14/82023",
    item: "Sausage Hawawshi",
    address:
      "Alexandria, Smouha, Smouha Circle, Zohour Bargout Building, floor 4, Apartment 2",
    subtotal: "95.00 EGP",
    deliveryFee: "11.99 EGP",
    totalAmount: "106.99 EGP",
  },
];
export default function MyReservations() {
  const [isOrders, SetIsOrders] = useState(orders.length > 0);
  const { token } = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  useEffect(() => {
    SetIsOrders(orders.length > 0);
    setIsLoggedIn(!!token);
  }, [isOrders]);
  const handleLogOut = async () => {
    const resultAction = await dispatch(logoutUser());
    if (logoutUser.fulfilled.match(resultAction)) {
      navigate('/login');
    }
  }
  return (
    <>
      <div className="Profile ">

        <div className="Main_bg_profile">
          <NavRestaurants />
        </div>

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
                            <li onClick={handleLogOut}>
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
                          {isOrders ? (
                            orders.map((order) => (
                              <Card
                                key={order.id}
                                className="order-summary my-3 p-3 rounded"
                              >
                                <Card.Body>
                                  <Card.Title className="mb-2">
                                    <div className="d-flex justify-content-between mb-3">
                                      <span>
                                        <strong>{order.restaurant}</strong>
                                      </span>
                                      <span>{order.date}</span>
                                    </div>
                                    <span className="mb-2 mt-4 ">
                                      {order.item}
                                    </span>
                                  </Card.Title>

                                  <Card.Text className="d-flex justify-content-between mt-3">
                                    <strong>Delivery Address</strong>
                                    <p>{order.address}</p>
                                  </Card.Text>
                                  <Card.Text>
                                    <div className="d-flex justify-content-between">
                                      <strong>Subtotal</strong>
                                      <span>
                                        <strong>{order.subtotal}</strong>
                                      </span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                      <strong>Delivery fee</strong>
                                      <span>
                                        <strong>{order.deliveryFee}</strong>
                                      </span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                      <strong>Total amount</strong>
                                      <span>
                                        <strong>{order.totalAmount}</strong>
                                      </span>
                                    </div>
                                  </Card.Text>
                                  <div className="text-center mt-3 mb-2 ">
                                    <Button className="btnAccounts">
                                      <Link exact="true" to="">
                                        Order it again
                                      </Link>
                                    </Button>
                                  </div>
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
