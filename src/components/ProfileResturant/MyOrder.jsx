import React, { useEffect, useState } from "react";

import { Button, Card } from "react-bootstrap";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import "./profile.css";
import Header from "../header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faMapLocation,
  faPenToSquare,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import imgEmpty from "../../assets/shopping-bag.png";
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
export default function MyOrder() {
  const [isOrders, SetIsOrders] = useState(orders.length > 0);

  useEffect(() => {
    SetIsOrders(orders.length > 0);
  }, [isOrders]);
  return (
    <>
      <div className="Profile Main_bg_profile">
        <Header MainPage={"Restaurants" ? "restaurants" : "CLinics"} IconOne={< FavoriteBorderOutlinedIcon />} IconTwo={<LanguageOutlinedIcon />} IconThree={<ShoppingBagOutlinedIcon />} />



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
