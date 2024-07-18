import React, { useState, useEffect, useRef } from "react";

import "./VerifyEmail.css";
import { Link } from "react-router-dom";
import NavRestaurants from "../NavRestaurants/NavRestaurants";

export default function VerifyEmail() {
  const [values, setValues] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0].focus();
    console.log(inputRefs.current);
  }, []);

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    const newValues = [...values];
    if (value.length > 1) {
      return;
    }
    newValues[index] = value;
    setValues(newValues);

    if (value !== "" && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].disabled = false;
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newValues = [...values];
      newValues[index] = "";
      setValues(newValues);

      if (inputRefs.current[index - 1]) {
        inputRefs.current[index - 1].disabled = false;
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const isButtonActive = values.every((value) => value !== "");

  return (
    <div className="VerifyEmail Main_bg">
      <NavRestaurants />
      <div className="container p-5">
        <div className="row justify-content-center">
          <div className=" col-lg-7 ">
            <div className="card p-4">
              <form className="py-5 px-4">
                <h2 className="text-center mt-5 mb-3">Verify Your Email</h2>
                <p className="mt-2 text-center">
                  Please check your email for the 4-digit code
                </p>
                <div className="form-group d-flex my-4">
                  <div className="input-field d-flex">
                    {values.map((value, index) => (
                      <input
                        key={index}
                        type="text"
                        value={value}
                        onChange={(e) => handleInputChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        disabled={index !== 0 && values[index - 1] === ""}
                        ref={(el) => (inputRefs.current[index] = el)}
                        maxLength="1"
                        className="otp-input-field"
                      />
                    ))}
                  </div>
                </div>

                <div className="d-grid gap-2 mt-4">
                  <button
                    type="submit"
                    className={`btn btn-primary btnLogin btn-block ${isButtonActive ? "active" : ""
                      }`}
                  >
                    Send
                  </button>
                </div>
                <div className="text-center mt-3 sendAgain">
                  Didn't receive code?
                  <Link to="">send again</Link>
                </div>
                <div className="text-center mt-3 BackLogin">
                  <span>
                    <Link to="/Login">Back to login</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
