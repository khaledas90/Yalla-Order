import React from "react";
import "./TopBeAPartner.css";
import ImgHome from "../../assets/img-home.png";
export default function TopBeAPartner() {
    return (
        <>
            <div className="Home py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="content mt-5">
                                <div className="text mt-5">
                                    <h1>
                                        Grow your business <br /> online with FOo <span> Dc </span>!{" "}
                                    </h1>{" "}
                                    <p>
                                        Partner with us to reach more customers, earn more money and
                                        grow your business online - your success story begins here{" "}
                                    </p>{" "}
                                </div>{" "}
                                <div className="Commission">
                                    <div className="content  bg-white p-4 text-center  shadow-lg">
                                        <h4 className="text-dark display-5 my-3">
                                            20 % Commission for 60 Days!
                                        </h4>{" "}
                                        <form className="py-3">
                                            <div className="form-group my-2">
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="First Name *"
                                                    className="form-control rounded-pill px-4 py-3 border-secondary"
                                                />
                                            </div>{" "}
                                            <div className="form-group my-2">
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="Last Name *"
                                                    className="form-control rounded-pill px-4 py-3 border-secondary"
                                                />
                                            </div>{" "}
                                            <div className="form-group my-2">
                                                <input
                                                    type="email "
                                                    required
                                                    placeholder="Business Email *"
                                                    className="form-control rounded-pill px-4 py-3 border-secondary"
                                                />
                                            </div>{" "}
                                            <div className="form-group d-flex align-items-center my-2">
                                                <span className="Code_country"> +20 </span>

                                                <input
                                                    type="number "
                                                    required
                                                    placeholder={`Phone Number *`}
                                                    className="form-control rounded-pill px-4 py-3 border-secondary"
                                                />
                                            </div>{" "}
                                            <div className="Btn d-grid">
                                                <button className="btn btn-primary btn-Commission btn-block rounded-pill py-3 font-weight-bold display-6">
                                                    Create Account{" "}
                                                </button>{" "}
                                            </div>{" "}
                                        </form>{" "}
                                    </div>{" "}
                                </div>{" "}
                            </div>{" "}
                        </div>{" "}
                        <div className="col-lg-6">
                            <div className="img-home">
                                <img src={ImgHome} alt="img home" />
                            </div>{" "}
                        </div>{" "}
                    </div>{" "}
                </div>{" "}
            </div>{" "}
        </>
    );
}
