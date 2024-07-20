import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBagShopping,
    faCalendar,
    faMapLocation,
    faPen,
    faPenToSquare,
    faRightFromBracket,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavRestaurants from "../NavRestaurants/NavRestaurants";
import { logoutUser } from "../../store/thunk/logoutThunk";
import Modal from "../modal/Modal";
import GoogleMapComponent from "./GoogleMapComponent";
import imgEmptyAddress from "../../assets/EmptyAddress.png";
import "./profile.css";
import NavClinics from "../NavClinics/NavClinics";

const Addresses = [
    {
        id: 1,
        address:
            "Alexandria, Smouha, Smouha Circle, Zohour Bargout Building, floor 4, Apartment 2",
    },
    {
        id: 2,
        address:
            "Alexandria, Smouha, Smouha Circle, Zohour Bargout Building, floor 4, Apartment 2",
    },
];

export default function MyAddress() {
    const { typePage } = useSelector((state) => state.User);
    const [isAddresses, SetIsAddresses] = useState(Addresses.length > 0);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        SetIsAddresses(Addresses.length > 0);
    }, [Addresses]);

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
                    {typePage === "restaurant" ? (
                        <NavRestaurants />
                    ) : (
                        <NavClinics />
                    )}
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
                                                            <Link to="/MyAccount"> Edit Profile</Link>
                                                        </li>
                                                        {typePage === "restaurant" ? (
                                                            <li>
                                                                <FontAwesomeIcon
                                                                    icon={faBagShopping}
                                                                    className="profile-icon"
                                                                />
                                                                <Link to="/MyOrder"> My Order</Link>
                                                            </li>
                                                        ) : (
                                                            <li>
                                                                <FontAwesomeIcon
                                                                    icon={faCalendar}
                                                                    className="profile-icon"
                                                                />
                                                                <Link to="/MyReservations">
                                                                    My Reservations
                                                                </Link>
                                                            </li>
                                                        )}
                                                        <li className="active">
                                                            <FontAwesomeIcon
                                                                icon={faMapLocation}
                                                                className="profile-icon"
                                                            />
                                                            <Link to="/MyAddress"> Saved Address</Link>
                                                        </li>
                                                        <li onClick={handleLogOut}>
                                                            <FontAwesomeIcon
                                                                icon={faRightFromBracket}
                                                                className="profile-icon"
                                                            />
                                                            <Link to="#"> Log Out</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="content">
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
                                                                                Edit
                                                                            </div>
                                                                            <div className="iconGorp">
                                                                                <FontAwesomeIcon
                                                                                    icon={faTrash}
                                                                                    className="address-icon"
                                                                                />
                                                                                Delete
                                                                            </div>
                                                                        </div>
                                                                    </Card.Title>
                                                                    <Card.Text>
                                                                        <div className="d-flex justify-content-between">
                                                                            <p>{Address.address}</p>
                                                                        </div>
                                                                    </Card.Text>
                                                                </Card.Body>
                                                            </Card>
                                                        ))
                                                    ) : (
                                                        <div className="empty_Address">
                                                            <div className="img_empty">
                                                                <img
                                                                    src={imgEmptyAddress}
                                                                    alt="Address is empty"
                                                                />
                                                            </div>
                                                            <h6>There are no saved addresses to display</h6>
                                                        </div>
                                                    )}
                                                    <div className="text-center mt-5 mb-2">
                                                        <Modal>
                                                            <Modal.Open opens="add-address">
                                                                <button className="btnAccounts">
                                                                    Add Address
                                                                </button>
                                                            </Modal.Open>
                                                            <Modal.Window name="add-address">
                                                                <GoogleMapComponent apiKey="YOUR_GOOGLE_MAP_API_KEY" />
                                                            </Modal.Window>
                                                        </Modal>
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
            </div>
        </>
    );
}
