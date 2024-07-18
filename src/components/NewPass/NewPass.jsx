import React from "react";


import "./NewPass.css";
import { Link } from "react-router-dom";
import NavRestaurants from "../NavRestaurants/NavRestaurants";

export default function NewPass() {
  return (
    <>
      <div className="NewPass Main_bg">
        <NavRestaurants />
        <div className="container p-5">
          <div className="row justify-content-center">
            <div className=" col-lg-7 ">
              <div className="card p-4">
                <form className="py-5 px-4">
                  <h2 className="text-center mt-5 mb-3">New Password</h2>
                  <p className="mt-2 text-center">
                    The new password must be different from the passwords used
                    previously
                  </p>
                  <div className="form-group my-4">
                    <input
                      type="text"
                      required
                      placeholder="Enter new password"
                      className="form-control rounded-pill px-4 py-3 border-secondary"
                    />
                  </div>
                  <div className="form-group my-4">
                    <input
                      type="text"
                      required
                      placeholder="Confirm password  "
                      className="form-control rounded-pill px-4 py-3 border-secondary"
                    />
                  </div>
                  <div className="d-grid gap-2 mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary btnLogin btn-block"
                    >
                      Reset Password
                    </button>
                  </div>

                  <div className="text-center mt-3 BackLogin ">
                    <span>
                      <Link exact="true" to="/Login">
                        Back to login
                      </Link>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
