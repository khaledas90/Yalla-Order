import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faMapLocation,
  faPenToSquare,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavRestaurants from "../NavRestaurants/NavRestaurants";
import { logoutUser } from "../../store/thunk/logoutThunk";
import imgEmpty from "../../assets/shopping-bag.png";
import { ShowOrderResturant } from "../../store/ShowOrderResturant/ShowOrderResturant";
import "./profile.css";

export default function MyOrder() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.User);
  const orders = useSelector((state) => state.ShowOrder);

  const [isOrders, setIsOrders] = useState(orders.length > 0);
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  useEffect(() => {
    setIsOrders(orders.length > 0);
    setIsLoggedIn(!!token);
    dispatch(ShowOrderResturant());
  }, [orders.length, token, dispatch]);

  const handleLogOut = async () => {
    const resultAction = await dispatch(logoutUser());
    if (logoutUser.fulfilled.match(resultAction)) {
      navigate("/login");
    }
  };

  return (
    <div className="Profile">
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
                    <div className="col-lg-4">
                      <div className="List_group">
                        <ul>
                          <li>My Account</li>
                          <li>
                            <FontAwesomeIcon
                              icon={faPenToSquare}
                              className="profile-icon"
                            />
                            <Link to="/MyAccount">Edit Profile</Link>
                          </li>
                          <li className="active">
                            <FontAwesomeIcon
                              icon={faBagShopping}
                              className="profile-icon"
                            />
                            <Link to="/MyOrder">My Order</Link>
                          </li>
                          <li>
                            <FontAwesomeIcon
                              icon={faMapLocation}
                              className="profile-icon"
                            />
                            <Link to="/MyAddress">Saved Address</Link>
                          </li>
                          <li onClick={handleLogOut}>
                            <FontAwesomeIcon
                              icon={faRightFromBracket}
                              className="profile-icon"
                            />
                            <Link to="#">Log Out</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="content">
                        {isOrders ? (
                          orders.data.map((order) => (
                            <Card
                              key={order["Order Id"]}
                              className="order-summary my-3 p-3 rounded"
                            >
                              <Card.Body>
                                <Card.Title className="mb-2">
                                  <div className="d-flex justify-content-between mb-3">
                                    <span>
                                      <strong>{order.ResturantName}</strong>
                                    </span>
                                    <span>Quantity:{order.OrderQTY || "0"}</span>
                                  </div>
                                  <span className="mb-2 mt-4 ">
                                    {order.item}
                                  </span>
                                </Card.Title>
                                <Card.Text className="d-flex justify-content-between mt-3">
                                  <strong>Delivery Address</strong>
                                  <p>{order.ResturantAddress}</p>
                                </Card.Text>
                                <Card.Text>
                                  <div className="d-flex justify-content-between">
                                    <strong>Subtotal</strong>
                                    <span>
                                      <strong>{order.Total}</strong>
                                    </span>
                                  </div>
                                  <div className="d-flex justify-content-between">
                                    <strong>Delivery fee</strong>
                                    <span>
                                      <strong>{order.DeliveryFee}</strong>
                                    </span>
                                  </div>
                                  <div className="d-flex justify-content-between">
                                    <strong>Total amount</strong>
                                    <span>
                                      <strong>{order.Total}</strong>
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
  );
}
