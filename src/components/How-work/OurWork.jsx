import React from "react";
import "./OurWork.css";
import OurWork_img1 from "../../assets/OurWork_part1.png";
import OurWork_img2 from "../../assets/OurWork_part2.png";
import OurWork_img3 from "../../assets/OurWork_part3.png";
import OurWork_img4 from "../../assets/OurWork_part4.png";
import { useTranslation } from "react-i18next";
export default function OurWork() {
  const { t } = useTranslation()
  return (
    <>
      <div className="OurWork">
        <div className="container">
          <h1 className="font-bold">
            {t('How We Will Work ')}<span className="span-1">{t("Together")}</span>{" "}
            <span className="span-2">{t("Side by Side")}</span>
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
                    {t("Customer Orders")}
                    <br />
                  </span>
                  <span
                    className="text-dark"
                    style={{ fontSize: "18px", fontFamily: "Roboto" }}
                  >
                    {t('The customer places an order or books a consultation through  the app.')}
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
                    {t('You Prepare')}
                    <br />
                  </span>
                  <span
                    className="text-dark"
                    style={{ fontSize: "18px", fontFamily: "Roboto" }}
                  >
                    {t('You will receive a notification to start preparing your order or consultation.')}
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
                    {t('We Deliver')}
                    <br />
                  </span>
                  <span
                    className="text-dark"
                    style={{ fontSize: "18px", fontFamily: "Roboto" }}
                  >
                    <span>{t('A driver will soon come to pick up the order and deliver it to the customer &')}</span><br />
                    {t('arrive on time for your medical consultation.')}
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
                    {t('Watch Your Business Grow')}
                    <br />
                  </span>
                  <span
                    className="text-dark"
                    style={{ fontSize: "18px", fontFamily: "Roboto" }}
                  >
                    {t('Track your sales, monitor orders, clinic bookings, schedules, invest in marketing and more in your restaurant  and personal clinic portal.')}
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
