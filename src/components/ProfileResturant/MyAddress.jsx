import React, { useEffect, useState } from "react";

import { Button, Card } from "react-bootstrap";

import "./profile.css";
import Header from "../header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import {
    faBagShopping,
    faMapLocation,
    faPen,
    faPenToSquare,
    faRightFromBracket,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../modal/Modal";
import { Link } from "react-router-dom";
import imgEmptyAddress from "../../assets/EmptyAddress.png";
import GoogleMapComponent from "./GoogleMapComponent";

const Addresses = [
    {
        id: 1,
        address:
            "Alexandria, Smouha, Smouha Circle, Zohour Bargout Building, floor 4, Apartment 2",
    },
    {
        id: 1,
        address:
            "Alexandria, Smouha, Smouha Circle, Zohour Bargout Building, floor 4, Apartment 2",
    },
];
export default function MyAddress() {
    const [isAddresses, SetIsAddresses] = useState(Addresses.length > 0);

    useEffect(() => {
        SetIsAddresses(Addresses.length > 0);
    }, [isAddresses]);
    return (
        <>
            <div className="Profile Main_bg_profile">
                <Header MainPage={"Restaurants" ? "restaurants" : "CLinics"} IconOne={< FavoriteBorderOutlinedIcon />} IconTwo={<LanguageOutlinedIcon />} IconThree={<ShoppingBagOutlinedIcon />} />


                <div className="MyAccount">
                    <h1> My Profile </h1>{" "}
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-10">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="row">
                                            <div className="col-lg-4 ">
                                                <div className="List_group">
                                                    <ul>
                                                        <li> My Account </li>{" "}
                                                        <li>
                                                            <FontAwesomeIcon
                                                                icon={faPenToSquare}
                                                                className=" profile-icon"
                                                            />
                                                            <Link to="/MyAccount"> Edit Profile </Link>{" "}
                                                        </li>{" "}
                                                        <li>
                                                            <FontAwesomeIcon
                                                                icon={faBagShopping}
                                                                className="profile-icon"
                                                            />
                                                            <Link to="/MyOrder"> My Order </Link>{" "}
                                                        </li>
                                                        <li className="active">
                                                            <FontAwesomeIcon
                                                                icon={faMapLocation}
                                                                className="profile-icon"
                                                            />
                                                            <Link to="/MyAddress"> Saved Address </Link>{" "}
                                                        </li>{" "}
                                                        <li>
                                                            <FontAwesomeIcon
                                                                icon={faRightFromBracket}
                                                                className=" profile-icon"
                                                            />
                                                            <Link> Log Out </Link>{" "}
                                                        </li>{" "}
                                                    </ul>{" "}
                                                </div>{" "}
                                            </div>{" "}
                                            <div className="col-lg-8 ">
                                                <div className="content">
                                                    {" "}
                                                    {isAddresses ? (
                                                        Addresses.map((Address) => (
                                                            <Card
                                                                key={Address.id}
                                                                className="address-summary my-3 p-3 rounded"
                                                            >
                                                                <Card.Body>
                                                                    <Card.Title className="mb-2">
                                                                        <div className="d-flex mb-3">
                                                                            <div className="iconGorp">
                                                                                <FontAwesomeIcon
                                                                                    icon={faPen}
                                                                                    className="address-icon"
                                                                                />
                                                                                Edit{" "}
                                                                            </div>{" "}
                                                                            <div className="iconGorp">
                                                                                <FontAwesomeIcon
                                                                                    icon={faTrash}
                                                                                    className="address-icon"
                                                                                />
                                                                                Delete{" "}
                                                                            </div>{" "}
                                                                        </div>
                                                                    </Card.Title>{" "}
                                                                    <Card.Text>
                                                                        <div className="d-flex justify-content-between">
                                                                            <p> {Address.address} </p>{" "}
                                                                        </div>{" "}
                                                                    </Card.Text>{" "}
                                                                </Card.Body>{" "}
                                                            </Card>
                                                        ))
                                                    ) : (
                                                        <div className="empty_Address">
                                                            <div className="img_empty">
                                                                <img
                                                                    src={imgEmptyAddress}
                                                                    alt="Address is empty"
                                                                />
                                                            </div>{" "}
                                                            <h6> There are no saved addresses to display </h6>{" "}
                                                        </div>
                                                    )}{" "}
                                                    <div className="text-center mt-5 mb-2  ">
                                                        
                                                            <Link exact="true" to="">
                                                            <Modal>
                                                            <Modal.Open opens="add-address">
                                                              <button className="btnAccounts">Add Address</button>
                                                            </Modal.Open>
                                                            <Modal.Window name="add-address">
                                                                <GoogleMapComponent apiKey = "AIzaSyBCUdcDFvWmHDl94vcWToYa5vD3ukF8rG8"/>
                                                            </Modal.Window>
                                                          </Modal>
                                                            </Link>{" "}
                                                     
                                                    </div>{" "}
                                                </div>{" "}
                                            </div>{" "}
                                        </div>{" "}
                                    </div>{" "}
                                </div>{" "}
                            </div>{" "}
                        </div>{" "}
                    </div>{" "}
                </div>{" "}
            </div>{" "}
        </>
    );
}
