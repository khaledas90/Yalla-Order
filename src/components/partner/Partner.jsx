import React from "react";
import "./partner.css";
import part1 from "../../assets/part1.png";
import part2 from "../../assets/part2.png";
import part3 from "../../assets/part3.png";
import bg_part2 from "../../assets/bg_part2.png";
import { useTranslation } from "react-i18next";
export default function Partner() {
  const { t } = useTranslation();
  return (
    <>
      <div className="Partner py-5">
        <div className="container">
          <h1>
            {t("Why you should")} <span>{t("partner with us")}</span>
          </h1>
          <div className="slider  bg-dark rounded-3 overflow-hidden position-relative mt-5 py-4 px-2">
            <img
              src={bg_part2}
              className="position-absolute d-none d-md-block end-0 bottom-0"
              alt="frame"
            />
            <div className="row py-1 px-1 content">
              <div className="col-12 col-md-4 px-4 my-4">
                <div className="text-center">
                  <img
                    src={part1}
                    alt="magnet"
                    className="my-4 mx-auto d-block"
                  />
                  <h4 className="text-rose-400  text-center fs-5 fs-md-3 font-medium">
                    {t("Reach More Customers")}
                  </h4>
                  <p className="text-white text-center my-2 fs-5">
                    {t("We have thousands of hungry customers in your area waiting to order from you, and we'll help you deliver their food faster.")}
                  </p>
                  <p className="text-white text-center my-2 fs-5">
                    {t('There are also many people looking to book a medical consultation quickly, easily, and safely. We provide this service for doctors as well.')}
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 px-4 my-4">
                <div className="text-center">
                  <img
                    src={part2}
                    alt="magnet"
                    className="my-4 mx-auto d-block"
                  />
                  <h4 className="text-blue-500 midTitle text-center fs-5 fs-md-3 font-medium">
                    {t("Earn More Money")}
                  </h4>
                  <p className="text-white text-center my-2 fs-5">
                    {t('We will help you serve more hungry customers without adding more chairs to your restaurant.')}
                  </p>
                  <p className="text-white text-center my-2 fs-5">
                    {t('We will also serve doctors to a larger number of clients in a more organized manner without conflicts in schedules and  ensure you get your money quickly.')}
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 px-4 my-4">
                <div className="text-center">
                  <img
                    src={part3}
                    alt="magnet"
                    className="my-4 mx-auto d-block"
                  />
                  <h4 className="text-rose-400 text-center fs-5 fs-md-3 font-medium">
                    {t('Grow Your Business')}
                  </h4>
                  <p className="text-white text-center my-2 fs-5">
                    {t('Increase sales, reach more customers, or market your business better. We provide ways to grow your business because your success is our success too.')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
