import React from "react";
import "./OurWork.css";
import OurWork_img1 from "../../assets/OurWork_part1.png";
import OurWork_img2 from "../../assets/OurWork_part2.png";
import OurWork_img3 from "../../assets/OurWork_part3.png";
import OurWork_img4 from "../../assets/OurWork_part4.png";
// import OurWork_img_bg from "../../assets/OurWork_bg.png";
export default function OurWork() {
  return (
    <>
      <div className="OurWork">
        <div className="container">
          <h1 className="font-bold">
            How We Will Work <span className="span-1">Together</span>{" "}
            <span className="span-2">Side by Side</span>
          </h1>
          <div className="row">
            <div className="col-md-6 px-4 my-4">
              <div>
                <img
                  src={OurWork_img4}
                  alt="app"
                  className="my-5 mx-auto d-block"
                />
                <h4 className="text-center">
                  <span
                    className="text-danger"
                    style={{ fontSize: "25px", fontFamily: "Roboto" }}
                  >
                    Customer Orders
                    <br />
                  </span>
                  <span
                    className="text-dark"
                    style={{ fontSize: "18px", fontFamily: "Roboto" }}
                  >
                    The customer places an order or books a consultation through
                    the app.
                  </span>
                </h4>
              </div>
            </div>
            <div className="col-md-6 px-4 my-4">
              <div>
                <img
                  src={OurWork_img3}
                  alt="app"
                  className="my-5 mx-auto d-block"
                />
                <h4 className="text-center">
                  <span
                    className="text-danger"
                    style={{ fontSize: "25px", fontFamily: "Roboto" }}
                  >
                    You Prepare
                    <br />
                  </span>
                  <span
                    className="text-dark"
                    style={{ fontSize: "18px", fontFamily: "Roboto" }}
                  >
                    You'll receive a notification to start preparing your order
                    or consultation.
                  </span>
                </h4>
              </div>
            </div>
            <div className="col-md-6 px-4 my-4">
              <div>
                <img
                  src={OurWork_img2}
                  alt="app"
                  className="my-5 mx-auto d-block"
                />
                <h4 className="text-center">
                  <span
                    className="text-primary"
                    style={{ fontSize: "25px", fontFamily: "Roboto" }}
                  >
                    We Deliver
                    <br />
                  </span>
                  <span
                    className="text-dark"
                    style={{ fontSize: "18px", fontFamily: "Roboto" }}
                  >
                    A driver will soon come to pick up the order and deliver it
                    to the customer &<br />
                    arrive on time for your medical consultation.
                  </span>
                </h4>
              </div>
            </div>
            <div className="col-md-6 px-4 my-4">
              <div>
                <img
                  src={OurWork_img1}
                  alt="app"
                  className="my-5 mx-auto d-block"
                />
                <h4 className="text-center">
                  <span
                    className="text-primary"
                    style={{ fontSize: "25px", fontFamily: "Roboto" }}
                  >
                    Watch Your Business Grow
                    <br />
                  </span>
                  <span
                    className="text-dark"
                    style={{ fontSize: "18px", fontFamily: "Roboto" }}
                  >
                    Track your sales, monitor orders, clinic bookings,
                    schedules, invest in marketing and more in your restaurant
                    and personal clinic portal.
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
