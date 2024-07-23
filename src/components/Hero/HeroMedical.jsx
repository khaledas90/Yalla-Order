import React from "react";
import "./Hero.css";
import SearchRestaurants from "../SearchRestaurants/SearchRestaurants";
import homeImg from "../../assets/home.svg";
import book from "../../assets/book.svg";
import daily from "../../assets/daily.svg";
import doctors from "../../assets/+1000.svg";
import locationOne from "../../assets/Location-One.svg";
import location from "../../assets/Location.svg";
import welcomeImg from "../../assets/Welcome.svg";
import { Col, Container, Row } from "react-bootstrap";

import { useTranslation } from "react-i18next";

function HeroMedical() {
  const { t } = useTranslation();

  const lang = localStorage.getItem("i18nextLng");
  return (
    <div className={`hero ${lang === "ar" ? "ar" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="content">
              <div className="left-hero">
                <h1 className="text-center text-lg-start m-auto mb-5">
                  {t(
                    "Book your medical consultation now and enjoy comfort and safety"
                  )}
                </h1>
                <div className="inputDiv inputDivHome ">
                  <SearchRestaurants
                    btnText={t("Search")}
                    placeholder={t(`Find your Location..`)}
                    locIcon={location}
                    icon={locationOne}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="content contentImg">
              <img src={welcomeImg} className="w-100" alt="heroImg" />
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="cardIcons">
                <Row className="g-3">
                  <Col
                    xs={6}
                    lg={3}
                    md={3}
                    className="d-flex justify-content-center "
                  >
                    <div className="item d-flex align-items-center">
                      <img src={book} alt="features" />
                      <p> {t("Book easily")}</p>
                    </div>
                  </Col>
                  <Col
                    xs={6}
                    lg={3}
                    md={3}
                    className="d-flex justify-content-center"
                  >
                    <div className="item d-flex align-items-center">
                      <img src={homeImg} alt="features" />
                      <p> {t("Daily Discount")}</p>
                    </div>
                  </Col>
                  <Col
                    xs={6}
                    lg={3}
                    md={3}
                    className="d-flex justify-content-center"
                  >
                    <div className="item d-flex align-items-center">
                      <img src={daily} alt="features" />
                      <p> {t("100+ Clinics")}</p>
                    </div>
                  </Col>
                  <Col
                    xs={6}
                    lg={3}
                    md={3}
                    className="d-flex justify-content-center"
                  >
                    <div className="item d-flex align-items-center">
                      <img src={doctors} alt="features" />
                      <p> {t("1000+ Doctors")}</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HeroMedical;
