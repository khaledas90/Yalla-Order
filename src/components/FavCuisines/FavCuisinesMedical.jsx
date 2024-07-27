import Slider from "react-slick";
import "./FavCuisines.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import back from "../../assets/bg.svg";
import { useDispatch, useSelector } from "react-redux";
import { actClinicsCatgoty } from "../../store/ClinicsCatgory/ClinicsCatgorySlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function FavCuisinesMedical() {
  const dispatch = useDispatch();
  const { ClinicsCategory } = useSelector((state) => state.ClinicsCategory);

  useEffect(() => {
    dispatch(actClinicsCatgoty());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { t } = useTranslation();

  const lang = localStorage.getItem("i18nextLng");
  return (
    <div className={`FavContainer ${lang === "ar" ? "ar" : ""}`}>
      <div className="container">
        <div className="mainFav">
          <img className="back" src={back} alt="back" />
          <h1>{t("Customer Favorite Cuisines")}</h1>
          <div className="slider-container">
            <Slider {...settings}>
              {ClinicsCategory?.map((e) => (
                <Link to={`/ShowClinicsCategoryById/${e.id}`} key={e.id}>
                  <div>
                    <div className="item">
                      <div>
                        <img src={e.logo} className="w-100 rounded-3 " alt="" />
                      </div>
                      <p>{e.name}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavCuisinesMedical;
